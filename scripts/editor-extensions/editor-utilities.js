import * as _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ from '@minecraft/server'

/**
 * Direction
 * @beta
 * @remarks
 * Direction maps to C++ Direction::FacingID
 */
var Direction;
(function (Direction) {
    Direction[Direction["Forward"] = 0] = "Forward";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Back"] = 2] = "Back";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Up"] = 4] = "Up";
    Direction[Direction["Down"] = 5] = "Down";
})(Direction || (Direction = {}));
/**
 * directionLookup
 * @private
 * @remarks
 * Unit direction vectors representing enum Direction
 * Yes, I know Left/Right are reversed here -- that's because something is wrong, and I haven't been able to track
 * it down.  I blame Tom's dodgy code, tbh.
 */
const directionLookup = {
    [Direction.Forward]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.forward,
    [Direction.Right]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.left,
    [Direction.Back]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.back,
    [Direction.Left]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.right,
    [Direction.Up]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.up,
    [Direction.Down]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.down,
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