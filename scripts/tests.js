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

 

import { world } from '@minecraft/server';

import { waitMove } from './index.js';

world.events.beforeChat.subscribe((data) => {

    const player = data.sender;

    const { x, y, z } = player.location;

    waitMove(player, x, y, z, (target) => {

        target.sendMessage('you moved!')

    })

});
