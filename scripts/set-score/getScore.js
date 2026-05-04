// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world } from "@minecraft/server";
/**
 * Gets the score recorded for {displayName} on {objective}
 * @param {Player} player or entity on the scoreboard
 * @param {String} objectiveId Objective Identifer to get from
 * @param {Boolean} rNull If the return should be null if its not found or 0.
 * @returns {Number} Score that Was recorded for {Player} on {Objective}
 * @example getScore(player, "objective"): number
 */
export function getScore(player, objectiveId, rNull = false) {
  try {
    const obj = world.scoreboard.getObjective(objectiveId);
    if (!obj) {
      throw new Error(
        `Objective "${objectiveId}" not found.`
      );
    }
    const score = obj.getScore(player);
    if (typeof score != "number") {
      throw new Error(
        `Score for player "${player.name}" not found.`
      );
    }
    return score;
  } catch (error) {
    return 0;
  }
}