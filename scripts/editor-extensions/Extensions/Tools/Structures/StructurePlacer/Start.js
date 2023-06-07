import * as Editor from "@minecraft/server-editor";
import { Color } from "../../../../utils";
import { Structures } from "../Structures";
/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession 
 */
export const Start = (uiSession) => {
    uiSession.log.debug(`Initializing ${uiSession.extensionContext.extensionName} extension`);
    const tool = uiSession.toolRail.addTool(
        {
            displayAltText: "Structure Placer (CTRL + P)",
            tooltipAltText: "Left mouse click to place a structure",
            icon: "pack://textures/editor/structure_placer.png?filtering=point",
        },
    );

    uiSession.scratchStorage = {
        currentCursorState: {
            outlineColor: new Color(1, 1, 0, 1),
            controlMode: Editor.CursorControlMode.KeyboardAndMouse,
            targetMode: Editor.CursorTargetMode.Face,
            visible: true,
            fixedModeDistance: 5
        },
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
        Editor.KeyboardKey.KEY_P,
        Editor.InputModifier.Control,
    );
    
    const pane = uiSession.createPropertyPane(
        {
            titleAltText: "Structure Placer",
            width: 73,
        },
    );
    
    const settings = Editor.bindDataSource(
        pane,
        {
            structureName: "",
            face: true,
            vanillaStructure: "",
            rotation: "0_degrees",
            mirror: "none",
            includeEntities: true,
            waterlogBlocks: false,
            removeBlocks: false,
        }
    );
    
    pane.addString(
        settings,
        "structureName",
        {
            titleAltText: "Structure Name",
        },
    );

    pane.addBool(
        settings,
        "face",
        {
            titleAltText: "Face Mode",
            onChange: (_obj, _property, _oldValue, _newValue) => {
                if (uiSession.scratchStorage === undefined) {
                    uiSession.log.error('Cube storage was not initialized.');
                    return;
                }
                uiSession.scratchStorage.currentCursorState.targetMode = settings.face
                    ? Editor.CursorTargetMode.Face
                    : Editor.CursorTargetMode.Block;
                uiSession.extensionContext.cursor.setProperties(uiSession.scratchStorage.currentCursorState);
            },
        }
    );

    pane.addDropdown(
        settings,
        "vanillaStructure",
        {
            titleAltText: "Vanilla Structure",
            dropdownItems: Structures.map(
                (value) => (
                    {
                        displayAltText: value,
                        value,
                    }
                ),
            ),
            onChange: (_obj, _property, _oldValue, _newValue) => {
                settings.structureName = settings.vanillaStructure;
            },
        },
    );

    pane.addDropdown(
        settings,
        "rotation",
        {
            titleAltText: "Rotation",
            dropdownItems: [
                {
                    displayAltText: "0°",
                    value: "0_degrees",
                },
                {
                    displayAltText: "90°",
                    value: "90_degrees",
                },
                {
                    displayAltText: "180°",
                    value: "180_degrees",
                },
                {
                    displayAltText: "270°",
                    value: "270_degrees",
                },
            ],
        }
    );

    pane.addDropdown(
        settings,
        "mirror",
        {
            titleAltText: "Mirror",
            dropdownItems: [
                {
                    displayAltText: "None",
                    value: "none",
                },
                {
                    displayAltText: "X",
                    value: "x",
                },
                {
                    displayAltText: "XZ",
                    value: "xz",
                },
                {
                    displayAltText: "Z",
                    value: "z",
                },
            ],
        }
    );

    pane.addBool(
        settings,
        "includeEntities", {
            titleAltText: "Include Entities",
        }
    );

    pane.addBool(
        settings,
        "waterlogBlocks", {
            titleAltText: "Waterlog Blocks",
        }
    );

    pane.addBool(
        settings,
        "removeBlocks", {
            titleAltText: "Remove Blocks",
        }
    );
    
    tool.bindPropertyPane(pane);
    
    tool.registerMouseButtonBinding(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    try {
                    if (mouseProps.mouseAction == Editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType == Editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.selectionManager.selection.clear();
                        } else if (mouseProps.inputType == Editor.MouseInputType.ButtonUp) {
                            const player = uiSession.extensionContext.player;
                            if(settings.structureName.trim().length == 0) return;
                            player.dimension.runCommandAsync(
                                "structure load \""
                                + settings.structureName
                                + "\" "
                                + uiSession.extensionContext.cursor.getPosition().x
                                + " "
                                + uiSession.extensionContext.cursor.getPosition().y
                                + " "
                                + uiSession.extensionContext.cursor.getPosition().z
                                + " "
                                + settings.rotation
                                + " "
                                + settings.mirror
                                + " "
                                + settings.includeEntities
                                + " "
                                + !settings.removeBlocks
                                + " "
                                + settings.waterlogBlocks
                            );

                            uiSession.extensionContext.selectionManager.selection.clear();
                        };
                    };
                    } catch(e) { uiSession.log.warning(e); };
                },
            },
        ),
    );
};