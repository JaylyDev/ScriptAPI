// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
//         mrpatches123#0348 <<<Bedrock Scripting API>>>
import { world, Player, EntityHealthComponent } from "@minecraft/server";

const overworld = world.getDimension("overworld"),
  nether = world.getDimension("nether"),
  end = world.getDimension("the end");

overworld
  .runCommandAsync("scoreboard objectives add deaths dummy")
  .catch((error) => console.warn(error));
overworld
  .runCommandAsync("scoreboard objectives add kills dummy")
  .catch((error) => console.warn(error));
world.events.entityHurt.subscribe(
  ({ hurtEntity, damagingEntity }) => {
    /** @type {EntityHealthComponent} */
    // @ts-ignore
    const health = hurtEntity.getComponent("health");
    if (health.current > 0) return;
    hurtEntity.runCommandAsync("scoreboard players add @s deaths 1");
    if (!(damagingEntity instanceof Player)) return;
    damagingEntity.runCommandAsync("scoreboard players add @s kills 1");
  },
  { entityTypes: ["minecraft:player"] }
);
