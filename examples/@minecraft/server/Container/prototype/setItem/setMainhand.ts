import { EntityInventoryComponent, ItemStack, world } from "@minecraft/server";
for (const player of world.getAllPlayers()) {
  const inventory = player.getComponent('inventory') as EntityInventoryComponent;
  const item = new ItemStack("minecraft:diamond_sword", 10);
  inventory.container.setItem(0, item);
}