// Author: Smell of Curry <https://github.com/smell-of-curry>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world , system, CommandPermissionLevel } from "@minecraft/server";

//Prefix for all custom commands
const COMMAND_PREFIX = "!";

/**
 * The function that will handle all custom command inputs and outputs
 * @param {string} command
 * @param {string[]} args
 * @param {string} msg
 * @param {Player} player
 */
function customCommand(command, args, msg, player) {
  switch (command) {
    case "spawn":
      player.runCommand(`execute "${player.nameTag}" ~~~ tp @s 0 100 0`);
      break;
    case "test":
      player.runCommand(`execute "${player.nameTag}" ~~~ say test`);
      break;
    case "gmc":
      player.runCommand(`gamemode 1 "${player.nameTag}"`);
      break;
    case "gms":
      player.runCommand(`gamemode 0 "${player.nameTag}"`);
      break;
    default:
      player.runCommand(`say error! ${command} is not a valid command!`);
  }
}