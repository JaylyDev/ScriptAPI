import { Vector3 } from "@minecraft/server";

/**
 * Direction
 * @beta
 * @remarks
 * Direction maps to C++ Direction::FacingID
 */
enum Direction {
  Forward = 'Forward',
  Right = 'Right',
  Back = 'Back',
  Left = 'Left',
  Up = 'Up',
  Down = 'Down',
}
/**
 * getDirectionVector
 * @beta
 * @remarks
 * Return a unit vector for a given Direction
 */
function getDirectionVector(direction: Direction): Vector
/**
 * getScaledDirectionVector
 * @beta
 * @remarks
 * Return a scaled vector for a given Direction
 */
function getScaledDirectionVector(direction, scale): Vector
/**
 * getRotationCorrectedDirection
 * @beta
 * @remarks
 * Convert a given absolute Direction enum to one which is relative to the specified Y rotation
 *  (Generally Player view vector Y component)
 */
function getRotationCorrectedDirection(rotationY, realDirection): string | number 
/**
 * getRotationCorrectedDirectionVector
 * @beta
 * @remarks
 * Convert a given absolute Direction enum to a direction vector which is relative to the Y rotation
 *  (Generally Player view vector Y component)
 */
function getRotationCorrectedDirectionVector(rotationY, realDirection): Vector

export {
  Direction,
  getDirectionVector,
  getRotationCorrectedDirection,
  getRotationCorrectedDirectionVector,
  getScaledDirectionVector,
}