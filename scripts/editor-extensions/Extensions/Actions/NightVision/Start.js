import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession 
 */
export const Start = (uiSession) => {
    const menu = uiSession.createMenu(
        { name: "Night Vision" },
    );
    
    menu.addItem(
        { name: "Enable" },
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => uiSession.extensionContext.player.addEffect( MinecraftEffectTypes.NightVision, 20000000, { amplifier: 1, showParticles: false } ),
            },
        ),
    );

    menu.addItem(
        { name: "Disable" },
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => uiSession.extensionContext.player.removeEffect( MinecraftEffectTypes.NightVision ),
            },
        ),
    );
};