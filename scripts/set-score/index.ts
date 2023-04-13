// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Entity, world, DisplaySlotId, ScoreboardObjective } from "@minecraft/server";
/**
 * Action to modify entity scoreboard
 */
enum ScoreboardAction {
  /**
   * Action to add score to player
   */
  add = "add",
  /**
   * Action to remove score from player
   */
  remove = "remove",
  /**
   * Action to set score to player
   */
  set = "set"
};
/**
 * fetch scoreboard objective display
 * @internal
 */
const updateDisplay = (objective: ScoreboardObjective) => {
  /**
   * @type {(keyof typeof DisplaySlotId)[]}
   */
  const displaySlots: (keyof typeof DisplaySlotId)[] = [ DisplaySlotId.belowname, DisplaySlotId.list, DisplaySlotId.sidebar ];

  for (const displaySlotId of displaySlots) {
    const displaySlot = world.scoreboard.getObjectiveAtDisplaySlot(DisplaySlotId[displaySlotId]);

    if (displaySlot?.objective === objective) {
      world.scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.sidebar);
      world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.sidebar, displaySlot);
    }  
  };
};
/**
 * Set entity score and fetch scoreboard objective display
 * @param {Entity} entity Entity's scoreboard to change
 * @param {string} objectiveId Objective to apply the score to.
 * @param {number} score Score value
 * @param {ScoreboardAction} action Decides whether to add, remove, or set score to entity (default = set)
 * @param {boolean} fetch Fetch scoreboard objective display (default = true)
 */
function setScore (entity: Entity, objectiveId: string, score: number, action?: ScoreboardAction, fetch: boolean = true) {
  // Check if scoreboard object exist first
  const objective = world.scoreboard.getObjective(objectiveId);
  if (!objective) throw new ReferenceError('Scoreboard objective does not exist in world.');

  switch (action) {
    case ScoreboardAction.add:
      // If entity doesnt have scoreboard property, run command
      if (!entity.scoreboardIdentity) entity.runCommandAsync('scoreboard players add @s ' + objective + ' ' + score);
      else {
        const previousScore = entity.scoreboardIdentity.getScore(objective);
        entity.scoreboardIdentity.setScore(objective, previousScore + score);
      };
      break;
  
    case ScoreboardAction.remove:
      // If entity doesnt have scoreboard property, run command
      if (!entity.scoreboardIdentity) entity.runCommandAsync('scoreboard players remove @s ' + objective + ' ' + score);
      else {
        const previousScore = entity.scoreboardIdentity.getScore(objective);
        entity.scoreboardIdentity.setScore(objective, previousScore - score);
      };
      break;
  
    default:
      // If entity doesnt have scoreboard property, run command
      if (!entity.scoreboardIdentity) entity.runCommandAsync('scoreboard players set @s ' + objective + ' ' + score);
      else entity.scoreboardIdentity.setScore(objective, score);
      break;
  }

  if (fetch) updateDisplay(objective);
};

export { setScore };