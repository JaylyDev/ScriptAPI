// Script example for ScriptAPI
// Author: iBlqzed#3612 <Bedrock Add-Ons>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, PlayerInventoryComponentContainer } from "@minecraft/server";

let sellItems = [{
    id: 'minecraft:sand',
    value: 2
}, {
    id: 'minecraft:gravel',
    value: 4
}, {
    id: 'minecraft:log',
    value: 5
}]

/**
 * Sell all items in a player's inventory
 * @param {Player} player Player
 * @returns {number} The amount that of money that the player made
 */
const sell = (player) => {
    /**
     * @type {PlayerInventoryComponentContainer} The player's inventory container
     */
    // @ts-ignore
    const inv = player.getComponent('inventory').container, { size } = inv
    let amount = 0;
    for (let i = 0; i < size; i++) {
        const item = inv.getItem(i)
        if (!item) continue;
        const soldItem = sellItems.find(element => element.id === item.typeId)
        if (!soldItem) continue;
        amount = amount + soldItem.value * item.amount
        inv.setItem(i);
    }
    player.runCommandAsync(`scoreboard players add @s Money ${amount}`)
    return amount
}