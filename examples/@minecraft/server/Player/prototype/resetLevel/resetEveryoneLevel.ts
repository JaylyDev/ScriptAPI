import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  player.resetLevel();
}