import { Player, Vector3 } from "@minecraft/server";

/**
 * Normalizes the given vector and scales it by the factor `s`.
 * @param {Vector3} vector - The 3D vector to normalize.
 * @param {number} s - The scale factor to apply to the normalized vector.
 * @returns {Vector3} The normalized and scaled vector.
 */
export function normalizeVector (vector,s) {
    let l = Math.hypot(vector.x,vector.y,vector.z)
    return {
        x: s * (vector.x/l),
        y: s * (vector.y/l),
        z: s * (vector.z/l)
    }
}

/**
 * Finds a location based on their view direction and the scaling factors from the players current position, the same as ^^^ in commands.
 * @param {Player} player - The player object to base the view direction and starting position on.
 * @param {number} xf - The scaling factor for the x direction.
 * @param {number} yf - The scaling factor for the y direction.
 * @param {number} zf - The scaling factor for the z direction.
 * @param {Vector3} d - The optional view direction in case you want a custom one.
 * @param {Vector3} d - The optional location in case you want a custom one.
 * @returns {Vector3} The transformed location.
 */
export function calcVectorOffset (player, xf, yf, zf, d = player.getViewDirection(), l = player.location) {
    let m = Math.hypot(d.x, d.z);
    let xx = normalizeVector({
        x: d.z,
        y: 0,
        z: -d.x
    }, xf);
    let yy = normalizeVector({
        x: (d.x / m) * -d.y,
        y: m,
        z: (d.z / m) * -d.y
    }, yf);
    let zz = normalizeVector(d, zf);

    return {
        x: l.x + xx.x + yy.x + zz.x,
        y: l.y + xx.y + yy.y + zz.y,
        z: l.z + xx.z + yy.z + zz.z
    };
}