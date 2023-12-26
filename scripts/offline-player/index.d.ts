import { Dimension, DimensionLocation, GameMode, Player, ScoreboardIdentityType, Vector3 } from "@minecraft/server";
/**
 * @beta
 * Contains an identity of the scoreboard item.
 */
declare class ScoreboardOfflineIdentity {
    private constructor();
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
    getScore(objectiveId: string): number | undefined;
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
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @remarks
     *  Gets the total experience of the Player.
     *
     */
    getTotalXp(): number;
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     *
     */
    isOp(): boolean;
    /**
     * @remarks
     * If the player is online, this will return that player corresponds to.
     *
     */
    getPlayer(): Player | undefined;
}
export { OfflinePlayer, ScoreboardOfflineIdentity };
