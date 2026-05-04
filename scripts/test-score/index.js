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

  if (!this.obj) {
    throw new Error(
      `Objective "${objective}" not found.`
    );
  }

  // Player
  if (typeof player == "string") {
    this.plr = this.obj.getParticipants().find((v) => (v.displayName == player));
  } else {
    this.plr = player;
  }

  if (!this.plr) {
    throw new Error(
      `Player "${player}" not found.`
    );
  }

  this.scr = this.obj.getScore(this.plr);

  if (typeof this.scr != "number") {
    throw new Error(
      `Score for player "${player}" not found.`
    );
  }

  if (min < this.scr && this.scr > max) return true;
  else return false;
}
