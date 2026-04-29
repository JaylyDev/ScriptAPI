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
     * Returns the player-visible name of this identity.
     *
     */
    displayName;
    /**
     * @remarks
     * Identifier of the scoreboard identity.
     *
     */
    id;
    /**
     * @remarks
     * Type of the scoreboard identity.
     *
     */
    type = ScoreboardIdentityType.Player;
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
        this.commandPermissionLevel = data.commandPermissionLevel;
        this.getSpawnPoint = () => data.spawnPoint;
        this.getTotalXp = () => data.totalXp;
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
            commandPermissionLevel: player.commandPermissionLevel,
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
     * Dimension that the entity is currently within.
     *
     */
    dimension;
    /**
     * @remarks
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it. This
     * property is accessible even if {@link Entity.isValid} is
     * false.
     *
     */
    id;
    /**
     * @remarks
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     *
     */
    isSneaking;
    /**
     * @remarks
     * Current location of the entity.
     *
     */
    location;
    /**
     * @remarks
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     */
    typeId = "minecraft:player";
    // Player
    /**
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     *
     */
    level;
    /**
     * @remarks
     * Name of the player.
     *
     */
    name;
    /**
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     *
     */
    totalXpNeededForNextLevel;
    /**
     * @remarks
     * The current set of experience achieved for the player.
     *
     */
    xpEarnedAtCurrentLevel;
    /**
     * @remarks
     * The current gamemode for the player.
     *
     */
    gameMode;
    /**
     * @remarks
     * Gets the last date and time that this player was witnessed
     * on this server.
     * It will return Date of last log-in for this player in the
     * amount of milliseconds since midnight, January 1, 1970 UTC.
     *
     */
    lastPlayed;
    /**
     * @remarks
     * Returns a scoreboard identity that represents this entity.
     * Will remain valid when the entity is killed.
     *
     */
    scoreboardIdentity;
    commandPermissionLevel;
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
     * @remarks
     * If the player is online, this will return that player corresponds to.
     *
     */
    getPlayer() {
        throw new TypeError("Illegal invocation");
    }
}
const gamemodes = [GameMode.Survival, GameMode.Creative, GameMode.Adventure, GameMode.Spectator];
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
