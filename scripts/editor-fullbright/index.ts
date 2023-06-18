// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { ActionTypes, EditorInputContext, IMenu, InputModifier, IPlayerUISession, KeyboardKey } from "@minecraft/server-editor";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";

/**
 * Class to enable toggles for full bright in menu in editor mode
 */
export class FullbrightToggle {
  constructor (uiSession: IPlayerUISession, menu: IMenu) {
    const player = uiSession.extensionContext.player;
    // Set actions
    const enableAction = uiSession.actionManager.createAction({
        actionType: ActionTypes.NoArgsAction,
        onExecute: () => {
            player.addEffect(MinecraftEffectTypes.NightVision, 20000000, { amplifier: 1, showParticles: false });
        },
    });
    const disableAction = uiSession.actionManager.createAction({
        actionType: ActionTypes.NoArgsAction,
        onExecute: () => {
          player.removeEffect(MinecraftEffectTypes.NightVision);
        },
    });
    // Add actions to menu
    menu.addItem({ name: 'Enable', displayStringId: "Enable" }, enableAction);
    menu.addItem({ name: 'Disable', displayStringId: "Disable" }, disableAction);
    // Create key bindings
    uiSession.inputManager.registerKeyBinding(EditorInputContext.GlobalEditor, enableAction, KeyboardKey.KEY_Z, InputModifier.Control);
    uiSession.inputManager.registerKeyBinding(EditorInputContext.GlobalEditor, disableAction, KeyboardKey.KEY_Y, InputModifier.Control);
  };
}