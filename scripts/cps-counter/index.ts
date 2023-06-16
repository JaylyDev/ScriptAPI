// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world } from "@minecraft/server";

declare module "@minecraft/server" {
  interface ClickInfo { timestamp: number }
  interface Player {
    clicks?: ClickInfo[];
  }
};

world.afterEvents.entityHitBlock.subscribe(function ({ damagingEntity }) {
  if (damagingEntity instanceof Player) {
    damagingEntity.clicks ||= [];
    damagingEntity.clicks.push({ timestamp: Date.now() });
  }
});

world.afterEvents.entityHitEntity.subscribe(function ({ damagingEntity }) {
  if (damagingEntity instanceof Player) {
    damagingEntity.clicks ||= [];
    damagingEntity.clicks.push({ timestamp: Date.now() });
  }
});

/**
 * Get a player's clicks per second
 * @param player 
 * @returns
 */
export function getPlayerCPS(player: Player) {
  const currentTime = Date.now();
  player.clicks ||= [];
  const recentClicks = player.clicks.filter(({ timestamp }) => currentTime - 1000 < timestamp);
  player.clicks = recentClicks;

  return recentClicks.length;
}
