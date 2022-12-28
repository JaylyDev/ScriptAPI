// Script examples for ScriptAPI
// Author: Herobrine64#3928 <Bedrock Add-Ons>

import { EntityInventoryComponent, Player } from "@minecraft/server";

/**
 * Check item amount from a player inventory
 * @param {Player} player
 * @param {string} itemId
 * @param {boolean} clearItems
 * @returns {number} item amount
 */
export function checkItemAmount(player, itemId, clearItems = false) {
    /**
     * @type {EntityInventoryComponent}
     */
    // @ts-expect-error
    const component = player.getComponent("minecraft:inventory");
    const inventory = component.container;
    let itemAmount = 0;
    for (let i = 0; i < 36; i++) {
        let item = inventory.getItem(i);
        if (item?.typeId != itemId) continue;
        itemAmount += item.amount;
    }
    if (clearItems) player.runCommandAsync(`clear @s ${itemId}`);
    return itemAmount;
}
