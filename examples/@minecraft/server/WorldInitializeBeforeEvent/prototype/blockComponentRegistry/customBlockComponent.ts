import { world, BlockPermutation } from "@minecraft/server";
world.beforeEvents.worldInitialize.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent("jayly:custom_block", {
    onStepOn(data) {
      data.block.setPermutation(BlockPermutation.resolve("minecraft:emerald_block"));
    },
  });
});
