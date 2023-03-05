import { Vector3 } from "@minecraft/server";
/**
 * @typedef {[number, number, number]} Vector3Array
 */
type Vector3Array = [number, number, number]
/**
 * Contains a description of a vector.
 * @implements {Vector3}
 */
export class Vector {
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
    static back = new this(0, 0, -1);
    /**
     * A constant vector that represents (0, -1, 0).
     * @readonly
     */
    static down = new this(0, -1, 0);
    /**
     * A constant vector that represents (0, 0, 1).
     * @readonly
     */
    static forward = new this(0, 0, 1);
    /**
     * A constant vector that represents (-1, 0, 0).
     * @readonly
     */
    static left = new this(-1, 0, 0);
    /**
     * A constant vector that represents (1, 1, 1).
     * @readonly
     */
    static one = new this(1, 1, 1);
    /**
     * A constant vector that represents (1, 0, 0).
     * @readonly
     */
    static right = new this(1, 0, 0);
    /**
     * A constant vector that represents (0, 1, 0).
     * @readonly
     */
    static up = new this(0, 1, 0);
    /**
     * A constant vector that represents (0, 0, 0).
     * @readonly
     */
    static zero = new this(0, 0, 0);
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
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     * @param {Vector} other
     * Other vector to compare this vector to.
     * @returns {boolean}
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean {
        if (this.x === other.x && this.y === other.y && this.z === other.z)
            return true;
        else return false;
    }
    /**
     * @remarks
     * Retur
     * @returns {number}ns the length of this vector.
     */
    length(): number {
        return Math.hypot(this.x, this.y, this.z);
    }
    /**
     * @remarks
     * Returns the
     * @returns {number}squared length of this vector.
     */
    lengthSquared(): number {
        return this.x ** 2 + this.y ** 2 + this.z ** 2;
    }
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     * @returns {Vector}
     */
    normalized(): Vector {
        const magnitude = this.length();
        const DirectionX = this.x / magnitude;
        const DirectionY = this.y / magnitude;
        const DirectionZ = this.z / magnitude;
        return new Vector(DirectionX, DirectionY, DirectionZ);
    }
    /**
     * @remarks
     * Returns the addition of these vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static add(a: Vector3, b: Vector3): Vector {
        const vector = new Vector(a.x, a.y, a.z);
        vector.x += b.x;
        vector.y += b.y;
        vector.z += b.z;
        return vector;
    }
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static cross(a: Vector3, b: Vector3): Vector {
        return new Vector(
            a.y * b.z - a.z * b.y,
            a.z * b.x - a.x * b.z,
            a.x * b.y - a.y * b.x
        );
    }
    /**
     * @remarks
     * Returns the distance between two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {number}
     */
    static distance(a: Vector3, b: Vector3): number {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dz = b.z - a.z;
        const distance = Math.hypot(dx, dy, dz);

        return distance;
    }
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     * @param {Vector3} a
     * @param {Vector3 | number} b
     * @returns {Vector}
     */
    static divide(a: Vector3, b: Vector3 | number): Vector {
        const vector = new Vector(a.x, a.y, a.z);

        if (typeof b === "number") {
            vector.x /= b;
            vector.y /= b;
            vector.z /= b;
        } else {
            vector.x /= b.x;
            vector.y /= b.y;
            vector.z /= b.z;
        }

        return vector;
    }
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     * @param {Vector3} a
     * @param {Vector3} b
     * @param {number} t
     * @returns {Vector}
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector {
        const dest = new Vector(a.x, a.y, a.z);
        dest.x += (b.x - a.x) * t;
        dest.y += (b.y - a.y) * t;
        dest.z += (b.z - a.z) * t;
        return dest;
    }
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static max(a: Vector3, b: Vector3): Vector {
        const vectors = [a, b];
        const arr = vectors.map(({ x, y, z }) => new Vector(x, y, z).length());
        const max = Math.max(...arr);
        const index = arr.indexOf(max);
        const vector3 = vectors[index];

        return new Vector(vector3.x, vector3.y, vector3.z);
    }
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static min(a: Vector3, b: Vector3): Vector {
        const vectors = [a, b];
        const arr = vectors.map(({ x, y, z }) => new Vector(x, y, z).length());
        const min = Math.min(...arr);
        const index = arr.indexOf(min);
        const vector3 = vectors[index];

        return new Vector(vector3.x, vector3.y, vector3.z);
    }
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     * @param {Vector3} a
     * @param {Vector3 | number} b
     * @returns {Vector}
     */
    static multiply(a: Vector3, b: Vector3 | number): Vector {
        const vector = new Vector(a.x, a.y, a.z);

        if (typeof b === "number") {
            vector.x *= b;
            vector.y *= b;
            vector.z *= b;
        } else {
            vector.x *= b.x;
            vector.y *= b.y;
            vector.z *= b.z;
        }

        return vector;
    }
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     * @param {Vector3} a
     * @param {Vector3} b
     * @param {number} s
     * @returns {Vector}
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector {
        /**
         * @param {Vector3Array} a
         * @param {Vector3Array} b
         * @returns {number}
         */
        function MathDot(a: Vector3Array, b: Vector3Array): number {
            return a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
        }

        const θ = Math.acos(MathDot([a.x, a.y, a.z], [b.x, b.y, b.z]));
        const factor1 = Math.sin(θ * (1 - s)) / Math.sin(θ);
        const factor2 = Math.sin(θ * s) / Math.sin(θ);

        return new Vector(
            a.x * factor1 + b.x * factor2,
            a.y * factor1 + b.y * factor2,
            a.z * factor1 + b.z * factor2
        );
    }
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     * @param {Vector3} a
     * @param {Vector3} b
     * @returns {Vector}
     */
    static subtract(a: Vector3, b: Vector3): Vector {
        const vector = new Vector(a.x, a.y, a.z);
        vector.x -= b.x;
        vector.y -= b.y;
        vector.z -= b.z;
        return vector;
    }
}
