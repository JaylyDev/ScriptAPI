/**

 * Minecraft Bedrock ScriptAPI Example

 * @license WTFPL

 * @author defowler2005#4812

 * @version 1.0.0

 * ---------------------------------------------------------------------------

 * This is a waitMove function, It logged the players x, y, z coordinates-

 * with the player's current coordinates in aystem.runInterval(() => {});.

 * This is ideal for ui forms in chat commands!

 * ---------------------------------------------------------------------------

 */

import { system } from '@minecraft/server';

import './tests.js';

system.events.beforeWatchdogTerminate.subscribe((data) => { data.cancel = true });

export function waitMove(target, x, y, z, callback) {

  const t = new Map();

  t.set(target, [x, y, z]);

  system.runInterval(() => {

    for (const [target, [xOld, yOld, zOld]] of t) {

      const { x: xc, y: yc, z: zc } = target.location;

      if (xOld !== xc || yOld !== yc || zOld !== zc) {

        t.delete(target);

        callback(target);

      }

    }

  });

};
