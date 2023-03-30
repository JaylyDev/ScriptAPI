// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world } from "@minecraft/server";

/**
 * @param {string} command
 */
export function runCommand(command) {
    try {
        return world.getDimension('overworld').runCommand(command);
    } catch (e) {
        return JSON.parse(e)
    };
}
