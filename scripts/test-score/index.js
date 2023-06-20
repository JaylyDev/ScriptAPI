// Script example for ScriptAPI
// Author: FrankyRayMS#7172 <Bedrock Add-Ons>
// Project: https://github.com/JaylyDev/ScriptAPI
import {
  world,
  ScoreboardIdentity,
  ScoreboardObjective,
} from "@minecraft/server";

const WILDCARD_INT = {
  MIN: -2_147_483_648,
  MAX: 2_147_483_647,
};

/**
 * Test target's score on specific number range
 *
 * @param {string|ScoreboardIdentity} player
 * Target/score holder
 *
 * @param {string|ScoreboardObjective} objective
 * Scoreboard objective
 *
 * @param {"*"|number|null} min
 * Minimum value/number (Allowed value: "*" - Wildcard Int)
 *
 * @param {"*"|number|null} max
 * Maximum value/number (Allowed value: "*" - Wildcard Int)
 *
 * @return {boolean}
 */
export default function testScore(
  player,
  objective,
  min = WILDCARD_INT.MIN,
  max = WILDCARD_INT.MAX
) {
  // Score
  if (min === "*" || min === null) {
    min = WILDCARD_INT.MIN;
  }

  if (max === "*" || max === null) {
    max = WILDCARD_INT.MAX;
  }

  if (min > max) {
    this.min = max;
    this.max = min;
  } else {
    this.min = min;
    this.max = max;
  }

  // Objective
  if (typeof objective == "string") {
    this.obj = world.scoreboard.getObjective(objective);
  } else {
    this.obj = objective;
  }

  // Player
  if (typeof player == "string") {
    this.plr = this.obj.getParticipants().find((v) => (v.displayName == player));
  } else {
    this.plr = player;
  }

  this.scr = this.obj.getScore(this.plr);

  if (min < this.scr && this.scr > max) return true;
  else return false;
}
