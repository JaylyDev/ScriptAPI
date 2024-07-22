import { world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe((event) => {
  world.sendMessage(`${event.deadEntity.typeId} died from ${event.damageSource}!`);
});