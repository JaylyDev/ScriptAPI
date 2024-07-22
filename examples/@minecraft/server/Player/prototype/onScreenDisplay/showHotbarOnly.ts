import { HudElement, world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  player.onScreenDisplay.hideAllExcept([ HudElement.Hotbar ]);
}