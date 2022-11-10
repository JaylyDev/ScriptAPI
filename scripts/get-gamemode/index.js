/**
 * Get player gamemode
 * @param player 
 * @returns gamemode number
 * @deprecated
 */
export function getGamemode(player) {
  const GameModes = ['survival', 'creative', 'adventure', 'spectator'];
  for (let i of GameModes) {
    try {
      player.runCommand(`testfor @s[m=${i}]`);
      return i;
    } catch {};
  };
};