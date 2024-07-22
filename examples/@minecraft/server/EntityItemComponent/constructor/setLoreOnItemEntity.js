import { world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe((event) => {
  const itemEntity = event.entity;
  if (itemEntity.typeId !== "minecraft:item") return;
  const item = itemEntity.getComponent("item");
  item.itemStack.setLore(["Hello Player"]);
});
