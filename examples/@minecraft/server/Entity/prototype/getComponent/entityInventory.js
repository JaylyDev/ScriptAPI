import { ItemStack, world } from "@minecraft/server";

world.afterEvents.buttonPush.subscribe((event) => {
  const entity = event.source;
  entity.getComponent("inventory").container.addItem(new ItemStack("minecraft:dirt", 1));
})