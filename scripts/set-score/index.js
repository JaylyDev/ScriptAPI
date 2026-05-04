// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world } from "@minecraft/server";
/**
 * Action to modify entity scoreboard
 */
var ScoreboardAction;
(function (ScoreboardAction) {
    ScoreboardAction["add"] = "add";
    ScoreboardAction["remove"] = "remove";
    ScoreboardAction["set"] = "set";
})(ScoreboardAction || (ScoreboardAction = {}));
;
/**
 * Set entity score and fetch scoreboard objective display
 * @param {Entity} entity Entity's scoreboard to change
 * @param {string} objectiveId Objective to apply the score to.
 * @param {number} score Score value
 * @param {ScoreboardAction} action Decides whether to add, remove, or set score to entity (default = set)
 */
function setScore(entity, objectiveId, score, action) {
    // Check if scoreboard object exist first
    const objective = world.scoreboard.getObjective(objectiveId);
    if (!objective)
        throw new ReferenceError('Scoreboard objective does not exist in world.');
    const previousScore = !!entity.scoreboardIdentity ? objective.getScore(entity.scoreboardIdentity) || 0 : 0;
    switch (action) {
        case ScoreboardAction.add:
            score += previousScore;
            break;
        case ScoreboardAction.remove:
            score -= previousScore;
            break;
        default:
            break;
    }
    // If entity doesnt have scoreboard property, run command
    if (!entity.scoreboardIdentity)
        entity.runCommand('scoreboard players set @s ' + objectiveId + ' ' + score);
    else
        objective.setScore(entity.scoreboardIdentity, score);
}
;
export { setScore, ScoreboardAction };
