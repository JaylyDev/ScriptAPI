// Script examples for ScriptAPI
// Author: Leaftail <Bedrock Scripting API>

import { Block, BoolBlockProperty, IntBlockProperty, StringBlockProperty } from "@minecraft/server";
/**
 * Returns the block data of a block.
 * @param block - Block to get data
 * @returns Data
 */
export function getBlockData(block: Block) {
    const allProperies = block.permutation.getAllProperties();
    const needProps = allProperies.filter((p) => "validValues" in p) as Array<
        StringBlockProperty | IntBlockProperty | BoolBlockProperty
    >;

    if (needProps.length < 1) return 0;


    const main = needProps.find((e) => typeof e.value === "string" || typeof e.value === "number") as
        | StringBlockProperty
        | IntBlockProperty;

    const bit = needProps.find((e) => typeof e.value === "boolean") as BoolBlockProperty;

    const data = main.getValidValues().findIndex((e: string | number): boolean => e === main.value);

    // Cannot find property...
    if (data === -1) return 0;
    if (bit?.value) return data + main.getValidValues().length;
    else return data;
}