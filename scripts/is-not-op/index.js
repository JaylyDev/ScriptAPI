// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player } from "@minecraft/server";
import { isOperator } from "../is-operator/index.js";

/**
 * returns true if player is not operator
 * @param {Player} player 
 */
export function isNotOp (player) {
  return isOperator(player) === false;
};