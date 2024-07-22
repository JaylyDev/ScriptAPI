import { GameMode, world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  player.setGameMode(GameMode.creative);
}