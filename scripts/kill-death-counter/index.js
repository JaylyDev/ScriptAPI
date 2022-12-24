// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
//         mrpatches123#0348 <<Bedrock Scripting API>>
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
    if (hurtEntity.getComponent("health").current > 0) return;
    hurtEntity.runCommandAsync("scoreboard players add @s deaths 1");
    if (!(damagingEntity instanceof Player)) return;
    damagingEntity.runCommandAsync("scoreboard players add @s kills 1");
  },
  { entityTypes: ["minecraft:player"] }
);
