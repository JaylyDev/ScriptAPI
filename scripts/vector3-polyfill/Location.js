import { Vector } from "./Vector";
/**
 * @beta
 * Contains a location description that is useful for entities
 * and other items. X, Y, and Z can contain decimal fractions.
 * For integer-based locations useful for blocks, see {@link
* BlockLocation}.
*/
export class Location {
    /**
     * @remarks
     * Creates a new instance of an abstract location.
     * @param x
     * X position of the location.
     * @param y
     * Y position of the location.
     * @param z
     * Z position of the location.
     */
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    ;
    /**
     * @remarks
     * Compares this Location and another Location to one another.
     * @param other
     * Other location to compare this Location to.
     * @returns
     * True if the two locations are equal.
     */
    equals(other) {
        if (this.x === other.x && this.y === other.y && this.z === other.z)
            return true;
        else
            return false;
    }
    ;
    /**
     * @remarks
     * Determines whether or not two Locations are considered to be
     * near each other.
     * @param other
     * Other Location to compare this Location to.
     * @param epsilon
     * Maximum distance that the Locations can be from each other
     * to be considered nearby.
     * @returns
     * True if the two Locations are within epsilon distance of
     * each other.
     */
    isNear(other, epsilon) {
        return Vector.distance(this, other) <= epsilon;
    }
    ;
}
