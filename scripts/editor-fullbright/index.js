// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { ActionTypes, EditorInputContext, InputModifier, KeyboardKey } from "@minecraft/server-editor";
import { MinecraftEffectTypes } from "@minecraft/server";
/**
 * Class to enable toggles for full bright in menu in editor mode
 */
export class FullbrightToggle {
    constructor(uiSession, menu) {
        const player = uiSession.extensionContext.player;
        // Set actions
        const enableAction = uiSession.actionManager.createAction({
            actionType: ActionTypes.NoArgsAction,
            onExecute: () => {
                player.addEffect(MinecraftEffectTypes.nightVision, 20000000, { amplifier: 1, showParticles: false });
            },
        });
        const disableAction = uiSession.actionManager.createAction({
            actionType: ActionTypes.NoArgsAction,
            onExecute: () => {
                player.runCommand("effect @s " + MinecraftEffectTypes.nightVision.getName() + " 0");
            },
        });
        // Add actions to menu
        menu.addItem({ name: 'Enable', displayStringId: "Enable" }, enableAction);
        menu.addItem({ name: 'Disable', displayStringId: "Disable" }, disableAction);
        // Create key bindings
        uiSession.inputManager.registerKeyBinding(EditorInputContext.GlobalEditor, enableAction, KeyboardKey.KEY_Z, InputModifier.Control);
        uiSession.inputManager.registerKeyBinding(EditorInputContext.GlobalEditor, disableAction, KeyboardKey.KEY_Y, InputModifier.Control);
    }
    ;
}
