import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  player.onScreenDisplay.setTitle("  "); // spaces needed
  player.onScreenDisplay.updateSubtitle("Insert Subtitle");
}