import { world } from "@minecraft/server";
world.afterEvents.playerLeave.subscribe(({ playerId, playerName }) => {
  world.sendMessage(`Player ${playerName} (${playerId}) has just left the world.`);
});