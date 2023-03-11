import * as Editor from "@minecraft/server-editor";
import { Color } from "color/index.js";
export default function(uiSession) {
    const tool = uiSession.toolRail.addTool(
        {
            displayString: "Structure Placer (CTRL + P)",
            tooltip: "Left mouse click to place a structure",
            icon: "pack://textures/editor/structure.png?filtering=point",
        },
    );
    
    const currentCursorState = uiSession.extensionContext.cursor.getState();
    currentCursorState.color = new Color(1, 1, 0, 1);
    currentCursorState.controlMode = Editor.CursorControlMode.KeyboardAndMouse;
    currentCursorState.targetMode = Editor.CursorTargetMode.Block;
    currentCursorState.visible = true;
    uiSession.scratchStorage = {
        spawnerCursorState: currentCursorState,
    };
    
    tool.onModalToolActivation.subscribe(
        eventData => {
            if (eventData.isActiveTool)
                uiSession.extensionContext.cursor.setState(uiSession.scratchStorage.spawnerCursorState);
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
        Editor.KeyboardKey.KEY_P,
        Editor.InputModifier.Control,
    );
    
    const pane = uiSession.createPropertyPane(
        {
            titleAltText: "Structure Placer",
        },
    );
    
    const settings = Editor.createPaneBindingObject(
        pane,
        {
            strctureName: "",
            rotation: "0_degrees",
        }
    );
    
    pane.addString(
        settings,
        "strctureName",
        {
            titleAltText: "Structure Name",
        },
    );

    pane.addDropdown(
        settings,
        'rotation',
        {
            titleAltText: "Rotation",
            dropdownItems: [
                {
                    displayAltText: '0°',
                    value: "0_degrees",
                },
                {
                    displayAltText: '90°',
                    value: "90_degrees",
                },
                {
                    displayAltText: '180°',
                    value: "180_degrees",
                },
                {
                    displayAltText: '270°',
                    value: "270_degrees",
                },
            ],
        }
    );
    
    tool.bindPropertyPane(pane);
    
    tool.registerMouseButtonBinding(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction == Editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType == Editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.selectionManager.selection.clear();
                        } else if (mouseProps.inputType == Editor.MouseInputType.ButtonUp) {
                            const player = uiSession.extensionContext.player;
                            if(settings.strctureName.trim().length == 0) return;
                            player.dimension.runCommandAsync(
                                "structure load "
                                + settings.strctureName
                                + " "
                                + uiSession.extensionContext.cursor.position.x
                                + " "
                                + (uiSession.extensionContext.cursor.position.y + 1)
                                + " "
                                + uiSession.extensionContext.cursor.position.z
                                + " "
                                + settings.rotation
                            );

                            uiSession.extensionContext.selectionManager.selection.clear();
                        };
                    };
                },
            },
        ),
    );
};