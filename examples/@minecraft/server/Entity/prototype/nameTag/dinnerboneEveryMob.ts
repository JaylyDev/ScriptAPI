import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe(({ message }) => {
  if (message === 'dinnerbone:true') {
    for (const entity of world.getDimension("overworld").getEntities()) {
      entity.nameTag = 'Dinnerbone';
    }
  }
  
})