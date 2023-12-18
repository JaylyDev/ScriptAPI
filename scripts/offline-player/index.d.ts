import { Dimension, DimensionLocation, GameMode, Player, Vector3 } from "@minecraft/server";
/**
 * @internal
 */
interface PlayerAdditionalProperties {
    location: Vector3;
    gameMode: GameMode;
}
/**
 * @description
 * Represents a reference to a player identity and the data
 * belonging to a player that is stored on the disk and can,
 * thus, be retrieved without the player needing to be online.
 */
declare class OfflinePlayer {
    private constructor();
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
    /**
     * @internal
     */
    static createProfile(player: Player, additionalProperties: PlayerAdditionalProperties): void;
    /**
     * @remarks
     * Dimension that the entity is currently within.
     *
     * @throws This property can throw when used.
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
     * This property can't be edited in read-only mode.
     *
     */
    readonly isSneaking: boolean;
    /**
     * @remarks
     * Current location of the entity.
     *
     * @throws This property can throw when used.
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
    /**
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     *
     * @throws This property can throw when used.
     */
    readonly level: number;
    /**
     * @remarks
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     *
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * The current set of experience achieved for the player.
     *
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * The current gamemode for the player.
     */
    readonly gameMode: GameMode;
    /**
     * @remarks
     * Gets the last date and time that this player was witnessed
     * on this server.
     * It will return Date of last log-in for this player in the
     * amount of milliseconds since midnight, January 1, 1970 UTC.
     */
    readonly lastPlayed: number;
    /**
     * @remarks
     * Gets the current spawn point of the player.
     *
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @remarks
     *  Gets the total experience of the Player.
     *
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     *
     * @throws This function can throw errors.
     */
    isOp(): boolean;
    /**
     * @remarks
     * If the player is online, this will return that player corresponds to.
     */
    getPlayer(): Player | undefined;
}
export { OfflinePlayer };
