import { Player } from "@minecraft/server";
import { isOperator } from "is-operator";

/**
 * 
 * @param {Player} player 
 * @returns 
 */
export function hasPermission (player) {
  return isOperator(player);
};