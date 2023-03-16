// Script example for ScriptAPI
// Author: GlitchyTurtle32 <https://github.com/GlitchyTurtle>
// Project: https://github.com/JaylyDev/ScriptAPI

import { Player } from "@minecraft/server";

/**
 * @param {import("@minecraft/server").Vector3} vector
 * @param {number} s
 */
function normalizeVector (vector,s) {
    let l = Math.hypot(vector.x,vector.y,vector.z)
    return {
        x: s * (vector.x/l),
        y: s * (vector.y/l),
        z: s * (vector.z/l)
    }
}

/**
 * @param {Player} player
 * @param {number} xf
 * @param {number} yf
 * @param {number} zf
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