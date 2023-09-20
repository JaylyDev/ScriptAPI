import { world, DimensionTypes } from "@minecraft/server";
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
    static get Nether() { return world.getDimension("minecraft:nether"); }
    ;
    static get Overworld() { return world.getDimension("minecraft:overworld"); }
    ;
    static get TheEnd() { return world.getDimension("minecraft:the_end"); }
    ;
}
