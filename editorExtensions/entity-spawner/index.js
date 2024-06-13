// Script example for ScriptAPI
// Author: Ciosciaa <https://github.com/Ciosciaa>
// Project: https://github.com/JaylyDev/ScriptAPI
import * as server from "@minecraft/server";
import * as editor from "@minecraft/server-editor";
const entityTypes = [...server.EntityTypes.getAll()].map(({ id }) => id);
editor.registerEditorExtension("entitySpawner", uiSession => {
    const tool = uiSession.toolRail.addTool({
        displayAltText: "Spawn Entity (Ctrl + E)",
        displayStringId: "editor.toolRail.entitySpawnerTool.title",
        tooltipAltText: "Spawns an entity at the selected position",
        tooltipStringId: "editor.toolRail.entitySpawnerTool.description",
        icon: "pack://textures/editor/entity.png?filtering=point"
    });
    const currentCursorState = uiSession.extensionContext.cursor.getProperties();
    currentCursorState.outlineColor = { red: 1, green: 0, blue: 1, alpha: 1 };
    currentCursorState.controlMode = editor.CursorControlMode.KeyboardAndMouse;
    currentCursorState.targetMode = editor.CursorTargetMode.Face;
    currentCursorState.visible = true;
    uiSession.scratchStorage = { spawnerCursorState: currentCursorState };
    tool.onModalToolActivation.subscribe(eventData => {
        if (eventData.isActiveTool)
            uiSession.extensionContext.cursor.setProperties(uiSession.scratchStorage.spawnerCursorState);
    });
    uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalToolMode, uiSession.actionManager.createAction({
        actionType: editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.toolRail.setSelectedOptionId(tool.id, true);
        },
    }), editor.KeyboardKey.KEY_E, editor.InputModifier.Control);
    const settings = {
        entityType: entityTypes.indexOf("minecraft:creeper")
    };
    const pane = uiSession.createPropertyPane({
        titleStringId: "editor.toolRail.entitySpawnerTool.pane.title",
        titleAltText: "Entity Spawner Settings",
    });
    const binding = editor.bindDataSource(pane, settings);
    pane.addDropdown(binding, "entityType", {
        titleStringId: "editor.toolRail.entitySpawnerTool.pane.controls.entityType",
        titleAltText: "Entity Type",
        dropdownItems: entityTypes.map((entityType, index) => ({
            value: index,
            displayAltText: entityType,
            displayStringId: `entity.${entityType.replace("minecraft:", "")}.name`
        }))
    });
    tool.bindPropertyPane(pane);
    tool.registerMouseButtonBinding(uiSession.actionManager.createAction({
        actionType: editor.ActionTypes.MouseRayCastAction,
        onExecute: async (mouseRay, mouseProps) => {
            if (mouseProps.mouseAction === editor.MouseActionType.LeftButton) {
                if (mouseProps.inputType === editor.MouseInputType.ButtonDown) {
                    uiSession.extensionContext.transactionManager.openTransaction("tool.spawnEntity");
                    uiSession.extensionContext.selectionManager.selection.clear();
                    const cursorPosition = mouseRay.cursorBlockLocation;
                    server.world.getDimension("minecraft:overworld").spawnEntity(entityTypes[settings.entityType], {
                        x: cursorPosition.x + 0.5,
                        y: cursorPosition.y,
                        z: cursorPosition.z + 0.5
                    });
                }
                else if (mouseProps.inputType === editor.MouseInputType.ButtonUp) {
                    uiSession.extensionContext.transactionManager.commitOpenTransaction();
                    uiSession.extensionContext.selectionManager.selection.clear();
                }
            }
        }
    }));
    return []; // Likely unneeded, but untested
}, () => { });
