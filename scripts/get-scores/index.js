import { Player, Entity, world, ScoreboardIdentityType } from "mojang-minecraft";

/**
 * Get all scoreboard scores from a player or entity.
 * Does not support fake player.
 * @param {Player | Entity} target
 * @return {object}
 */
export function getScores (target) {
  let objectives = world.scoreboard.getObjectives();
  let targetScoreboard = {};

  if (target.scoreboard === undefined) return targetScoreboard;
  for (const objective of objectives) targetScoreboard[objective.id] = objective.getScores().find((score) => score.participant.type !== ScoreboardIdentityType.fakePlayer ? score.participant.getEntity() === target : false)?.score;
  return targetScoreboard;
};

console.warn(JSON.stringify(getScores([...world.getPlayers()][0])));