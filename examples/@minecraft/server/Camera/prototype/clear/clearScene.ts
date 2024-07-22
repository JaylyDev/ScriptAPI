import { Player } from "@minecraft/server";

// Scripting code for the `camera <player> clear` command.
function clearPlayerCamera(player: Player) {
  player.camera.clear();
}