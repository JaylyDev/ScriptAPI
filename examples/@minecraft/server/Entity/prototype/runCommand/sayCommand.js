import { world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe(event => {
  event.deadEntity.runCommand("say I am dead!");
})