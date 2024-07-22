import { Player, EasingType, Vector3 } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free ease 1.0 in_cubic facing @e[type=wolf,c=1]` command.
function setCameraToFaceWolf(player: Player) {
  const wolf = player.dimension.getEntities({ type: 'minecraft:wolf', closest: 1 })[0];
  player.camera.setCamera('minecraft:free', {
    facingEntity: wolf,
    easeOptions: {
      easeTime: 1.0,
      easeType: EasingType.InCubic
    }
  });
}

// Scripting code for the `camera <player> set minecraft:free ease 1.0 in_out_back facing 1 2 3` command.
function setCameraToFacePos(player: Player) {
  const location: Vector3 = { x: 1, y: 2, z: 3 }; 
  player.camera.setCamera('minecraft:free', {
    facingLocation: location,
    easeOptions: {
      easeTime: 1.0,
      easeType: EasingType.InOutBack
    }
  });
}