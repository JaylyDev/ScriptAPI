// Script example for ScriptAPI
// Author: 𝖘𝖆𝖓 𝕵𝖚𝖌𝖘#9251 <Bedrock Add-Ons>
// Project: https://github.com/JaylyDev/ScriptAPI

import * as Minecraft from "@minecraft/server";

let prefix = "!";

Minecraft.world.events.beforeChat.subscribe((data) => {
  if (data.message.toLowerCase().startsWith(`${prefix}help`)) {
    data.cancel = true;
    data.sender.runCommandAsync(`tellraw @s {"rawtext":[{"text":"hello"}]}`);
  }
});
