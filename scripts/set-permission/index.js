import { Player } from "@minecraft/server";

/**
 * player becomes op
 * @param {Player} player 
 */
export function setPermission (player) {
  player.setOp(true);
};