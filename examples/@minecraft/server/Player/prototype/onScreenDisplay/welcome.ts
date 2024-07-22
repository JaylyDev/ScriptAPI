import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  player.onScreenDisplay.setTitle("Hello World");
  player.onScreenDisplay.updateSubtitle("Welcome to the server!");
}