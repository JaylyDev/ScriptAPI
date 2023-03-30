import { Vector3 } from "@minecraft/server";
/**
 * Contains a description of a vector.
 * @implements {Vector3}
 */
export declare class Vector {
    /**
     * X component of this vector.
     * @type {number}
     */
    x: number;
    /**
     * Y component of this vector.
     * @type {number}
     */
    y: number;
    /**
     * Z component of this vector.
     * @type {number}
     */
    z: number;
    /**
     * A constant vector that represents (0, 0, -1).
     * @readonly
     */
    static back: Vector;
    /**
     * A constant vector that represents (0, -1, 0).
     * @readonly
     */
    static down: Vector;
    /**
     * A constant vector that represents (0, 0, 1).
     * @readonly
     */
    static forward: Vector;
    /**
     * A constant vector that represents (-1, 0, 0).
     * @readonly
     */
    static left: Vector;
    /**
     * A constant vector that represents (1, 1, 1).
     * @readonly
     */
    static one: Vector;
    /**
     * A constant vector that represents (1, 0, 0).
     * @readonly
     */
    static right: Vector;
    /**
     * A constant vector that represents (0, 1, 0).
     * @readonly
     */
    static up: Vector;
    /**
     * A constant vector that represents (0, 0, 0).
     * @readonly
     */
    static zero: Vector;
    /**
     * @remarks
     * Creates a new instance of an abstract vector.
     * @param {number} x
     * X component of the vector.
     * @param {number} y
     * Y component of the vector.
     * @param {number} z
     * Z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     * @param {Vector} other
     * Other vector to compare this vector to.
     * @returns {boolean}
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
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
     * @returns {Vector}
     */
    normalized(): Vector;
    /**
     * @remarks
     * Returns the addition of these vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static add(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static cross(a: Vector3, b: Vector3): Vector;
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
     * @returns {Vector}
     */
    static divide(a: Vector3, b: Vector3 | number): Vector;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     * @param {Vector3} a
     * @param {Vector3} b
     * @param {number} t
     * @returns {Vector}
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static max(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static min(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     * @param {Vector3} a
     * @param {Vector3 | number} b
     * @returns {Vector}
     */
    static multiply(a: Vector3, b: Vector3 | number): Vector;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     * @param {Vector3} a
     * @param {Vector3} b
     * @param {number} s
     * @returns {Vector}
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static subtract(a: Vector3, b: Vector3): Vector;
}
