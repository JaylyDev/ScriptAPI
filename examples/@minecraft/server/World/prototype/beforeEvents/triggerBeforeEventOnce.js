import { system, world } from "@minecraft/server";

const callback = world.beforeEvents.itemUseOn.subscribe((event) => {
  if (event.itemStack.typeId == 'minecraft:water_bucket') {
    event.source.sendMessage('You cannot use water bucket at this time, please try again.');
    event.cancel = true;

    // Unsubscribe callback after first use
    system.run(() => world.beforeEvents.itemUseOn.unsubscribe(callback));
  }
});