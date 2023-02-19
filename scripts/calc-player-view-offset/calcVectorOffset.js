import { world } from "@minecraft/server";

/**
 * Normalizes the given vector and scales it by the factor `s`.
 * @param {{x: number, y: number, z: number}} vector - The 3D vector to normalize.
 * @param {number} s - The scale factor to apply to the normalized vector.
 * @returns {{x: number, y: number, z: number}} The normalized and scaled vector.
 */
export function normalizeVector ({x,y,z},s) {
    let l = Math.hypot(x,y,z)
    return {
        x: s * (x/l),
        y: s * (y/l),
        z: s * (z/l)
    }
}

/**
 * Finds a location based on their view direction and the scaling factors from the players current position, the same as ^^^ in commands.
 * @param {object} player - The player object to base the view direction and starting position on.
 * @param {number} xf - The scaling factor for the x direction.
 * @param {number} yf - The scaling factor for the y direction.
 * @param {number} zf - The scaling factor for the z direction.
 * @returns {{x: number, y: number, z: number}} The transformed location.
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