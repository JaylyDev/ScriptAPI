import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import * as EditorUtilities from "../../../../editor-utilities";
import { Color, PriorityQueue } from "../../../../utils";
export const Start = (/** @type {import("@minecraft/server-editor").IPlayerUISession} */ uiSession) => {
    uiSession.log.debug( `Initializing ${uiSession.extensionContext.extensionName} extension` );
    const tool = uiSession.toolRail.addTool(
        {
            displayString: "Cube (CTRL + B)",
            tooltip: "Left mouse click or drag-to-paint",
            icon: "pack://textures/editor/Cube.png?filtering=point",
        },
    );
    
    const previewSelection = uiSession.extensionContext.selectionManager.create();
    previewSelection.visible = true;
    previewSelection.setOutlineColor( new Color( 0, 0.5, 0.5, 0.2 ) );
    previewSelection.setFillColor( new Color( 0, 0, 0.5, 0.1 ) );
    
    uiSession.scratchStorage = {
        currentCursorState: {
            outlineColor: new Color( 1, 1, 0, 1 ),
            controlMode: Editor.CursorControlMode.KeyboardAndMouse,
            targetMode: Editor.CursorTargetMode.Block,
            visible: true,
            fixedModeDistance: 5
        },
        previewSelection,
    };
    
    tool.onModalToolActivation.subscribe(
        (data) => {
            if (data.isActiveTool)
                uiSession.extensionContext.cursor.setProperties( uiSession.scratchStorage.currentCursorState );
        },
    );
    
    uiSession.inputManager.registerKeyBinding(
        Editor.EditorInputContext.GlobalToolMode,
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.toolRail.setSelectedOptionId( tool.id, true );
                },
            },
        ),
        Editor.KeyboardKey.KEY_B,
        Editor.InputModifier.Control,
    );
    
    const pane = uiSession.createPropertyPane(
        { titleAltText: "Cube" },
    );
    
    const settings = Editor.createPaneBindingObject(
        pane,
        {
            size: 3,
            hollow: false,
            face: false,
            blockType: Server.MinecraftBlockTypes.stone,
        },
    );

    pane.addNumber(
        settings,
        "size",
        {
            titleAltText: "Brush Size",
            min: 1,
            max: 16,
            showSlider: true,
        },
    );

    pane.addBool(
        settings,
        "hollow",
        { titleAltText: "Hollow" },
    );
    pane.addBool(
        settings,
        "face",
        {
            titleAltText: "Face Mode",
            onChange: ( _obj, _property, _oldValue, _newValue ) => {
                if (uiSession.scratchStorage === undefined) return uiSession.log.error( "Cube storage was not initialized." );
                uiSession.scratchStorage.currentCursorState.targetMode = settings.face
                    ? Editor.CursorTargetMode.Face
                    : Editor.CursorTargetMode.Block;
                uiSession.extensionContext.cursor.setProperties( uiSession.scratchStorage.currentCursorState );
            },
        },
    );
    pane.addBlockPicker(
        settings,
        "blockType",
        { titleAltText: "Block Type" },
    );
    
    tool.bindPropertyPane( pane );
    
    const onExecuteBrush = () => {
        if (!uiSession.scratchStorage?.previewSelection) return uiSession.log.error( "Cube storage was not initialized." );
        
        const previewSelection = uiSession.scratchStorage.previewSelection;
        const player = uiSession.extensionContext.player;
        const targetBlock = player.dimension.getBlock( uiSession.extensionContext.cursor.getPosition() );
        if (!targetBlock) return;

        const rotationY = uiSession.extensionContext.player.getRotation().y;

        const directionRight = EditorUtilities.getRotationCorrectedDirectionVector( rotationY, EditorUtilities.Direction.Right );
        const directionForward = EditorUtilities.getRotationCorrectedDirectionVector( rotationY, EditorUtilities.Direction.Back );
        const relativeDirection = Server.Vector.add( Server.Vector.add( directionRight, directionForward ), Server.Vector.up );
        const sizeHalf = Math.floor(settings.size / 2);
        let fromOffset = Server.Vector.multiply( relativeDirection, -sizeHalf );
        const toOffset = Server.Vector.multiply( relativeDirection, settings.size - 1 );
        const isEven = settings.size % 2 === 0;
        if (isEven) fromOffset = Server.Vector.add( fromOffset, Server.Vector.up );
        const location = targetBlock.location;
        const from = {
            x: location.x + fromOffset.x,
            y: location.y + fromOffset.y,
            z: location.z + fromOffset.z,
        };

        const to = {
            x: from.x + toOffset.x,
            y: from.y + toOffset.y,
            z: from.z + toOffset.z
        };
        
        const blockVolume = {
            from,
            to,
        };

        if (
            uiSession.scratchStorage.lastVolumePlaced
            && Server.BoundingBoxUtils.equals( uiSession.scratchStorage.lastVolumePlaced, Server.BlockVolumeUtils.getBoundingBox( blockVolume ) )
        ) return;
        
        previewSelection.pushVolume(
            {
                action: Server.CompoundBlockVolumeAction.Add,
                volume: blockVolume,
            },
        );

        uiSession.scratchStorage.lastVolumePlaced = Server.BlockVolumeUtils.getBoundingBox( blockVolume );
        if (settings.hollow &&
            blockVolume.boundingBox.spanX > 2 &&
            blockVolume.boundingBox.spanY > 2 &&
            blockVolume.boundingBox.spanZ > 2) {
            const subtractBlockVolume = {
                from: {
                    x: from.x,
                    y: from.y + 1,
                    z: from.z,
                },
                to: {
                    x: to.x,
                    y: to.y - 1,
                    z: to.z,
                },
            };
            
            previewSelection.pushVolume(
                {
                    action: Server.CompoundBlockVolumeAction.Subtract,
                    volume: subtractBlockVolume,
                },
            );
        };
    };
    
    tool.registerMouseButtonBinding(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.MouseRayCastAction,
                onExecute: async ( mouseRay, mouseProps ) => {
                    if (mouseProps.mouseAction == Editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType == Editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction( "cubeTool" );
                            uiSession.scratchStorage.previewSelection.clear();
                            onExecuteBrush();
                        } else if (mouseProps.inputType == Editor.MouseInputType.ButtonUp) {
                            const player = uiSession.extensionContext.player;

                            uiSession.extensionContext.transactionManager.trackBlockChangeSelection( uiSession.scratchStorage.previewSelection );
                            const pq = new PriorityQueue(
                                (a, b) => a.x - b.x && a.y - b.y && a.z - b.z
                            );

                            await Editor.executeLargeOperation(
                                uiSession.scratchStorage.previewSelection,
                                (blockLocation) => pq.enqueue( blockLocation ),
                            ).catch(
                                () => {
                                    uiSession.extensionContext.transactionManager.commitOpenTransaction();
                                    uiSession.scratchStorage?.previewSelection.clear();
                                },
                            ).then(
                                () => {
                                    while (!pq.isEmpty()) {
                                        const blockLocation = pq.dequeue();
                                        if (
                                            blockLocation.y >= -64
                                            && blockLocation.y <= 320
                                        ) {
                                            const block = player.dimension.getBlock( blockLocation );
                                            block.setType(settings.blockType);
                                        };
                                    };

                                    uiSession.extensionContext.transactionManager.commitOpenTransaction();
                                    uiSession.scratchStorage?.previewSelection.clear();
                                },
                            );
                        };
                    };
                },
            },
        ),
    );
    
    tool.registerMouseDragBinding(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.MouseRayCastAction,
                onExecute: ( mouseRay, mouseProps ) => {
                    if (mouseProps.inputType === Editor.MouseInputType.Drag) onExecuteBrush();
                },
            },
        ),
    );
};