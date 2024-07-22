import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe(({ sourceEntity, message }) => {
  if (!sourceEntity) return;

  if (message === "tp:nether") {
    sourceEntity.teleport(
      { x: 0, y: 0, z: 0 },
      {
        dimension: world.getDimension("nether"),
        facingLocation: { x: 100, y: 100, z: 100 },
      }
    );
  }
});
