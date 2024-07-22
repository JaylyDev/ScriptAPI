import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  player.onScreenDisplay.setActionBar(`Level: ${player.level}, xp at current level: ${player.xpEarnedAtCurrentLevel} / ${player.totalXpNeededForNextLevel}`);
}