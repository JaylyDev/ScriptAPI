import { Player, EasingType, Vector3, Vector2 } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free ease 2.5 in_cubic rot 90 0` command.
function setCameraToFaceRot(player: Player) {
  const rotation: Vector2 = { x: 90, y: 0 };
  player.camera.setCamera('minecraft:free', {
    rotation: rotation,
    easeOptions: {
      easeTime: 2.5,
      easeType: EasingType.InCubic
    }
  });
}
