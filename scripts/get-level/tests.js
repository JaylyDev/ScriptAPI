import { system, world } from "@minecraft/server";
import { getPlayerExperienceLevel } from "get-level";

system.runSchedule(() => {
  for (const player of world.getAllPlayers()) {
    player.tell(`Player level: ${getPlayerExperienceLevel(player)}`);
  }
});