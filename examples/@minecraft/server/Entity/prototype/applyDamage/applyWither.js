import { world, EntityDamageCause } from "@minecraft/server";
const player = world.getAllPlayers()[0];
player.applyDamage(1000, {
  cause: EntityDamageCause.wither,
});