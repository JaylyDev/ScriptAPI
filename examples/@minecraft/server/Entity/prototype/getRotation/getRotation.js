import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((event) => {
  const message = event.message;
  const player = event.sender;
  if (message === "rotation get") {
    event.cancel = true;
    const rotation = player.getRotation();
    player.sendMessage(`Spawn point location: ${rotation.x} ${rotation.y}`);
  }
});
