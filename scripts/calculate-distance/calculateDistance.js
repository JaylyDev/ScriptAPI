import("@minecraft/server").Vector3
import("@minecraft/server").Player

/**
 * Calculates the magnitude of a Vector3.
 * @param {Vector3} vector - The Vector3 input.
 * @returns {number} The magnitude of the vector.
 */
export function magnitude(vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
}

/**
 * Calculates the distance between an position and another position.
 * @param {Vector3} posA - The position of first point.
 * @param {Vector3} posB - The position of second point.
 * @returns {Vector3} The distance between the two points.
 */
export function calculateDistance(posA, posB) {
    let direction = {
        x: posA.x - posB.x,
        y: posA.y - posB.y,
        z: posA.z - posB.z
    };
    return magnitude(direction);
}