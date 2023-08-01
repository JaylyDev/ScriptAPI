// Script example for ScriptAPI
// Author: defowler2005 <https://github.com/defowler2005>
// Project: https://github.com/JaylyDev/ScriptAPI

/**
 * Minecraft Bedrock ScriptAPI Example
 * @license Do whatever you want
 * @author defowler2005
 * @version 1.0.0
 * @project https://github.com/JaylyDev/ScriptAPI
 * --------------------------------------------------------------------------
 * A code that creates a border for the world, Simple.
 * --------------------------------------------------------------------------
 */
import { world, system } from '@minecraft/server';

/**
 * @property {number} minX - The minimum X-coordinate value of the border.
 * @property {number} minZ - The minimum Z-coordinate value of the border.
 * @property {number} maxX - The maximum X-coordinate value of the border.
 * @property {number} maxZ - The maximum Z-coordinate value of the border.
 */

const minX = -10;
const minZ = -10;
const maxX = 10;
const maxZ = 10;

system.runInterval(() => {
    world.getPlayers().forEach(player => {
        const x = Math.floor(player.location.x);
        const z = Math.floor(player.location.z);
        if (Math.abs(x - (minX + maxX) / 2) > Math.abs(minX - maxX) / 2 || Math.abs(z - (minZ + maxZ) / 2) > Math.abs(minZ - maxZ) / 2) {
            player.sendMessage('You are outside the border!');
        } else {
            player.sendMessage('You are in the border!');
        }
    })
}, 20);
