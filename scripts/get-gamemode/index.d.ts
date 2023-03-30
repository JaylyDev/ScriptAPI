import { GameMode, Player } from "@minecraft/server";
/**
 * Gets the Gamemode of a player
 * @author Smell of Curry
 * @param {Player} player player to get
 * @returns {GameMode}
 * @example if (getGamemode(player) == "creative") return;
 */
export declare function getGamemode(player: Player): GameMode;
