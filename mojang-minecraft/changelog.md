# "mojang-minecraft" module Changelog

Highly requested suggestion for the GameTest community.

> **Sources**:
>
> - [Minecraft Bedrock Beta Changelog](https://feedback.minecraft.net/hc/en-us/sections/360001185332-Beta-Information-and-Changelogs)
> - [Minecraft Bedrock Release Changelog](https://feedback.minecraft.net/hc/en-us/sections/360001186971-Release-Changelogs)

## Minecraft Beta & Preview - 1.19.0.20/21
> **Posted: April 6, 2022**
> Information on the Minecraft Preview and Beta:
> - Preview Version: 1.19.0.21
> - Beta Version: 1.19.0.20

- Fixed `Date.now()` to no longer truncate to a 32-bit integer

### mojang-gametest module: Test
- Added `function rotateVector` - Rotates a vector relative to the GameTest structure rotation

### mojang-minecraft module
- New property on Player: `onScreenDisplay : ScreenDisplay` - exposes a new interface to trigger on screen content

**ScreenDisplay Type**
- `setTitle(title : String, options? : TitleDisplayOptions)` - cause a title to show up on the player's HUD, optionally specifying the subtitle and fade in, stay and fade out times
- `clearTitle()` - clear title and subtitle
- `updateSubtitle(subtitle : String)` - update the subtitle (but not the title)
- `setActionBar(text : String)` - set the action bar text

**TitleDisplayOptions object**
- `subtitle? : String` - optional subtitle
- `fadeInSeconds : Int` - number of seconds to fade in new title and subtitle
- `staySeconds : Int` - number of seconds to have the title and subtitle stay on screen
- `fadeOutSeconds : Int` - number of seconds to fade out title and subtitle

Support of dynamic properties that script can use to persist data per-World or per-Entity.  Note that properties must be registered using the propertyRegistry in the new WorldInitialize event

**DynamicPropertiesDefinition**
- Added `function defineNumber(identifier: string): void` - Defines a dynamic number property
- Added `function defineString(identifier: string, maxLength: number): void` - Defines a dynamic string property
- Added `function defineBoolean(identifier: string): void` - Defines a dynamic boolean property
- Added event `worldInitialize(worldInitializeEvent: WorldInitializeEvent)` - Fires during world load and contains the property registry used for declaring dynamic properties

**PropertyRegistry**
- Added `function registerEntityTypeDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition, entityType: EntityType)` - Registers dynamic property definitions for the given EntityType
- Added `function registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition)` - Registers property definitions for the world

**World object/Entity object additions:**
- Added `function setDynamicProperty(identifier: string, value: boolean | string | number)` - Adds a dynamic property to the world/entity
- Added `function getDynamicProperty(identifier: string): boolean | string | number` - Gets a dynamic property from the world/entity if it exists, otherwise returns undefined
- Added `function removeDynamicProperty(identifier: string): boolean` - Removes a dynamic property value from the world/entity

**New events:**
- Added event `events.projectileHit` - Fires when a projectile hits a Block or Entity
- Added event `events.itemStartUseOn` - Sent when the player first interacts with a block
- Added event `events.itemStopUseOn` - Sent when fire if the block is successfully interacted with and the block has changed - such as when grass is turned to a path with a Shovel
- Added event `events.itemStartCharge–`  Sent when the player first starts using a charging/animated item
- Added event `events.itemCompleteCharge` - Sent when the item has completed its charge action
- Added event `events.itemReleaseCharge` - Sent when the user has finished using the item and released the build action
- Added event `events.itemStopCharge` - Sent either when the player has finished an items use cycle or when the player has released the use action with the item
- ItemStartUseOnEvent Added read only property `buildBlockLocation` - The result build block position. Useful for determining where a block was placed
- Added member `player?: Player` to the LeverActivate event - The player that activated the lever

## Minecraft Beta & Preview - 1.18.30.26/27
> **Posted: 16 March 2022**
> Information on the Minecraft Preview and Beta:
> - Preview Version: 1.18.30.27
> - Beta Version: 1.18.30.26

- Added event `'leverActivate'` - fires when a lever is toggled
- Added optional argument `showParticles: bool = true` to function addEffect

## Minecraft Beta & Preview - 1.18.30.22/23
> **Posted: 9 March 2022**
> Information on the Minecraft Preview and Beta:
> - Preview Version: 1.18.30.23 (iOS: 1.18.30.24)
> - Beta Version: 1.18.30.22  

EntityType
- Added read-only property `id: string` - The identifier for the entity type

EntityTypes
- Added `function get(identifier: string)`: EntityType- Returns the corresponding EntityType for the given identifier
- Added `function getAll()`: EntityTypeIterator- Returns an iterator containing all registered entity types

MinecraftEntityTypes
- Provides EntityType constants for each standard Minecraft entity type

## Minecraft Beta & Preview - 1.18.30.20/21
> **Posted: 3 March 2022**
> Information on the Minecraft Preview and Beta: 
> - Preview Version: 1.18.30.21
> - Beta Version: 1.18.30.20

- Added event entityHurt(entityHurtEvent: EntityHurtEvent, options?: EntityEventOptions)- Fires when an entity takes damage
- **Removed 'Minecraft' and 'GameTest' imports; please use 'mojang-minecraft' and 'mojang-gametest'**

**BlockExplodeEvent**
- Removed property destroyedBlockPermutation

**World additions for music management:**
- `queueMusic(trackName : string, musicOptions : MusicOptions)`
- `playMusic(trackName : string, musicOptions : MusicOptions)`
- `stopMusic()`
- Added MusicOptions JS class with volume, fadeSeconds and loop properties

## Minecraft - Beta 1.18.20.27/Preview 1.18.20.28 (Bedrock)

**Exposed the following components for Actors. Each of these has a valueproperty that contains the data of the component.**

- minecraft:variant
- minecraft:skin_id
- minecraft:mark_variant
- minecraft:friction_modifier
- minecraft:ground_offset
- minecraft:scale
- minecraft:push_through

**mojang-minecraft module:**

- Added event `entityHit(entityHitEvent: EntityHitEvent, options?: EntityEventOptions)` - Fires when an entity or block is hit by another entity
- function `playSound(soundID : String, soundOptions : SoundOptions)` - plays a sound for a player, cannot be heard by entities other than that specific player

## Minecraft - Beta 1.18.20.25/Preview 1.18.20.26 (Bedrock)

- Added `nameTagproperty`
- Added `idproperty`
- Added `MinecraftDimensionTypeswith` constants for built-in dimension IDs
- Added spawnItemto spawn an ItemStack in the dimension

**Exposed the following components for Entities:**

- minecraft:can_climb
- minecraft:can_fly
- minecraft:can_power_jump
- minecraft:fire_immune
- minecraft:floats_in_liquid
- minecraft:is_dyable
- minecraft:is_baby
- minecraft:is_charged
- minecraft:is_chested
- minecraft:is_hidden_when_invisible
- minecraft:is_ignited
- minecraft:is_illager_captain
- minecraft:is_saddled
- minecraft:is_shaking
- minecraft:is_sheared
- minecraft:is_stackable
- minecraft:is_stunned
- minecraft:is_tamed
- minecraft:wants_jockey

**BlockInventoryComponent**

- Fixed accessing items in a double chest crashing/being inconsistent

## Minecraft Beta - 1.18.20.23

**Vector**

- Added function `length()`: number- Returns the length of this vector
- Added function `normalized()`: Vector- Returns this as a normalized vector
- Added static function `distance(a:Vector, b:Vector): number` - Returns distance between two vectors
- Added static function `lerp(a:Vector, b:Vector, t: number): Vector` - Returns the linear interpolation between a and b using t as the control
- Added static function `slerp(a:Vector, b:Vector, s: number): Vector`- Returns the spherical linear interpolation between a and b using s as the control
- Added static function `cross(a:Vector, b:Vector): Vector`- Returns the cross product of these two vectors
- Added static function `add(a:Vector, b:Vector): Vector`- Returns the addition of these vectors
- Added static function `subtract(a:Vector, b:Vector): Vector`- Returns the subtraction of these vectors
- Added static function `multiply(a:Vector, b:Vector): Vector` - Returns the component-wise product of these vectors
- Added static function `divide(a:Vector, b:Vector): Vector` - Returns the component-wise division of these vectors
- Added static function `multiply(a:Vector, b:number): Vector` - Returns the product of this vector and a scalar
- Added static function `divide(a:Vector, b:number): Vector` - Returns the division of this vector and a scalar
- Added static function `min(a:Vector, b:Vector): Vector` - Returns a vector that is made from the smallest components of two vectors.
- Added static function `max(a:Vector, b:Vector): Vector` - Returns a vector that is made from the largest components of two vectors
  World
- Added function `playSound(soundName: String, soundOptions: SoundOptions): void- plays a sound specified by the sound name, at a location, pitch, or volume as optionally specified in the SoundOptions argument
  EntityItemComponent
- Added component EntityItemComponentthat can be used to obtain an ItemStack from an item entity – e.g., getComponent(“item”).itemStack

## Minecraft Beta - 1.18.20.21

**New Module! We added a mojang-minecraft-ui module with API structures for creating simple dialog boxes:**

- Added ActionFormData/ModalFormData/MessageFormData types in the mojang-minecraft-ui namespace.

  > **For more references:**
  >
  > - [Documentation on the Minecraft Creator documentation site](https://aka.ms/buildwithminecraft)
  > - [Code examples on this repository](https://github.com/JaylyDev/gametest-example/tree/main/mojang-minecraft-ui/classes)

**mojang-minecraft module updates:**

**World**
- Updated property direction to blockFace in world.events.beforeItemUseOn and world.`events.itemUseOn` 
- Added event World.event.beforeDataDrivenEntityTriggerEvent - Fires before the data driven trigger is applied
- Added event World.event.dataDrivenEntityTriggerEvent - Fires after the data driven trigger is applied
- For the above events, each accept an optional EntityDataDrivenTriggerEventOptions
- **(Breaking Change) property entity removed**
- Added property `entities: Entity[]` - If specified, will restrict to just the specified entities
- Changed return type of function getPlayersto PlayerIterator

**EntityDataDrivenTriggerEventOptions**
- Inherited from EntityEventOptions
- property `eventTypes: string[]` - If specified, will restrict to events with the specified name (I.E minecraft:ageable_grow_up)
- (Inherited) property `entities: Entity[]` - If specified, will restrict to just the specified entities
- (Inherited) property `entityTypes: string[]` - If specified, will restrict to entities with the specified type (I.E minecraft:creeper)

**DefinitionModifier**
- read only property `componentGroupsToAdd: string[]` - List of component groups that will be added as part of this modifier
- read only property `componentGroupsToRemove: string[]` - List of component groups that will be removed as part of this modifier
- property `triggers: Trigger[]` - List of triggers that will fire as part of this modifier
- 
**Trigger**
- property `eventName: string` - Event name of the trigger

**DataDrivenEntityTriggerEvent**
- read only property `entity: Entity` - Entity that the event triggered on
- read only property `id: string` - name of the event

**BeforeDataDrivenEntityTriggerEvent**
- read only property entity: Entity - Entity that the event triggered on
- read only property `id: string` - name of the event
- property `modifiers: DefinitionModifier[]` - List of modifiers that will be applied when the event triggers
- property cancel: bool - If true, the event will not be triggered

**EnchantmentType**
- Added EnchantmentType class
- Read-only property `id: string` - The name of the enchantment type
- Read-only property `maxLevel: int` - The maximum level this type of enchantment can have

**EnchantmentInstance**
- Added EnchantmentInstance class. This represents a binding of an EnchantmentType and level that can be added to an item
- Constructor `EnchantmentInstance(type: EnchantmentType, level : int)`
- Read-only property `type: EnchantmentType` - The enchantment type of this instance
- Property `level: int` - The level of this enchantment instance

**EnchantmentSlot**
- Added EnchantmentSlot enum. This enum represents the item slot or type that an enchantment can be applied to

**EnchantmentList**
- Added EnchantmentList class. This class represents a collection of enchantments that can be applied to an item
- Constructor `EnchantmentList(slot : EnchantSlot)`
- Read-only property `slot: EnchantSlot` - The item slot/type that this collection is to be applied to
- Read-only property `allEnchantments: EnchantmentInstance[] `- All enchantments as part of this enchantment collection
- Method `canAddEnchantment(instance : EnchantmentInstance): bool` - Returns whether or not the provided EnchantmentInstance can be added - to this collection
Method `addEnchantment(instance : EnchantmentInstance): bool` - Attempts to add the enchantment to this collection. Returns true if - successful
Method `removeEnchantment(type : EnchantmentType)`- Removes an EnchantmentInstance with type type from this collection if present
- Method `hasEnchantment(type : EnchantmentType): int` - If this collection has an EnchantmentInstance with type type, returns the level - of the enchantment. Returns 0 if not present

**ItemEnchantmentComponent**
- Added ItemEnchantmentComponent Item component class.

  |

**ItemStack**
- Property enchantments: EnchantmentList - Gets a copy of the current set of enchantments on this ItemStack. Or allows the user to set - the EnchantmentList for the ItemStack
Method removeAllEnchantments- Removes any enchantments that might be present on this ItemStack
- Added function `setLore(loreList: string[]): void`- Sets the lore text for the item
- Added function `getLore(): string[]`- Gets the lore text for the item

## Minecraft Beta - 1.18.10.21

**World**

- Added blockBreak and blockPlace events, which are called when a player breaks or places a block in the world

**BlockExplodeEvent**

- Renamed destroyedBlock to block

**Player**

- Added method `startItemCooldown(itemCategory : string, durationTicks : int)` - Starts or resets a cooldown on an item category (e.g., ender_pearl) for the given duration in ticks
- Added method `getItemCooldown(itemCategory : string)` - Returns the remaining duration in ticks that this player has of the given item category. If no cooldown is present, returns 0.

**ItemCooldownComponent**

- Added ItemCooldownComponent (item.getComponent("minecraft:cooldown"))
- Read-only property cooldownCategory : string - Represents the cooldown category of this item.
- Read-only property cooldownTicks : int - Represents the cooldown time in ticks for this item if cooldown is enabled
- method startCooldown(player : Player)` - Starts or resets a cooldown for this item on the given player if cooldown is enabled for this item

**ItemType**

- Removed getName method and added read-only property .id

## Minecraft Beta - 1.18.10.20

**There are some important breaking changes in APIs creators should be aware of:**

- Renamed mojang-minecraft:Worldobject to mojang-minecraft:world (World still exists but is the type instead of the instance of the world)
  - In practice, this means “World.getDimension” code should now read “world.getDimension”
- Removed mojang-minecraft:Commands- Instead, we are adding runCommand methods on dimension, entity, and player
  - In practice, this means that “Commands.run(“say Hello World”, dimension)” should now read “dimension.runCommand(“say Hello World”)”

**Many exciting new API adds, as well:**

- mojang-minecraft:ItemStack

**Item use events:**

- Added event `World.event.beforeItemUse - Fires before an item is used. Can be cancelled
- Added event `World.event.itemUse - Fires when an item is used and the before event `is not cancelled
- Added event `World.event.beforeItemUseOn - Fires before an item is used on a block. Can be cancelled
- Added event `World.event.itemUseOn - Fires when an item is used on a block and the before event `is not cancelled

**Note that the following definition events only function `with data driven items created as part of the Holiday Creator Features experiment:**

- Added event `World.event.beforeItemDefinitionevent `- Fires before an Item definition event `is processed. Can be cancelled
- Added event `World.event.itemDefinitionevent `- Fires when the Item definition event `is processed and the before event `is not cancelled
- Added method triggerEvent(eventName : String)`- Triggers an event`on the ItemStack if an event `with the given eventName, as defined in the Items JSON file

**mojang-minecraft:Entity**

- Added runCommand method to run a command as an entity
- Added dimension property to get the dimension the entity is in
- Added function `addTag(tag: string): bool- Adds a tag to this entity. Returns true if the tag does not already exist
- Added function `hasTag(tag: string): bool- Returns true if the tag exists on this entity
- Added function `removeTag(tag: string): bool- Removes a tag from this entity. Returns true if the tag was removed
- Added function `getTags(): string[] - Returns all tags on this entity
- Added target property to Entity. targetrepresents the Entity that this Entity is currently targeting, for purposes such as AI targeting
- Added function `getEntitiesFromViewVector(options: EntityRaycastOptions): Entity[]` - Gets all entities that intersects the ray from the entities view vector
- Added function `getBlockFromViewVector(options: BlockRaycastOptions)`: Block – Gets the first block that intersects the ray from the entities view vector

**mojang-minecraft:Dimension**

- Added runCommand method to run a command in a dimension
- Added function `getEntitiesFromRay(pos: Location, direction: Location, options: EntityRaycastOptions): Entity[]- Gets all entities that intersects the ray starting at a location which extends in direction
- Added function `getBlockFromRay(pos: Location, direction: Location, options: BlockRaycastOptions) : Block - Gets the first block that intersects the ray starting at a location which extends in direction

## Minecraft Beta - 1.18.0.21

- Added deltaTime read only property to Tickevent which represents the time between the last Level tick in seconds

## Minecraft Beta - 1.17.40.21

- Component inventory now works with Player inventories

## Minecraft Beta - 1.17.20.23

- Renamed module "Minecraft" to "mojang-minecraft"
  > ```js
  > import * as Minecraft from "mojang-minecraft";
  > ```
- Renamed module "GameTest" to "mojang-gametest"
  > ```js
  > import * as GameTest from "mojang-gametest";
  > ```
- Renamed function `assertBlockTypePresent to assertBlockPresent
- Renamed function `assertEntityData to assertEntityState
- Removed function `assertBlockTypeNotPresent
- Removed function `assertEntityNotPresent
- Removed function `assertEntityNotPresentInArea
- Removed function `assertEntityNotTouching
- Removed function `succeedWhenEntityNotPresent
- Modified signature of function `assertBlockState(blockLocation: BlockLocation, callback: (Block) => boolean)
- Modified signature of function `assertBlockPresent(blockType: BlockType, blockLocation: BlockLocation, isPresent: boolean)
- Modified signature of function `assertEntityPresent(entityTypeIdentifier: string, blockLocation: BlockLocation, isPresent: boolean)
- Modified signature of function `assertEntityPresentInArea(entityTypeIdentifier: string, isPresent: boolean)
- Modified signature of function `assertEntityTouching(entityTypeIdentifier: string, location: Location, isTouching: boolean)
- Modified signature of function `succeedWhenEntityPresent(entityTypeIdentifier: string, location: Location, isPresent: boolean)
- Added GameTestExtension function `assertBlockProperty(propertyName: string, value: number | string | boolean, blockLocation: BlockLocation)

## Minecraft Beta - 1.17.20.22

- Renamed BlockTypes class to MinecraftBlockTypes
- Renamed Effects class to MinecraftEffectTypes
- Renamed Items class to MinecraftItemTypes

**Events**

- Added read-only property currentTick to tick event `- Returns the current server tick
- Renamed event `createEntity to entityCreate
- Renamed event `addEffect to effectAdd
- Renamed event `activatePiston to pistonActivate
- Renamed event `beforeActivatePiston to beforePistonActivate
- Renamed event `explodeBlock to blockExplode
- Renamed event `changeWeather to weatherChange

## Minecraft Beta - 1.17.20.20

**Events**

- Added event `World.events.beforeExplosion - Fires before an explosion occurs
- Added event `World.events.explosion - Fires when an explosion occurs
- Added event `World.events.explodeBlock - Fires when a block breaks due to an explosion
- Added event `World.event.beforeActivatePiston - Fires before a piston is activated
- Added event `World.event.activatePiston - Fires when a piston is activated

**Block**

- Added method getDimension() : Dimension

**BlockPistonComponent**

- Read-only property attachedBlocks - Returns an array containing the BlockLocation of each block attached to the piston
- Read-only property isMoving - Returns true if the piston is expanding or retracting
- Read-only property isExpanded - Returns true if the piston is fully expanded
- Read-only property isExpanding - Returns true if the piston is expanding
- Read-only property isRetracting - Returns true if the piston is retracting
- Read-only property isRetracted - Returns true if the piston is fully retracted

## Minecraft Beta - 1.17.10.22

**Events**

- Renamed 'World.event.weatherChanged' to 'World.event.changeWeather'
- Added event `'World.event.addEffect' - Fires when an effect is applied to an entity.
- Added event `'World.event.createEntity' - Fires when an entity is added to the world.
- Removed function `'World.addEventListener'
- Changed function `'getDuration()' to property 'duration'
- Changed function `'getAmplifier()' to property 'amplifier'
- Added property 'displayName' - Gets the display name of the effect

## Minecraft Beta - 1.17.10.21

- Exposed chest block component and Container
- method `triggerEvent(eventName : string)`- Triggers an event on an entity

**Added location and velocity read-only properties to Entity
function `createExplosion(location : Location, radius : number, explosionOptions : ExplosionOptions)**

- Creates an explosion

  - `ExplosionOptions : class` - Provides additional configuration parameters for createExplosion

**Updates to how blocks are handled in APIs:**

- BlockType, BlockPermutation, and Block instances replace BlockState-based updating

## Minecraft Beta - 1.17.10.20

**Dimension**

- getEntitiesAtBlockLocation(location : BlockLocation) : Entity[] - Returns an array of all entities at the given block location
- spawnEntity(identifier : String, location : BlockLocation) : Entity - Spawns an entity with the given identifier at the given block location
- [Removed] function `getName()`
- property `id : String` - Gets the entity's identifier
  property `nameTag : String` - Gets or sets the entity's name tag

**Player**

- property name : String - Gets the player's name
  method `getPlayers() : Player[]` - Returns all players in the server

## Minecraft Beta - 1.17.0.54

**Components**

- [Removed] function `setColor(color : Number)`
- property value : Number - Gets or sets the color of the entity
- Added additional component interfaces. movement, navigation, healable, breathable, ageable, and tameable components can be referenced via `entity.getComponent(componentName : string)`.
- minecraft:color

**Container - New interface for interacting with entity containers. Can be referenced via entity.getComponent("inventory").container**

- function `setItem(slot : Number, itemStack : ItemStack)` - Adds itemStack to the container at the given slot
- function `getItem(slot : Number) : ItemStack - Gets the itemStack at the given slot
- function `addItem(itemStack : ItemStack)` - Adds the given itemStack to the first available slot of the container
- function `transferItem(fromSlot : Number, toSlot : Number, toContainer : Container)` - Transfers an ItemStack from fromSlot of the container to toSlot of toContainer
- function `swapItems(slot : Number, otherSlot : Number, otherContainer : Container)` - Swaps ItemStacks between slot of the container and otherSlot of otherContainer
- function `worldLocation(relativeLocation : BlockLocation)` - Transforms the coordinates of given GameTest location to its corresponding world location
- function `relativeLocation(worldLocation : BlockLocation)` - Transforms the coordinates of given world location to its corresponding GameTest location

## Minecraft Beta - 1.16.230.54

**Updated Interfaces:**

- assertContainerContains - ItemIdentifier parameter changed to ItemStack
- assertItemEntityNotPresent and assertItemEntityPresent APIs - ItemStack parameter changed to ItemType

**Added New Interfaces:**

- `assertEntityNotTouching(entityIdentifier: string, position : Location)` - Asserts that there is no entity of the given type at the given position
- `assertEntityTouching(entityIdentifier: string, position : Location)` - Asserts that there is an entity of the given type at the given position
- `assertItemEntityCountIs(itemType : ItemType, position : BlockLocation, searchDistance : number, count : number)` - Asserts that the entity item count in the given search area matches the expected count
- `pulseRedstone(position : BlockLocation, duration : number)` - Creates a Redstone block at the given position and destroys it after "duration" ticks

## Minecraft Beta - 1.16.230.52

- New Effect APIs on the Entity Type
- function `getAmplifier()` - Gets the effect's amplifier level
- function `getDuration()` - Gets the effect's remaining duration
- function `addEffect(effectType : EffectType, duration : number, amplifier: number)` - Adds an effect to the Entity
- function `getEffect(effectType : EffectType)` - Gets an effect from the Entity
- Updated constructor to ItemStack
- Updated ItemType
  - constructor (x : number, y: number, z: number)` - World coordinate
  - function `getName()` - gets the item's name
- Add new enumerations: Minecraft.Effects & Minecraft.Items

## Minecraft Beta - 1.16.230.50

- Added Dimension class
- Added World.getDimension

**Updated the GameTest Framework interface. See the list below for specific changes:**

- function `assertEntityPresentInArea(entityIdentifier : string)` - Throws an Error if an entity matching the given identifier does not exist in the test region
- function `print(text : string)` - Prints the given text to the chat
- function `assertEntityInstancePresent(entity : Entity, position : BlockLocation)` - Throws an Error if the given entity is not present in the given block location
- [Removed] function `setEntityTamed(entityIdentifier : string, position : BlockLocation)` - Replaced by component function `setTamed(showParticles : bool)

**Entity**

- function `getComponents()` - Returns an array of supported components
- function `getComponent(componentIdentifier : string)` - Returns the component matching the given identifier
- function `hasComponent(componentIdentifier : string)` - Returns true if the given component exists on the entity and is supported
- function `getName()` - Returns the name of the entity (e.g. "Horse")
- Components for color, health, leashable, and tamemount were added
- function `kill()` - Kills the entity

**World**

- addEventListener(eventName : string, callback : function(entity : Entity))`- Registers an event listener for entity events Supported Events:
- "onEntityCreated" - Fires when an entity is created
- "onEntityDefinitionTriggered" - Fires when an entity definition event `is triggered
  The default value for the tag parameter is now "suite:default"

## Minecraft Beta - 1.16.220.51

- Renamed all references of Actor to Entity
- Renamed BlockPos to BlockLocation
- Updated behavior packs to require explicit module dependencies when using other native modules

## Minecraft Beta - 1.16.220.50

- Updated Blocks shorthand helpers to be camelCase
- Updated Blocks shorthand to only include vanilla blocks
- Added Blocks.get to fetch a block and return null if it doesn't exist
- Added BlockStates to enumerate all block states
- Added setState to Block to update its block state
- Added BlockPos class
- Added ItemStack class GameTest Module:
- Added Tags to enumerate all built-in tags
- Updated all methods that took x, y, z position to take a BlockPos
- Exposed padding when registering game test
- Fixed issue where previous failed GameTest markers still show up in new worlds

## Minecraft Beta - 1.16.210.60

- Minecraft: Added `class Blocks`
- GameTest: Added `function register`