// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/GametestDB/
/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import { Player, MinecraftEntityTypes, MinecraftEffectTypes } from "@minecraft/server";
import { Commands } from "../commands/index.js";
import { clearInterval, setInterval } from "../timers/timers.js";
function trunc(x, decimal) {
    let y = 10 ** decimal;
    return Math.trunc(x * y) / y;
}
;
/**
 * @remarks
 * Sets a velocity for the entity to move with.
 * Fixes GameTest native player.setVelocity
 * @param {Vector3} velocity
 * @param {Player} player
 * @throws This function can throw errors.
*/
export function setVelocity(velocity, player) {
    if (!(player instanceof Player))
        throw TypeError("Native type conversion failed.");
    const entity = player.dimension.spawnEntity(MinecraftEntityTypes.minecart.id, player.location);
    entity.triggerEvent('minecraft:ageable_grow_up'); // Make them adult
    entity.triggerEvent('minecraft:on_saddled'); // Add saddle to pig
    let health = entity.getComponent('health');
    let movement = entity.getComponent('movement');
    let rideable = entity.getComponent('rideable');
    entity.addEffect(MinecraftEffectTypes.invisibility, 0x7fff, 255, false); // makes the entity invisible
    entity.addEffect(MinecraftEffectTypes.resistance, 0x7fff, 255, false); // makes the entity invisible
    entity.applyImpulse(velocity);
    let onInterval = setInterval((isEntityMoving) => {
        try {
            const { x, y, z } = isEntityMoving.getVelocity();
            if (trunc(x, 2) === 0 && trunc(y, 1) === 0 && trunc(z, 2) === 0) {
                clearInterval(onInterval); // clear timer
                rideable?.ejectRider(player); // eject rider
                // teleport entity to void to avoid mob loot drops
                let { location } = entity;
                entity.teleport({ x: location.x, y: -100, z: location.z }, entity.dimension, 0, 0);
                entity.kill();
            }
            else {
                // Force the player to ride the entity until the entity lands
                Commands.runAsync(`ride "${player.name}" start_riding @s teleport_rider`, entity);
                movement?.setCurrent(0);
                health?.resetToMaxValue();
            }
            ;
        }
        catch (error) {
            console.error(error);
        }
    }, 10, entity);
}
;
