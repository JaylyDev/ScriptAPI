// Script example for ScriptAPI
// Author: Mojang's Editor Team <https://github.com/Mojang>
// Project: https://github.com/DarkGamerYT/Bedrock-Editor-Extension
import { VECTOR3_BACK, VECTOR3_DOWN, VECTOR3_FORWARD, VECTOR3_LEFT, VECTOR3_RIGHT, VECTOR3_UP } from '@minecraft/math';


/**
 * Direction
 * @beta
 * @remarks
 * Direction maps to C++ Direction::FacingID
 */
var Direction = {
    Forward: "Forward",
    Right: "Right",
    Back: "Back",
    Left: "Left",
    Up: "Up",
    Down: "Down",
};
/**
 * directionLookup
 * @private
 * @remarks
 * Unit direction vectors representing enum Direction
 * Yes, I know Left/Right are reversed here -- that's because something is wrong, and I haven't been able to track
 * it down.  I blame Tom's dodgy code, tbh.
 */
const directionLookup = {
    [Direction.Forward]: VECTOR3_FORWARD,
    [Direction.Right]: VECTOR3_RIGHT,
    [Direction.Back]: VECTOR3_BACK,
    [Direction.Left]: VECTOR3_LEFT,
    [Direction.Up]: VECTOR3_UP,
    [Direction.Down]: VECTOR3_DOWN,
};
/**
 * getRotationCorrectedDirection
 * @beta
 * @remarks
 * Convert a given absolute Direction enum to one which is relative to the specified Y rotation
 *  (Generally Player view vector Y component)
 */
function getRotationCorrectedDirection(rotationY, realDirection) {
    if (realDirection === Direction.Up || realDirection === Direction.Down) {
        // Up and Down are ALWAY up and down
        return realDirection;
    }
    // 405 is the amount to do a full circle to remove negative rotations
    // Plus 45Â° to put the end of the first quadrant at 45 degrees.
    // Modulo to lock to [0, 360], then divide to convert to [0, 1, 2, 3] indices
    const directionQuadrant = Math.floor(((rotationY + 405 + realDirection * 90) % 360) / 90);
    return directionQuadrant;
}
/**
 * getRotationCorrectedDirectionVector
 * @beta
 * @remarks
 * Convert a given absolute Direction enum to a direction vector which is relative to the Y rotation
 *  (Generally Player view vector Y component)
 */
function getRotationCorrectedDirectionVector(rotationY, realDirection) {
    const relativeDirection = getRotationCorrectedDirection(rotationY, realDirection);
    return directionLookup[relativeDirection];
}
/**
 * getDirectionVector
 * @beta
 * @remarks
 * Return a unit vector for a given Direction
 */
function getDirectionVector(direction) {
    return directionLookup[direction];
}
/**
 * getScaledDirectionVector
 * @beta
 * @remarks
 * Return a scaled vector for a given Direction
 */
function getScaledDirectionVector(direction, scale) {
    const vec = getDirectionVector(direction);
    vec.x = vec.x * scale;
    vec.y = vec.y * scale;
    vec.z = vec.z * scale;
    return vec;
}

export {
    Direction,
    getDirectionVector,
    getRotationCorrectedDirection,
    getRotationCorrectedDirectionVector,
    getScaledDirectionVector
}