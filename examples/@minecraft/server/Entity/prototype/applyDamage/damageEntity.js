import { world } from "@minecraft/server";
world.afterEvents.itemUse.subscribe(event => {
  const player = event.source;
  const damageApplied = player.applyDamage(10);
  console.log(`Damage applied: ${damageApplied}`);
})
