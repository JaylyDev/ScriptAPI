import { Player } from "@minecraft/server";

/**
 * Get player gamemode
 * @param player 
 * @returns gamemode number
 */
export function getGamemode(player: Player): string {
  const GameModes = ['survival', 'creative', 'adventure', 'spectator'];
  for (let gamemode of GameModes) {
    try {
      player.runCommand(`testfor @s[m=${gamemode}]`);
      return gamemode;
    } catch {};
  };
};