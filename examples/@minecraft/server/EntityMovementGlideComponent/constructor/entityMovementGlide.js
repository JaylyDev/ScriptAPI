import { world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe(({ entity }) => {
  const movementGlide = entity.getComponent('movement.glide');
  movementGlide.maxTurn;
  movementGlide.speedWhenTurning;
  movementGlide.startSpeed;
  movementGlide.startSpeed;
  movementGlide.isValid();
});
