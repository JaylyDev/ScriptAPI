// @ts-ignore
import { world } from "mojang-minecraft";
let overworld = world.getDimension("overworld");
/**
 * @type {import('./index').CommandResult}
 */
let command = overworld.runCommand("testfor @a");
console.warn(command.victim);
(async function () {
    let commandAsync = await overworld.runCommandAsync("ability @a mayfly true");
    overworld.runCommandAsync(`say commandAsync.successCount: ${commandAsync.successCount}`);
})();
