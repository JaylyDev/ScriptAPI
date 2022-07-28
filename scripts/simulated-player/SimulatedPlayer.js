/**
 * A simulated player can be used to represent
 * how a player moves throughout the world and to support
 * testing of how entities and the environment will react to a
 * player. This type derives much of its structure and methods
 * from the {@link mojangMinecraft.Player} type.
 */
var SimulatedPlayer = /** @class */ (function () {
    function SimulatedPlayer(player, test) {
        this.__player = player;
        this.__test = test;
    }
    Object.defineProperty(SimulatedPlayer.prototype, 'dimension', {
        /**
         * Dimension that the simulated player is currently within.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.dimension; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'headLocation', {
        /**
         * Location of the center of the head component of the player.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.headLocation; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'headRotation', {
        /**
         * Rotation of the head across pitch and yaw angles.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.headRotation; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'id', {
        /**
         * Identifier for the player.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.id; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, "isSneaking", {
        /**
         * True if the player is currently using a sneaking movement.
        */
        get: function () {
            return this.__player.isSneaking;
        },
        set: function (value) {
            this.__player.isSneaking = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimulatedPlayer.prototype, 'location', {
        /**
         * Current location of the player.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.location; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'name', {
        /**
         * Name of the player.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.name; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, "nameTag", {
        /**
         * Optional name tag of the player.
         */
        get: function () {
            return this.__player.nameTag;
        },
        set: function (value) {
            this.__player.nameTag = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimulatedPlayer.prototype, 'onScreenDisplay', {
        /**
         * Contains methods for manipulating the on-screen display of a
         * Player.
         */
        get: function () { return this.__player.onScreenDisplay; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'rotation', {
        /**
         * Main rotation of the entity.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.rotation; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'scoreboard', {
        /**
         * Returns a scoreboard identity that represents this entity.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.scoreboard; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'selectedSlot', {
        /**
         * Manages the selected slot in the player's hotbar.
         */
        get: function () {
            return this.__player.selectedSlot;
        },
        set: function (value) {
            this.__player.selectedSlot = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'target', {
        /**
         * Retrieves or sets an entity that is used as the target of
         * AI-related behaviors, like attacking.
         */
        get: function () {
            return this.__player.target;
        },
        set: function (value) {
            this.__player.target = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'velocity', {
        /**
         * Current speed of the player across X, Y, and Z dimensions.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.velocity; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SimulatedPlayer.prototype, 'viewVector', {
        /**
         * Vector of the current view of the player.
         * @throws This property can throw when used.
         */
        get: function () { return this.__player.viewVector; },
        enumerable: false,
        configurable: true
    });
    ;
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
    SimulatedPlayer.prototype.addEffect = function (effectType, duration, amplifier, showParticles) { return this.__player.addEffect(effectType, duration, amplifier, showParticles); };
    ;
    /**
     * @remarks
     * Adds experience to a simulated player.
     * @param amount
     * Amount of experience to add.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.addExperience = function (amount) { return this.__player.addExperience(amount); };
    ;
    /**
     * @remarks
     * Adds a specified tag to a simulated player.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.addTag = function (tag) { return this.__player.addTag(tag); };
    ;
    /**
     * @remarks
     * Causes the simulated player to make an attack 'swipe'.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. Target
     * selection is performed by raycasting from the player's head.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.attack = function () { return this.__player.attack(); };
    ;
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
    SimulatedPlayer.prototype.attackEntity = function (entity) { return this.__player.attackEntity(entity); };
    ;
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
    SimulatedPlayer.prototype.breakBlock = function (blockLocation, direction) { return this.__player.breakBlock(blockLocation, direction); };
    ;
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.getBlockFromViewVector = function (options) { return this.__player.getBlockFromViewVector(options); };
    ;
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
    SimulatedPlayer.prototype.getComponent = function (componentId) { return this.__player.getComponent(componentId); };
    ;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    SimulatedPlayer.prototype.getComponents = function () { return this.__player.getComponents(); };
    ;
    /**
     * @remarks
     * Returns a property value.
     * @param identifier
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.getDynamicProperty = function (identifier) { return this.__player.getDynamicProperty(identifier); };
    ;
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
    SimulatedPlayer.prototype.getEffect = function (effectType) { return this.__player.getEffect(effectType); };
    ;
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.getEntitiesFromViewVector = function (options) { return this.__player.getEntitiesFromViewVector(options); };
    ;
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.getItemCooldown = function (itemCategory) { return this.__player.getItemCooldown(itemCategory); };
    ;
    /**
     * @remarks
     * Returns all tags associated with this simulated player.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.getTags = function () { return this.__player.getTags(); };
    ;
    /**
     * @remarks
     * Gives the simulated player a particular item stack.
     * @param itemStack
     * Item to give.
     * @param selectSlot
     * Whether to set the selected slot once given.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.giveItem = function (itemStack, selectSlot) { return this.__player.giveItem(itemStack, selectSlot); };
    ;
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    SimulatedPlayer.prototype.hasComponent = function (componentId) { return this.__player.hasComponent(componentId); };
    ;
    /**
     * @remarks
     * Tests whether a simulated player has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.hasTag = function (tag) { return this.__player.hasTag(tag); };
    ;
    /**
     * @remarks
     * Performs a raycast from the player’s head and interacts with
     * the first intersected block or entity. Returns true if the
     * interaction was successful. Maximum range is 6 blocks.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.interact = function () { return this.__player.interact(); };
    ;
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
    SimulatedPlayer.prototype.interactWithBlock = function (blockLocation, direction) { return this.__player.interactWithBlock(blockLocation, direction); };
    ;
    /**
     * @remarks
     * Causes the simulated player to interact with a mob. Returns
     * true if the interaction was performed.
     * @param entity
     * Entity to interact with.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.interactWithEntity = function (entity) { return this.__player.interactWithEntity(entity); };
    ;
    /**
     * @remarks
     * Causes the simulated player to jump.
     * @returns
     * True if a jump was performed.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.jump = function () { return this.__player.jump(); };
    ;
    /**
     * @remarks
     * Removes this simulated player from the world.
     */
    SimulatedPlayer.prototype.kick = function (reason) {
        if (reason)
            this.__test.print("\u00A7e".concat(this.__player.name, " is kicked from the game: ").concat(reason));
        else
            this.__test.print("\u00A7e".concat(this.__player.name, " is kicked from the game"));
        return this.__test.removeSimulatedPlayer(this.__player);
    };
    ;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.kill = function () { return this.__player.kill(); };
    ;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given block location.
     * @param blockLocation
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.lookAtBlock = function (blockLocation) { return this.__player.lookAtBlock(blockLocation); };
    ;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given entity.
     * @param entity
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.lookAtEntity = function (entity) { return this.__player.lookAtEntity(entity); };
    ;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given location.
     * @param location
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.lookAtLocation = function (location) { return this.__player.lookAtLocation(location); };
    ;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the GameTest.
     * @param westEast
     * @param northSouth
     * @param speed
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.move = function (westEast, northSouth, speed) { return this.__player.move(westEast, northSouth, speed); };
    ;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the player's current rotation.
     * @param leftRight
     * @param backwardForward
     * @param speed
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.moveRelative = function (leftRight, backwardForward, speed) { return this.__player.moveRelative(leftRight, backwardForward, speed); };
    ;
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
    SimulatedPlayer.prototype.moveToBlock = function (blockLocation, speed) { return this.__player.moveToBlock(blockLocation, speed); };
    ;
    /**
     * @remarks
     * Orders the simulated player to move to the given location in
     * a straight line. If a move or navigation is already playing,
     * this will override the last move/navigation.
     * @param location
     * @param speed
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.moveToLocation = function (location, speed) { return this.__player.moveToLocation(location, speed); };
    ;
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
    SimulatedPlayer.prototype.navigateToBlock = function (blockLocation, speed) { return this.__player.navigateToBlock(blockLocation, speed); };
    ;
    /**
     * @remarks
     * Will use navigation to follow the selected entity to within
     * a one block radius. If a move or navigation is already
     * playing, this will override the last move/navigation.
     * @param entity
     * @param speed
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.navigateToEntity = function (entity, speed) { return this.__player.navigateToEntity(entity, speed); };
    ;
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
    SimulatedPlayer.prototype.navigateToLocation = function (location, speed) { return this.__player.navigateToLocation(location, speed); };
    ;
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
    SimulatedPlayer.prototype.navigateToLocations = function (locations, speed) { return this.__player.navigateToLocations(locations, speed); };
    ;
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
    SimulatedPlayer.prototype.playSound = function (soundID, soundOptions) { return this.__player.playSound(soundID, soundOptions); };
    ;
    /**
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.removeDynamicProperty = function (identifier) { return this.__player.removeDynamicProperty(identifier); };
    ;
    /**
     * @remarks
     * Removes a specified tag from a simulated player.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.removeTag = function (tag) { return this.__player.removeTag(tag); };
    ;
    /**
     * @remarks
     * Causes the simulated player to turn by the provided angle,
     * relative to the player's current rotation.
     * @param angleInDegrees
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.rotateBody = function (angleInDegrees) { return this.__player.rotateBody(angleInDegrees); };
    ;
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
     */
    SimulatedPlayer.prototype.runCommand = function (commandString) { return this.__player.runCommand(commandString); };
    ;
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
    SimulatedPlayer.prototype.runCommandAsync = function (commandString) { return this.__player.runCommandAsync(commandString); };
    ;
    /**
     * @remarks
     * Causes the simulated player to turn to face the provided
     * angle, relative to the GameTest.
     * @param angleInDegrees
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.setBodyRotation = function (angleInDegrees) { return this.__player.setBodyRotation(angleInDegrees); };
    ;
    /**
     * @remarks
     * Sets a specified property to a value.
     * @param identifier
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.setDynamicProperty = function (identifier, value) { return this.__player.setDynamicProperty(identifier, value); };
    ;
    /**
     * @remarks
     * Sets the game mode that the simulated player is operating
     * under.
     * @param gameMode
     * Game mode to set.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.setGameMode = function (gameMode) { return this.__player.setGameMode(gameMode); };
    ;
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
    SimulatedPlayer.prototype.setItem = function (itemStack, slot, selectSlot) { return this.__player.setItem(itemStack, slot, selectSlot); };
    ;
    /**
     * @remarks
     * Sets the main rotation of the entity.
     * @param degreesX
     * @param degreesY
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.setRotation = function (degreesX, degreesY) { return this.__player.setRotation(degreesX, degreesY); };
    ;
    /**
     * @remarks
     * Sets a velocity for the entity to move with.
     * @param velocity
     * X/Y/Z components of the velocity.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.setVelocity = function (velocity) { return this.__player.setVelocity(velocity); };
    ;
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
    SimulatedPlayer.prototype.startItemCooldown = function (itemCategory, tickDuration) { return this.__player.startItemCooldown(itemCategory, tickDuration); };
    ;
    /**
     * @remarks
     * Stops destroying the block that is currently being hit.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.stopBreakingBlock = function () { return this.__player.stopBreakingBlock(); };
    ;
    /**
     * @remarks
     * Stops interacting with entities or blocks.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.stopInteracting = function () { return this.__player.stopInteracting(); };
    ;
    /**
     * @remarks
     * Stops moving/walking/following if the simulated player is
     * moving.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.stopMoving = function () { return this.__player.stopMoving(); };
    ;
    /**
     * @remarks
     * Stops using the currently active item.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.stopUsingItem = function () { return this.__player.stopUsingItem(); };
    ;
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
    SimulatedPlayer.prototype.teleport = function (location, dimension, xRotation, yRotation) { return this.__player.teleport(location, dimension, xRotation, yRotation); };
    ;
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
    SimulatedPlayer.prototype.teleportFacing = function (location, dimension, facingLocation) { return this.__player.teleportFacing(location, dimension, facingLocation); };
    ;
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
    SimulatedPlayer.prototype.triggerEvent = function (eventName) { return this.__player.triggerEvent(eventName); };
    ;
    /**
     * @remarks
     * Causes the simulated player to use an item. Does not consume
     * the item. Returns false if the item is on cooldown.
     * @param itemStack
     * Item to use.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.useItem = function (itemStack) { return this.__player.useItem(itemStack); };
    ;
    /**
     * @remarks
     * Causes the simulated player to hold and use an item in their
     * inventory.
     * @param slot
     * Index of the inventory slot.
     * @throws This function can throw errors.
     */
    SimulatedPlayer.prototype.useItemInSlot = function (slot) { return this.__player.useItemInSlot(slot); };
    ;
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
    SimulatedPlayer.prototype.useItemInSlotOnBlock = function (slot, blockLocation, direction, faceLocationX, faceLocationY) { return this.__player.useItemInSlotOnBlock(slot, blockLocation, direction, faceLocationX, faceLocationY); };
    ;
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
    SimulatedPlayer.prototype.useItemOnBlock = function (itemStack, blockLocation, direction, faceLocationX, faceLocationY) { return this.__player.useItemOnBlock(itemStack, blockLocation, direction, faceLocationX, faceLocationY); };
    ;
    ;
    return SimulatedPlayer;
}());
export { SimulatedPlayer };
;
