import { Entity, Player, Vector3, world } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free facing @e[type=wolf,c=1]` command.
function setCameraToFaceWolf(player: Player) {
  const wolf = player.dimension.getEntities({ type: 'minecraft:wolf', closest: 1 })[0];
  player.camera.setCamera('minecraft:free', {
    facingEntity: wolf,
  });
}

// Scripting code for the `camera <player> set minecraft:free facing @e[type=wolf,c=1]` command.
function setCameraToFaceLocation(player: Player) {
  const location: Vector3 = { x: 10, y: 20, z: 30 };
  player.camera.setCamera('minecraft:free', {
    facingLocation: location
  });
}