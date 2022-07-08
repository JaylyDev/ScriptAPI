// https://discord.com/channels/862462061594017802/944054708123861002/988871809816465479
import { Entity, world } from "mojang-minecraft";

const player = [...world.getPlayers()][0];
const myVar = getScore('my Objective', player, true)

/**
 * Get the score of a target on an objective
 * @param {string} objective Objective to get a score from
 * @param {Entity|string} target The entity, player, or fake player to get the score of
 * @param {boolean} useZero Specifies whether to return NaN or 0 if an error is thrown
 * @returns {number} The target's score, or NaN / 0 if error
 */
function getScore(objective, target, useZero = false) {
  try {
    const obj = world.scoreboard.getObjective(objective);
    if (typeof target == 'string') {
      return obj.getScore(obj.getParticipants().find(v => v.displayName == target));
    }
    return obj.getScore(target.scoreboard);
  } catch {
    return useZero ? 0 : NaN;
  }
}