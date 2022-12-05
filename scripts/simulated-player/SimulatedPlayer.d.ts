/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import * as GameTest from "@minecraft/server-gametest";
import * as Minecraft from "@minecraft/server";
/**
 * A simulated player can be used to represent
 * how a player moves throughout the world and to support
 * testing of how entities and the environment will react to a
 * player. This type derives much of its structure and methods
 * from the {@link Minecraft.Player} type.
 */
export declare class SimulatedPlayer {
    private '__player';
    private '__test';
    /**
     * Dimension that the simulated player is currently within.
     * @throws This property can throw when used.
     */
    get 'dimension'(): Minecraft.Dimension;
    /**
     * Location of the center of the head component of the player.
     * @throws This property can throw when used.
     */
    get 'headLocation'(): Minecraft.Location;
    /**
     * Rotation of the head across pitch and yaw angles.
     * @throws This property can throw when used.
     */
    get 'headRotation'(): Minecraft.XYRotation;
    /**
     * Identifier for the player.
     * @throws This property can throw when used.
     */
    get 'id'(): string;
    /**
     * True if the player is currently using a sneaking movement.
    */
    get 'isSneaking'(): boolean;
    set 'isSneaking'(value: boolean);
    /**
     * Current location of the player.
     * @throws This property can throw when used.
     */
    get 'location'(): Minecraft.Vector3;
    /**
     * Name of the player.
     * @throws This property can throw when used.
     */
    get 'name'(): string;
    /**
     * Optional name tag of the player.
     */
    get 'nameTag'(): string;
    set 'nameTag'(value: string);
    /**
     * Contains methods for manipulating the on-screen display of a
     * Player.
     */
    get 'onScreenDisplay'(): Minecraft.ScreenDisplay;
    /**
     * Main rotation of the entity.
     * @throws This property can throw when used.
     */
    get 'rotation'(): Minecraft.XYRotation;
    /**
     * Returns a scoreboard identity that represents this entity.
     * @throws This property can throw when used.
     */
    get 'scoreboard'(): Minecraft.ScoreboardIdentity;
    /**
     * Manages the selected slot in the player's hotbar.
     */
    get 'selectedSlot'(): number;
    set 'selectedSlot'(value: number);
    /**
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking.
     */
    get 'target'(): Minecraft.Entity;
    /**
     * Current speed of the player across X, Y, and Z dimensions.
     * @throws This property can throw when used.
     */
    get 'velocity'(): Minecraft.Vector;
    /**
     * Vector of the current view of the player.
     * @throws This property can throw when used.
     */
    get 'viewDirection'(): Minecraft.Vector3;
    /**
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in seconds, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @param showParticles
     * @throws This function can throw errors.
     */
    addEffect(effectType: Minecraft.EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @remarks
     * Adds experience to a simulated player.
     * @param amount
     * Amount of experience to add.
     * @throws This function can throw errors.
     */
    addExperience(amount: number): boolean;
    /**
     * @remarks
     * Adds a specified tag to a simulated player.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Causes the simulated player to make an attack 'swipe'.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. Target
     * selection is performed by raycasting from the player's head.
     * @throws This function can throw errors.
     */
    attack(): boolean;
    /**
     * @remarks
     * Causes the simulated player to attack the provided target.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. The
     * attack can be performed at any distance and does not require
     * line of sight to the target entity.
     * @param entity
     * @throws This function can throw errors.
     */
    attackEntity(entity: Minecraft.Entity): boolean;
    /**
     * @remarks
     * Destroys the block at blockLocation, respecting the rules of
     * the server player's game mode. The block will be hit until
     * broken, an item is used or stopBreakingBlock is called.
     * Returns true if the block at blockLocation is solid.
     * @param blockLocation
     * Location of the block to interact with.
     * @param direction
     * Direction to place the specified item within.
     * @throws This function can throw errors.
     */
    breakBlock(blockLocation: Minecraft.BlockLocation, direction?: Minecraft.Direction): boolean;
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(options?: Minecraft.BlockRaycastOptions): Minecraft.Block;
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
    getComponent(componentId: string): Minecraft.IEntityComponent;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): Minecraft.IEntityComponent[];
    /**
     * @remarks
     * Returns a property value.
     * @param identifier
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string;
    /**
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: Minecraft.EffectType): Minecraft.Effect;
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: Minecraft.EntityRaycastOptions): Minecraft.Entity[];
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(itemCategory: string): number;
    /**
     * @remarks
     * Returns all tags associated with this simulated player.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Gives the simulated player a particular item stack.
     * @param itemStack
     * Item to give.
     * @param selectSlot
     * Whether to set the selected slot once given.
     * @throws This function can throw errors.
     */
    giveItem(itemStack: Minecraft.ItemStack, selectSlot?: boolean): boolean;
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
     * Tests whether a simulated player has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Performs a raycast from the player’s head and interacts with
     * the first intersected block or entity. Returns true if the
     * interaction was successful. Maximum range is 6 blocks.
     * @throws This function can throw errors.
     */
    interact(): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a block. The
     * block at the specified block location must be solid. Returns
     * true if the interaction was performed.
     * @param blockLocation
     * Location of the block to interact with.
     * @param direction
     * Direction to place the specified item within.
     * @throws This function can throw errors.
     */
    interactWithBlock(blockLocation: Minecraft.BlockLocation, direction?: Minecraft.Direction): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a mob. Returns
     * true if the interaction was performed.
     * @param entity
     * Entity to interact with.
     * @throws This function can throw errors.
     */
    interactWithEntity(entity: Minecraft.Entity): boolean;
    /**
     * @remarks
     * Causes the simulated player to jump.
     * @returns
     * True if a jump was performed.
     * @throws This function can throw errors.
     */
    jump(): boolean;
    /**
     * @remarks
     * Removes this simulated player from the world.
     */
    kick(reason?: string): void;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given block location.
     * @param blockLocation
     * @throws This function can throw errors.
     */
    lookAtBlock(blockLocation: Minecraft.BlockLocation): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given entity.
     * @param entity
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: Minecraft.Entity): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given location.
     * @param location
     * @throws This function can throw errors.
     */
    lookAtLocation(location: Minecraft.Location): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the GameTest.
     * @param westEast
     * @param northSouth
     * @param speed
     * @throws This function can throw errors.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the player's current rotation.
     * @param leftRight
     * @param backwardForward
     * @param speed
     * @throws This function can throw errors.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given block
     * location in a straight line. If a move or navigation is
     * already playing, this will override the last
     * move/navigation.
     * @param blockLocation
     * @param speed
     * @throws This function can throw errors.
     */
    moveToBlock(blockLocation: Minecraft.BlockLocation, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given location in
     * a straight line. If a move or navigation is already playing,
     * this will override the last move/navigation.
     * @param location
     * @param speed
     * @throws This function can throw errors.
     */
    moveToLocation(location: Minecraft.Location, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to a specific block
     * location using navigation. If a move or navigation is
     * already playing, this will override the last move/walk. Note
     * that if the simulated player gets stuck, that simulated
     * player will stop. The player must be touching the ground in
     * order to start navigation.
     * @param blockLocation
     * @param speed
     * @throws This function can throw errors.
     */
    navigateToBlock(blockLocation: Minecraft.BlockLocation, speed?: number): Minecraft.NavigationResult;
    /**
     * @remarks
     * Will use navigation to follow the selected entity to within
     * a one block radius. If a move or navigation is already
     * playing, this will override the last move/navigation.
     * @param entity
     * @param speed
     * @throws This function can throw errors.
     */
    navigateToEntity(entity: Minecraft.Entity, speed?: number): Minecraft.NavigationResult;
    /**
     * @remarks
     * Orders the simulated player to move to a specific location
     * using navigation. If a move or navigation is already
     * playing, this will override the last move/walk. Note that if
     * the simulated player gets stuck, that simulated player will
     * stop. The player must be touching the ground in order to
     * start navigation.
     * @param location
     * @param speed
     * @throws This function can throw errors.
     */
    navigateToLocation(location: Minecraft.Location, speed?: number): Minecraft.NavigationResult;
    /**
     * @remarks
     * Use navigation to follow the route provided via the
     * locations parameter. If a move or navigation is already
     * playing, this will override the last move/navigation.
     * @param locations
     * A list of locations to use for routing.
     * @param speed
     * Net speed to use for doing the navigation.
     * @throws This function can throw errors.
     */
    navigateToLocations(locations: Minecraft.Location[], speed?: number): void;
    /**
     * @remarks
     * This method is inherited from Player, but is inoperative in
     * the case of a SimulatedPlayer.
     * @param soundID
     * Identifier of the sound to play.
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     */
    playSound(soundID: string, soundOptions?: Minecraft.SoundOptions): void;
    /**
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @remarks
     * Removes a specified tag from a simulated player.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Causes the simulated player to turn by the provided angle,
     * relative to the player's current rotation.
     * @param angleInDegrees
     * @throws This function can throw errors.
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @remarks
     * Runs a particular command from the context of this simulated
     * player.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     * @example commands.js
     * ```typescript
     *        player.runCommand("say You got a new high score!");
     *        player.runCommand("scoreboard players set @s score 10");
     *
     * ```
     * @deprecated
     */
    runCommand(commandString: string): never;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Where possible, running a command
     * asynchronously is recommended, especially for long running
     * operations.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<Minecraft.CommandResult>;
    /**
     * @remarks
     * Causes the simulated player to turn to face the provided
     * angle, relative to the GameTest.
     * @param angleInDegrees
     * @throws This function can throw errors.
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @remarks
     * Sets a specified property to a value.
     * @param identifier
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * Sets the game mode that the simulated player is operating
     * under.
     * @param gameMode
     * Game mode to set.
     * @throws This function can throw errors.
     */
    setGameMode(gameMode: Minecraft.GameMode): void;
    /**
     * @remarks
     * Sets a particular item for the simulated player.
     * @param itemStack
     * Item to set.
     * @param slot
     * Slot to place the given item in.
     * @param selectSlot
     * Whether to set the selected slot once set.
     * @throws This function can throw errors.
     */
    setItem(itemStack: Minecraft.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * Sets the main rotation of the entity.
     * @param degreesX
     * @param degreesY
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    /**
     * @remarks
     * Sets a velocity for the entity to move with.
     * @param velocity
     * X/Y/Z components of the velocity.
     * @throws This function can throw errors.
     */
    setVelocity(velocity: Minecraft.Vector): void;
    /**
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    /**
     * @remarks
     * Stops destroying the block that is currently being hit.
     * @throws This function can throw errors.
     */
    stopBreakingBlock(): void;
    /**
     * @remarks
     * Stops interacting with entities or blocks.
     * @throws This function can throw errors.
     */
    stopInteracting(): void;
    /**
     * @remarks
     * Stops moving/walking/following if the simulated player is
     * moving.
     * @throws This function can throw errors.
     */
    stopMoving(): void;
    /**
     * @remarks
     * Stops using the currently active item.
     * @throws This function can throw errors.
     */
    stopUsingItem(): void;
    /**
     * @remarks
     * Teleports the selected player to a new location
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param xRotation
     * X rotation of the player after teleportation.
     * @param yRotation
     * Y rotation of the player after teleportation.
     * @throws This function can throw errors.
     */
    teleport(location: Minecraft.Location, dimension: Minecraft.Dimension, xRotation: number, yRotation: number): void;
    /**
     * @remarks
     * Teleports the selected player to a new location, and will
     * have the player facing a specified location.
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param facingLocation
     * Location that this player will be facing.
     * @throws This function can throw errors.
     */
    teleportFacing(location: Minecraft.Location, dimension: Minecraft.Dimension, facingLocation: Minecraft.Location): void;
    /**
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks
     * Causes the simulated player to use an item. Does not consume
     * the item. Returns false if the item is on cooldown.
     * @param itemStack
     * Item to use.
     * @throws This function can throw errors.
     */
    useItem(itemStack: Minecraft.ItemStack): boolean;
    /**
     * @remarks
     * Causes the simulated player to hold and use an item in their
     * inventory.
     * @param slot
     * Index of the inventory slot.
     * @throws This function can throw errors.
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item in their
     * inventory on a block. The block at the specified block
     * location must be solid. Returns true if the item was used.
     * @param slot
     * Index of the slot to use.
     * @param blockLocation
     * Location to use the item upon.
     * @param direction
     * Direction to place the specified item within.
     * @param faceLocationX
     * Block-face-relative X position where to place the item.
     * @param faceLocationY
     * Block-face-relative Y position where to place the item.
     * @throws This function can throw errors.
     */
    useItemInSlotOnBlock(slot: number, blockLocation: Minecraft.BlockLocation, direction?: Minecraft.Direction, faceLocationX?: number, faceLocationY?: number): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item on a block. The
     * block at the specified block location must be solid. Returns
     * true if the item was used.
     * @param itemStack
     * Item to use.
     * @param blockLocation
     * Location to use the item upon.
     * @param direction
     * Direction to place the specified item within.
     * @param faceLocationX
     * Block-face-relative X position where to place the item.
     * @param faceLocationY
     * Block-face-relative Y position where to place the item.
     * @throws This function can throw errors.
     */
    useItemOnBlock(itemStack: Minecraft.ItemStack, blockLocation: Minecraft.BlockLocation, direction?: Minecraft.Direction, faceLocationX?: number, faceLocationY?: number): boolean;
    constructor(player: GameTest.SimulatedPlayer, test: GameTest.Test);
}
