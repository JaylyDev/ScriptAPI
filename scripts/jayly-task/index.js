// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { MinecraftDimensionTypes, system, world } from "@minecraft/server";

/**
 * @param {string} taskName
 * @param {string[]} commands
 * @param {boolean} loop
 */
export function task (taskName, commands, loop = false) {
  if (typeof taskName !== 'string' || typeof loop !== 'boolean') throw new TypeError('Native type conversion failed.');
  if (commands.filter((value) => typeof value !== 'string').length > 0) throw new TypeError('Native variant type conversion failed.');

  let id = system.runInterval(function runCommands () {
    let line = 0;
    system.clearRun(id);

    try {
      for (const command of commands) {
        line++;
        world.getDimension(MinecraftDimensionTypes.overworld).runCommand(command);
      };
      if (loop) id = system.runInterval(runCommands);
    } catch (reason) {
      console.warn(`Task ${taskName} failed to load correctly with error(s):`);
      console.warn(`Error on line ${line}: command failed to parse with error '${reason}'`);
    };
  });
};