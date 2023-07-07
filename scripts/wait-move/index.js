// Script example for ScriptAPI
// Author: defowler2005 <https://github.com/defowler2005>
// Project: https://github.com/JaylyDev/ScriptAPI
/**
 * Minecraft Bedrock ScriptAPI Example
 * @license Do what ever you want
 * @author defowler2005#4812
 * @version 3.0.0
 * ---------------------------------------------------------------------------
 * This is a waitMove function, It logged the players x, y, z coordinates-
 * with the player's current coordinates in aystem.runInterval(() => {});
 * This is ideal for ui forms in chat commands!
 * ---------------------------------------------------------------------------
 */
import { system } from '@minecraft/server';

/**
 * Waits for the player to move and then executes a callback function.
 * @param {Object} target - The target player to monitor for movement.
 * @param {number} x - The initial X-coordinate of the target player.
 * @param {number} y - The initial Y-coordinate of the target player.
 * @param {number} z - The initial Z-coordinate of the target player.
 * @param {Function} callback - The callback function to execute after the player moves.
 */

export function waitMove(target, x, y, z, callback) {
    const t = new Map();
    t.set(target, [x, y, z]);
    system.runInterval(() => {
        for (const [target, [xOld, yOld, zOld]] of t) {
            const { x: xc, y: yc, z: zc } = target.location;
            if (xOld !== xc || yOld !== yc || zOld !== zc) system.run(() => t.delete(target) || callback());
        }
    })
};
