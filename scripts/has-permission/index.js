// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player } from "@minecraft/server";
import { isOperator } from "../is-operator/index.js";

/**
 * 
 * @param {Player} player 
 * @returns 
 */
export function hasPermission (player) {
  return isOperator(player);
};