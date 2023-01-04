import { Entity, Dimension } from "@minecraft/server";

/**
 * Run commands in one function
 * @param {Entity | Dimension} target 
 * @param {...string} commandString
 */
export function runCommands (target, ...commandString) {
    const results = [];
    for (const command of commandString) {
        results.push(target.runCommandAsync(command));
    };
    return results;
};

/**
 * Run commands asynchronously in one function
 * @param {Entity | Dimension} target 
 * @param {...string} commandString
 */
export async function runCommandsAsync (target, ...commandString) {
    const results = { 'successCount': 0 };
    for (const command of commandString) {
        await target.runCommandAsync(command);
        results.successCount++;
    };
    return results;
};