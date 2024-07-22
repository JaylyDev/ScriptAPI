import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((event) => {
  const message = event.message;
  const player = event.sender;
  if (message === "spawnpoint get") {
    event.cancel = true;
    const spawnPoint = player.getSpawnPoint();
    if (spawnPoint) {
      player.sendMessage(
        `Spawn point location: ${spawnPoint.x} ${spawnPoint.y} ${spawnPoint.z} at ${spawnPoint.dimension.id}`
      );
    } else {
      player.sendMessage(`No spawn point set.`);
    }
  }
});
