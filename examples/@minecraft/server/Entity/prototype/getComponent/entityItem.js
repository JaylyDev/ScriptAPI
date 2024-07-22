import { world } from "@minecraft/server";

const itemEntities = world.getDimension('overworld').getEntities({ type: 'minecraft:item' });
for (const itemEntity of itemEntities) {
  const item = itemEntity.getComponent("item");
  item.itemStack.keepOnDeath = true;
}