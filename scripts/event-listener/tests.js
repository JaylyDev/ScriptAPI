import { MinecraftEntityTypes, world } from "@minecraft/server";
import { addEventListener, removeEventListener, addSystemEventListener } from './index';

let weatherChangeEvent = addEventListener('weatherChange', function (event) {
  world.getDimension(event.dimension).spawnEntity(MinecraftEntityTypes.allay.id, {
    x: 0,
    y: 100,
    z: 0
  });
});

removeEventListener('weatherChange', weatherChangeEvent);
