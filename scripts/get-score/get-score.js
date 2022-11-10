import { Player, world } from "@minecraft/server";
/**
 * Gets the score recorded for {displayName} on {objective}
 * @param {Player} player or entity on the scoreboard
 * @param {String} objectiveId Objective Identifer to get from
 * @param {Boolean} rNull If the return should be null if its not found or 0.
 * @returns {Number} Score that Was recorded for {Player} on {Objective}
 * @example getScore(player, "objective"): number
 */
function getScore(player, objectiveId, rNull = false) {
  try {
    return world.scoreboard
      .getObjective(objectiveId)
      .getScore(player.scoreboard);
  } catch (error) {
    return rNull ? null : 0;
  }
}
