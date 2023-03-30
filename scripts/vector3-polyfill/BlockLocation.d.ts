/**
 * @beta
 * Contains the integer X, Y, Z coordinates for a block. For
 * decimal locations useful for entities, items, and more, see
 * {@link Location}.
 */
export declare class BlockLocation {
    /**
     * The X coordinate.
     */
    x: number;
    /**
     * The integer-based Y position.
     */
    y: number;
    /**
     * The integer-based Z position.
     */
    z: number;
    /**
     * @remarks
     * Creates a new instance of an abstract block location.
     * @param x
     * X position of the block location. This number should be an
     * integer.
     * @param y
     * Y position of the block location. This number should be an
     * integer.
     * @param z
     * Z position of the block location. This number should be an
     * integer.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Returns a BlockLocation for a block above this BlockLocation
     * (that is, y + 1).
     */
    above(): BlockLocation;
    /**
     * @remarks
     * Returns an array of block locations representing all blocks
     * in the volume (cuboid) between this location and another
     * location.
     * @param other
     * Additional BlockLocation used to determine the set of
     * locations in between this location and another point.
     * @returns
     * Array of block locations representing the volume between
     * this location and another, inclusive of the start and end
     * points.
     */
    blocksBetween(other: BlockLocation): BlockLocation[];
    /**
     * @remarks
     * Compares this BlockLocation and another BlockLocation to one
     * another.
     * @param other
     * Other block location to compare this BlockLocation to.
     * @returns
     * True if the two block locations are equal.
     */
    equals(other: BlockLocation): boolean;
    /**
     * @remarks
     * Returns a block location using a position relative to this
     * block location
     * @param x
     * X offset relative to this BlockLocation.
     * @param y
     * Y offset relative to this BlockLocation.
     * @param z
     * Z offset relative to this BlockLocation.
     * @returns
     * BlockLocation that is positioned relative to this
     * BlockLocation.
     */
    offset(x: number, y: number, z: number): BlockLocation;
}
