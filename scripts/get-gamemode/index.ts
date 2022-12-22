// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
import { GameMode, Player, world } from "@minecraft/server";

/**
 * Gets the Gamemode of a player
 * @author Smell of Curry
 * @param {Player} player player to get
 * @returns {GameMode}
 * @example if (getGamemode(player) == "creative") return;
 */
export function getGamemode(player: Player): GameMode {
  return Object.values(GameMode).find(
    (g) => [...world.getPlayers({ name: player.name, gameMode: g })].length
  );
}