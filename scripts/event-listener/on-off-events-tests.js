import { Location, MinecraftEntityTypes, world } from "mojang-minecraft";
import { addEventListener, removeEventListener, addSystemEventListener } from './index';

let weatherChangeEvent = addEventListener('weatherChange', function (event) {
  world.getDimension(event.dimension).spawnEntity(MinecraftEntityTypes.allay.id, new Location(0, 100, 0));
});

removeEventListener('weatherChange', weatherChangeEvent);

addSystemEventListener('beforeWatchdogTerminate', (event) => {
  event.cancel = true;
});