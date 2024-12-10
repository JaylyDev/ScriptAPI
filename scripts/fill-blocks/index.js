// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { BlockVolume, ListBlockVolume } from "@minecraft/server";
import { Vector3Builder } from "@minecraft/math";
const MAX_BLOCKS_SINGLE_FILL = 32768;
/**
 * Fetch a `Iterable<BlockVolume>` that represents all of
 * 3D rectangle of a given size (in blocks) at a
 * world block location within the specified volume
 * @private
 */
function* getBlockVolumeIterator(volume, delta) {
    const box = volume.getBoundingBox();
    const blockVolume = new BlockVolume(box.min, box.max);
    const span = blockVolume.getSpan();
    for (let x = 0; x < span.x; x += delta) {
        for (let y = 0; y < span.y; y += delta) {
            for (let z = 0; z < span.z; z += delta) {
                const part = new BlockVolume({ x, y, z }, { x: x + delta - 1, y: y + delta - 1, z: z + delta - 1 });
                part.translate(blockVolume.from);
                part.to = new BlockVolume(part.to, blockVolume.to).getMin();
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
    const volume = new BlockVolume(begin, end);
    if (volume.getCapacity() <= MAX_BLOCKS_SINGLE_FILL) {
        return dimension.fillBlocks(volume, block, options);
    }
    ;
    let blockList = new ListBlockVolume([]);
    for (const blockVolume of getBlockVolumeIterator(volume, 32)) {
        try {
            const blocksFilled = dimension.fillBlocks(blockVolume, block, options);
            blockList.add(Array.from(blocksFilled.getBlockLocationIterator()));
        }
        catch (error) {
            // custom error message
            if (!(error instanceof Error))
                throw error;
            console.error(`${error.message} between ${new Vector3Builder(begin).toString()} and ${new Vector3Builder(end).toString()}`);
        }
    }
    return blockList;
}
;
