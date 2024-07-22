import { Entity, Player, Vector2, Vector3, world } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free rot 0 90` command.
function setCameraToFaceEast(player: Player) {
  const rotation: Vector2 = { x: 0, y: 90 };
  player.camera.setCamera('minecraft:free', {
    rotation: rotation
  });
}