import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import { Color, PriorityQueue } from "../../../../utils";
import { Mesh } from "../Mesh";
/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession 
 */
export const Start = (uiSession) => {
    uiSession.log.debug( `Initializing ${uiSession.extensionContext.extensionName} extension` );
    const tool = uiSession.toolRail.addTool(
        {
            displayAltText: "Pyramid",
            tooltipAltText: "Left mouse click or drag-to-paint",
            icon: "pack://textures/editor/pyramid.png?filtering=point",
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
    
    const pane = uiSession.createPropertyPane(
        { titleAltText: "Pyramid" },
    );
    
    const settings = Editor.bindDataSource(
        pane,
        {
            size: 6,
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
                if (uiSession.scratchStorage === undefined) return uiSession.log.error( "Cylinder storage was not initialized." );
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
    
    tool.bindPropertyPane(pane);
    
    const onExecuteBrush = () => {
        if (!uiSession.scratchStorage?.previewSelection) return uiSession.log.error( "Pyramid storage was not initialized." );
        
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

        const pyramid = drawPyramid( location, settings.size, settings.hollow );
        for (const blockVolume of pyramid.calculateVolumes()) {
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
                            uiSession.extensionContext.transactionManager.openTransaction( "cylinderTool" );
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
                                            if (block) block.setType(settings.blockType);
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
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.inputType === Editor.MouseInputType.Drag) onExecuteBrush();
                },
            },
        ),
    );
};

const drawPyramid = ( location, size, hollow ) => {
    const mesh = new Mesh();
  
    let startX = location.x - Math.floor((size) / 2);
    let startY = location.y;
    let startZ = location.z - Math.floor((size) / 2);
  
    for (var y = 0; y < size; y++) {
        const layerSize = size - y;
  
        for (var x = 0; x < layerSize; x++) {
            for (var z = 0; z < layerSize; z++) {
                let blockX = startX + x;
                let blockY = startY + y;
                let blockZ = startZ + z;

                if (
                    hollow
                    && x > 0
                    && x < layerSize - 1
                    && z > 0
                    && z < layerSize - 1
                ) continue;
            
                mesh.add({ x: blockX, y: blockY, z: blockZ });

                blockX = startX - x;
                mesh.add({ x: blockX, y: blockY, z: blockZ });

                blockZ = startZ - z;
                mesh.add({ x: blockX, y: blockY, z: blockZ });

                blockX = startX + x;
                mesh.add({ x: blockX, y: blockY, z: blockZ });
            };
        };
    };
    
    return mesh;
};