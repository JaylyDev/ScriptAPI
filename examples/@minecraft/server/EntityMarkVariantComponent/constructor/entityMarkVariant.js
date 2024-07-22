import { world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe(({ entity }) => {
  const markVariant = entity.getComponent("mark_variant");
  markVariant.value;
  markVariant.isValid();
});
