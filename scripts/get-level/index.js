import { world, Player } from '@minecraft/server';

/**
 * Get player experience level without using runCommand
 * @param {Player} player 
 * @returns Player experience level
 */
export function getPlayerExperienceLevel (player) {
  let minLevel = 0;
  let maxLevel = 24791;
  let distance = maxLevel - minLevel;
  let playerIndex = -1;

  while (minLevel !== maxLevel) {
    playerIndex = [...world.getPlayers({ minLevel, maxLevel })].findIndex((pl) => pl === player);
    if (playerIndex > -1) {
      maxLevel -= Math.round(distance / 2);
    }
    else if (playerIndex === -1) {
      minLevel = maxLevel;
      maxLevel = maxLevel * 2;
    };
    distance = maxLevel - minLevel;
  };

  if (minLevel === 0 && maxLevel === 0 && playerIndex === 0) return 0;
  else return minLevel + 1;
};
