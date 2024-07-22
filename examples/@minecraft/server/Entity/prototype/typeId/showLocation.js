import { system, world } from '@minecraft/server';

// This event triggers when world is loaded
system.runInterval(() => {
  const entity = world.getDimension('overworld').getEntities()[0];
  // Finally, show that location as title
  entity.runCommandAsync(`title @a actionbar X: ${Math.floor(entity.location.x)} | Y: ${Math.floor(entity.location.y)} | Z: ${Math.floor(entity.location.z)}`);
});