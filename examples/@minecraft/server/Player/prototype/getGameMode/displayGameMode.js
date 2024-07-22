import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  const gameMode = player.getGameMode();
  player.sendMessage(`Your game mode is ${gameMode}`);
}