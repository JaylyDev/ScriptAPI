// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { MinecraftEntityTypes, world, Player } from "@minecraft/server";

world.afterEvents.entityHit.subscribe(function ({ entity }) {
  entity.typeId === MinecraftEntityTypes.player.id &&
    (entity["clicks"] || (entity["clicks"] = []),
      entity["clicks"].push({ timestamp: new Date().getTime() }));
});

/**
 * Get a player's clicks per second
 * @param {Player} player 
 * @returns {number}
 */
export function getPlayerCPS (player) {
  const e = new Date().getTime();
  player["clicks"] || (player["clicks"] = []);
  const t = player["clicks"].filter(({ timestamp: t }) => e - 1e3 < t);
  (player["clicks"] = t);

  return t.length;
}