import { Player, Entity, world, ScoreboardIdentityType, ScoreboardIdentity, ScoreboardObjective } from "@minecraft/server";

/**
 * Get all scoreboard scores from a player or entity.
 * Does not support fake player.
 * @param {Player | Entity} target
 * @return {object}
 */
export function getScores (target) {
  let objectives = world.scoreboard.getObjectives();
  let targetScoreboard = {};

  if (!(target.scoreboard instanceof ScoreboardIdentity)) return targetScoreboard;
  for (const objective of objectives) targetScoreboard[objective.id] = objective.getScores().find((score) => score.participant.type !== ScoreboardIdentityType.fakePlayer ? score.participant.getEntity() === target : false)?.score;
  return targetScoreboard;
};

/**
 * Get scoreboard scores from a player or entity.
 * Does not support fake player.
 * @param {Player | Entity} target 
 * @param {string} objectiveId 
 * @return {number}
 */
export function getScore (target, objectiveId) {
  let objective = world.scoreboard.getObjective(objectiveId);

  if (!(target.scoreboard instanceof ScoreboardIdentity)) return;
  if (!(objective instanceof ScoreboardObjective)) return;

  try {
    return objective.getScore(target.scoreboard);
  } catch (err) {
    console.error(err);
  };
};
