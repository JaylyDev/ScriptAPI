// Script examples for ScriptAPI
// Author: mrpatches123#0348 <Bedrock Scripting API>
import { Player, world } from "@minecraft/server";
const overworld = world.getDimension('overworld'), nether = world.getDimension('nether'), end = world.getDimension('the end');

try {
    overworld.runCommandAsync('scoreboard objectives add deaths dummy')
        .catch(error => console.warn(error));
} catch (error) { }
try {
    overworld.runCommandAsync('scoreboard objectives add kills dummy')
        .catch(error => console.warn(error));;
} catch (error) { }
world.events.entityHurt.subscribe(({ hurtEntity, damagingEntity }) => {
    if (hurtEntity.getComponent('health').current > 0) return;
    hurtEntity.runCommandAsync('scoreboard players add @s deaths 1');
    if (!(damagingEntity instanceof Player)) return;
    damagingEntity.runCommandAsync('scoreboard players add @s kills 1');
}, { entityTypes: ['minecraft:player'] });