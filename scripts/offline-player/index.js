// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { GameMode, ScoreboardIdentityType, world } from "@minecraft/server";
;
;
/**
 * @beta
 * Contains an identity of the scoreboard item.
 */
class ScoreboardOfflineIdentity {
    constructor(data, player) {
        /**
         * @remarks
         * Type of the scoreboard identity.
         *
         */
        this.type = ScoreboardIdentityType.Player;
        this.displayName = player.name;
        this.id = data.id;
    }
    ;
    /**
     * @internal
     */
    static createIdentity(data, player) {
        if (!data)
            return;
        return new ScoreboardOfflineIdentity(data, player);
    }
    ;
    /**
     * @remarks
     * Gets the current score for this participant based on an
     * objective.
     *
     * @param objective
     * The objective to retrieve the score for.
     * @returns
     * Score value.
     * @throws This function can throw errors.
     */
    getScore(objectiveId) {
        return world.getDynamicProperty('jayly:scoreboard_' + objectiveId + '_' + this.id);
    }
    ;
}
/**
 * @description
 * Represents a reference to a player identity and the data
 * belonging to a player that is stored on the disk and can,
 * thus, be retrieved without the player needing to be online.
 */
class OfflinePlayer {
    constructor(data) {
        /**
         * @remarks
         * Identifier of the type of the entity - for example,
         * 'minecraft:skeleton'. This property is accessible even if
         * {@link Entity.isValid} is false.
         *
         */
        this.typeId = "minecraft:player";
        this.dimension = world.getDimension(data.dimension);
        this.id = data.id;
        this.isSneaking = data.isSneaking;
        this.location = data.location;
        this.typeId = data.typeId;
        this.level = data.level;
        this.name = data.name;
        this.totalXpNeededForNextLevel = data.totalXpNeededForNextLevel;
        this.xpEarnedAtCurrentLevel = data.xpEarnedAtCurrentLevel;
        this.gameMode = data.gameMode;
        this.lastPlayed = data.lastPlayed;
        this.scoreboardIdentity = ScoreboardOfflineIdentity.createIdentity(data.scoreboard, data);
        this.getSpawnPoint = () => data.spawnPoint;
        this.getTotalXp = () => data.totalXp;
        this.isOp = () => data.isOp;
        this.getPlayer = () => world.getAllPlayers().find((player) => player.id === this.id);
    }
    static get(idOrName) {
        // check if string is an integer
        const isId = idOrName.length > 0 && Number.isInteger(Number(idOrName));
        if (isId) {
            const value = world.getDynamicProperty(`jayly:player_${idOrName}`);
            if (!value)
                throw new Error(`Player with id ${idOrName} does not exist`);
            const data = JSON.parse(value);
            return new OfflinePlayer(data);
        }
        else if (typeof idOrName === "string") {
            // try to find the dynamic property by name in every object
            const ids = world.getDynamicPropertyIds().filter(id => id.startsWith('jayly:player_'));
            const value = ids.find(id => {
                const data = world.getDynamicProperty(id);
                const parsed = JSON.parse(data);
                return parsed.name === idOrName;
            });
            if (!value)
                throw new Error(`Player with name ${idOrName} does not exist`);
            return new OfflinePlayer(JSON.parse(world.getDynamicProperty(value)));
        }
        else
            throw new Error("Invalid argument");
    }
    /**
     * @internal
     */
    static createProfile(player, additionalProperties) {
        const data = {
            format_version: 1,
            dimension: player.dimension.id,
            id: player.id,
            isSneaking: player.isSneaking,
            location: additionalProperties.location,
            typeId: "minecraft:player",
            level: player.level,
            name: player.name,
            totalXpNeededForNextLevel: player.totalXpNeededForNextLevel,
            xpEarnedAtCurrentLevel: player.xpEarnedAtCurrentLevel,
            gameMode: additionalProperties.gameMode,
            lastPlayed: Date.now(),
            spawnPoint: player.getSpawnPoint(),
            totalXp: player.getTotalXp(),
            isOp: player.isOp(),
        };
        const playerScoreboard = player.scoreboardIdentity;
        if (playerScoreboard) {
            const scoreboardId = playerScoreboard.id;
            data.scoreboard = { id: scoreboardId };
            for (const objective of world.scoreboard.getObjectives()) {
                const score = objective.getScore(playerScoreboard);
                if (!score)
                    continue;
                world.setDynamicProperty('jayly:scoreboard_' + objective.id + '_' + scoreboardId, score);
            }
        }
        world.setDynamicProperty(`jayly:player_${player.id}`, JSON.stringify(data));
    }
    ;
    /**
     * @remarks
     * Gets the current spawn point of the player.
     *
     */
    getSpawnPoint() {
        throw new TypeError("Illegal invocation");
    }
    /**
     * @remarks
     *  Gets the total experience of the Player.
     *
     */
    getTotalXp() {
        throw new TypeError("Illegal invocation");
    }
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     *
     */
    isOp() {
        throw new TypeError("Illegal invocation");
    }
    /**
     * @remarks
     * If the player is online, this will return that player corresponds to.
     *
     */
    getPlayer() {
        throw new TypeError("Illegal invocation");
    }
}
const gamemodes = [GameMode.survival, GameMode.creative, GameMode.adventure, GameMode.spectator];
world.beforeEvents.playerLeave.subscribe(({ player }) => {
    let playerGameMode;
    let playerLocation = {
        x: player.location.x > 1e6 ? Math.round(player.location.x) : parseFloat(player.location.x.toPrecision(7)),
        y: player.location.y > 1e6 ? Math.round(player.location.y) : parseFloat(player.location.y.toPrecision(7)),
        z: player.location.z > 1e6 ? Math.round(player.location.z) : parseFloat(player.location.z.toPrecision(7))
    };
    for (const gameMode of gamemodes) {
        if (player.matches({ gameMode }))
            playerGameMode = gameMode;
    }
    if (!playerGameMode)
        throw new Error("Player gamemode not found");
    OfflinePlayer.createProfile(player, {
        gameMode: playerGameMode,
        location: playerLocation
    });
});
export { OfflinePlayer, ScoreboardOfflineIdentity };
