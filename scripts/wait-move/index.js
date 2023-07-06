// Wait move.
// Author: defowler2005 <https://github.com/defowler2005>
// Project: https://github.com/JaylyDev/ScriptAPI/tree/main/scripts/wait-move/

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
