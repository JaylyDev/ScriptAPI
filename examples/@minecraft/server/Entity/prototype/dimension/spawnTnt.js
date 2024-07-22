import { ItemStack, world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
  entity.dimension.spawnItem(
    new ItemStack("minecraft:diamond_sword"),
    entity.location
  );
}
