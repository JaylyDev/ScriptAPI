/**
 * @beta
 * Holds information for expressing the net size of a volume of
 * blocks.
 */
export class BlockAreaSize {
    /**
     * @remarks
     * Creates a new BlockAreaSize object.
     * @param x
     * @param y
     * @param z
     */
    constructor(x, y, z) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.z = Math.floor(z);
    }
    /**
     * @remarks
     * Tests whether this block area size is equal to another
     * BlockAreaSize object.
     * @param other
     */
    equals(other) {
        if (this.x === other.x && this.y === other.y && this.z === other.z)
            return true;
        else
            return false;
    }
    ;
}
