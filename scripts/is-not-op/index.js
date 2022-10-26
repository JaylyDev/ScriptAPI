import { Player } from "@minecraft/server";
import { isOperator } from "is-operator";

/**
 * returns true if player is not operator
 * @param {Player} player 
 */
export function isNotOp (player) {
  return isOperator(player) === false;
};