// Script examples for ScriptAPI
// Author: Leaftail <Bedrock Scripting API>

import { Block, BoolBlockProperty, IntBlockProperty, StringBlockProperty } from "@minecraft/server";
/**
 * Returns the block data of a block.
 * @param {Block} block - Block to get data
 * @returns {number} Data
 */
export function getBlockData(block) {
    const allProperies = block.permutation.getAllProperties();
    const needProps = allProperies.filter((p) => "validValues" in p);
  
    if (needProps.length < 1) return 0;

    /** @type {StringBlockProperty | IntBlockProperty} */
    // @ts-expect-error
    const main = needProps.find((e) => typeof e.value === "string" || typeof e.value === "number");

    /** @type {BoolBlockProperty} */
    // @ts-expect-error
    const bit = needProps.find((e) => typeof e.value === "boolean");

    const data = main.validValues.findIndex((e) => e === main.value);

    // Cannot find property...
    if (data === -1) return 0;
    // Return finded
    if (bit?.value) return data + main.validValues.length;
    else return data;
}