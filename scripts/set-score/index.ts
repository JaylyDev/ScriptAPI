// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Entity, world, DisplaySlotId, ScoreboardObjective } from "@minecraft/server";
/**
 * Action to modify entity scoreboard
 */
enum ScoreboardAction {
  add = "add",
  remove = "remove",
  set = "set"
};
/**
 * fetch scoreboard objective display
 * @deprecated Scoreboards Setter APIs Client Sync issue is fixed in 1.20.10
 */
const updateDisplay = (objective: ScoreboardObjective) => {
  /**
   * @type {(keyof typeof DisplaySlotId)[]}
   */
  const displaySlots: (keyof typeof DisplaySlotId)[] = [ DisplaySlotId.BelowName, DisplaySlotId.List, DisplaySlotId.Sidebar ];

  for (const displaySlotId of displaySlots) {
    const displaySlot = world.scoreboard.getObjectiveAtDisplaySlot(DisplaySlotId[displaySlotId]);

    if (displaySlot?.objective === objective) {
      world.scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.Sidebar);
      world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, displaySlot);
    }  
  };
};
/**
 * Set entity score and fetch scoreboard objective display
 * @param {Entity} entity Entity's scoreboard to change
 * @param {string} objectiveId Objective to apply the score to.
 * @param {number} score Score value
 * @param {ScoreboardAction} action Decides whether to add, remove, or set score to entity (default = set)
 */
function setScore (entity: Entity, objectiveId: string, score: number, action?: ScoreboardAction) {
  // Check if scoreboard object exist first
  const objective = world.scoreboard.getObjective(objectiveId);
  if (!objective) throw new ReferenceError('Scoreboard objective does not exist in world.');

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
  if (!entity.scoreboardIdentity) entity.runCommand('scoreboard players set @s ' + objective + ' ' + score);
  else objective.setScore(entity.scoreboardIdentity, score);
};

export { setScore, ScoreboardAction };