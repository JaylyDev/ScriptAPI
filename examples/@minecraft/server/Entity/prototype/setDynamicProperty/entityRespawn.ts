import { Vector3, system, world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe((event) => {
  event.entity.setDynamicProperty('spawn_location', event.entity.location); // set location spawn
});

world.beforeEvents.entityRemove.subscribe((event) => {
  const location = event.removedEntity.getDynamicProperty('spawn_location') as Vector3; // get location spawn
  const dimension = event.removedEntity.dimension;
  system.run(() => {
    dimension.spawnEntity(event.removedEntity.typeId, location);
  })
});