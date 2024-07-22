import { world } from "@minecraft/server";
world.afterEvents.playerJoin.subscribe(({ playerId, playerName }) => {
  world.sendMessage(`Player ${playerName} (${playerId}) has just joined the world.`);
});