import { BlockPermutation, world } from "@minecraft/server";

const entity = world.getDimension('overworld').spawnEntity('minecraft:fox', { x: 0, y: 0, z: 0 });
const blockHit = entity.getBlockFromViewDirection();

if (blockHit) {
  blockHit.block.setPermutation(BlockPermutation.resolve("minecraft:bedrock"));
} else {
  console.log("No block in view direction.");
}
