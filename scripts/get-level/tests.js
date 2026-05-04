import { system, world } from "@minecraft/server";
import { getPlayerExperienceLevel } from "../get-level/index.js";

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    player.sendMessage(`Player level: ${getPlayerExperienceLevel(player)}`);
  }
});