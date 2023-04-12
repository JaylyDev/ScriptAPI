// Script example for ScriptAPI
// Author: Smell of Curry <https://github.com/smell-of-curry>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world } from "@minecraft/server";

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
      player.runCommandAsync(`execute "${player.nameTag}" ~~~ tp @s 0 100 0`);
      break;
    case "test":
      player.runCommandAsync(`execute "${player.nameTag}" ~~~ say test`);
      break;
    case "gmc":
      player.runCommandAsync(`gamemode 1 "${player.nameTag}"`);
      break;
    case "gms":
      player.runCommandAsync(`gamemode 0 "${player.nameTag}"`);
      break;
    default:
      player.runCommandAsync(`say error! ${command} is not a valid command!`);
  }
}

//Checks if a command was run (checks for the prefix)
world.beforeEvents.chatSend.subscribe((msg) => {
  if (!msg.message.startsWith(COMMAND_PREFIX)) return;
  const args = msg.message.slice(COMMAND_PREFIX.length).trim().split(/\s+/);
  msg.cancel = true;
  const player = msg.sender;
  const command = args.shift();
  customCommand(command, args, args.join(" "), player);
});