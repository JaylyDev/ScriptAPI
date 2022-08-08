import { world } from "mojang-minecraft";
import { CommandResult } from "./index.js";

let overworld = world.getDimension("overworld");
let command: CommandResult = overworld.runCommand("testfor @a");

console.warn(command.victim);

(async function () {
  let commandAsync = await overworld.runCommandAsync("ability @a mayfly true");

  overworld.runCommand(`say commandAsync.successCount: ${commandAsync.successCount}`);
})();
