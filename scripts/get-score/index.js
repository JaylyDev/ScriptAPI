import { Entity, world } from "@minecraft/server";

/**
 * Get the score of a target on an objective
 * @param {Entity|string} target The entity, player, or fake player to get the score of
 * @param {string} objective Objective to get a score from
 * @returns {number} The target's score, or 0 if error
 * @example getScore(player, 'Money') //Returns the value of the scoreboard "Money", or 0 if error
 */
export function getScore(target, objective) {
    try {
        const oB = world.scoreboard.getObjective(objective)
        return oB.getScore(typeof target == 'string' ? oB.getParticipants().find(pT => pT.displayName == target) : oB.getScore(target.scoreboard))
    } catch {
        return 0;
    }
}
