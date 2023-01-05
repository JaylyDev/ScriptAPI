// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { Entity, Player } from "@minecraft/server";

/**
 * 
 * @param {number} x 
 */
function MathRound (x) {
  return Math.round(x * 1000) / 1000;
};

/**
 * Returns `true` if entity is movings
 * @param {Entity} entity 
 */
function isMoving (entity) {
  if (!(entity instanceof Player) && !(entity instanceof Entity)) throw new TypeError('Parameter is not Entity or Player');
  
  /**
   * @type {import("@minecraft/server").Vector3}
   */
  const vector = {
    x: MathRound(entity.velocity.x),
    y: MathRound(entity.velocity.y),
    z: MathRound(entity.velocity.z)
  };

  if (vector.x === 0 && vector.y === 0 && vector.z === 0) return false;
  else return true;
};;

export default isMoving;