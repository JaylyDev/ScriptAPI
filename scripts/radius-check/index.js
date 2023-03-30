// Script example for ScriptAPI
// Author: THE BOSS9345#0193 <Bedrock Add-Ons>
// Project: https://github.com/JaylyDev/ScriptAPI

import { Player } from "@minecraft/server";

/**
 * Checks if the player is located within a specific radius of a block
 * @param {Player} player The player to check
 * @param {number} x The X coordinate of the block to check
 * @param {number} y The Y coordinate of the block to check
 * @param {number} z The Z coordinate of the block to check
 * @param {number} radius The radius to check
 * @returns {boolean} True if the player is located within the specified radius of the block, false otherwise
 * @example radiusCheck(player, 0, 0, 0, 10)
 */

function radiusCheck(player, x, y, z, radius) {
    const playerLocation = player.location;
    const playerX = playerLocation.x;
    const playerY = playerLocation.y;
    const playerZ = playerLocation.z;
    const distanceSquared = (playerX - x) ** 2 + (playerY - y) ** 2 + (playerZ - z) ** 2;
    const radiusSquared = radius ** 2;
    if (distanceSquared <= radiusSquared) {
        return true;
    } else {
        return false;
    }
} 
