// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Entity, world, DisplaySlotId } from "@minecraft/server";
/**
 * Set entity score and fetch scoreboard objective display
 * @param {Entity} entity 
 * @param {string} objectiveId 
 * @param {number} score 
 */
function setScore (entity, objectiveId, score) {
  // Check if scoreboard object exist first
  const objective = world.scoreboard.getObjective(objectiveId);
  if (!objective) throw new ReferenceError('Scoreboard objective does not exist in world.');

  // If entity doesnt have scoreboard property, run command
  if (!entity.scoreboardIdentity) entity.runCommandAsync('scoreboard players set @s ' + objective + ' ' + score);
  else entity.scoreboardIdentity.setScore(objective, score);

  // fetch scoreboard objective display
  /**
   * @type {(keyof typeof DisplaySlotId)[]}
   */
  const displaySlots = [ DisplaySlotId.belowname, DisplaySlotId.list, DisplaySlotId.sidebar ];

  for (const displaySlotId of displaySlots) {
    const displaySlot = world.scoreboard.getObjectiveAtDisplaySlot(DisplaySlotId[displaySlotId]);

    if (displaySlot.objective === objective) {
      world.scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.sidebar);
      world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.sidebar, displaySlot);
    }  
  };
};

export { setScore };