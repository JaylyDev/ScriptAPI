import { world } from "@minecraft/server";

world.afterEvents.buttonPush.subscribe((event) => {
  if (event.source.typeId === 'minecraft:player') {
    event.source.kill();
  }
})