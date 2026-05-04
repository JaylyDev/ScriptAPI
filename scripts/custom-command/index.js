// Author: 𝖘𝖆𝖓 𝕵𝖚𝖌𝖘#9251 <Bedrock Add-Ons>
// Project: https://github.com/JaylyDev/ScriptAPI

import { system, CommandPermissionLevel } from "@minecraft/server";
import * as Minecraft from "@minecraft/server";

system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "jayly:chatcommand",
      description: "Custom command for chat commands",
      permissionLevel: CommandPermissionLevel.Any,
    },
    (origin, args) => {
      const player = origin.sourceEntity;
      if (!(player) || !(player instanceof Minecraft.Player)) {
        return {
          message: "This command can only be used by a player.",
          status: Minecraft.CustomCommandStatus.Failure,
        };
      }
    })
  });