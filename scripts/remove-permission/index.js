import { Player } from "@minecraft/server";

/**
 * Remove player permission
 * @param {Player} player 
 */
export function removePermission (player) {
  player.setOp(false);
};