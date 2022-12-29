import { world } from "@minecraft/server";
import { CommandResult } from "./index.js";

let overworld = world.getDimension("overworld");
let command: CommandResult = overworld.runCommandAsync("testfor @a");

console.warn(command.victim);

(async function () {
  let commandAsync = await overworld.runCommandAsync("ability @a mayfly true");

  overworld.runCommandAsync(`say commandAsync.successCount: ${commandAsync.successCount}`);
})();
