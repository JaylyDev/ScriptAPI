// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Dimension, DimensionLocation, GameMode, Player, ScoreboardIdentityType, Vector3, world } from "@minecraft/server";

/**
 * @internal
 * Offline player data object stored in dynamic property
 */
interface IOfflinePlayer {
    format_version: number;
    // Entity
    dimension: string;
    id: string;
    isSneaking: boolean;
    location: Vector3;
    typeId: "minecraft:player";
    scoreboard?: IScoreboardOfflineIdentity;
    // Player
    level: number;
    name: string;
    totalXpNeededForNextLevel: number;
    xpEarnedAtCurrentLevel: number;
    spawnPoint: DimensionLocation | undefined;
    totalXp: number;
    isOp: boolean;
    gameMode: GameMode;
    lastPlayed: number;
}

/**
 * @internal
 */
interface PlayerAdditionalProperties {
    location: Vector3;
    gameMode: GameMode;
};

/**
 * @internal
 */
interface IScoreboardOfflineIdentity {
    id: number;
};

/**
 * @beta
 * Contains an identity of the scoreboard item.
 */
class ScoreboardOfflineIdentity {
    private constructor(data: IScoreboardOfflineIdentity, player: IOfflinePlayer) {
        this.displayName = player.name;
        this.id = data.id;
    };
    /**
     * @internal
     */
    static createIdentity(data: IScoreboardOfflineIdentity | undefined, player: IOfflinePlayer): ScoreboardOfflineIdentity | undefined {
        if (!data) return;
        return new ScoreboardOfflineIdentity(data, player);
    };
    /**
     * @remarks
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @remarks
     * Type of the scoreboard identity.
     *
     */
    readonly type = ScoreboardIdentityType.Player;
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
    getScore(objectiveId: string): number | undefined {
        return world.getDynamicProperty('jayly:scoreboard_' + objectiveId + '_' + this.id) as number | undefined;
    };
}

/**
 * @description
 * Represents a reference to a player identity and the data
 * belonging to a player that is stored on the disk and can,
 * thus, be retrieved without the player needing to be online.
 */
class OfflinePlayer {
    private constructor(data: IOfflinePlayer) {
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
    /**
     * @description
     * Gets the player by the given ID, regardless if they are offline or online.
     * This will return an object even if the player does not exist. To this method, all players will exist.
     * @param id the ID of the player to retrieve
     * @returns an offline player.
     */
    static get(id: `${number}`): OfflinePlayer;
    /**
     * @deprecated
     * Persistent storage of users should be by ID as names are no longer unique past a single session.
     * @description
     * Gets the player by the given name, regardless if they are offline or online.
     * This will return an object even if the player does not exist. To this method, all players will exist.
     * @param name the name the player to retrieve
     * @returns an offline player.
     */
    static get(name: string): OfflinePlayer;
    static get(idOrName: `${number}` | string): OfflinePlayer {
        // check if string is an integer
        const isId = idOrName.length > 0 && Number.isInteger(Number(idOrName));
        if (isId) {
            const value = world.getDynamicProperty(`jayly:player_${idOrName}`) as string | undefined;
            if (!value) throw new Error(`Player with id ${idOrName} does not exist`);
            const data = JSON.parse(value) as IOfflinePlayer;
            return new OfflinePlayer(data);
        }
        else if (typeof idOrName === "string") {
            // try to find the dynamic property by name in every object
            const ids = world.getDynamicPropertyIds().filter(id => id.startsWith('jayly:player_'));
            const value = ids.find(id => {
                const data = world.getDynamicProperty(id) as string;
                const parsed = JSON.parse(data) as IOfflinePlayer;
                return parsed.name === idOrName;
            });
            if (!value) throw new Error(`Player with name ${idOrName} does not exist`);
            return new OfflinePlayer(JSON.parse(world.getDynamicProperty(value) as string));
        }
        else throw new Error("Invalid argument");
    }
    /**
     * @internal
     */
    static createProfile(player: Player, additionalProperties: PlayerAdditionalProperties) {
        const data: IOfflinePlayer = {
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
                if (!score) continue;
                world.setDynamicProperty('jayly:scoreboard_' + objective.id + '_' + scoreboardId, score);
            }
        }

        world.setDynamicProperty(`jayly:player_${player.id}`, JSON.stringify(data));
    };
    /**
     * @remarks
     * Dimension that the entity is currently within.
     *
     */
    readonly dimension: Dimension;
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
    readonly id: string;
    /**
     * @remarks
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     *
     */
    readonly isSneaking: boolean;
    /**
     * @remarks
     * Current location of the entity.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     */
    readonly typeId = "minecraft:player";
    // Player
    /**
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     *
     */
    readonly level: number;
    /**
     * @remarks
     * Name of the player.
     *
     */
    readonly name: string;
    /**
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     *
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * The current set of experience achieved for the player.
     *
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * The current gamemode for the player.
     * 
     */
    readonly gameMode: GameMode;
    /**
     * @remarks
     * Gets the last date and time that this player was witnessed
     * on this server.
     * It will return Date of last log-in for this player in the
     * amount of milliseconds since midnight, January 1, 1970 UTC.
     * 
     */
    readonly lastPlayed: number;
    /**
     * @remarks
     * Returns a scoreboard identity that represents this entity.
     * Will remain valid when the entity is killed.
     *
     */
    readonly scoreboardIdentity?: ScoreboardOfflineIdentity;
    /**
     * @remarks
     * Gets the current spawn point of the player.
     *
     */
    getSpawnPoint(): DimensionLocation | undefined {
        throw new TypeError("Illegal invocation");
    }
    /**
     * @remarks
     *  Gets the total experience of the Player.
     *
     */
    getTotalXp(): number {
        throw new TypeError("Illegal invocation");
    }
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     *
     */
    isOp(): boolean {
        throw new TypeError("Illegal invocation");
    }
    /**
     * @remarks
     * If the player is online, this will return that player corresponds to.
     * 
     */
    getPlayer(): Player | undefined {
        throw new TypeError("Illegal invocation");
    }
}

const gamemodes: GameMode[] = [GameMode.survival, GameMode.creative, GameMode.adventure, GameMode.spectator];

world.beforeEvents.playerLeave.subscribe(({ player }) => {
    let playerGameMode: GameMode | undefined;
    let playerLocation: Vector3 = {
        x: player.location.x > 1e6 ? Math.round(player.location.x) : parseFloat(player.location.x.toPrecision(7)),
        y: player.location.y > 1e6 ? Math.round(player.location.y) : parseFloat(player.location.y.toPrecision(7)),
        z: player.location.z > 1e6 ? Math.round(player.location.z) : parseFloat(player.location.z.toPrecision(7))
    };

    for (const gameMode of gamemodes) {
        if (player.matches({ gameMode })) playerGameMode = gameMode;
    }

    if (!playerGameMode) throw new Error("Player gamemode not found");

    OfflinePlayer.createProfile(player, {
        gameMode: playerGameMode,
        location: playerLocation
    });
});

export { OfflinePlayer, ScoreboardOfflineIdentity };