// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, GameMode } from '@minecraft/server';

/**
 * @remarks
 * Gets the game mode for an entity asynchronously.
 * @param {Player} player
 * The player to retrieve.
 * @returns {GameMode} Player's gamemode
 * @throws This function can throw errors.
 */
 export function getGamemode(player) {
    return player.getGameMode();
};

/**
 * @remarks
 * Set the game mode for an entity.
 * @param {Player} player
 * The player to retrieve.
 * @param {GameMode} gameMode
 * @throws This function can throw errors.
 */
export function setGamemode(player, gameMode) {
    if (!(player instanceof Player) || Object.values(GameMode).includes(gameMode)) throw new TypeError('Type conversion failed');
    player.runCommand(`gamemode ${gameMode}`);
};
