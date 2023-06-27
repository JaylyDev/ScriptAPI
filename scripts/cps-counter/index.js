// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world } from "@minecraft/server";
;
// Using map because typescript doesn't support prototype property declaration properly
const clicks = new Map();
world.afterEvents.entityHitBlock.subscribe(function ({ damagingEntity }) {
    if (!(damagingEntity instanceof Player))
        return;
    const clickInfo = { timestamp: Date.now() };
    const playerClicks = clicks.get(damagingEntity) || [];
    playerClicks.push(clickInfo);
    clicks.set(damagingEntity, playerClicks);
});
world.afterEvents.entityHitEntity.subscribe(function ({ damagingEntity }) {
    if (!(damagingEntity instanceof Player))
        return;
    const clickInfo = { timestamp: Date.now() };
    const playerClicks = clicks.get(damagingEntity) || [];
    playerClicks.push(clickInfo);
    clicks.set(damagingEntity, playerClicks);
});
/**
 * Get a player's clicks per second
 * @param player
 * @returns
 */
export function getPlayerCPS(player) {
    const currentTime = Date.now();
    const playerClicks = clicks.get(player) || [];
    const recentClicks = playerClicks.filter(({ timestamp }) => currentTime - 1000 < timestamp);
    clicks.set(player, recentClicks);
    return recentClicks.length;
}
;
