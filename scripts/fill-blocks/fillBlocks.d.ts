// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { BlockFillOptions, BlockPermutation, BlockType, Dimension, Vector3 } from "@minecraft/server";
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
export declare function fillBlocks(dimension: Dimension, begin: Vector3, end: Vector3, block: BlockPermutation | BlockType, options?: BlockFillOptions): number;
