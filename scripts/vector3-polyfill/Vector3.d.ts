import { Vector3 as IVec3 } from "@minecraft/server";
/**
 * Wrapper class of Vector3
 */
export declare class Vector3 implements IVec3 {
    /**
     * The X coordinate.
     */
    x: number;
    /**
     * The Y coordinate.
     */
    y: number;
    /**
     * The Z coordinate.
     */
    z: number;
    /**
     * @remarks
     * Creates a new instance of a vector.
     * @param x
     * X coordinate.
     * @param y
     * Y coordinate.
     * @param z
     * Z coordinate.
     */
    constructor(x: number, y: number, z: number);
    /**
     * A constant vector that represents (0, 0, -1).
     * @readonly
     */
    static back: Vector3;
    /**
     * A constant vector that represents (0, -1, 0).
     * @readonly
     */
    static down: Vector3;
    /**
     * A constant vector that represents (0, 0, 1).
     * @readonly
     */
    static forward: Vector3;
    /**
     * A constant vector that represents (-1, 0, 0).
     * @readonly
     */
    static left: Vector3;
    /**
     * A constant vector that represents (1, 1, 1).
     * @readonly
     */
    static one: Vector3;
    /**
     * A constant vector that represents (1, 0, 0).
     * @readonly
     */
    static right: Vector3;
    /**
     * A constant vector that represents (0, 1, 0).
     * @readonly
     */
    static up: Vector3;
    /**
     * A constant vector that represents (0, 0, 0).
     * @readonly
     */
    static zero: Vector3;
    /**
     * @remarks
     * Retur
     * @returns {number}ns the length of this vector.
     */
    length(): number;
    /**
     * @remarks
     * Returns the
     * @returns {number}squared length of this vector.
     */
    lengthSquared(): number;
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     * @returns {Vector3}
     */
    normalized(): Vector3;
    /**
     * @remarks
     * Returns the addition of these vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector3}
     */
    static add(a: Vector3, b: Vector3): Vector3;
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector3}
     */
    static cross(a: Vector3, b: Vector3): Vector3;
    /**
     * @remarks
     * Returns the distance between two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {number}
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     * @param {Vector3} a
     * @param {Vector3 | number} b
     * @returns {Vector3}
     */
    static divide(a: Vector3, b: Vector3 | number): Vector3;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     * @param {Vector3} a
     * @param {Vector3} b
     * @param {number} t
     * @returns {Vector3}
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector3;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector3}
     */
    static max(a: Vector3, b: Vector3): Vector3;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector3}
     */
    static min(a: Vector3, b: Vector3): Vector3;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     * @param {Vector3} a
     * @param {Vector3 | number} b
     * @returns {Vector3}
     */
    static multiply(a: Vector3, b: Vector3 | number): Vector3;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     * @param {Vector3} a
     * @param {Vector3} b
     * @param {number} s
     * @returns {Vector3}
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector3;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector3}
     */
    static subtract(a: Vector3, b: Vector3): Vector3;
    /**
     * Returns a Vector3 with its coordinate floored
     */
    floor(): Vector3;
    /**
     * @remarks
     * Returns a Vector3 for a block above this Vector3
     * (that is, y + 1).
     */
    above(): Vector3;
    /**
     * @remarks
     * Returns an array of Vector3 representing all coordinates
     * in the volume (cuboid) between this location and another
     * location.
     * @param other
     * Additional Vector3 used to determine the set of
     * locations in between this location and another point.
     * @returns
     * Array of Vector3 representing the volume between
     * this location and another, inclusive of the start and end
     * points.
     */
    between(other: Vector3): Vector3[];
    /**
     * @remarks
     * Compares this Vector3 and another Vector3 to one
     * another.
     * @param other
     * Other Vector3 to compare this Vector3 to.
     * @returns
     * True if the two Vector3 are equal.
     */
    equals(other: Vector3): boolean;
    /**
     * @remarks
     * Returns a Vector3 using a position relative to this
     * Vector3
     * @param x
     * X offset relative to this Vector3.
     * @param y
     * Y offset relative to this Vector3.
     * @param z
     * Z offset relative to this Vector3.
     * @returns
     * Vector3 that is positioned relative to this
     * Vector3.
     */
    offset(x: number, y: number, z: number): Vector3;
    /**
     * @remarks
     * Determines whether or not two Locations are considered to be
     * near each other.
     * @param other
     * Other Vector3 to compare this Vector3 to.
     * @param epsilon
     * Maximum distance that the Locations can be from each other
     * to be considered nearby.
     * @returns
     * True if the two Locations are within epsilon distance of
     * each other.
     */
    isNear(other: Vector3, epsilon: number): boolean;
}
