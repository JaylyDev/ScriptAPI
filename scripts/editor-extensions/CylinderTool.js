import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import { Color } from "../color/index.js";
import { Mesh } from "./mesh";
/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession
 */
export default (uiSession) => {
    const tool = uiSession.toolRail.addTool(
        {
            displayString: "Cylinder (CTRL + SHIFT + C)",
            tooltip: "Left mouse click or drag-to-paint",
            icon: "pack://textures/editor/cylinder.png?filtering=point",
        },
    );

    const previewSelection = uiSession.extensionContext.selectionManager.create();
    previewSelection.visible = true;
    previewSelection.setOutlineColor(new Color(0, 0.5, 0.5, 0.2));
    previewSelection.setFillColor(new Color(0, 0, 0.5, 0.1));
    
    uiSession.scratchStorage = {
        currentCursorState: {
            outlineColor: new Color(1, 1, 0, 1),
            controlMode: Editor.CursorControlMode.KeyboardAndMouse,
            targetMode: Editor.CursorTargetMode.Block,
            visible: true,
            fixedModeDistance: 5
        },
        previewSelection,
    };
    
    tool.onModalToolActivation.subscribe(
        eventData => {
            if (eventData.isActiveTool)
                uiSession.extensionContext.cursor.setProperties(uiSession.scratchStorage.currentCursorState);
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
        Editor.KeyboardKey.KEY_C,
        Editor.InputModifier.Shift | Editor.InputModifier.Control,
    );
    
    const pane = uiSession.createPropertyPane(
        {
            titleAltText: "Cylinder",
        },
    );
    
    const settings = Editor.createPaneBindingObject(
        pane,
        {
            size: 3,
            height: 6,
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
    pane.addNumber(
        settings,
        "height",
        {
            titleAltText: "Height",
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
                console.error('Cylinder storage was not initialized.');
                return;
            }
            uiSession.scratchStorage.currentCursorState.targetMode = settings.face
                ? Editor.CursorTargetMode.Face
                : Editor.CursorTargetMode.Block;
            uiSession.extensionContext.cursor.setProperties(uiSession.scratchStorage.currentCursorState);
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
            console.error('Cylinder storage was not initialized.');
            return;
        };
        
        const previewSelection = uiSession.scratchStorage.previewSelection;
        const player = uiSession.extensionContext.player;
        const targetBlock = player.dimension.getBlock(uiSession.extensionContext.cursor.getPosition());
        if (!targetBlock) return;
        const location = targetBlock.location;
        if (
            uiSession.scratchStorage.lastCursorPosition?.x == uiSession.extensionContext.cursor.getPosition().x
            && uiSession.scratchStorage.lastCursorPosition?.y == uiSession.extensionContext.cursor.getPosition().y
            && uiSession.scratchStorage.lastCursorPosition?.z == uiSession.extensionContext.cursor.getPosition().z
        ) return;

        const cylinder = drawCylinder(location.x, location.y, location.z, settings.size, settings.height, settings.hollow);
        for (const blockVolume of cylinder.calculateVolumes()) {
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
                onExecute: async (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction == Editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType == Editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction("cylinderTool");
                            uiSession.scratchStorage.previewSelection.clear();
                            onExecuteBrush();
                        } else if (mouseProps.inputType == Editor.MouseInputType.ButtonUp) {
                            const player = uiSession.extensionContext.player;

                            uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection);
                            await Editor.executeLargeOperation(uiSession.scratchStorage.previewSelection, blockLocation => {
                                if (
                                    blockLocation.y >= -64
                                    && blockLocation.y <= 320
                                ) {
                                    const block = player.dimension.getBlock(blockLocation);
                                    block.setType(settings.blockType);
                                };
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

function drawCylinder(x, y, z, radius, height, hollow = false) {
	const mesh = new Mesh();
	for (let i = 0; i < height; i++) {
		let centerX = x;
		let centerY = y + i;
		let centerZ = z;

		for (let j = -radius; j <= radius; j++) {
			for (let k = -radius; k <= radius; k++) {
				let distance = Math.sqrt(j * j + k * k);
				if (
					(!hollow && distance <= radius)
					|| (
						hollow
						&& (
							(distance >= radius - 0.5 && distance <= radius + 0.5)
							&& (
								(i == 0 && distance < radius - 0.5)
								|| (i == height - 1 && distance < radius - 0.5)
							)
							|| (i != 0 && i != height - 1 && distance < radius - 0.5)
						)
						&& (
							distance >= radius - 1.5
							|| (i == 0 || i == height - 1)
						)
					)
				) {
					mesh.add(
						{
							x: centerX + j,
							y: centerY,
							z: centerZ + k,
						}
					);
				};
			};
		};
	};

	return mesh;
};