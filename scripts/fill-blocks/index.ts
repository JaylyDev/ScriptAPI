// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { BlockFillOptions, BlockPermutation, BlockType, Dimension, Vector3, BlockVolumeUtils } from "@minecraft/server";

const MAX_BLOCKS_SINGLE_FILL = 32768;

/**
 * Fills an area between begin and end with block of type block, with no fill limit of 32768.
 * @param dimension Dimension to fill blocks in.
 * @param begin The lower northwest starting corner of the area.
 * @param end The upper southeast ending corner of the area.
 * @param block Type of block to fill the volume with.
 * @param options A set of additional options, such as a matching block to potentially replace this fill block with.
 * @returns Number of blocks filled
 * @example fillBlocks.js
 * ```js
 * fillBlocks(world.getDimension("overworld"), { x, y, z }, { x: x + 10000, y: y + 10, z: z + 100 }, MinecraftBlockTypes.stone);
 * ```
 */
export function fillBlocks(dimension: Dimension, begin: Vector3, end: Vector3, block: BlockPermutation | BlockType, options?: BlockFillOptions): number {
  // Check if block volume is greater than 32768, if not return native fillblocks
  if (BlockVolumeUtils.getCapacity({ from: begin, to: end }) <= MAX_BLOCKS_SINGLE_FILL) {
    return dimension.fillBlocks(begin, end, block, options);
  };

  let blocksFilled = 0;
  for (const blockLocation of BlockVolumeUtils.getBlockLocationIterator({ from: begin, to: end })) {
    const oldBlock = dimension.getBlock(blockLocation);

    if (!oldBlock) throw new Error("Dimension.fillBlocks: Requested fill area wasn't fully loaded. Cannot fill");
    if (!!options?.matchingBlock && options.matchingBlock !== oldBlock.permutation) continue;

    if (block instanceof BlockPermutation) oldBlock.setPermutation(block);
    else if (block instanceof BlockType) oldBlock.setType(block);
    else throw new Error("Dimension.fillBlocks: Invalid block type");

    blocksFilled++;
  };
  return blocksFilled;
};
