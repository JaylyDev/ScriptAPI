// Script examples for ScriptAPI
// Author: Jayly#1397 <Bedrock Add-Ons>

import { Entity, ScoreboardObjective, DisplaySlotId, world } from "@minecraft/server";
/**
 * Set entity score and fetch scoreboard objective display
 * @param {Entity} entity 
 * @param {ScoreboardObjective} objective 
 * @param {number} score 
 */
function setScore (entity, objective, score) {
  // If entity doesnt have scoreboard property, run command
  if (!entity.scoreboard) entity.runCommandAsync('scoreboard players set @s ' + objective.id + ' ' + score);
  else entity.scoreboard.setScore(objective, score);

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
