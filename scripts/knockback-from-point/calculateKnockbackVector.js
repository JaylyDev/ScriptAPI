/**
 * Calculates the magnitude of a Vector3.
 * @param {Vector3} entityPosition - The Vector3 input.
 * @returns {number} The magnitude of the vector.
 */
export function magnitude(vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
}

/**
 * Calculates the knockback vector based on an entity's position, a force source position, and the force magnitude.
 * @param {Vector3} entityPosition - The position of the entity as a Vector3.
 * @param {Vector3} forceSourcePosition - The position of the force source as a Vector3.
 * @param {Vector3} forceMagnitude - The magnitude of the force to be applied.
 * @returns {Vector3} The knockback vector as a Vector3.
 */
export function calculateKnockbackVector(entityPosition, pusherPosition, forceMagnitude) {
    let direction = {
        x: entityPosition.x - pusherPosition.x,
        y: entityPosition.y - pusherPosition.y,
        z: entityPosition.z - pusherPosition.z
    };
  
    let distance = magnitude(direction);
  
    // Normalize the direction vector so it has a magnitude of 1
    direction = {
        x: direction.x / distance,
        y: direction.y / distance,
        z: direction.z / distance
    };
  
    // Scale the direction vector by the force magnitude to get the final knockback vector
    let knockback = {
        x: direction.x * forceMagnitude,
        y: direction.y * forceMagnitude,
        z: direction.z * forceMagnitude
    };
  
    return knockback;
}