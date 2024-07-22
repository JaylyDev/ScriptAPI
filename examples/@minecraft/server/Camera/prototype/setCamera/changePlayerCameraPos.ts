import { Entity, Player, Vector2, Vector3, world } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:free pos 10 20 30 facing @e[type=wolf,c=1]` command.
function setCameraToFaceWolf(player: Player) {
  const wolf = player.dimension.getEntities({ type: 'minecraft:wolf', closest: 1 })[0];
  const wolfLocation: Vector3 = { x: 10, y: 20, z: 30 };
  player.camera.setCamera('minecraft:free', {
    facingEntity: wolf,
    location: wolfLocation
  });
}

// Scripting code for the `camera <player> set minecraft:free pos 10 20 30 facing 20 20 30` command.
function setCameraToFaceLocation(player: Player) {
  const location: Vector3 = { x: 10, y: 20, z: 30 };
  const facingLocation: Vector3 = { x: 20, y: 20, z: 30 };
  player.camera.setCamera('minecraft:free', {
    facingLocation: facingLocation,
    location: location
  });
}

// Scripting code for the `camera <player> set minecraft:free pos 10 20 30 rot 0 90` command.
function setCameraToFaceEast(player: Player) {
  const location: Vector3 = { x: 10, y: 20, z: 30 };
  const rotation: Vector2 = { x: 0, y: 90 };
  player.camera.setCamera('minecraft:free', {
    location: location,
    rotation: rotation
  });
}