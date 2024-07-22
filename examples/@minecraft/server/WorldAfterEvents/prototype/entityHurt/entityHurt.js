import { Player, world } from "@minecraft/server";
world.afterEvents.entityHurt.subscribe((event) => {
  if (event.hurtEntity instanceof Player) {
    event.hurtEntity.sendMessage("You were hurt from " + event.damageSource.cause + "!");
  }
});