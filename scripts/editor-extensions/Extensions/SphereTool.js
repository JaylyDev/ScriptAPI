import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import { Color, PriorityQueue } from "../utils";
import { Mesh } from "../mesh";
export default ( uiSession ) => {
    uiSession.log.debug( `Initializing ${uiSession.extensionContext.extensionName} extension` );
    const tool = uiSession.toolRail.addTool(
        {
            displayString: "Sphere (CTRL + SHIFT + S)",
            tooltip: "Left mouse click or drag-to-paint",
            icon: "pack://textures/editor/sphere.png?filtering=point",
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
        Editor.KeyboardKey.KEY_S,
        Editor.InputModifier.Shift | Editor.InputModifier.Control,
    );
    
    const pane = uiSession.createPropertyPane(
        { titleAltText: "Sphere" },
    );
    
    const settings = Editor.createPaneBindingObject(
        pane,
        {
            size: 3,
            hollow: false,
            face: false,
            blockType: Server.MinecraftBlockTypes.stone,
        }
    );

    pane.addNumber(
        settings,
        "size",
        {
            titleAltText: "Brush Size",
            min: 1,
            max: 16,
            showSlider: true,
        }
    );
    
    pane.addBool(
        settings,
        "hollow",
        { titleAltText: "Hollow" }
    );

    pane.addBool(
        settings,
        "face",
        {
            titleAltText: "Face Mode",
            onChange: ( _obj, _property, _oldValue, _newValue ) => {
                if (uiSession.scratchStorage == undefined) return uiSession.log.error( "Sphere storage was not initialized." );
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
        { titleAltText: "Block Type" }
    );
    
    tool.bindPropertyPane( pane );
    
    const onExecuteBrush = () => {
        if (!uiSession.scratchStorage?.previewSelection) return uiSession.log.error( "Brush storage was not initialized." );
        
        const previewSelection = uiSession.scratchStorage.previewSelection;
        const player = uiSession.extensionContext.player;
        const targetBlock = player.dimension.getBlock( uiSession.extensionContext.cursor.getPosition() );
        if (!targetBlock) return;
        const location = targetBlock.location;
        if (
            uiSession.scratchStorage.lastCursorPosition?.x == uiSession.extensionContext.cursor.getPosition().x
            && uiSession.scratchStorage.lastCursorPosition?.y == uiSession.extensionContext.cursor.getPosition().y
            && uiSession.scratchStorage.lastCursorPosition?.z == uiSession.extensionContext.cursor.getPosition().z
        ) return;
        
        const sphere = drawSphere( location.x, location.y, location.z, settings.size, settings.hollow );
        for (const blockVolume of sphere.calculateVolumes()) {
            previewSelection.pushVolume(
                {
                    action: Server.CompoundBlockVolumeAction.Add,
                    volume: blockVolume
                }
            );
        };

        uiSession.scratchStorage.lastCursorPosition = uiSession.extensionContext.cursor.getPosition();
    };
    
    tool.registerMouseButtonBinding(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.MouseRayCastAction,
                onExecute: async ( mouseRay, mouseProps ) => {
                    if (mouseProps.mouseAction == Editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType == Editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction( "sphereTool" );
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

const drawSphere = (
    x,
    y,
    z,
    radius,
    hollow = false,
) => {
	const mesh = new Mesh();
	for ( let xOffset = -radius; xOffset <= radius; xOffset++ ) {
		for ( let yOffset = -radius; yOffset <= radius; yOffset++ ) {
			for ( let zOffset = -radius; zOffset <= radius; zOffset++ ) {
				let distance = Math.sqrt( xOffset * xOffset + yOffset * yOffset + zOffset * zOffset );

				if (
                    distance <= radius
                    && (
                        !hollow
                        || distance >= radius - 1
                    )
                ) {
					mesh.add(
						{
							x: x + xOffset,
							y: y + yOffset,
							z: z + zOffset,
						}
					);
				};
			};
		};
	};

	return mesh;
};