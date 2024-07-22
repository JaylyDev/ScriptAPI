import { world } from "@minecraft/server";



world.beforeEvents.chatSend.subscribe((event) => {
  const message = event.message;
  const player = event.sender;
  if (message === "location get") {
    event.cancel = true;
    player.sendMessage(`Your Location: ${player.location.x.toFixed(2)}, ${player.location.y.toFixed(2)}, ${player.location.z.toFixed(2)}`)
  }
});
