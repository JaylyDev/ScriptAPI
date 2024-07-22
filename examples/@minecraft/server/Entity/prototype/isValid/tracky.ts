import { system, world } from "@minecraft/server";

const zombie = world
  .getDimension("overworld")
  .spawnEntity("minecraft:zombie", world.getDefaultSpawnLocation());

const id = system.runInterval(() => {
  if (!zombie.isValid()) {
    system.clearRun(id);
    return;
  }
  const location = zombie.location;
  for (const player of world.getPlayers()) {
    player.sendMessage(
      `Zombie location: (${location.x.toFixed(2)}, ${location.y.toFixed(
        2
      )}, ${location.z.toFixed(2)})`
    );
  }
});
