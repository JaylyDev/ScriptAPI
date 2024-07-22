import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  player.onScreenDisplay.setActionBar("Hello World");
}