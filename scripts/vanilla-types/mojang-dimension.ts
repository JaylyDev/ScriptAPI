import { Dimension, world, DimensionTypes } from "@minecraft/server";

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
    static get Nether() { return world.getDimension("minecraft:nether"); };
    static get Overworld() { return world.getDimension("minecraft:overworld"); };
    static get TheEnd() { return world.getDimension("minecraft:the_end"); };
}
/**
 * Union type equivalent of the MinecraftDimensionTypes enum.
 */
export type MinecraftDimensionTypesUnion = keyof typeof MinecraftDimensionTypes;
