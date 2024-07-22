import { world } from "@minecraft/server";
world.beforeEvents.playerLeave.subscribe(({ player }) => {
  world.sendMessage(`[${new Date().toISOString()}]` + player.name + "left the server");
});