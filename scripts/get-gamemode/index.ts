import { Player } from "mojang-minecraft";

/**
 * Get player gamemode
 * @param player 
 * @returns gamemode number
 */
export function getGamemode(player: Player): string {
  const GameModes = ['survival', 'creative', 'adventure', 'spectator'];
  for (let i of GameModes) {
    try {
      player.runCommand(`testfor @s[m=${i}]`);
      return i;
    } catch {};
  };
};