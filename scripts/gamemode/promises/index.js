import { Player, GameMode } from '@minecraft/server';

/**
 * @remarks
 * Gets the game mode for an entity.
 * @param {Player} player
 * The player to retrieve.
 * @returns {GameMode} Player's gamemode
 * @throws This function can throw errors.
 */
 export function getGamemode(player) {
    if (!(player instanceof Player)) throw new TypeError('Parameter is not an instance of Player');
    return Promise.any([
        player.runCommandAsync(`testfor @s[m=${GameMode.survival}]`).then(() => GameMode.survival),
        player.runCommandAsync(`testfor @s[m=${GameMode.creative}]`).then(() => GameMode.creative),
        player.runCommandAsync(`testfor @s[m=${GameMode.adventure}]`).then(() => GameMode.adventure),
        player.runCommandAsync(`testfor @s[m=${GameMode.spectator}]`).then(() => GameMode.spectator),
    ]).catch(() => null);
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
    player.runCommandAsync(`gamemode ${gameMode}`);
};
