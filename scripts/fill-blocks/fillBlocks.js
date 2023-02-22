// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

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
export function fillBlocks(dimension, begin, end, block, options) {
    begin = { x: Math.floor(begin.x), y: Math.floor(begin.y), z: Math.floor(begin.z) };
    end = { x: Math.floor(end.x), y: Math.floor(end.y), z: Math.floor(end.z) };
    const distance = {
        x: end.x - begin.x,
        y: end.y - begin.y,
        z: end.z - begin.z
    };
    if (distance.x * distance.y * distance.z > MAX_BLOCKS_SINGLE_FILL) {
        let blocksFilled = 0;
        for (let x = 0; x < distance.x; x += 32) {
            for (let y = 0; y < distance.y; y += 32) {
                for (let z = 0; z < distance.z; z += 32) {
                    const part_begin = {
                        x: x + begin.x,
                        y: y + begin.y,
                        z: z + begin.z
                    };
                    const part_end = {
                        x: x + 31 > distance.x ? end.x : x + 31 + begin.x,
                        y: y + 31 > distance.y ? end.y : y + 31 + begin.y,
                        z: z + 31 > distance.z ? end.z : z + 31 + begin.z,
                    };
                    // custom warning message
                    try {
                        blocksFilled += dimension.fillBlocks(part_begin, part_end, block, options);
                    }
                    catch (error) {
                        const fillBlocksError = 'Dimension.fillBlocks: Requested fill area';
                        if (typeof error !== 'string')
                            throw error;
                        if (!error.startsWith(fillBlocksError))
                            throw error;
                        // possible errors
                        // Dimension.fillBlocks: Requested fill area wasn't fully loaded. Cannot fill
                        // Dimension.fillBlocks: Requested fill area was outside the world bounds
                        console.warn(`${fillBlocksError} between ${Object.values(part_begin).join(', ')} and ${Object.values(part_end).join(', ')}` + error.substr(fillBlocksError.length));
                        ;
                    }
                }
            }
        }
        ;
        return blocksFilled;
    }
    else {
        // uses default fill blocks
        return dimension.fillBlocks(begin, end, block, options);
    }
    ;
}
;
