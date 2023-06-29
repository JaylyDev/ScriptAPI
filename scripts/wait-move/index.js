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
 * with the player's current coordinates.
 * This is ideal for ui forms in chat commands!
 * ---------------------------------------------------------------------------

 * @param {Entity} target
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {(arg0: Entity) => void} callback
 */

import { system } from '@minecraft/server';

export function waitMove(target, x, y, z, callback) {
    const t = new Map();
    t.set(target, [x, y, z]);
    system.runInterval(() => {
        for (const [target, [xOld, yOld, zOld]] of t) {
            const { x: xc, y: yc, z: zc } = target.location;
            if (xOld !== xc || yOld !== yc || zOld !== zc) t.delete(target) && system.run(() => callback(target))
        }
    })
};
