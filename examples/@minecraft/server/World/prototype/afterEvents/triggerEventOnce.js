import { world } from "@minecraft/server";

const callback = world.afterEvents.itemUseOn.subscribe((event) => {
  if (event.itemStack.typeId == 'minecraft:water_bucket') {
    event.source.sendMessage('You used water bucket once.');

    // Unsubscribe callback after first use
    world.afterEvents.itemUseOn.unsubscribe(callback);
  }
});