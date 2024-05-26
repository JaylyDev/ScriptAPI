import { Player as MinecraftPlayer, Dimension, Block, Entity, EntityComponent, ScoreboardIdentity, Vector, Vector2, Vector3 } from "@minecraft/server";
import "@minecraft/server-gametest";
/**
 * Player wrapper to save as much data into a new object.
 *
 * Keeping this class private to avoid confusion between
 * Player class from "@minecraft/server" module.
 */
declare class Player {
    private '__PlayerBlockFromViewDirection';
    private '__PlayerComponents';
    private '__PlayerEntitiesFromViewDirection';
    private '__PlayerTags';
    /**
     * Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly 'dimension': Dimension;
    /**
     * Location of the center of the head component of the player.
     * @throws This property can throw when used.
     */
    readonly 'headLocation': Vector3;
    /**
     * Identifier for the player.
     * @throws This property can throw when used.
     */
    readonly 'id': string;
    /**
     * True if the player is currently using a sneaking movement.
     */
    readonly 'isSneaking': boolean;
    /**
     * Current location of the player.
     * @throws This property can throw when used.
     */
    readonly 'location': Vector3;
    /**
     * Name of the player.
     * @throws This property can throw when used.
     */
    readonly 'name': string;
    /**
     * Optional name tag of the player.
     */
    readonly 'nameTag': string;
    /**
     * Main rotation of the entity.
     * @throws This property can throw when used.
     */
    readonly 'rotation': Vector2;
    /**
     * Returns a scoreboard identity that represents this entity.
     * @throws This property can throw when used.
     */
    readonly 'scoreboard': ScoreboardIdentity;
    /**
     * Manages the selected slot in the player's hotbar.
     */
    readonly 'selectedSlotIndex': number;
    /**
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. For players, which
     * don't use any AI semantics, this property does not do
     * anything.
     */
    readonly 'target': Entity;
    /**
     * Current speed of the player across X, Y, and Z dimensions.
     * @throws This property can throw when used.
     */
    readonly 'velocity': Vector;
    /**
     * Vector of the current view of the player.
     * @throws This property can throw when used.
     */
    readonly 'viewDirection': Vector;
    readonly typeId: string;
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(): Block;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): EntityComponent;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): EntityComponent[];
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(): Entity[];
    /**
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Manually assign some player property to the new player class
     * before failed to get property due to GameTest can't fetch
     * despawned entities.
     * @param {MinecraftPlayer} player
     */
    constructor(player: MinecraftPlayer);
}
/**
 * Contains information regarding a player that has left the
 * world.
 */
export declare class PlayerLeaveEvent {
    player: Player;
    constructor(player: Player);
}
/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export declare class PlayerLeaveEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     * @param {(arg: PlayerLeaveEvent) => void} callback
     * @return {(arg: PlayerLeaveEvent) => void}
     */
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     * @param {(arg: PlayerLeaveEvent) => void} callback
     */
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
}
export {};
