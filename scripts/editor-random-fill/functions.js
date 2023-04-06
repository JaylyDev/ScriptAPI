import { Vector } from "@minecraft/server";
import { BlockVolume } from "@minecraft/server-editor";
import { Direction, getRotationCorrectedDirection } from "editor-utilities/index";
/**
 * @beta
 */
var AxisPlanes;
(function (AxisPlanes) {
    AxisPlanes[AxisPlanes["XZ"] = 0] = "XZ";
    AxisPlanes[AxisPlanes["XY"] = 1] = "XY";
    AxisPlanes[AxisPlanes["YZ"] = 2] = "YZ";
})(AxisPlanes || (AxisPlanes = {}));
;
/**
 * @beta
 */
const axisNormalLookup = {
    [AxisPlanes.XZ]: Vector.up,
    [AxisPlanes.XY]: Vector.forward,
    [AxisPlanes.YZ]: Vector.left,
};
/**
 * @beta
 */
export function getRelativeXYAxisAsNormal(rotation) {
    const direction = getRotationCorrectedDirection(rotation, Direction.Forward);
    switch (direction) {
        case Direction.Forward:
        case Direction.Back:
            return axisNormalLookup[AxisPlanes.XY];
        case Direction.Right:
        case Direction.Left:
            return axisNormalLookup[AxisPlanes.YZ];
        default:
            throw 'Invalid quadrant';
    }
}
/**
 * @beta
 */
function VectorDot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
/**
 * @beta
 */
function VectorScale(a, s) {
    const v = new Vector(a.x, a.y, a.z);
    v.x *= s;
    v.y *= s;
    v.z *= s;
    return v;
}
/**
 * @beta
 */
export function intersectRayPlane(rayLocation, rayDirection, planeNormal, planeDistance) {
    const denominator = VectorDot(rayDirection, planeNormal);
    if (denominator !== 0) {
        const t = -(VectorDot(rayLocation, planeNormal) + planeDistance) / denominator;
        if (t < 0) {
            return undefined;
        }
        const scaledDirection = VectorScale(rayDirection, t);
        const result = Vector.add(rayLocation, scaledDirection);
        return result;
    }
    else if (VectorDot(planeNormal, rayLocation) + planeDistance === 0) {
        return rayLocation;
    }
    return undefined;
}
/**
 * @beta
 */
export function shrinkVolumeAlongViewAxis(volume, rotationY, direction, amount) {
    const relativeDirection = getRotationCorrectedDirection(rotationY, direction);
    return shrinkVolumeAlongAbsoluteAxis(volume, relativeDirection, amount);
}
export function growVolumeAlongViewAxis(volume, rotationY, direction, amount) {
    const relativeDirection = getRotationCorrectedDirection(rotationY, direction);
    return growVolumeAlongAbsoluteAxis(volume, relativeDirection, amount);
}
function growVolumeAlongAbsoluteAxis(volume, direction, amount) {
    const maxAxialLength = 32;
    if (amount > maxAxialLength) {
        amount = maxAxialLength;
    }
    const bounds = volume.boundingBox;
    const min = bounds.min;
    const max = bounds.max;
    const spanX = bounds.spanX;
    const spanY = bounds.spanY;
    const spanZ = bounds.spanZ;
    switch (direction) {
        case Direction.Up: // +Y Axis
            if (spanY + amount > maxAxialLength) {
                amount = maxAxialLength - spanY;
            }
            max.y += amount;
            break;
        case Direction.Down: // -Y Axis
            if (spanY + amount > maxAxialLength) {
                amount = maxAxialLength - spanY;
            }
            min.y -= amount;
            break;
        case Direction.Forward: // +Z Axis
            if (spanZ + amount > maxAxialLength) {
                amount = maxAxialLength - spanZ;
            }
            max.z += amount;
            break;
        case Direction.Back: // -Z Axis
            if (spanZ + amount > maxAxialLength) {
                amount = maxAxialLength - spanZ;
            }
            min.z -= amount;
            break;
        case Direction.Left: // +X Axis
            if (spanX + amount > maxAxialLength) {
                amount = maxAxialLength - spanX;
            }
            max.x += amount;
            break;
        case Direction.Right: // -X Axis
            if (spanX + amount > maxAxialLength) {
                amount = maxAxialLength - spanX;
            }
            min.x -= amount;
            break;
    }
    const newVolume = new BlockVolume(min, max);
    return newVolume;
}
function shrinkVolumeAlongAbsoluteAxis(volume, direction, amount) {
    const bounds = volume.boundingBox;
    const min = bounds.min;
    const max = bounds.max;
    const spanX = bounds.spanX;
    const spanY = bounds.spanY;
    const spanZ = bounds.spanZ;
    switch (direction) {
        case Direction.Up: // +Y Axis
            if (spanY > amount) {
                max.y -= amount;
            }
            break;
        case Direction.Down: // -Y Axis
            if (spanY > amount) {
                min.y += amount;
            }
            break;
        case Direction.Forward: // +Z Axis
            if (spanZ > amount) {
                max.z -= amount;
            }
            break;
        case Direction.Back: // -Z Axis
            if (spanZ > amount) {
                min.z += amount;
            }
            break;
        case Direction.Left: // +X Axis
            if (spanX > amount) {
                max.x -= amount;
            }
            break;
        case Direction.Right: // -X Axis
            if (spanX > amount) {
                min.x += amount;
            }
            break;
    }
    const newVolume = new BlockVolume(min, max);
    return newVolume;
}
