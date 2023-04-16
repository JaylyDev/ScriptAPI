// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world, DisplaySlotId } from "@minecraft/server";
/**
 * Action to modify entity scoreboard
 */
var ScoreboardAction;
(function (ScoreboardAction) {
    /**
     * Action to add score to player
     */
    ScoreboardAction["add"] = "add";
    /**
     * Action to remove score from player
     */
    ScoreboardAction["remove"] = "remove";
    /**
     * Action to set score to player
     */
    ScoreboardAction["set"] = "set";
})(ScoreboardAction || (ScoreboardAction = {}));
;
/**
 * fetch scoreboard objective display
 * @internal
 */
const updateDisplay = (objective) => {
    /**
     * @type {(keyof typeof DisplaySlotId)[]}
     */
    const displaySlots = [DisplaySlotId.belowname, DisplaySlotId.list, DisplaySlotId.sidebar];
    for (const displaySlotId of displaySlots) {
        const displaySlot = world.scoreboard.getObjectiveAtDisplaySlot(DisplaySlotId[displaySlotId]);
        if (displaySlot?.objective === objective) {
            world.scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.sidebar);
            world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.sidebar, displaySlot);
        }
    }
    ;
};
/**
 * Set entity score and fetch scoreboard objective display
 * @param {Entity} entity Entity's scoreboard to change
 * @param {string} objectiveId Objective to apply the score to.
 * @param {number} score Score value
 * @param {ScoreboardAction} action Decides whether to add, remove, or set score to entity (default = set)
 * @param {boolean} fetch Fetch scoreboard objective display (default = true)
 */
function setScore(entity, objectiveId, score, action, fetch = true) {
    // Check if scoreboard object exist first
    const objective = world.scoreboard.getObjective(objectiveId);
    if (!objective)
        throw new ReferenceError('Scoreboard objective does not exist in world.');
    const previousScore = !!entity.scoreboardIdentity ? entity.scoreboardIdentity.getScore(objective) : 0;
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
        entity.runCommand('scoreboard players set @s ' + objective + ' ' + score);
    else
        entity.scoreboardIdentity.setScore(objective, score);
    if (fetch)
        updateDisplay(objective);
}
;
export { setScore };
