// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { BlockVolumeUtils } from "@minecraft/server";
const MAX_BLOCKS_SINGLE_FILL = 32768;
/**
 * Fetch a `Iterable<BlockVolume>` that represents all of
 * 3D rectangle of a given size (in blocks) at a
 * world block location within the specified volume
 * @private
 */
function* getBlockVolumeIterator(volume, delta) {
    const box = BlockVolumeUtils.getBoundingBox(volume);
    const blockVolume = { from: box.min, to: box.max };
    const span = BlockVolumeUtils.getSpan(blockVolume);
    for (let x = 0; x < span.x; x += delta) {
        for (let y = 0; y < span.y; y += delta) {
            for (let z = 0; z < span.z; z += delta) {
                const part = BlockVolumeUtils.translate({
                    from: { x, y, z },
                    to: { x: x + delta - 1, y: y + delta - 1, z: z + delta - 1 }
                }, blockVolume.from);
                part.to = BlockVolumeUtils.getMin({ from: part.to, to: blockVolume.to });
                yield part;
            }
        }
    }
    ;
}
;
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
export function fillBlocks(dimension, begin, end, block, options) {
    // Check if block volume is greater than 32768, if not return native fillblocks
    const volume = { from: begin, to: end };
    if (BlockVolumeUtils.getCapacity(volume) <= MAX_BLOCKS_SINGLE_FILL) {
        return dimension.fillBlocks(begin, end, block, options);
    }
    ;
    let blocksFilled = 0;
    for (const { from, to } of getBlockVolumeIterator(volume, 32)) {
        try {
            blocksFilled += dimension.fillBlocks(from, to, block, options);
        }
        catch (error) {
            // custom error message
            if (!(error instanceof Error))
                throw error;
            console.error(`${error.message} between ${Object.values(from).join(', ')} and ${Object.values(to).join(', ')}`);
        }
    }
    return blocksFilled;
}
;
