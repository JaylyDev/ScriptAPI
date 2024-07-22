import { world, system, BlockPermutation } from "@minecraft/server";

// bridge egg
world.afterEvents.entitySpawn.subscribe(({ entity }) => {
    if (entity.typeId === "minecraft:egg") {
      const id = system.runInterval(() => {
        const block = entity.dimension.getBlock(entity.location).below();
        if (block.isAir) block.setPermutation(BlockPermutation.resolve("minecraft:wool"));
        else system.clearRun(id);
      });
    }
});