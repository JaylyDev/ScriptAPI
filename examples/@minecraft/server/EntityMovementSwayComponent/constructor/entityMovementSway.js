import { world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe(({ entity }) => {
  const movementSway = entity.getComponent('movement.sway');
  movementSway.swayAmplitude;
  movementSway.swayFrequency;
  movementSway.isValid();
});

