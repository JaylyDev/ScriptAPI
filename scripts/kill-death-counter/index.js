// Author: Jayly#1397 <Jayly Discord>
//         mrpatches123#0348 <Bedrock Scripting API>
// Project: https://github.com/JaylyDev/ScriptAPI

import { world, Player, EntityHealthComponent } from "@minecraft/server";

try {
  world.scoreboard.addObjective("deaths", "Deaths");
}
catch (e) {}
try {
  world.scoreboard.addObjective("kills", "Kills");
}
catch (e) {}
world.afterEvents.entityHurt.subscribe(
  ({ hurtEntity, damageSource }) => {
    /** @type {EntityHealthComponent} */
    // @ts-ignore
    const health = hurtEntity.getComponent("health");
    if (health.currentValue > 0) return;
    hurtEntity.runCommand("scoreboard players add @s deaths 1");
    if (!(damageSource.damagingEntity instanceof Player)) return;
    damageSource.damagingEntity.runCommand("scoreboard players add @s kills 1");
  },
  { entityTypes: ["minecraft:player"] }
);
