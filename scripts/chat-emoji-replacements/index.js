// Author: GlitchyTurtle32 <https://github.com/GlitchyTurtle>
// Project: https://github.com/JaylyDev/ScriptAPI
// @ts-nocheck
import { world , system, CommandPermissionLevel } from "@minecraft/server";

// How to create emojis? https://wiki.bedrock.dev/concepts/emojis.html
const replacements = {
    "armor": "",
    "minecoin": "",
    "food": ""
};

/**
 * @param {import("@minecraft/server").ChatSendBeforeEvent} msg
 */
function beforeChat(msg) {
    const player = msg.sender;

    let message = msg.message;
    let regex = new RegExp(":" + Object.keys(replacements).join(":|:") + ":", "g");
    
    // Replaces the word with emoji if it has :: around it. :armor: -> 
    message = message.replace(regex, (/** @type {string} */ match) => { return replacements[match.replaceAll(":", "")] + "§r" });

    world.sendMessage(`<${player.name}> ${message.replace(/\\"/g, '"')}`);
    msg.cancel = true;
}

system.beforeEvents.startup.subscribe((_event) => {
  _event.customCommandRegistry.registerCommand({
    name: 'jayly:chatemojireplacements',
    description: 'Custom command for chatemojireplacements',
    permissionLevel: CommandPermissionLevel.Any
}, (origin) => {
   const eventData = { sender: origin.sourceEntity, message: origin.sourceEntity?.name || '', cancel: false };
   if (!eventData.sender) return;
   const cb = msg => beforeChat(msg);
   cb(eventData);
});
});