// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { MinecraftBlockTypes, Vector } from "@minecraft/server";
import { registerEditorExtension, CursorControlMode, CursorTargetMode, EditorInputContext, ActionTypes, KeyboardKey, InputModifier, createPaneBindingObject, BlockVolume, SelectionBlockVolumeAction, MouseActionType, MouseInputType, executeLargeOperation } from "@minecraft/server-editor";
import { getRotationCorrectedDirectionVector, Direction } from "editor-utilities/index";

registerEditorExtension('randomFill', (uiSession) => {
    const tool = uiSession.toolRail.addTool(
        {
            displayString: "Random Fill (CTRL + R)",
            tooltip: "Left mouse click or drag-to-paint",
            icon: "pack://textures/editor/Select-Fill.png?filtering=point",
        },
    );

    const currentCursorState = uiSession.extensionContext.cursor.getState();
    currentCursorState.color = {
        red: 1,
        green: 1,
        blue: 0,
        alpha: 1
    };
    currentCursorState.controlMode = CursorControlMode.KeyboardAndMouse;
    currentCursorState.targetMode = CursorTargetMode.Block;
    currentCursorState.visible = true;

    const previewSelection = uiSession.extensionContext.selectionManager.createSelection();
    previewSelection.visible = true;
    previewSelection.borderColor = {
        red: 0,
        green: 0.5,
        blue: 0.5,
        alpha: 0.2
    };
    previewSelection.fillColor = {
        red: 0,
        green: 0,
        blue: 0.5,
        alpha: 0.1
    };

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
        EditorInputContext.GlobalToolMode,
        uiSession.actionManager.createAction(
            {
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.toolRail.setSelectedOptionId(tool.id, true);
                },
            },
        ),
        KeyboardKey.KEY_R,
        InputModifier.Control,
    );

    const pane = uiSession.createPropertyPane(
        {
            titleAltText: "Cube",
        },
    );

    const settings = createPaneBindingObject(
        pane,
        {
            size: 3,
            hollow: false,
            face: false,
            blockType: MinecraftBlockTypes.stone,
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
                console.error('Cylinder storage was not initialized.');
                return;
            }
            uiSession.scratchStorage.currentCursorState.targetMode = settings.face
                ? CursorTargetMode.Face
                : CursorTargetMode.Block;
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

    const onExecute = () => {
        if (!uiSession.scratchStorage?.previewSelection) {
            console.error('Cube storage was not initialized.');
            return;
        };

        const previewSelection = uiSession.scratchStorage.previewSelection;
        const player = uiSession.extensionContext.player;
        const targetBlock = player.dimension.getBlock(uiSession.extensionContext.cursor.position);
        if (!targetBlock) return;

        const rotationY = uiSession.extensionContext.player.getRotation().y;

        const directionRight = getRotationCorrectedDirectionVector(rotationY, Direction.Right);
        const directionForward = getRotationCorrectedDirectionVector(rotationY, Direction.Back);
        const relativeDirection = Vector.add(Vector.add(directionRight, directionForward), Vector.up);
        const sizeHalf = Math.floor(settings.size / 2);
        let fromOffset = Vector.multiply(relativeDirection, -sizeHalf);
        const toOffset = Vector.multiply(relativeDirection, settings.size - 1);
        const isEven = settings.size % 2 === 0;
        if (isEven) fromOffset = Vector.add(fromOffset, Vector.up);
        const location = targetBlock.location;
        const from = {
            x: location.x + fromOffset.x,
            y: location.y + fromOffset.y,
            z: location.z + fromOffset.z,
        };
        const to = { x: from.x + toOffset.x, y: from.y + toOffset.y, z: from.z + toOffset.z };
        const blockVolume = new BlockVolume(from, to);

        if (uiSession.scratchStorage.lastVolumePlaced?.equals(blockVolume.boundingBox)) return;

        previewSelection.pushVolume(SelectionBlockVolumeAction.add, blockVolume);
        uiSession.scratchStorage.lastVolumePlaced = blockVolume.boundingBox;
        if (settings.hollow &&
            blockVolume.boundingBox.spanX > 2 &&
            blockVolume.boundingBox.spanY > 2 &&
            blockVolume.boundingBox.spanZ > 2) {
            const subtractBlockVolume = new BlockVolume({ x: from.x, y: from.y + 1, z: from.z }, { x: to.x, y: to.y - 1, z: to.z });
            previewSelection.pushVolume(SelectionBlockVolumeAction.subtract, subtractBlockVolume);
        };
    };

    tool.registerMouseButtonBinding(
        uiSession.actionManager.createAction(
            {
                actionType: ActionTypes.MouseRayCastAction,
                onExecute: async (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction == MouseActionType.LeftButton) {
                        if (mouseProps.inputType == MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction("cylinderTool");
                            uiSession.scratchStorage.previewSelection.clear();
                            onExecute();
                        } else if (mouseProps.inputType == MouseInputType.ButtonUp) {
                            const player = uiSession.extensionContext.player;

                            uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection);
                            await executeLargeOperation(uiSession.scratchStorage.previewSelection, blockLocation => {
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
                actionType: ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.inputType === MouseInputType.Drag) onExecute();
                },
            },
        ),
    );
});