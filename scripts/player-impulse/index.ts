// Script example for ScriptAPI
// Author: Remember M9 #8416 <Bedrock Add-Ons>
// Project: https://github.com/JaylyDev/ScriptAPI

import { Player, Vector3 } from "@minecraft/server";

/**
 * Workaround to apply impulse vector to the current velocity of the player.
 * @param player Only Player class, not Entity.
 * @param vector 
 */
export function applyImpulse(player: Player, vector: Vector3) {
  const { x, y, z } = vector;
  const horizontal = Math.sqrt(x * x + z * z) * 2.0;
  const vertical = y < 0.0 ? 0.5 * y : y;
  player.applyKnockback(x, z, horizontal, vertical);
}