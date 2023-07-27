// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world, Entity, ScoreboardIdentity } from "@minecraft/server";

/**
 * Gets the score recorded for a participant on objective
 * @param participant
 * @param objectiveId
 */
export function getScore(participant: string | Entity | ScoreboardIdentity, objectiveId: string) {
  const objective = world.scoreboard.getObjective(objectiveId);
  if (!objective) throw new Error(`Objective ${objectiveId} not found`);
  
  return objective.getScore(participant);
}
/**
 * Sets the score recorded for a participant on objective
 * @param participant
 * @param objectiveId
 * @param score
 * @returns {ScoreboardIdentity} participant that was changed in objective
 */
export function setScore(participant: string | Entity | ScoreboardIdentity, objectiveId: string, score: number): ScoreboardIdentity {
  const objective = world.scoreboard.getObjective(objectiveId);
  if (!objective) throw new Error(`Objective ${objectiveId} not found`);

  objective.setScore(participant, score);

  if (participant instanceof Entity) return participant.scoreboardIdentity!;
  else if (participant instanceof ScoreboardIdentity) return participant;
  else return objective.getParticipants().find(p => p.displayName === participant)!;
};

/**
 * Add the score recorded for entity on objective
 * @param participant
 * @param objectiveId
 * @param score
 */
export function addScore(participant: string | Entity | ScoreboardIdentity, objectiveId: string, score: number): ScoreboardIdentity {
  const objective = world.scoreboard.getObjective(objectiveId);
  if (!objective) throw new Error(`Objective ${objectiveId} not found`);

  objective.addScore(participant, score);

  if (participant instanceof Entity) return participant.scoreboardIdentity!;
  else if (participant instanceof ScoreboardIdentity) return participant;
  else return objective.getParticipants().find(p => p.displayName === participant)!;
}
