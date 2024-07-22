import { Player, EasingType, Vector3, Vector2 } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free ease 1.0 in_cubic pos 10 20 30 facing @e[type=wolf,c=1]` command.
function setCameraToFaceWolfAtPos(player: Player) {
  const location: Vector3 = { x: 10, y: 20, z: 30 };
  const wolf = player.dimension.getEntities({ type: 'minecraft:wolf', closest: 1 })[0];
  player.camera.setCamera('minecraft:free', {
    location: location,
    facingEntity: wolf,
    easeOptions: {
      easeTime: 1.0,
      easeType: EasingType.InCubic
    }
  });
}

// Scripting code for the `camera <player> set minecraft:free ease 2.5 in_cubic pos 10 20 30 facing 1 2 3` command.
function setCameraToFaceLocationAtPos(player: Player) {
  const location: Vector3 = { x: 10, y: 20, z: 30 };
  const facingLocation: Vector3 = { x: 1, y: 2, z: 3 };
  player.camera.setCamera('minecraft:free', {
    location: location,
    facingLocation: facingLocation,
    easeOptions: {
      easeTime: 2.5,
      easeType: EasingType.InCubic
    }
  });
}

// Scripting code for the `camera <player> set minecraft:free ease 2.5 in_cubic pos 10 20 30 rot 90 0` command.
function setCameraToFaceRotAtPos(player: Player) {
  const location: Vector3 = { x: 10, y: 20, z: 30 };
  const rotation: Vector2 = { x: 90, y: 0 };
  player.camera.setCamera('minecraft:free', {
    location: location,
    rotation: rotation,
    easeOptions: {
      easeTime: 2.5,
      easeType: EasingType.InCubic
    }
  });
}
