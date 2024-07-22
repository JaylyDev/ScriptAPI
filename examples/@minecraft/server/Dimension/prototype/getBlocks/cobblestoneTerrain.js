import { BlockPermutation, BlockVolume, system, world } from "@minecraft/server";

// Get every non-air block location at chunk (0, 0)
const overworld = world.getDimension('overworld');
const volume = new BlockVolume({ x: 0, y: overworld.heightRange.min, z: 0 }, { x: 15, y: overworld.heightRange.max, z: 15 });
const locations = overworld.getBlocks(volume, { excludeTypes: ['minecraft:air'] }, false);

// A simple generator that replace non-air blocks to cobblestone at chunk (0, 0),
// yielding after each block placement.
function* blockPlacingGenerator() {
  for (const location of locations.getBlockLocationIterator()) {
    const block = overworld.getBlock(location);
    block.setPermutation(BlockPermutation.resolve('minecraft:cobblestone'));
    yield;
  }
}

system.runJob(blockPlacingGenerator());