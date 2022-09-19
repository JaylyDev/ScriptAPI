import { Location, MinecraftEntityTypes, world } from "mojang-minecraft";
import { SystemEvent } from "./on-off-event";
import { WorldEvent } from "./on-off-event";

let weatherChangeEvent = WorldEvent.on('weatherChange', function (event) {
  world.getDimension(event.dimension).spawnEntity(MinecraftEntityTypes.allay.id, new Location(0, 100, 0));
});

WorldEvent.off('weatherChange', weatherChangeEvent);

SystemEvent.on('beforeWatchdogTerminate', (event) => {
  event.cancel = true;
});