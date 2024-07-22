import { system, world } from "@minecraft/server";

system.runInterval(() => {
  for (const entity of world.getDimension('overworld').getEntities()) {
    // Force entity to not sneak
    entity.isSneaking = false;
  }
})