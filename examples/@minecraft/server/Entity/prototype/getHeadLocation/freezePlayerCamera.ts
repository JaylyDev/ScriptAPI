import { Player } from "@minecraft/server";

function freezePlayerCamera(player: Player) {
  player.camera.setCamera('minecraft:free', {
    location: player.getHeadLocation(),
    rotation: player.getRotation(),
  })
}