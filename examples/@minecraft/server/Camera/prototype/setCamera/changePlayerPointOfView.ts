import { Player } from "@minecraft/server";

// Scripting code for the `camera <player> set minecraft:first_person` command.
function setFirstPerson(player: Player) {
  player.camera.setCamera('minecraft:first_person');
}

// Scripting code for the `camera <player> set minecraft:third_person` command.
function setThirdPerson(player: Player) {
  player.camera.setCamera('minecraft:third_person');
}

// Scripting code for the `camera <player> set minecraft:third_person_front` command.
function setThirdPersonFront(player: Player) {
  player.camera.setCamera('minecraft:third_person_front');
}
