import { Dimension, DimensionLocation, GameMode, Player, Vector3, world } from "@minecraft/server";

/**
 * @internal
 * Offline player data object stored in dynamic property
 */
interface IOfflinePlayer {
    readonly format_version: number;
    // Entity
    readonly dimension: string;
    readonly id: string;
    readonly isSneaking: boolean;
    readonly location: Vector3;
    readonly typeId: "minecraft:player";
    // Player
    readonly level: number;
    readonly name: string;
    readonly totalXpNeededForNextLevel: number;
    readonly xpEarnedAtCurrentLevel: number;
    readonly spawnPoint: DimensionLocation | undefined;
    readonly totalXp: number;
    readonly isOp: boolean;
    readonly gameMode: GameMode;
    readonly lastPlayed: number;
}

/**
 * @internal
 */
interface PlayerAdditionalProperties {
    location: Vector3;
    gameMode: GameMode;
};

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
        this.getSpawnPoint = () => data.spawnPoint;
        this.getTotalXp = () => data.totalXp;
        this.isOp = () => data.isOp;
        this.getPlayer = () => world.getAllPlayers().find((player) => player.id === this.id);
    }
    /**
     * @description
     * Gets the player by the given ID, regardless if they are offline or online.
     * This will return an object even if the player does not exist. To this method, all players will exist.
     * @param id the UUID of the player to retrieve
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
        const isId = /^\d+$/.test(idOrName);
        if (isId) {
            const value = world.getDynamicProperty(`player_${idOrName}`) as string | undefined;
            if (!value) throw new Error(`Player with id ${idOrName} does not exist`);
            const data = JSON.parse(value) as IOfflinePlayer;
            return new OfflinePlayer(data);
        }
        else if (typeof idOrName === "string") {
            // try to find the dynamic property by name in every object
            const ids = world.getDynamicPropertyIds().filter(id => id.startsWith('player_'));
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
            spawnPoint: player.getSpawnPoint(),
            totalXp: player.getTotalXp(),
            isOp: player.isOp(),
            gameMode: additionalProperties.gameMode,
            lastPlayed: Date.now()
        };
        world.setDynamicProperty(`player_${player.id}`, JSON.stringify(data));
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

world.beforeEvents.playerLeave.subscribe(({ player }) => {
    let playerGameMode: GameMode | undefined;
    let playerLocation: Vector3 = {
        x: player.location.x > 1e6 ? Math.round(player.location.x) : parseFloat(player.location.x.toPrecision(7)),
        y: player.location.y > 1e6 ? Math.round(player.location.y) : parseFloat(player.location.y.toPrecision(7)),
        z: player.location.z > 1e6 ? Math.round(player.location.z) : parseFloat(player.location.z.toPrecision(7))
    };

    for (const key in GameMode) {
        const gameMode = GameMode[key];
        if (player.matches({ gameMode: gameMode })) playerGameMode = gameMode;
    }

    if (!playerGameMode) throw new Error("Player gamemode not found");

    OfflinePlayer.createProfile(player, {
        gameMode: playerGameMode,
        location: playerLocation
    });
});

export { OfflinePlayer };
