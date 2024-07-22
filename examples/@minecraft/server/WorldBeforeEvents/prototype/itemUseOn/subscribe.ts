import { world, Player, BlockPermutation } from "@minecraft/server";

// Subscribe to the itemUseOn event before it happens
world.beforeEvents.itemUseOn.subscribe((event) => {
  const { source, block, itemStack } = event;
  if (!(source instanceof Player)) return;

  source.sendMessage("You used " + itemStack.typeId + " on " + block.typeId);

  // If the item is a diamond, set the block to be a diamond block
  if (itemStack.typeId === "minecraft:diamond") {
    block.setPermutation(BlockPermutation.resolve("minecraft:diamond_block"));
  }
});