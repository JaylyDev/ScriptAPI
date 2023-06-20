// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world, Entity } from "@minecraft/server";

/**
 * Gets the score recorded for entity on objective
 * @param {Entity} entity
 * @param {string} objectiveId
 */
export function getScore(entity, objectiveId) {
  const objective = world.scoreboard.getObjective(objectiveId);
  return objective.getScore(entity.scoreboardIdentity);
}
/**
 * Sets the score recorded for entity on objective
 * @param {Entity} entity
 * @param {string} objectiveId
 * @param {number} score
 */
export function setScore(entity, objectiveId, score) {
  const objective = world.scoreboard.getObjective(objectiveId);
  return objective.setScore(entity.scoreboardIdentity, score);
}
/**
 * Add the score recorded for entity on objective
 * @param {Entity} entity
 * @param {string} objectiveId
 * @param {number} score
 */
export function addScore(entity, objectiveId, score) {
  const previousScore = getScore(entity, objectiveId);
  return setScore(entity, objectiveId, previousScore + score);
}
/**
 * Subtract the score recorded for entity on objective
 * @param {Entity} entity
 * @param {string} objectiveId
 * @param {number} score
 */
export function subtractScore(entity, objectiveId, score) {
  const previousScore = getScore(entity, objectiveId);
  return setScore(entity, objectiveId, previousScore - score);
}
/**
 * Divide the score recorded for entity on objective
 * @param {Entity} entity
 * @param {string} objectiveId
 * @param {number} score
 */
export function divideScore(entity, objectiveId, score) {
  const previousScore = getScore(entity, objectiveId);
  return setScore(entity, objectiveId, Math.floor(previousScore / score));
}
/**
 * Test if the score recorded for entity on objective in range.
 * @param {Entity} entity
 * @param {string} objectiveId
 * @param {number} min
 * @param {number} max
 */
export function testScore(entity, objectiveId, min, max) {
  const score = getScore(entity, objectiveId);
  return score >= min && score <= max;
}
/**
 * Set a random score between a range for entity on objective.
 * @param {Entity} entity
 * @param {string} objectiveId
 * @param {number} min
 * @param {number} max
 */
export function randomScore(entity, objectiveId, min, max) {
  return setScore(entity, objectiveId, getRandomArbitrary(min, max));
}
/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
