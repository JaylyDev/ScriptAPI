// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
import { system, world } from "@minecraft/server";
import isMoving from "is-moving";

system.runSchedule(() => {
  for (const player of world.getPlayers()) {
    if (!isMoving(player)) {
      player.kill();
      world.say(`${player.name} stopped moving!`);
    }
  }
});