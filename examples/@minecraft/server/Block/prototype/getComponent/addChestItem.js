import { BlockPermutation, ItemStack, world } from "@minecraft/server";

// Chest Block at (0, 0, 0)
const block = world.getDimension('overworld').getBlock({ x: 0, y: 0, z: 0 });
block.setPermutation(BlockPermutation.resolve('minecraft:chest'));

const inventory = block.getComponent("inventory").container;
inventory.addItem(new ItemStack("minecraft:cobblestone", 64));
