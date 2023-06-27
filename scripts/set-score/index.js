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
 * @deprecated Scoreboards Setter APIs Client Sync issue is fixed in 1.20.10
 */
const updateDisplay = (objective) => {
    /**
     * @type {(keyof typeof DisplaySlotId)[]}
     */
    const displaySlots = [DisplaySlotId.BelowName, DisplaySlotId.List, DisplaySlotId.Sidebar];
    for (const displaySlotId of displaySlots) {
        const displaySlot = world.scoreboard.getObjectiveAtDisplaySlot(DisplaySlotId[displaySlotId]);
        if (displaySlot?.objective === objective) {
            world.scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.Sidebar);
            world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, displaySlot);
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
function setScore(entity, objectiveId, score, action) {
    // Check if scoreboard object exist first
    const objective = world.scoreboard.getObjective(objectiveId);
    if (!objective)
        throw new ReferenceError('Scoreboard objective does not exist in world.');
    const previousScore = !!entity.scoreboardIdentity ? objective.getScore(entity.scoreboardIdentity) : 0;
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
        objective.setScore(entity.scoreboardIdentity, score);
}
;
export { setScore };
