import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import { Color } from "color/index.js";
export default function(uiSession) {
    const tool = uiSession.toolRail.addTool(
        {
            displayString: "Sphere (CTRL + SHIFT + S)",
            tooltip: "Left mouse click or drag-to-paint",
            icon: "pack://textures/editor/sphere.png?filtering=point",
        },
    );
    
    const currentCursorState = uiSession.extensionContext.cursor.getState();
    currentCursorState.color = new Color(1, 1, 0, 1);
    currentCursorState.controlMode = Editor.CursorControlMode.KeyboardAndMouse;
    currentCursorState.targetMode = Editor.CursorTargetMode.Block;
    currentCursorState.visible = true;
    
    const previewSelection = uiSession.extensionContext.selectionManager.createSelection();
    previewSelection.visible = true;
    previewSelection.borderColor = new Color(0, 0.5, 0.5, 0.2);
    previewSelection.fillColor = new Color(0, 0, 0.5, 0.1);
    
    uiSession.scratchStorage = {
        currentCursorState,
        previewSelection,
    };
    
    tool.onModalToolActivation.subscribe(
        eventData => {
            if (eventData.isActiveTool)
                uiSession.extensionContext.cursor.setState(uiSession.scratchStorage.currentCursorState);
        },
    );
    
    uiSession.inputManager.registerKeyBinding(
        Editor.EditorInputContext.GlobalToolMode,
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.toolRail.setSelectedOptionId(tool.id, true);
                },
            },
        ),
        Editor.KeyboardKey.KEY_S,
        Editor.InputModifier.Shift | Editor.InputModifier.Control,
    );
    
    const pane = uiSession.createPropertyPane(
        {
            titleAltText: "Sphere",
        },
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
        "hollow", {
            titleAltText: "Hollow",
        }
    );
    pane.addBool(settings, "face", {
        titleAltText: "Face Mode",
        onChange: (_obj, _property, _oldValue, _newValue) => {
            if (uiSession.scratchStorage === undefined) {
                console.error('Sphere storage was not initialized.');
                return;
            }
            uiSession.scratchStorage.currentCursorState.targetMode = settings.face
                ? Editor.CursorTargetMode.Face
                : Editor.CursorTargetMode.Block;
            uiSession.extensionContext.cursor.setState(uiSession.scratchStorage.currentCursorState);
        },
    });
    pane.addBlockPicker(
        settings,
        "blockType",
        {
            titleAltText: "Block Type",
        }
    );
    
    tool.bindPropertyPane(pane);
    
    const onExecuteBrush = () => {
        if (!uiSession.scratchStorage?.previewSelection) {
            console.error('Brush storage was not initialized.');
            return;
        };
        
        const previewSelection = uiSession.scratchStorage.previewSelection;
        const player = uiSession.extensionContext.player;
        const targetBlock = player.dimension.getBlock(uiSession.extensionContext.cursor.position);
        if (!targetBlock) return;
        const location = targetBlock.location;
        if (
            uiSession.scratchStorage.lastCursorPosition?.x == uiSession.extensionContext.cursor.position.x
            && uiSession.scratchStorage.lastCursorPosition?.y == uiSession.extensionContext.cursor.position.y
            && uiSession.scratchStorage.lastCursorPosition?.z == uiSession.extensionContext.cursor.position.z
        ) return;

        const pyramid = drawSphere(location.x, location.y, location.z, settings.size, settings.hollow);
        for (const blockLocation of pyramid) {
            const blockVolume = new Editor.BlockVolume(blockLocation, blockLocation);
            previewSelection.pushVolume(Editor.SelectionBlockVolumeAction.add, blockVolume);
        };

        uiSession.scratchStorage.lastCursorPosition = uiSession.extensionContext.cursor.position;
    };
    
    tool.registerMouseButtonBinding(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.MouseRayCastAction,
                onExecute: async (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction == Editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType == Editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction("sphereTool");
                            uiSession.scratchStorage.previewSelection.clear();
                            onExecuteBrush();
                        } else if (mouseProps.inputType == Editor.MouseInputType.ButtonUp) {
                            const player = uiSession.extensionContext.player;

                            uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection);
                            await Editor.executeLargeOperation(uiSession.scratchStorage.previewSelection, blockLocation => {
                                const block = player.dimension.getBlock(blockLocation);
                                block.setType(settings.blockType);
                            }).catch(() => {
                                uiSession.extensionContext.transactionManager.commitOpenTransaction();
                                uiSession.scratchStorage?.previewSelection.clear();
                            }).then(() => {
                                uiSession.extensionContext.transactionManager.commitOpenTransaction();
                                uiSession.scratchStorage?.previewSelection.clear();
                            });
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

function drawSphere(x, y, z, radius, hollow = false) {
	const blockLocations = [];
	let diameter = radius * 2;
	for (let xOffset = -radius; xOffset <= radius; xOffset++) {
		for (let yOffset = -radius; yOffset <= radius; yOffset++) {
			for (let zOffset = -radius; zOffset <= radius; zOffset++) {
				let distance = Math.sqrt(xOffset * xOffset + yOffset * yOffset + zOffset * zOffset);

				if (distance <= radius && (!hollow || distance >= radius - 1)) {
					blockLocations.push(
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

	return blockLocations;
};