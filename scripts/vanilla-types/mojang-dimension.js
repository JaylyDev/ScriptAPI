import { DimensionTypes, world } from "@minecraft/server";
/**
 * All possible MinecraftDimensionTypes
 */
export class MinecraftDimensionTypes {
    constructor() {
        throw new TypeError("Illegal constructor");
    }
    ;
    static get(typeName) {
        return world.getDimension(typeName);
    }
    ;
    static getAll() {
        return DimensionTypes.getAll().map(dimension => world.getDimension(dimension.typeId));
    }
    ;
}
MinecraftDimensionTypes.Nether = world.getDimension("minecraft:nether");
MinecraftDimensionTypes.Overworld = world.getDimension("minecraft:overworld");
MinecraftDimensionTypes.TheEnd = world.getDimension("minecraft:the_end");
