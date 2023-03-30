// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
//         Smell of Curry <https://github.com/smell-of-curry>
// Project: https://github.com/JaylyDev/ScriptAPI
import { GameMode, world } from "@minecraft/server";
/**
 * Gets the Gamemode of a player
 * @author Smell of Curry
 * @param {Player} player player to get
 * @returns {GameMode}
 * @example if (getGamemode(player) == "creative") return;
 */
export function getGamemode(player) {
    return Object.values(GameMode).find((g) => [...world.getPlayers({ name: player.name, gameMode: g })].length);
}
