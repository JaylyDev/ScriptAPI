import { EntityInventoryComponent, world } from "@minecraft/server";

const player = [...world.getPlayers()][0];

/**
 * @type {EntityInventoryComponent}
 */
// @ts-ignore
const inventory = player.getComponent("inventory");

const item = inventory.container.getItem(player.selectedSlot);

item.setLore([
  "lore1",
  "lore2",
  "lore3"
]);