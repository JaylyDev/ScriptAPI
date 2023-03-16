// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world } from "@minecraft/server"

/**
 * Get score
 * @param {string} objective 
 * @param {Player | string} target 
 * @param {boolean} useZero 
 * @returns 
 */
function getScore(objective, target, useZero = false) {
  try {
    const obj = world.scoreboard.getObjective(objective);
    if (typeof target == 'string') {
      return obj.getScore(obj.getParticipants().find(v => v.displayName === target));
    }
    return obj.getScore(target.scoreboard);
  } catch {
    return useZero ? 0 : NaN;
  }
}

function levelup() {
  for (let player of world.getPlayers()) {
    let xp = getScore('xp', player, true);
    let xpmax = getScore('xpmax', player, true);
    let level = getScore('level', player, true);
    if (xp == xpmax && level <= 100) {
      player.runCommand(`scoreboard players add @s level 1`)
      player.runCommand(`scoreboard players set @s xp 0`)
      xpmax += xpmax + (xpmax * 0.03)
      player.runCommand(`scoreboard players set @s xpmax ${xpmax}`)
    }
  }
}
export { levelup }
