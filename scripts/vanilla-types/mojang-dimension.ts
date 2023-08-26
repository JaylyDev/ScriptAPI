import { Dimension, DimensionTypes, world } from "@minecraft/server";

/**
 * All possible MinecraftDimensionTypes
 */
export class MinecraftDimensionTypes {
    private constructor() {
        throw new TypeError("Illegal constructor");
    };
    static get(typeName: string): Dimension | undefined {
        return world.getDimension(typeName);
    };
    static getAll(): Dimension[] {
        return DimensionTypes.getAll().map(dimension => world.getDimension(dimension.typeId));
    };
    static readonly Nether = world.getDimension("minecraft:nether");
    static readonly Overworld = world.getDimension("minecraft:overworld");
    static readonly TheEnd = world.getDimension("minecraft:the_end");
}
