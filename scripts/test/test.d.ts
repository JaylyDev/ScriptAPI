// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

export enum Direction {
  down = "down",
  east = "east",
  north = "north",
  south = "south",
  up = "up",
  west = "west",
}
export enum DisplaySlotId {
  belowname = "belowname",
  list = "list",
  sidebar = "sidebar",
}
export enum EntityDamageCause {
  anvil = "anvil",
  blockExplosion = "blockExplosion",
  charging = "charging",
  contact = "contact",
  drowning = "drowning",
  entityAttack = "entityAttack",
  entityExplosion = "entityExplosion",
  fall = "fall",
  fallingBlock = "fallingBlock",
  fire = "fire",
  fireTick = "fireTick",
  fireworks = "fireworks",
  flyIntoWall = "flyIntoWall",
  freezing = "freezing",
  lava = "lava",
  lightning = "lightning",
  magic = "magic",
  magma = "magma",
  none = "none",
  override = "override",
  piston = "piston",
  projectile = "projectile",
  stalactite = "stalactite",
  stalagmite = "stalagmite",
  starve = "starve",
  suffocation = "suffocation",
  suicide = "suicide",
  temperature = "temperature",
  thorns = "thorns",
  "void" = "void",
  wither = "wither",
}
export enum FluidType {
  lava = "lava",
  potion = "potion",
  powderSnow = "powderSnow",
  water = "water",
}
export enum GameMode {
  adventure = "adventure",
  creative = "creative",
  spectator = "spectator",
  survival = "survival",
}
export enum MessageSourceType {
  clientScript = "clientScript",
  commandBlock = "commandBlock",
  dialogueCommand = "dialogueCommand",
  entityCommand = "entityCommand",
  serverCommand = "serverCommand",
  serverScript = "serverScript",
}
export enum ObjectiveSortOrder {
  ascending = 0,
  descending = 1,
}
export enum ScoreboardIdentityType {
  entity = "entity",
  fakePlayer = "fakePlayer",
  player = "player",
}
export enum TimeOfDay {
  Day = 1000,
  Noon = 6000,
  Sunset = 12000,
  Night = 13000,
  Midnight = 18000,
  Sunrise = 23000,
}
export enum WatchdogTerminateReason {
  hang = "hang",
  stackOverflow = "stackOverflow",
}
export class BeforeChatEvent {
  protected constructor();
  cancel: boolean;
  message: string;
  sender: Player;
  sendToTargets: boolean;
  targets: Player[];
}
export class BeforeChatEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BeforeChatEvent) => void
  ): (arg: BeforeChatEvent) => void;
  unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
}
export class BeforeDataDrivenEntityTriggerEvent {
  protected constructor();
  cancel: boolean;
  readonly entity: Entity;
  readonly id: string;
  modifiers: DefinitionModifier[];
}
export class BeforeDataDrivenEntityTriggerEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void,
    options?: EntityDataDrivenTriggerEventOptions
  ): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
  unsubscribe(
    callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void
  ): void;
}
export class BeforeExplosionEvent {
  protected constructor();
  cancel: boolean;
  readonly dimension: Dimension;
  impactedBlocks: BlockLocation[];
  readonly source: Entity;
}
export class BeforeExplosionEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BeforeExplosionEvent) => void
  ): (arg: BeforeExplosionEvent) => void;
  unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
}
export class BeforeItemDefinitionEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BeforeItemDefinitionTriggeredEvent) => void
  ): (arg: BeforeItemDefinitionTriggeredEvent) => void;
  unsubscribe(
    callback: (arg: BeforeItemDefinitionTriggeredEvent) => void
  ): void;
}
export class BeforeItemDefinitionTriggeredEvent {
  protected constructor();
  cancel: boolean;
  readonly eventName: string;
  item: ItemStack;
  readonly source: Entity;
}
export class BeforeItemUseEvent {
  protected constructor();
  cancel: boolean;
  item: ItemStack;
  readonly source: Entity;
}
export class BeforeItemUseEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BeforeItemUseEvent) => void
  ): (arg: BeforeItemUseEvent) => void;
  unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
}
export class BeforeItemUseOnEvent {
  protected constructor();
  readonly blockFace: Direction;
  readonly blockLocation: BlockLocation;
  cancel: boolean;
  readonly faceLocationX: number;
  readonly faceLocationY: number;
  item: ItemStack;
  readonly source: Entity;
}
export class BeforeItemUseOnEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BeforeItemUseOnEvent) => void
  ): (arg: BeforeItemUseOnEvent) => void;
  unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
}
export class BeforePistonActivateEvent extends BlockEvent {
  protected constructor();
  readonly block: Block;
  cancel: boolean;
  readonly dimension: Dimension;
  readonly isExpanding: boolean;
  readonly piston: BlockPistonComponent;
}
export class BeforePistonActivateEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BeforePistonActivateEvent) => void
  ): (arg: BeforePistonActivateEvent) => void;
  unsubscribe(callback: (arg: BeforePistonActivateEvent) => void): void;
}
export class BeforeWatchdogTerminateEvent {
  protected constructor();
  cancel: boolean;
  readonly terminateReason: WatchdogTerminateReason;
}
export class BeforeWatchdogTerminateEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BeforeWatchdogTerminateEvent) => void
  ): (arg: BeforeWatchdogTerminateEvent) => void;
  unsubscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): void;
}
export class Block {
  protected constructor();
  readonly dimension: Dimension;
  isWaterlogged: boolean;
  readonly location: BlockLocation;
  readonly permutation: BlockPermutation;
  readonly "type": BlockType;
  readonly typeId: string;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  canPlace(
    blockToPlace: BlockPermutation | BlockType,
    faceToPlaceOn?: Direction
  ): boolean;
  getComponent<T extends keyof BlockComponentRoute>(
    componentName: T
  ): BlockComponentRoute[T];
  getRedstonePower(): number | undefined;
  getTags(): string[];
  hasTag(
    tag:
      | "wood"
      | "pumpkin"
      | "plant"
      | "stone"
      | "metal"
      | "diamond_pick_diggable"
      | "gold_pick_diggable"
      | "iron_pick_diggable"
      | "stone_pick_diggable"
      | "wood_pick_diggable"
      | "dirt"
      | "sand"
      | "gravel"
      | "grass"
      | "snow"
      | "rail"
      | "water"
      | "mob_spawner"
      | "lush_plants_replaceable"
      | "azalea_log_replaceable"
      | "not_feature_replaceable"
      | "text_sign"
      | "minecraft"
      | "fertilize_area"
      | "acacia"
      | "birch"
      | "dark_oak"
      | "jungle"
      | "log"
      | "oak"
      | "spruce"
  ): boolean;
  setPermutation(permutation: BlockPermutation): void;
  setType(blockType: BlockType): void;
  trySetPermutation(permutation: BlockPermutation): boolean;
}
export class BlockAreaSize {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number);
  equals(other: BlockAreaSize): boolean;
}
export class BlockBreakEvent extends BlockEvent {
  protected constructor();
  readonly block: Block;
  readonly brokenBlockPermutation: BlockPermutation;
  readonly dimension: Dimension;
  readonly player: Player;
}
export class BlockBreakEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BlockBreakEvent) => void
  ): (arg: BlockBreakEvent) => void;
  unsubscribe(callback: (arg: BlockBreakEvent) => void): void;
}
export class BlockComponent {
  protected constructor();
}
export class BlockEvent {
  protected constructor();
  readonly block: Block;
  readonly dimension: Dimension;
}
export class BlockExplodeEvent extends BlockEvent {
  protected constructor();
  readonly block: Block;
  readonly dimension: Dimension;
  readonly source: Entity;
}
export class BlockExplodeEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BlockExplodeEvent) => void
  ): (arg: BlockExplodeEvent) => void;
  unsubscribe(callback: (arg: BlockExplodeEvent) => void): void;
}
export class BlockHitInformation {
  protected constructor();
  readonly block: Block;
  readonly face: Direction;
  readonly faceLocationX: number;
  readonly faceLocationY: number;
}
export class BlockInventoryComponent extends BlockComponent {
  protected constructor();
  readonly container: BlockInventoryComponentContainer;
  readonly location: BlockLocation;
  readonly typeId: string;
  static readonly componentId = "minecraft:inventory";
}
export class BlockInventoryComponentContainer extends Container {
  protected constructor();
  readonly emptySlotsCount: number;
  readonly size: number;
  addItem(itemStack: ItemStack): void;
  clearAll(): void;
  clearItem(slot: number): void;
  getItem(slot: number): ItemStack;
  getSlot(slot: number): ContainerSlot;
  setItem(slot: number, itemStack?: ItemStack): void;
  swapItems(
    slot: number,
    otherSlot: number,
    otherContainer: Container
  ): boolean;
  transferItem(
    fromSlot: number,
    toSlot: number,
    toContainer: Container
  ): boolean;
}
export class BlockLavaContainerComponent extends BlockComponent {
  protected constructor();
  fillLevel: number;
  readonly location: BlockLocation;
  readonly typeId: string;
  static readonly componentId = "minecraft:lavaContainer";
}
export class BlockLocation {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number);
  above(): BlockLocation;
  blocksBetween(other: BlockLocation): BlockLocation[];
  equals(other: BlockLocation): boolean;
  offset(x: number, y: number, z: number): BlockLocation;
}
export class BlockPermutation {
  protected constructor();
  readonly "type": BlockType;
  clone(): BlockPermutation;
  getAllProperties(): IBlockProperty[];
  getProperty(propertyName: string): IBlockProperty;
  getTags(): string[];
  hasTag(
    tag:
      | "wood"
      | "pumpkin"
      | "plant"
      | "stone"
      | "metal"
      | "diamond_pick_diggable"
      | "gold_pick_diggable"
      | "iron_pick_diggable"
      | "stone_pick_diggable"
      | "wood_pick_diggable"
      | "dirt"
      | "sand"
      | "gravel"
      | "grass"
      | "snow"
      | "rail"
      | "water"
      | "mob_spawner"
      | "lush_plants_replaceable"
      | "azalea_log_replaceable"
      | "not_feature_replaceable"
      | "text_sign"
      | "minecraft"
      | "fertilize_area"
      | "acacia"
      | "birch"
      | "dark_oak"
      | "jungle"
      | "log"
      | "oak"
      | "spruce"
  ): boolean;
}
export class BlockPistonComponent extends BlockComponent {
  protected constructor();
  readonly attachedBlocks: BlockLocation[];
  readonly isExpanded: boolean;
  readonly isExpanding: boolean;
  readonly isMoving: boolean;
  readonly isRetracted: boolean;
  readonly isRetracting: boolean;
  readonly location: BlockLocation;
  readonly typeId: string;
  static readonly componentId = "minecraft:piston";
}
export class BlockPlaceEvent extends BlockEvent {
  protected constructor();
  readonly block: Block;
  readonly dimension: Dimension;
  readonly player: Player;
}
export class BlockPlaceEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: BlockPlaceEvent) => void
  ): (arg: BlockPlaceEvent) => void;
  unsubscribe(callback: (arg: BlockPlaceEvent) => void): void;
}
export class BlockPotionContainerComponent extends BlockComponent {
  protected constructor();
  fillLevel: number;
  readonly location: BlockLocation;
  readonly typeId: string;
  static readonly componentId = "minecraft:potionContainer";
  setPotionType(item: ItemStack): void;
}
export class BlockProperties {
  protected constructor();
  static readonly active = "active";
  static readonly age = "age";
  static readonly ageBit = "age_bit";
  static readonly allowUnderwaterBit = "allow_underwater_bit";
  static readonly attachedBit = "attached_bit";
  static readonly attachment = "attachment";
  static readonly bambooLeafSize = "bamboo_leaf_size";
  static readonly bambooStalkThickness = "bamboo_stalk_thickness";
  static readonly bigDripleafHead = "big_dripleaf_head";
  static readonly bigDripleafTilt = "big_dripleaf_tilt";
  static readonly biteCounter = "bite_counter";
  static readonly blockLightLevel = "block_light_level";
  static readonly bloom = "bloom";
  static readonly booksStored = "books_stored";
  static readonly brewingStandSlotABit = "brewing_stand_slot_a_bit";
  static readonly brewingStandSlotBBit = "brewing_stand_slot_b_bit";
  static readonly brewingStandSlotCBit = "brewing_stand_slot_c_bit";
  static readonly buttonPressedBit = "button_pressed_bit";
  static readonly candles = "candles";
  static readonly canSummon = "can_summon";
  static readonly cauldronLiquid = "cauldron_liquid";
  static readonly chemistryTableType = "chemistry_table_type";
  static readonly chiselType = "chisel_type";
  static readonly clusterCount = "cluster_count";
  static readonly color = "color";
  static readonly colorBit = "color_bit";
  static readonly composterFillLevel = "composter_fill_level";
  static readonly conditionalBit = "conditional_bit";
  static readonly coralColor = "coral_color";
  static readonly coralDirection = "coral_direction";
  static readonly coralFanDirection = "coral_fan_direction";
  static readonly coralHangTypeBit = "coral_hang_type_bit";
  static readonly coveredBit = "covered_bit";
  static readonly crackedState = "cracked_state";
  static readonly damage = "damage";
  static readonly deadBit = "dead_bit";
  static readonly deprecated = "deprecated";
  static readonly direction = "direction";
  static readonly dirtType = "dirt_type";
  static readonly disarmedBit = "disarmed_bit";
  static readonly doorHingeBit = "door_hinge_bit";
  static readonly doublePlantType = "double_plant_type";
  static readonly dragDown = "drag_down";
  static readonly dripstoneThickness = "dripstone_thickness";
  static readonly endPortalEyeBit = "end_portal_eye_bit";
  static readonly explodeBit = "explode_bit";
  static readonly extinguished = "extinguished";
  static readonly facingDirection = "facing_direction";
  static readonly fillLevel = "fill_level";
  static readonly flowerType = "flower_type";
  static readonly groundSignDirection = "ground_sign_direction";
  static readonly growingPlantAge = "growing_plant_age";
  static readonly growth = "growth";
  static readonly hanging = "hanging";
  static readonly headPieceBit = "head_piece_bit";
  static readonly height = "height";
  static readonly honeyLevel = "honey_level";
  static readonly hugeMushroomBits = "huge_mushroom_bits";
  static readonly infiniburnBit = "infiniburn_bit";
  static readonly inWallBit = "in_wall_bit";
  static readonly itemFrameMapBit = "item_frame_map_bit";
  static readonly itemFramePhotoBit = "item_frame_photo_bit";
  static readonly kelpAge = "kelp_age";
  static readonly leverDirection = "lever_direction";
  static readonly liquidDepth = "liquid_depth";
  static readonly lit = "lit";
  static readonly moisturizedAmount = "moisturized_amount";
  static readonly monsterEggStoneType = "monster_egg_stone_type";
  static readonly multiFaceDirectionBits = "multi_face_direction_bits";
  static readonly newLeafType = "new_leaf_type";
  static readonly newLogType = "new_log_type";
  static readonly noDropBit = "no_drop_bit";
  static readonly occupiedBit = "occupied_bit";
  static readonly oldLeafType = "old_leaf_type";
  static readonly oldLogType = "old_log_type";
  static readonly openBit = "open_bit";
  static readonly outputLitBit = "output_lit_bit";
  static readonly outputSubtractBit = "output_subtract_bit";
  static readonly persistentBit = "persistent_bit";
  static readonly pillarAxis = "pillar_axis";
  static readonly portalAxis = "portal_axis";
  static readonly poweredBit = "powered_bit";
  static readonly prismarineBlockType = "prismarine_block_type";
  static readonly propaguleStage = "propagule_stage";
  static readonly railDataBit = "rail_data_bit";
  static readonly railDirection = "rail_direction";
  static readonly redstoneSignal = "redstone_signal";
  static readonly repeaterDelay = "repeater_delay";
  static readonly respawnAnchorCharge = "respawn_anchor_charge";
  static readonly rotation = "rotation";
  static readonly sandStoneType = "sand_stone_type";
  static readonly sandType = "sand_type";
  static readonly saplingType = "sapling_type";
  static readonly seaGrassType = "sea_grass_type";
  static readonly spongeType = "sponge_type";
  static readonly stability = "stability";
  static readonly stabilityCheck = "stability_check";
  static readonly stoneBrickType = "stone_brick_type";
  static readonly stoneSlabType = "stone_slab_type";
  static readonly stoneSlabType2 = "stone_slab_type_2";
  static readonly stoneSlabType3 = "stone_slab_type_3";
  static readonly stoneSlabType4 = "stone_slab_type_4";
  static readonly stoneType = "stone_type";
  static readonly strippedBit = "stripped_bit";
  static readonly structureBlockType = "structure_block_type";
  static readonly structureVoidType = "structure_void_type";
  static readonly suspendedBit = "suspended_bit";
  static readonly tallGrassType = "tall_grass_type";
  static readonly toggleBit = "toggle_bit";
  static readonly topSlotBit = "top_slot_bit";
  static readonly torchFacingDirection = "torch_facing_direction";
  static readonly triggeredBit = "triggered_bit";
  static readonly turtleEggCount = "turtle_egg_count";
  static readonly twistingVinesAge = "twisting_vines_age";
  static readonly updateBit = "update_bit";
  static readonly upperBlockBit = "upper_block_bit";
  static readonly upsideDownBit = "upside_down_bit";
  static readonly vineDirectionBits = "vine_direction_bits";
  static readonly wallBlockType = "wall_block_type";
  static readonly wallConnectionTypeEast = "wall_connection_type_east";
  static readonly wallConnectionTypeNorth = "wall_connection_type_north";
  static readonly wallConnectionTypeSouth = "wall_connection_type_south";
  static readonly wallConnectionTypeWest = "wall_connection_type_west";
  static readonly wallPostBit = "wall_post_bit";
  static readonly weepingVinesAge = "weeping_vines_age";
  static readonly weirdoDirection = "weirdo_direction";
  static readonly woodType = "wood_type";
}
export class BlockRecordPlayerComponent extends BlockComponent {
  protected constructor();
  readonly location: BlockLocation;
  readonly typeId: string;
  static readonly componentId = "minecraft:recordPlayer";
  clearRecord(): void;
  isPlaying(): boolean;
  setRecord(recordItemType: ItemType): void;
}
export class BlockSignComponent extends BlockComponent {
  protected constructor();
  readonly location: BlockLocation;
  readonly text: string;
  readonly typeId: string;
  static readonly componentId = "minecraft:sign";
}
export class BlockSnowContainerComponent extends BlockComponent {
  protected constructor();
  fillLevel: number;
  readonly location: BlockLocation;
  readonly typeId: string;
  static readonly componentId = "minecraft:snowContainer";
}
export class BlockType {
  protected constructor();
  readonly canBeWaterlogged: boolean;
  readonly id: string;
  createDefaultBlockPermutation(): BlockPermutation;
}
export class BlockWaterContainerComponent extends BlockComponent {
  protected constructor();
  customColor: Color;
  fillLevel: number;
  readonly location: BlockLocation;
  readonly typeId: string;
  static readonly componentId = "minecraft:waterContainer";
  addDye(itemType: ItemType): void;
}
export class BoolBlockProperty extends IBlockProperty {
  protected constructor();
  readonly name: string;
  readonly validValues: boolean[];
  value: boolean;
}
export class ButtonPushEvent extends BlockEvent {
  protected constructor();
  readonly block: Block;
  readonly dimension: Dimension;
  readonly source: Entity;
}
export class ButtonPushEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ButtonPushEvent) => void
  ): (arg: ButtonPushEvent) => void;
  unsubscribe(callback: (arg: ButtonPushEvent) => void): void;
}
export class ChatEvent {
  protected constructor();
  message: string;
  sender: Player;
  sendToTargets: boolean;
  targets: Player[];
}
export class ChatEventSignal {
  protected constructor();
  subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void;
  unsubscribe(callback: (arg: ChatEvent) => void): void;
}
export class Color {
  alpha: number;
  blue: number;
  green: number;
  red: number;
  constructor(red: number, green: number, blue: number, alpha: number);
}
export class CommandResult {
  protected constructor();
  readonly successCount: number;
}
export class Container {
  protected constructor();
  readonly emptySlotsCount: number;
  readonly size: number;
  addItem(itemStack: ItemStack): void;
  clearAll(): void;
  clearItem(slot: number): void;
  getItem(slot: number): ItemStack;
  getSlot(slot: number): ContainerSlot;
  setItem(slot: number, itemStack?: ItemStack): void;
  swapItems(
    slot: number,
    otherSlot: number,
    otherContainer: Container
  ): boolean;
  transferItem(
    fromSlot: number,
    toSlot: number,
    toContainer: Container
  ): boolean;
}
export class ContainerSlot {
  protected constructor();
  amount: number;
  data: number;
  readonly isValid: boolean;
  nameTag?: string;
  readonly typeId?: string;
  clearItem(): void;
  getItem(): ItemStack;
  getLore(): string[] | undefined;
  setItem(itemStack?: ItemStack): void;
  setLore(loreList: string[]): void;
}
export class DataDrivenEntityTriggerEvent {
  protected constructor();
  readonly entity: Entity;
  readonly id: string;
  readonly modifiers: DefinitionModifier[];
}
export class DataDrivenEntityTriggerEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: DataDrivenEntityTriggerEvent) => void,
    options?: EntityDataDrivenTriggerEventOptions
  ): (arg: DataDrivenEntityTriggerEvent) => void;
  unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void;
}
export class DefinitionModifier {
  readonly componentGroupsToAdd: string[];
  readonly componentGroupsToRemove: string[];
  triggers: Trigger[];
}
export class Dimension {
  protected constructor();
  readonly id: "minecraft:overworld" | "minecraft:nether" | "minecraft:the_end";
  createExplosion(
    location: Location,
    radius: number,
    explosionOptions?: ExplosionOptions
  ): void;
  fillBlocks(
    begin: BlockLocation,
    end: BlockLocation,
    block: BlockPermutation | BlockType,
    options?: BlockFillOptions
  ): number;
  getBlock(location: BlockLocation): Block;
  getBlockFromRay(
    location: Location,
    direction: Vector,
    options?: BlockRaycastOptions
  ): Block;
  getEntities(getEntities?: EntityQueryOptions): EntityIterator;
  getEntitiesAtBlockLocation(location: BlockLocation): Entity[];
  getEntitiesFromRay(
    location: Location,
    direction: Vector,
    options?: EntityRaycastOptions
  ): Entity[];
  getPlayers(getPlayers?: EntityQueryOptions): PlayerIterator;
  runCommandAsync(commandString: string): Promise<CommandResult>;
  spawnEntity(identifier: string, location: BlockLocation | Location): Entity;
  spawnItem(item: ItemStack, location: BlockLocation | Location): Entity;
  spawnParticle(
    effectName: string,
    location: Location,
    molangVariables: MolangVariableMap
  ): void;
}
export class DirectionBlockProperty extends IBlockProperty {
  protected constructor();
  readonly name: string;
  readonly validValues: Direction[];
  value: Direction;
}
export class DynamicPropertiesDefinition {
  defineBoolean(identifier: string): void;
  defineNumber(identifier: string): void;
  defineString(identifier: string, maxLength: number): void;
}
export class Effect {
  protected constructor();
  readonly amplifier: number;
  readonly displayName: string;
  readonly duration: number;
}
export class EffectAddEvent {
  protected constructor();
  effect: Effect;
  effectState: number;
  entity: Entity;
}
export class EffectAddEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: EffectAddEvent) => void,
    options?: EntityEventOptions
  ): (arg: EffectAddEvent) => void;
  unsubscribe(callback: (arg: EffectAddEvent) => void): void;
}
export class EffectType {
  protected constructor();
  getName(): string;
}
export class Enchantment {
  level: number;
  readonly "type": EnchantmentType;
  constructor(enchantmentType: EnchantmentType, level?: number);
}
export class EnchantmentList implements Iterable<Enchantment> {
  readonly slot: number;
  constructor(enchantmentSlot: number);
  [Symbol.iterator](): Iterator<Enchantment>;
  addEnchantment(enchantment: Enchantment): boolean;
  canAddEnchantment(enchantment: Enchantment): boolean;
  getEnchantment(enchantmentType: EnchantmentType): Enchantment;
  hasEnchantment(enchantmentType: EnchantmentType): number;
  next(): IteratorResult<Enchantment>;
  removeEnchantment(enchantmentType: EnchantmentType): void;
}
export class EnchantmentSlot {
  protected constructor();
  static readonly all = -1;
  static readonly armorFeet = 4;
  static readonly armorHead = 1;
  static readonly armorLegs = 8;
  static readonly armorTorso = 2;
  static readonly axe = 512;
  static readonly bow = 32;
  static readonly carrotStick = 8192;
  static readonly cosmeticHead = 262144;
  static readonly crossbow = 65536;
  static readonly elytra = 16384;
  static readonly fishingRod = 4096;
  static readonly flintsteel = 256;
  static readonly gArmor = 15;
  static readonly gDigging = 3648;
  static readonly gTool = 131520;
  static readonly hoe = 64;
  static readonly none = 0;
  static readonly pickaxe = 1024;
  static readonly shears = 128;
  static readonly shield = 131072;
  static readonly shovel = 2048;
  static readonly spear = 32768;
  static readonly sword = 16;
}
export class EnchantmentType {
  protected constructor();
  readonly id: string;
  readonly maxLevel: number;
}
export class Entity {
  protected constructor();
  readonly dimension: Dimension;
  readonly headLocation: Location;
  readonly id: string;
  isSneaking: boolean;
  readonly location: Vector3;
  nameTag: string;
  readonly rotation: XYRotation;
  readonly scoreboard: ScoreboardIdentity;
  readonly target: Entity;
  readonly typeId: string;
  readonly velocity: Vector;
  readonly viewDirection: Vector3;
  addEffect(
    effectType: EffectType,
    duration: number,
    amplifier?: number,
    showParticles?: boolean
  ): void;
  addTag(tag: string): boolean;
  applyDamage(amount: number, source?: EntityDamageSource): boolean;
  extinguishFire(useEffects?: boolean): boolean;
  getBlockFromViewDirection(options?: BlockRaycastOptions): Block;
  getComponent<T extends keyof EntityComponentRoute>(
    componentId: T
  ): EntityComponentRoute[T];
  getComponents(): IEntityComponent[];
  getDynamicProperty(identifier: string): boolean | number | string | undefined;
  getEffect(effectType: EffectType): Effect;
  getEffects(): Effect[];
  getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[];
  getTags(): string[];
  hasComponent<T extends keyof EntityComponentRoute>(componentId: T): boolean;
  hasTag(tag: string): boolean;
  kill(): void;
  removeDynamicProperty(identifier: string): boolean;
  removeTag(tag: string): boolean;
  runCommandAsync(commandString: string): Promise<CommandResult>;
  setDynamicProperty(
    identifier: string,
    value: boolean | number | string
  ): void;
  setOnFire(seconds: number, useEffects?: boolean): boolean;
  setRotation(degreesX: number, degreesY: number): void;
  setVelocity(velocity: Vector3): void;
  teleport(
    location: Vector3,
    dimension: Dimension,
    xRotation: number,
    yRotation: number,
    keepVelocity?: boolean
  ): void;
  teleportFacing(
    location: Vector3,
    dimension: Dimension,
    facingLocation: Vector3,
    keepVelocity?: boolean
  ): void;
  triggerEvent(eventName: string): void;
}
export class EntityAddRiderComponent extends IEntityComponent {
  protected constructor();
  readonly entityType: string;
  readonly spawnEvent: string;
  readonly typeId: string;
  static readonly componentId = "minecraft:addrider";
}
export class EntityAgeableComponent extends IEntityComponent {
  protected constructor();
  readonly dropItems: string[];
  readonly duration: number;
  readonly feedItems: EntityDefinitionFeedItem[];
  readonly growUp: Trigger;
  readonly typeId: string;
  static readonly componentId = "minecraft:ageable";
}
export class EntityBreathableComponent extends IEntityComponent {
  protected constructor();
  readonly breatheBlocks: BlockPermutation[];
  readonly breathesAir: boolean;
  readonly breathesLava: boolean;
  readonly breathesSolids: boolean;
  readonly breathesWater: boolean;
  readonly generatesBubbles: boolean;
  readonly inhaleTime: number;
  readonly nonBreatheBlocks: BlockPermutation[];
  readonly suffocateTime: number;
  readonly totalSupply: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:breathable";
  setAirSupply(value: number): void;
}
export class EntityCanClimbComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:can_climb";
}
export class EntityCanFlyComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:can_fly";
}
export class EntityCanPowerJumpComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:can_power_jump";
}
export class EntityColorComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  value: number;
  static readonly componentId = "minecraft:color";
}
export class EntityDefinitionFeedItem {
  protected constructor();
  readonly growth: number;
  readonly item: string;
}
export class EntityFireImmuneComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:fire_immune";
}
export class EntityFloatsInLiquidComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:floats_in_liquid";
}
export class EntityFlyingSpeedComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  value: number;
  static readonly componentId = "minecraft:flying_speed";
}
export class EntityFrictionModifierComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  value: number;
  static readonly componentId = "minecraft:friction_modifier";
}
export class EntityGroundOffsetComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  value: number;
  static readonly componentId = "minecraft:ground_offset";
}
export class EntityHealableComponent extends IEntityComponent {
  protected constructor();
  readonly filters: FilterGroup;
  readonly forceUse: boolean;
  readonly items: FeedItem[];
  readonly typeId: string;
  static readonly componentId = "minecraft:healable";
}
export class EntityHealthComponent extends IEntityComponent {
  protected constructor();
  readonly current: number;
  readonly typeId: string;
  readonly value: number;
  static readonly componentId = "minecraft:health";
  resetToDefaultValue(): void;
  resetToMaxValue(): void;
  resetToMinValue(): void;
  setCurrent(value: number): boolean;
}
export class EntityHitEvent {
  protected constructor();
  readonly entity: Entity;
  readonly hitBlock?: Block;
  readonly hitEntity?: Entity;
}
export class EntityHitEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: EntityHitEvent) => void,
    options?: EntityEventOptions
  ): (arg: EntityHitEvent) => void;
  unsubscribe(callback: (arg: EntityHitEvent) => void): void;
}
export class EntityHitInformation {
  protected constructor();
  readonly entity: Entity;
}
export class EntityHurtEvent {
  protected constructor();
  readonly damage: number;
  readonly damageSource: EntityDamageSource;
  readonly hurtEntity: Entity;
}
export class EntityHurtEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: EntityHurtEvent) => void,
    options?: EntityEventOptions
  ): (arg: EntityHurtEvent) => void;
  unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
}
export class EntityInventoryComponent extends IEntityComponent {
  protected constructor();
  readonly additionalSlotsPerStrength: number;
  readonly canBeSiphonedFrom: boolean;
  readonly container: InventoryComponentContainer;
  readonly containerType: string;
  readonly inventorySize: number;
  readonly "private": boolean;
  readonly restrictToOwner: boolean;
  readonly typeId: string;
  static readonly componentId = "minecraft:inventory";
}
export class EntityIsBabyComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_baby";
}
export class EntityIsChargedComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_charged";
}
export class EntityIsChestedComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_chested";
}
export class EntityIsDyableComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_dyeable";
}
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_hidden_when_invisible";
}
export class EntityIsIgnitedComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_ignited";
}
export class EntityIsIllagerCaptainComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_illager_captain";
}
export class EntityIsSaddledComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_saddled";
}
export class EntityIsShakingComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_shaking";
}
export class EntityIsShearedComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_sheared";
}
export class EntityIsStackableComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_stackable";
}
export class EntityIsStunnedComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_stunned";
}
export class EntityIsTamedComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:is_tamed";
}
export class EntityItemComponent extends IEntityComponent {
  protected constructor();
  readonly itemStack: ItemStack;
  readonly typeId: string;
  static readonly componentId = "minecraft:item";
}
export class EntityIterator implements Iterable<Entity> {
  protected constructor();
  [Symbol.iterator](): Iterator<Entity>;
  next(): IteratorResult<Entity>;
}
export class EntityLavaMovementComponent extends IEntityComponent {
  protected constructor();
  readonly current: number;
  readonly typeId: string;
  readonly value: number;
  static readonly componentId = "minecraft:lava_movement";
  resetToDefaultValue(): void;
  resetToMaxValue(): void;
  resetToMinValue(): void;
  setCurrent(value: number): boolean;
}
export class EntityLeashableComponent extends IEntityComponent {
  protected constructor();
  readonly softDistance: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:leashable";
  leash(leashHolder: Entity): void;
  unleash(): void;
}
export class EntityMarkVariantComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  value: number;
  static readonly componentId = "minecraft:mark_variant";
}
export class EntityMountTamingComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:tamemount";
  setTamed(showParticles: boolean): void;
}
export class EntityMovementAmphibiousComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.amphibious";
}
export class EntityMovementBasicComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.basic";
}
export class EntityMovementComponent extends IEntityComponent {
  protected constructor();
  readonly current: number;
  readonly typeId: string;
  readonly value: number;
  static readonly componentId = "minecraft:movement";
  resetToDefaultValue(): void;
  resetToMaxValue(): void;
  resetToMinValue(): void;
  setCurrent(value: number): boolean;
}
export class EntityMovementFlyComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.fly";
}
export class EntityMovementGenericComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.generic";
}
export class EntityMovementGlideComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly speedWhenTurning: number;
  readonly startSpeed: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.glide";
}
export class EntityMovementHoverComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.hover";
}
export class EntityMovementJumpComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.jump";
}
export class EntityMovementSkipComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.skip";
}
export class EntityMovementSwayComponent extends IEntityComponent {
  protected constructor();
  readonly maxTurn: number;
  readonly swayAmplitude: number;
  readonly swayFrequency: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:movement.sway";
}
export class EntityNavigationClimbComponent extends IEntityComponent {
  protected constructor();
  readonly avoidDamageBlocks: boolean;
  readonly avoidPortals: boolean;
  readonly avoidSun: boolean;
  readonly avoidWater: boolean;
  readonly canBreach: boolean;
  readonly canBreakDoors: boolean;
  readonly canFloat: boolean;
  readonly canJump: boolean;
  readonly canOpenDoors: boolean;
  readonly canOpenIronDoors: boolean;
  readonly canPassDoors: boolean;
  readonly canPathFromAir: boolean;
  readonly canPathOverLava: boolean;
  readonly canPathOverWater: boolean;
  readonly canSink: boolean;
  readonly canSwim: boolean;
  readonly canWalk: boolean;
  readonly canWalkInLava: boolean;
  readonly isAmphibious: boolean;
  readonly typeId: string;
  static readonly componentId = "minecraft:navigation.climb";
}
export class EntityNavigationFloatComponent extends IEntityComponent {
  protected constructor();
  readonly avoidDamageBlocks: boolean;
  readonly avoidPortals: boolean;
  readonly avoidSun: boolean;
  readonly avoidWater: boolean;
  readonly canBreach: boolean;
  readonly canBreakDoors: boolean;
  readonly canFloat: boolean;
  readonly canJump: boolean;
  readonly canOpenDoors: boolean;
  readonly canOpenIronDoors: boolean;
  readonly canPassDoors: boolean;
  readonly canPathFromAir: boolean;
  readonly canPathOverLava: boolean;
  readonly canPathOverWater: boolean;
  readonly canSink: boolean;
  readonly canSwim: boolean;
  readonly canWalk: boolean;
  readonly canWalkInLava: boolean;
  readonly isAmphibious: boolean;
  readonly typeId: string;
  static readonly componentId = "minecraft:navigation.float";
}
export class EntityNavigationFlyComponent extends IEntityComponent {
  protected constructor();
  readonly avoidDamageBlocks: boolean;
  readonly avoidPortals: boolean;
  readonly avoidSun: boolean;
  readonly avoidWater: boolean;
  readonly canBreach: boolean;
  readonly canBreakDoors: boolean;
  readonly canFloat: boolean;
  readonly canJump: boolean;
  readonly canOpenDoors: boolean;
  readonly canOpenIronDoors: boolean;
  readonly canPassDoors: boolean;
  readonly canPathFromAir: boolean;
  readonly canPathOverLava: boolean;
  readonly canPathOverWater: boolean;
  readonly canSink: boolean;
  readonly canSwim: boolean;
  readonly canWalk: boolean;
  readonly canWalkInLava: boolean;
  readonly isAmphibious: boolean;
  readonly typeId: string;
  static readonly componentId = "minecraft:navigation.fly";
}
export class EntityNavigationGenericComponent extends IEntityComponent {
  protected constructor();
  readonly avoidDamageBlocks: boolean;
  readonly avoidPortals: boolean;
  readonly avoidSun: boolean;
  readonly avoidWater: boolean;
  readonly canBreach: boolean;
  readonly canBreakDoors: boolean;
  readonly canFloat: boolean;
  readonly canJump: boolean;
  readonly canOpenDoors: boolean;
  readonly canOpenIronDoors: boolean;
  readonly canPassDoors: boolean;
  readonly canPathFromAir: boolean;
  readonly canPathOverLava: boolean;
  readonly canPathOverWater: boolean;
  readonly canSink: boolean;
  readonly canSwim: boolean;
  readonly canWalk: boolean;
  readonly canWalkInLava: boolean;
  readonly isAmphibious: boolean;
  readonly typeId: string;
  static readonly componentId = "minecraft:navigation.generic";
}
export class EntityNavigationHoverComponent extends IEntityComponent {
  protected constructor();
  readonly avoidDamageBlocks: boolean;
  readonly avoidPortals: boolean;
  readonly avoidSun: boolean;
  readonly avoidWater: boolean;
  readonly canBreach: boolean;
  readonly canBreakDoors: boolean;
  readonly canFloat: boolean;
  readonly canJump: boolean;
  readonly canOpenDoors: boolean;
  readonly canOpenIronDoors: boolean;
  readonly canPassDoors: boolean;
  readonly canPathFromAir: boolean;
  readonly canPathOverLava: boolean;
  readonly canPathOverWater: boolean;
  readonly canSink: boolean;
  readonly canSwim: boolean;
  readonly canWalk: boolean;
  readonly canWalkInLava: boolean;
  readonly isAmphibious: boolean;
  readonly typeId: string;
  static readonly componentId = "minecraft:navigation.hover";
}
export class EntityNavigationWalkComponent extends IEntityComponent {
  protected constructor();
  readonly avoidDamageBlocks: boolean;
  readonly avoidPortals: boolean;
  readonly avoidSun: boolean;
  readonly avoidWater: boolean;
  readonly canBreach: boolean;
  readonly canBreakDoors: boolean;
  readonly canFloat: boolean;
  readonly canJump: boolean;
  readonly canOpenDoors: boolean;
  readonly canOpenIronDoors: boolean;
  readonly canPassDoors: boolean;
  readonly canPathFromAir: boolean;
  readonly canPathOverLava: boolean;
  readonly canPathOverWater: boolean;
  readonly canSink: boolean;
  readonly canSwim: boolean;
  readonly canWalk: boolean;
  readonly canWalkInLava: boolean;
  readonly isAmphibious: boolean;
  readonly typeId: string;
  static readonly componentId = "minecraft:navigation.walk";
}
export class EntityOnFireComponent extends IEntityComponent {
  protected constructor();
  readonly onFireTicksRemaining: number;
  readonly typeId: string;
  static readonly componentId = "minecraft:onfire";
}
export class EntityPushThroughComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  value: number;
  static readonly componentId = "minecraft:push_through";
}
export class EntityRideableComponent extends IEntityComponent {
  protected constructor();
  readonly controllingSeat: number;
  readonly crouchingSkipInteract: boolean;
  readonly familyTypes: string[];
  readonly interactText: string;
  readonly pullInEntities: boolean;
  readonly riderCanInteract: boolean;
  readonly seatCount: number;
  readonly seats: Seat[];
  readonly typeId: string;
  static readonly componentId = "minecraft:rideable";
  addRider(rider: Entity): boolean;
  ejectRider(rider: Entity): void;
  ejectRiders(): void;
}
export class EntityScaleComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  value: number;
  static readonly componentId = "minecraft:scale";
}
export class EntitySkinIdComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  value: number;
  static readonly componentId = "minecraft:skin_id";
}
export class EntitySpawnEvent {
  protected constructor();
  entity: Entity;
}
export class EntitySpawnEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: EntitySpawnEvent) => void
  ): (arg: EntitySpawnEvent) => void;
  unsubscribe(callback: (arg: EntitySpawnEvent) => void): void;
}
export class EntityStrengthComponent extends IEntityComponent {
  protected constructor();
  readonly max: number;
  readonly typeId: string;
  readonly value: number;
  static readonly componentId = "minecraft:strength";
}
export class EntityTameableComponent extends IEntityComponent {
  protected constructor();
  readonly probability: number;
  readonly tameEvent: Trigger;
  readonly tameItems: string[];
  readonly typeId: string;
  static readonly componentId = "minecraft:tameable";
  tame(): boolean;
}
export class EntityType {
  protected constructor();
  readonly id: string;
}
export class EntityTypeIterator implements Iterable<EntityType> {
  protected constructor();
  [Symbol.iterator](): Iterator<EntityType>;
  next(): IteratorResult<EntityType>;
}
export class EntityTypes {
  protected constructor();
  static get(identifier: string): EntityType;
  static getAll(): EntityTypeIterator;
}
export class EntityUnderwaterMovementComponent extends IEntityComponent {
  protected constructor();
  readonly current: number;
  readonly typeId: string;
  readonly value: number;
  static readonly componentId = "minecraft:underwater_movement";
  resetToDefaultValue(): void;
  resetToMaxValue(): void;
  resetToMinValue(): void;
  setCurrent(value: number): boolean;
}
export class EntityVariantComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  readonly value: number;
  static readonly componentId = "minecraft:variant";
}
export class EntityWantsJockeyComponent extends IEntityComponent {
  protected constructor();
  readonly typeId: string;
  static readonly componentId = "minecraft:wants_jockey";
}
export class Events {
  protected constructor();
  readonly beforeChat: BeforeChatEventSignal;
  readonly beforeDataDrivenEntityTriggerEvent: BeforeDataDrivenEntityTriggerEventSignal;
  readonly beforeExplosion: BeforeExplosionEventSignal;
  readonly beforeItemDefinitionEvent: BeforeItemDefinitionEventSignal;
  readonly beforeItemUse: BeforeItemUseEventSignal;
  readonly beforeItemUseOn: BeforeItemUseOnEventSignal;
  readonly beforePistonActivate: BeforePistonActivateEventSignal;
  readonly blockBreak: BlockBreakEventSignal;
  readonly blockExplode: BlockExplodeEventSignal;
  readonly blockPlace: BlockPlaceEventSignal;
  readonly buttonPush: ButtonPushEventSignal;
  readonly chat: ChatEventSignal;
  readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal;
  readonly effectAdd: EffectAddEventSignal;
  readonly entityHit: EntityHitEventSignal;
  readonly entityHurt: EntityHurtEventSignal;
  readonly entitySpawn: EntitySpawnEventSignal;
  readonly explosion: ExplosionEventSignal;
  readonly itemCompleteCharge: ItemCompleteChargeEventSignal;
  readonly itemDefinitionEvent: ItemDefinitionEventSignal;
  readonly itemReleaseCharge: ItemReleaseChargeEventSignal;
  readonly itemStartCharge: ItemStartChargeEventSignal;
  readonly itemStartUseOn: ItemStartUseOnEventSignal;
  readonly itemStopCharge: ItemStopChargeEventSignal;
  readonly itemStopUseOn: ItemStopUseOnEventSignal;
  readonly itemUse: ItemUseEventSignal;
  readonly itemUseOn: ItemUseOnEventSignal;
  readonly leverActivate: LeverActionEventSignal;
  readonly messageReceive: ServerMessageSignal;
  readonly pistonActivate: PistonActivateEventSignal;
  readonly playerJoin: PlayerJoinEventSignal;
  readonly playerLeave: PlayerLeaveEventSignal;
  readonly playerSpawn: PlayerSpawnEventSignal;
  projectileHit: ProjectileHitEventSignal;
  readonly tick: TickEventSignal;
  readonly weatherChange: WeatherChangeEventSignal;
  readonly worldInitialize: WorldInitializeEventSignal;
}
export class ExplosionEvent {
  protected constructor();
  readonly dimension: Dimension;
  readonly impactedBlocks: BlockLocation[];
  readonly source: Entity;
}
export class ExplosionEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ExplosionEvent) => void
  ): (arg: ExplosionEvent) => void;
  unsubscribe(callback: (arg: ExplosionEvent) => void): void;
}
export class FeedItem {
  protected constructor();
  readonly effects: FeedItemEffect[];
  readonly healAmount: number;
  readonly item: string;
}
export class FeedItemEffect {
  protected constructor();
  readonly amplifier: number;
  readonly chance: number;
  readonly duration: number;
  readonly name: string;
}
export class FilterGroup {
  protected constructor();
}
export class FluidContainer {
  protected constructor();
  static readonly maxFillLevel = 6;
  static readonly minFillLevel = 0;
}
export class IBlockProperty {
  protected constructor();
  readonly name: string;
}
export class IEntityComponent {
  protected constructor();
  readonly typeId: string;
}
export class IntBlockProperty extends IBlockProperty {
  protected constructor();
  readonly name: string;
  readonly validValues: number[];
  value: number;
}
export class InventoryComponentContainer extends Container {
  protected constructor();
  readonly emptySlotsCount: number;
  readonly size: number;
  addItem(itemStack: ItemStack): void;
  clearAll(): void;
  clearItem(slot: number): void;
  getItem(slot: number): ItemStack;
  getSlot(slot: number): ContainerSlot;
  setItem(slot: number, itemStack?: ItemStack): void;
  swapItems(
    slot: number,
    otherSlot: number,
    otherContainer: Container
  ): boolean;
  transferItem(
    fromSlot: number,
    toSlot: number,
    toContainer: Container
  ): boolean;
}
export class ItemCompleteChargeEvent {
  protected constructor();
  readonly itemStack: ItemStack;
  readonly source: Entity;
  readonly useDuration: number;
}
export class ItemCompleteChargeEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ItemCompleteChargeEvent) => void
  ): (arg: ItemCompleteChargeEvent) => void;
  unsubscribe(callback: (arg: ItemCompleteChargeEvent) => void): void;
}
export class ItemCooldownComponent {
  protected constructor();
  readonly cooldownCategory: string;
  readonly cooldownTicks: number;
  static readonly componentId = "minecraft:cooldown";
  startCooldown(player: Player): void;
}
export class ItemDefinitionEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ItemDefinitionTriggeredEvent) => void
  ): (arg: ItemDefinitionTriggeredEvent) => void;
  unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): void;
}
export class ItemDefinitionTriggeredEvent {
  protected constructor();
  readonly eventName: string;
  item: ItemStack;
  readonly source: Entity;
}
export class ItemDurabilityComponent {
  protected constructor();
  damage: number;
  readonly damageRange: NumberRange;
  readonly maxDurability: number;
  static readonly componentId = "minecraft:durability";
  getDamageChance(unbreaking?: number): number;
}
export class ItemEnchantsComponent {
  protected constructor();
  enchantments: EnchantmentList;
  static readonly componentId = "minecraft:enchantments";
  removeAllEnchantments(): void;
}
export class ItemFoodComponent {
  protected constructor();
  readonly canAlwaysEat: boolean;
  readonly nutrition: number;
  readonly saturationModifier: number;
  readonly usingConvertsTo: string;
  static readonly componentId = "minecraft:food";
}
export class ItemReleaseChargeEvent {
  protected constructor();
  readonly itemStack: ItemStack;
  readonly source: Entity;
  readonly useDuration: number;
}
export class ItemReleaseChargeEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ItemReleaseChargeEvent) => void
  ): (arg: ItemReleaseChargeEvent) => void;
  unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void;
}
export class Items {
  protected constructor();
  static get(itemId: string): ItemType;
}
export class ItemStack {
  amount: number;
  data: number;
  nameTag?: string;
  readonly typeId: string;
  constructor(itemType: ItemType, amount?: number, data?: number);
  getComponent<T extends keyof ItemComponentRoute>(
    componentId: T
  ): ItemComponentRoute[T];
  getComponents(): any[];
  getLore(): string[];
  hasComponent<T extends keyof ItemComponentRoute>(componentId: T): boolean;
  setLore(loreList: string[]): void;
  triggerEvent(eventName: string): void;
}
export class ItemStartChargeEvent {
  protected constructor();
  readonly itemStack: ItemStack;
  readonly source: Entity;
  readonly useDuration: number;
}
export class ItemStartChargeEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ItemStartChargeEvent) => void
  ): (arg: ItemStartChargeEvent) => void;
  unsubscribe(callback: (arg: ItemStartChargeEvent) => void): void;
}
export class ItemStartUseOnEvent {
  protected constructor();
  readonly blockFace: Direction;
  readonly blockLocation: BlockLocation;
  readonly buildBlockLocation: BlockLocation;
  item: ItemStack;
  readonly source: Entity;
}
export class ItemStartUseOnEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ItemStartUseOnEvent) => void
  ): (arg: ItemStartUseOnEvent) => void;
  unsubscribe(callback: (arg: ItemStartUseOnEvent) => void): void;
}
export class ItemStopChargeEvent {
  protected constructor();
  readonly itemStack: ItemStack;
  readonly source: Entity;
  readonly useDuration: number;
}
export class ItemStopChargeEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ItemStopChargeEvent) => void
  ): (arg: ItemStopChargeEvent) => void;
  unsubscribe(callback: (arg: ItemStopChargeEvent) => void): void;
}
export class ItemStopUseOnEvent {
  protected constructor();
  readonly blockLocation: BlockLocation;
  item: ItemStack;
  readonly source: Entity;
}
export class ItemStopUseOnEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ItemStopUseOnEvent) => void
  ): (arg: ItemStopUseOnEvent) => void;
  unsubscribe(callback: (arg: ItemStopUseOnEvent) => void): void;
}
export class ItemType {
  protected constructor();
  readonly id: string;
}
export class ItemTypeIterator implements Iterable<ItemType> {
  protected constructor();
  [Symbol.iterator](): Iterator<ItemType>;
  next(): IteratorResult<ItemType>;
}
export class ItemTypes {
  protected constructor();
  static get(itemId: string): ItemType;
  static getAll(): ItemTypeIterator;
}
export class ItemUseEvent {
  protected constructor();
  item: ItemStack;
  readonly source: Entity;
}
export class ItemUseEventSignal {
  protected constructor();
  subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void;
  unsubscribe(callback: (arg: ItemUseEvent) => void): void;
}
export class ItemUseOnEvent {
  protected constructor();
  readonly blockFace: Direction;
  readonly blockLocation: BlockLocation;
  readonly faceLocationX: number;
  readonly faceLocationY: number;
  item: ItemStack;
  readonly source: Entity;
}
export class ItemUseOnEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ItemUseOnEvent) => void
  ): (arg: ItemUseOnEvent) => void;
  unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
}
export class LeverActionEvent extends BlockEvent {
  protected constructor();
  readonly block: Block;
  readonly dimension: Dimension;
  readonly isPowered: boolean;
  readonly player: Player;
}
export class LeverActionEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: LeverActionEvent) => void
  ): (arg: LeverActionEvent) => void;
  unsubscribe(callback: (arg: LeverActionEvent) => void): void;
}
export class Location {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number);
  equals(other: Location): boolean;
  isNear(other: Location, epsilon: number): boolean;
}
export class MessageReceiveEvent {
  protected constructor();
  readonly id: string;
  readonly message: string;
  readonly player: Player;
  readonly sourceType: MessageSourceType;
}
export class MinecraftBlockTypes {
  protected constructor();
  static readonly acaciaButton: BlockType;
  static readonly acaciaDoor: BlockType;
  static readonly acaciaFenceGate: BlockType;
  static readonly acaciaHangingSign: BlockType;
  static readonly acaciaPressurePlate: BlockType;
  static readonly acaciaStairs: BlockType;
  static readonly acaciaStandingSign: BlockType;
  static readonly acaciaTrapdoor: BlockType;
  static readonly acaciaWallSign: BlockType;
  static readonly activatorRail: BlockType;
  static readonly air: BlockType;
  static readonly allow: BlockType;
  static readonly amethystBlock: BlockType;
  static readonly amethystCluster: BlockType;
  static readonly ancientDebris: BlockType;
  static readonly andesiteStairs: BlockType;
  static readonly anvil: BlockType;
  static readonly azalea: BlockType;
  static readonly azaleaLeaves: BlockType;
  static readonly azaleaLeavesFlowered: BlockType;
  static readonly bamboo: BlockType;
  static readonly bambooBlock: BlockType;
  static readonly bambooButton: BlockType;
  static readonly bambooDoor: BlockType;
  static readonly bambooDoubleSlab: BlockType;
  static readonly bambooFence: BlockType;
  static readonly bambooFenceGate: BlockType;
  static readonly bambooHangingSign: BlockType;
  static readonly bambooMosaic: BlockType;
  static readonly bambooMosaicDoubleSlab: BlockType;
  static readonly bambooMosaicSlab: BlockType;
  static readonly bambooMosaicStairs: BlockType;
  static readonly bambooPlanks: BlockType;
  static readonly bambooPressurePlate: BlockType;
  static readonly bambooSapling: BlockType;
  static readonly bambooSlab: BlockType;
  static readonly bambooStairs: BlockType;
  static readonly bambooStandingSign: BlockType;
  static readonly bambooTrapdoor: BlockType;
  static readonly bambooWallSign: BlockType;
  static readonly barrel: BlockType;
  static readonly barrier: BlockType;
  static readonly basalt: BlockType;
  static readonly beacon: BlockType;
  static readonly bed: BlockType;
  static readonly bedrock: BlockType;
  static readonly beehive: BlockType;
  static readonly beeNest: BlockType;
  static readonly beetroot: BlockType;
  static readonly bell: BlockType;
  static readonly bigDripleaf: BlockType;
  static readonly birchButton: BlockType;
  static readonly birchDoor: BlockType;
  static readonly birchFenceGate: BlockType;
  static readonly birchHangingSign: BlockType;
  static readonly birchPressurePlate: BlockType;
  static readonly birchStairs: BlockType;
  static readonly birchStandingSign: BlockType;
  static readonly birchTrapdoor: BlockType;
  static readonly birchWallSign: BlockType;
  static readonly blackCandle: BlockType;
  static readonly blackCandleCake: BlockType;
  static readonly blackGlazedTerracotta: BlockType;
  static readonly blackstone: BlockType;
  static readonly blackstoneDoubleSlab: BlockType;
  static readonly blackstoneSlab: BlockType;
  static readonly blackstoneStairs: BlockType;
  static readonly blackstoneWall: BlockType;
  static readonly blastFurnace: BlockType;
  static readonly blueCandle: BlockType;
  static readonly blueCandleCake: BlockType;
  static readonly blueGlazedTerracotta: BlockType;
  static readonly blueIce: BlockType;
  static readonly boneBlock: BlockType;
  static readonly bookshelf: BlockType;
  static readonly borderBlock: BlockType;
  static readonly brewingStand: BlockType;
  static readonly brickBlock: BlockType;
  static readonly brickStairs: BlockType;
  static readonly brownCandle: BlockType;
  static readonly brownCandleCake: BlockType;
  static readonly brownGlazedTerracotta: BlockType;
  static readonly brownMushroom: BlockType;
  static readonly brownMushroomBlock: BlockType;
  static readonly bubbleColumn: BlockType;
  static readonly buddingAmethyst: BlockType;
  static readonly cactus: BlockType;
  static readonly cake: BlockType;
  static readonly calcite: BlockType;
  static readonly camera: BlockType;
  static readonly campfire: BlockType;
  static readonly candle: BlockType;
  static readonly candleCake: BlockType;
  static readonly carpet: BlockType;
  static readonly carrots: BlockType;
  static readonly cartographyTable: BlockType;
  static readonly carvedPumpkin: BlockType;
  static readonly cauldron: BlockType;
  static readonly caveVines: BlockType;
  static readonly caveVinesBodyWithBerries: BlockType;
  static readonly caveVinesHeadWithBerries: BlockType;
  static readonly chain: BlockType;
  static readonly chainCommandBlock: BlockType;
  static readonly chemicalHeat: BlockType;
  static readonly chemistryTable: BlockType;
  static readonly chest: BlockType;
  static readonly chiseledBookshelf: BlockType;
  static readonly chiseledDeepslate: BlockType;
  static readonly chiseledNetherBricks: BlockType;
  static readonly chiseledPolishedBlackstone: BlockType;
  static readonly chorusFlower: BlockType;
  static readonly chorusPlant: BlockType;
  static readonly clay: BlockType;
  static readonly clientRequestPlaceholderBlock: BlockType;
  static readonly coalBlock: BlockType;
  static readonly coalOre: BlockType;
  static readonly cobbledDeepslate: BlockType;
  static readonly cobbledDeepslateDoubleSlab: BlockType;
  static readonly cobbledDeepslateSlab: BlockType;
  static readonly cobbledDeepslateStairs: BlockType;
  static readonly cobbledDeepslateWall: BlockType;
  static readonly cobblestone: BlockType;
  static readonly cobblestoneWall: BlockType;
  static readonly cocoa: BlockType;
  static readonly coloredTorchBp: BlockType;
  static readonly coloredTorchRg: BlockType;
  static readonly commandBlock: BlockType;
  static readonly composter: BlockType;
  static readonly concrete: BlockType;
  static readonly concretePowder: BlockType;
  static readonly conduit: BlockType;
  static readonly copperBlock: BlockType;
  static readonly copperOre: BlockType;
  static readonly coral: BlockType;
  static readonly coralBlock: BlockType;
  static readonly coralFan: BlockType;
  static readonly coralFanDead: BlockType;
  static readonly coralFanHang: BlockType;
  static readonly coralFanHang2: BlockType;
  static readonly coralFanHang3: BlockType;
  static readonly crackedDeepslateBricks: BlockType;
  static readonly crackedDeepslateTiles: BlockType;
  static readonly crackedNetherBricks: BlockType;
  static readonly crackedPolishedBlackstoneBricks: BlockType;
  static readonly craftingTable: BlockType;
  static readonly crimsonButton: BlockType;
  static readonly crimsonDoor: BlockType;
  static readonly crimsonDoubleSlab: BlockType;
  static readonly crimsonFence: BlockType;
  static readonly crimsonFenceGate: BlockType;
  static readonly crimsonFungus: BlockType;
  static readonly crimsonHangingSign: BlockType;
  static readonly crimsonHyphae: BlockType;
  static readonly crimsonNylium: BlockType;
  static readonly crimsonPlanks: BlockType;
  static readonly crimsonPressurePlate: BlockType;
  static readonly crimsonRoots: BlockType;
  static readonly crimsonSlab: BlockType;
  static readonly crimsonStairs: BlockType;
  static readonly crimsonStandingSign: BlockType;
  static readonly crimsonStem: BlockType;
  static readonly crimsonTrapdoor: BlockType;
  static readonly crimsonWallSign: BlockType;
  static readonly cryingObsidian: BlockType;
  static readonly cutCopper: BlockType;
  static readonly cutCopperSlab: BlockType;
  static readonly cutCopperStairs: BlockType;
  static readonly cyanCandle: BlockType;
  static readonly cyanCandleCake: BlockType;
  static readonly cyanGlazedTerracotta: BlockType;
  static readonly darkOakButton: BlockType;
  static readonly darkOakDoor: BlockType;
  static readonly darkOakFenceGate: BlockType;
  static readonly darkOakHangingSign: BlockType;
  static readonly darkOakPressurePlate: BlockType;
  static readonly darkOakStairs: BlockType;
  static readonly darkoakStandingSign: BlockType;
  static readonly darkOakTrapdoor: BlockType;
  static readonly darkoakWallSign: BlockType;
  static readonly darkPrismarineStairs: BlockType;
  static readonly daylightDetector: BlockType;
  static readonly daylightDetectorInverted: BlockType;
  static readonly deadbush: BlockType;
  static readonly deepslate: BlockType;
  static readonly deepslateBrickDoubleSlab: BlockType;
  static readonly deepslateBricks: BlockType;
  static readonly deepslateBrickSlab: BlockType;
  static readonly deepslateBrickStairs: BlockType;
  static readonly deepslateBrickWall: BlockType;
  static readonly deepslateCoalOre: BlockType;
  static readonly deepslateCopperOre: BlockType;
  static readonly deepslateDiamondOre: BlockType;
  static readonly deepslateEmeraldOre: BlockType;
  static readonly deepslateGoldOre: BlockType;
  static readonly deepslateIronOre: BlockType;
  static readonly deepslateLapisOre: BlockType;
  static readonly deepslateRedstoneOre: BlockType;
  static readonly deepslateTileDoubleSlab: BlockType;
  static readonly deepslateTiles: BlockType;
  static readonly deepslateTileSlab: BlockType;
  static readonly deepslateTileStairs: BlockType;
  static readonly deepslateTileWall: BlockType;
  static readonly deny: BlockType;
  static readonly detectorRail: BlockType;
  static readonly diamondBlock: BlockType;
  static readonly diamondOre: BlockType;
  static readonly dioriteStairs: BlockType;
  static readonly dirt: BlockType;
  static readonly dirtWithRoots: BlockType;
  static readonly dispenser: BlockType;
  static readonly doubleCutCopperSlab: BlockType;
  static readonly doublePlant: BlockType;
  static readonly doubleStoneBlockSlab: BlockType;
  static readonly doubleStoneBlockSlab2: BlockType;
  static readonly doubleStoneBlockSlab3: BlockType;
  static readonly doubleStoneBlockSlab4: BlockType;
  static readonly doubleStoneSlab: BlockType;
  static readonly doubleStoneSlab2: BlockType;
  static readonly doubleStoneSlab3: BlockType;
  static readonly doubleStoneSlab4: BlockType;
  static readonly doubleWoodenSlab: BlockType;
  static readonly dragonEgg: BlockType;
  static readonly driedKelpBlock: BlockType;
  static readonly dripstoneBlock: BlockType;
  static readonly dropper: BlockType;
  static readonly element0: BlockType;
  static readonly element1: BlockType;
  static readonly element10: BlockType;
  static readonly element100: BlockType;
  static readonly element101: BlockType;
  static readonly element102: BlockType;
  static readonly element103: BlockType;
  static readonly element104: BlockType;
  static readonly element105: BlockType;
  static readonly element106: BlockType;
  static readonly element107: BlockType;
  static readonly element108: BlockType;
  static readonly element109: BlockType;
  static readonly element11: BlockType;
  static readonly element110: BlockType;
  static readonly element111: BlockType;
  static readonly element112: BlockType;
  static readonly element113: BlockType;
  static readonly element114: BlockType;
  static readonly element115: BlockType;
  static readonly element116: BlockType;
  static readonly element117: BlockType;
  static readonly element118: BlockType;
  static readonly element12: BlockType;
  static readonly element13: BlockType;
  static readonly element14: BlockType;
  static readonly element15: BlockType;
  static readonly element16: BlockType;
  static readonly element17: BlockType;
  static readonly element18: BlockType;
  static readonly element19: BlockType;
  static readonly element2: BlockType;
  static readonly element20: BlockType;
  static readonly element21: BlockType;
  static readonly element22: BlockType;
  static readonly element23: BlockType;
  static readonly element24: BlockType;
  static readonly element25: BlockType;
  static readonly element26: BlockType;
  static readonly element27: BlockType;
  static readonly element28: BlockType;
  static readonly element29: BlockType;
  static readonly element3: BlockType;
  static readonly element30: BlockType;
  static readonly element31: BlockType;
  static readonly element32: BlockType;
  static readonly element33: BlockType;
  static readonly element34: BlockType;
  static readonly element35: BlockType;
  static readonly element36: BlockType;
  static readonly element37: BlockType;
  static readonly element38: BlockType;
  static readonly element39: BlockType;
  static readonly element4: BlockType;
  static readonly element40: BlockType;
  static readonly element41: BlockType;
  static readonly element42: BlockType;
  static readonly element43: BlockType;
  static readonly element44: BlockType;
  static readonly element45: BlockType;
  static readonly element46: BlockType;
  static readonly element47: BlockType;
  static readonly element48: BlockType;
  static readonly element49: BlockType;
  static readonly element5: BlockType;
  static readonly element50: BlockType;
  static readonly element51: BlockType;
  static readonly element52: BlockType;
  static readonly element53: BlockType;
  static readonly element54: BlockType;
  static readonly element55: BlockType;
  static readonly element56: BlockType;
  static readonly element57: BlockType;
  static readonly element58: BlockType;
  static readonly element59: BlockType;
  static readonly element6: BlockType;
  static readonly element60: BlockType;
  static readonly element61: BlockType;
  static readonly element62: BlockType;
  static readonly element63: BlockType;
  static readonly element64: BlockType;
  static readonly element65: BlockType;
  static readonly element66: BlockType;
  static readonly element67: BlockType;
  static readonly element68: BlockType;
  static readonly element69: BlockType;
  static readonly element7: BlockType;
  static readonly element70: BlockType;
  static readonly element71: BlockType;
  static readonly element72: BlockType;
  static readonly element73: BlockType;
  static readonly element74: BlockType;
  static readonly element75: BlockType;
  static readonly element76: BlockType;
  static readonly element77: BlockType;
  static readonly element78: BlockType;
  static readonly element79: BlockType;
  static readonly element8: BlockType;
  static readonly element80: BlockType;
  static readonly element81: BlockType;
  static readonly element82: BlockType;
  static readonly element83: BlockType;
  static readonly element84: BlockType;
  static readonly element85: BlockType;
  static readonly element86: BlockType;
  static readonly element87: BlockType;
  static readonly element88: BlockType;
  static readonly element89: BlockType;
  static readonly element9: BlockType;
  static readonly element90: BlockType;
  static readonly element91: BlockType;
  static readonly element92: BlockType;
  static readonly element93: BlockType;
  static readonly element94: BlockType;
  static readonly element95: BlockType;
  static readonly element96: BlockType;
  static readonly element97: BlockType;
  static readonly element98: BlockType;
  static readonly element99: BlockType;
  static readonly emeraldBlock: BlockType;
  static readonly emeraldOre: BlockType;
  static readonly enchantingTable: BlockType;
  static readonly endBricks: BlockType;
  static readonly endBrickStairs: BlockType;
  static readonly enderChest: BlockType;
  static readonly endGateway: BlockType;
  static readonly endPortal: BlockType;
  static readonly endPortalFrame: BlockType;
  static readonly endRod: BlockType;
  static readonly endStone: BlockType;
  static readonly exposedCopper: BlockType;
  static readonly exposedCutCopper: BlockType;
  static readonly exposedCutCopperSlab: BlockType;
  static readonly exposedCutCopperStairs: BlockType;
  static readonly exposedDoubleCutCopperSlab: BlockType;
  static readonly farmland: BlockType;
  static readonly fence: BlockType;
  static readonly fenceGate: BlockType;
  static readonly fire: BlockType;
  static readonly fletchingTable: BlockType;
  static readonly floweringAzalea: BlockType;
  static readonly flowerPot: BlockType;
  static readonly flowingLava: BlockType;
  static readonly flowingWater: BlockType;
  static readonly frame: BlockType;
  static readonly frogSpawn: BlockType;
  static readonly frostedIce: BlockType;
  static readonly furnace: BlockType;
  static readonly gildedBlackstone: BlockType;
  static readonly glass: BlockType;
  static readonly glassPane: BlockType;
  static readonly glowFrame: BlockType;
  static readonly glowingobsidian: BlockType;
  static readonly glowLichen: BlockType;
  static readonly glowstone: BlockType;
  static readonly goldBlock: BlockType;
  static readonly goldenRail: BlockType;
  static readonly goldOre: BlockType;
  static readonly graniteStairs: BlockType;
  static readonly grass: BlockType;
  static readonly grassPath: BlockType;
  static readonly gravel: BlockType;
  static readonly grayCandle: BlockType;
  static readonly grayCandleCake: BlockType;
  static readonly grayGlazedTerracotta: BlockType;
  static readonly greenCandle: BlockType;
  static readonly greenCandleCake: BlockType;
  static readonly greenGlazedTerracotta: BlockType;
  static readonly grindstone: BlockType;
  static readonly hangingRoots: BlockType;
  static readonly hardenedClay: BlockType;
  static readonly hardGlass: BlockType;
  static readonly hardGlassPane: BlockType;
  static readonly hardStainedGlass: BlockType;
  static readonly hardStainedGlassPane: BlockType;
  static readonly hayBlock: BlockType;
  static readonly heavyWeightedPressurePlate: BlockType;
  static readonly honeyBlock: BlockType;
  static readonly honeycombBlock: BlockType;
  static readonly hopper: BlockType;
  static readonly ice: BlockType;
  static readonly infestedDeepslate: BlockType;
  static readonly infoUpdate: BlockType;
  static readonly infoUpdate2: BlockType;
  static readonly invisibleBedrock: BlockType;
  static readonly ironBars: BlockType;
  static readonly ironBlock: BlockType;
  static readonly ironDoor: BlockType;
  static readonly ironOre: BlockType;
  static readonly ironTrapdoor: BlockType;
  static readonly jigsaw: BlockType;
  static readonly jukebox: BlockType;
  static readonly jungleButton: BlockType;
  static readonly jungleDoor: BlockType;
  static readonly jungleFenceGate: BlockType;
  static readonly jungleHangingSign: BlockType;
  static readonly junglePressurePlate: BlockType;
  static readonly jungleStairs: BlockType;
  static readonly jungleStandingSign: BlockType;
  static readonly jungleTrapdoor: BlockType;
  static readonly jungleWallSign: BlockType;
  static readonly kelp: BlockType;
  static readonly ladder: BlockType;
  static readonly lantern: BlockType;
  static readonly lapisBlock: BlockType;
  static readonly lapisOre: BlockType;
  static readonly largeAmethystBud: BlockType;
  static readonly lava: BlockType;
  static readonly lavaCauldron: BlockType;
  static readonly leaves: BlockType;
  static readonly leaves2: BlockType;
  static readonly lectern: BlockType;
  static readonly lever: BlockType;
  static readonly lightBlock: BlockType;
  static readonly lightBlueCandle: BlockType;
  static readonly lightBlueCandleCake: BlockType;
  static readonly lightBlueGlazedTerracotta: BlockType;
  static readonly lightGrayCandle: BlockType;
  static readonly lightGrayCandleCake: BlockType;
  static readonly lightningRod: BlockType;
  static readonly lightWeightedPressurePlate: BlockType;
  static readonly limeCandle: BlockType;
  static readonly limeCandleCake: BlockType;
  static readonly limeGlazedTerracotta: BlockType;
  static readonly litBlastFurnace: BlockType;
  static readonly litDeepslateRedstoneOre: BlockType;
  static readonly litFurnace: BlockType;
  static readonly litPumpkin: BlockType;
  static readonly litRedstoneLamp: BlockType;
  static readonly litRedstoneOre: BlockType;
  static readonly litSmoker: BlockType;
  static readonly lodestone: BlockType;
  static readonly log: BlockType;
  static readonly log2: BlockType;
  static readonly loom: BlockType;
  static readonly magentaCandle: BlockType;
  static readonly magentaCandleCake: BlockType;
  static readonly magentaGlazedTerracotta: BlockType;
  static readonly magma: BlockType;
  static readonly mangroveButton: BlockType;
  static readonly mangroveDoor: BlockType;
  static readonly mangroveDoubleSlab: BlockType;
  static readonly mangroveFence: BlockType;
  static readonly mangroveFenceGate: BlockType;
  static readonly mangroveHangingSign: BlockType;
  static readonly mangroveLeaves: BlockType;
  static readonly mangroveLog: BlockType;
  static readonly mangrovePlanks: BlockType;
  static readonly mangrovePressurePlate: BlockType;
  static readonly mangrovePropagule: BlockType;
  static readonly mangroveRoots: BlockType;
  static readonly mangroveSlab: BlockType;
  static readonly mangroveStairs: BlockType;
  static readonly mangroveStandingSign: BlockType;
  static readonly mangroveTrapdoor: BlockType;
  static readonly mangroveWallSign: BlockType;
  static readonly mangroveWood: BlockType;
  static readonly mediumAmethystBud: BlockType;
  static readonly melonBlock: BlockType;
  static readonly melonStem: BlockType;
  static readonly mobSpawner: BlockType;
  static readonly monsterEgg: BlockType;
  static readonly mossBlock: BlockType;
  static readonly mossCarpet: BlockType;
  static readonly mossyCobblestone: BlockType;
  static readonly mossyCobblestoneStairs: BlockType;
  static readonly mossyStoneBrickStairs: BlockType;
  static readonly movingBlock: BlockType;
  static readonly mud: BlockType;
  static readonly mudBrickDoubleSlab: BlockType;
  static readonly mudBricks: BlockType;
  static readonly mudBrickSlab: BlockType;
  static readonly mudBrickStairs: BlockType;
  static readonly mudBrickWall: BlockType;
  static readonly muddyMangroveRoots: BlockType;
  static readonly mycelium: BlockType;
  static readonly netherBrick: BlockType;
  static readonly netherBrickFence: BlockType;
  static readonly netherBrickStairs: BlockType;
  static readonly netherGoldOre: BlockType;
  static readonly netheriteBlock: BlockType;
  static readonly netherrack: BlockType;
  static readonly netherreactor: BlockType;
  static readonly netherSprouts: BlockType;
  static readonly netherWart: BlockType;
  static readonly netherWartBlock: BlockType;
  static readonly normalStoneStairs: BlockType;
  static readonly noteblock: BlockType;
  static readonly oakHangingSign: BlockType;
  static readonly oakStairs: BlockType;
  static readonly observer: BlockType;
  static readonly obsidian: BlockType;
  static readonly ochreFroglight: BlockType;
  static readonly orangeCandle: BlockType;
  static readonly orangeCandleCake: BlockType;
  static readonly orangeGlazedTerracotta: BlockType;
  static readonly oxidizedCopper: BlockType;
  static readonly oxidizedCutCopper: BlockType;
  static readonly oxidizedCutCopperSlab: BlockType;
  static readonly oxidizedCutCopperStairs: BlockType;
  static readonly oxidizedDoubleCutCopperSlab: BlockType;
  static readonly packedIce: BlockType;
  static readonly packedMud: BlockType;
  static readonly pearlescentFroglight: BlockType;
  static readonly pinkCandle: BlockType;
  static readonly pinkCandleCake: BlockType;
  static readonly pinkGlazedTerracotta: BlockType;
  static readonly piston: BlockType;
  static readonly pistonArmCollision: BlockType;
  static readonly planks: BlockType;
  static readonly podzol: BlockType;
  static readonly pointedDripstone: BlockType;
  static readonly polishedAndesiteStairs: BlockType;
  static readonly polishedBasalt: BlockType;
  static readonly polishedBlackstone: BlockType;
  static readonly polishedBlackstoneBrickDoubleSlab: BlockType;
  static readonly polishedBlackstoneBricks: BlockType;
  static readonly polishedBlackstoneBrickSlab: BlockType;
  static readonly polishedBlackstoneBrickStairs: BlockType;
  static readonly polishedBlackstoneBrickWall: BlockType;
  static readonly polishedBlackstoneButton: BlockType;
  static readonly polishedBlackstoneDoubleSlab: BlockType;
  static readonly polishedBlackstonePressurePlate: BlockType;
  static readonly polishedBlackstoneSlab: BlockType;
  static readonly polishedBlackstoneStairs: BlockType;
  static readonly polishedBlackstoneWall: BlockType;
  static readonly polishedDeepslate: BlockType;
  static readonly polishedDeepslateDoubleSlab: BlockType;
  static readonly polishedDeepslateSlab: BlockType;
  static readonly polishedDeepslateStairs: BlockType;
  static readonly polishedDeepslateWall: BlockType;
  static readonly polishedDioriteStairs: BlockType;
  static readonly polishedGraniteStairs: BlockType;
  static readonly portal: BlockType;
  static readonly potatoes: BlockType;
  static readonly powderSnow: BlockType;
  static readonly poweredComparator: BlockType;
  static readonly poweredRepeater: BlockType;
  static readonly prismarine: BlockType;
  static readonly prismarineBricksStairs: BlockType;
  static readonly prismarineStairs: BlockType;
  static readonly pumpkin: BlockType;
  static readonly pumpkinStem: BlockType;
  static readonly purpleCandle: BlockType;
  static readonly purpleCandleCake: BlockType;
  static readonly purpleGlazedTerracotta: BlockType;
  static readonly purpurBlock: BlockType;
  static readonly purpurStairs: BlockType;
  static readonly quartzBlock: BlockType;
  static readonly quartzBricks: BlockType;
  static readonly quartzOre: BlockType;
  static readonly quartzStairs: BlockType;
  static readonly rail: BlockType;
  static readonly rawCopperBlock: BlockType;
  static readonly rawGoldBlock: BlockType;
  static readonly rawIronBlock: BlockType;
  static readonly redCandle: BlockType;
  static readonly redCandleCake: BlockType;
  static readonly redFlower: BlockType;
  static readonly redGlazedTerracotta: BlockType;
  static readonly redMushroom: BlockType;
  static readonly redMushroomBlock: BlockType;
  static readonly redNetherBrick: BlockType;
  static readonly redNetherBrickStairs: BlockType;
  static readonly redSandstone: BlockType;
  static readonly redSandstoneStairs: BlockType;
  static readonly redstoneBlock: BlockType;
  static readonly redstoneLamp: BlockType;
  static readonly redstoneOre: BlockType;
  static readonly redstoneTorch: BlockType;
  static readonly redstoneWire: BlockType;
  static readonly reeds: BlockType;
  static readonly reinforcedDeepslate: BlockType;
  static readonly repeatingCommandBlock: BlockType;
  static readonly reserved6: BlockType;
  static readonly respawnAnchor: BlockType;
  static readonly sand: BlockType;
  static readonly sandstone: BlockType;
  static readonly sandstoneStairs: BlockType;
  static readonly sapling: BlockType;
  static readonly scaffolding: BlockType;
  static readonly sculk: BlockType;
  static readonly sculkCatalyst: BlockType;
  static readonly sculkSensor: BlockType;
  static readonly sculkShrieker: BlockType;
  static readonly sculkVein: BlockType;
  static readonly seagrass: BlockType;
  static readonly seaLantern: BlockType;
  static readonly seaPickle: BlockType;
  static readonly shroomlight: BlockType;
  static readonly shulkerBox: BlockType;
  static readonly silverGlazedTerracotta: BlockType;
  static readonly skull: BlockType;
  static readonly slime: BlockType;
  static readonly smallAmethystBud: BlockType;
  static readonly smallDripleafBlock: BlockType;
  static readonly smithingTable: BlockType;
  static readonly smoker: BlockType;
  static readonly smoothBasalt: BlockType;
  static readonly smoothQuartzStairs: BlockType;
  static readonly smoothRedSandstoneStairs: BlockType;
  static readonly smoothSandstoneStairs: BlockType;
  static readonly smoothStone: BlockType;
  static readonly snow: BlockType;
  static readonly snowLayer: BlockType;
  static readonly soulCampfire: BlockType;
  static readonly soulFire: BlockType;
  static readonly soulLantern: BlockType;
  static readonly soulSand: BlockType;
  static readonly soulSoil: BlockType;
  static readonly soulTorch: BlockType;
  static readonly sponge: BlockType;
  static readonly sporeBlossom: BlockType;
  static readonly spruceButton: BlockType;
  static readonly spruceDoor: BlockType;
  static readonly spruceFenceGate: BlockType;
  static readonly spruceHangingSign: BlockType;
  static readonly sprucePressurePlate: BlockType;
  static readonly spruceStairs: BlockType;
  static readonly spruceStandingSign: BlockType;
  static readonly spruceTrapdoor: BlockType;
  static readonly spruceWallSign: BlockType;
  static readonly stainedGlass: BlockType;
  static readonly stainedGlassPane: BlockType;
  static readonly stainedHardenedClay: BlockType;
  static readonly standingBanner: BlockType;
  static readonly standingSign: BlockType;
  static readonly stickyPiston: BlockType;
  static readonly stickyPistonArmCollision: BlockType;
  static readonly stone: BlockType;
  static readonly stoneBlockSlab: BlockType;
  static readonly stoneBlockSlab2: BlockType;
  static readonly stoneBlockSlab3: BlockType;
  static readonly stoneBlockSlab4: BlockType;
  static readonly stonebrick: BlockType;
  static readonly stoneBrickStairs: BlockType;
  static readonly stoneButton: BlockType;
  static readonly stonecutter: BlockType;
  static readonly stonecutterBlock: BlockType;
  static readonly stonePressurePlate: BlockType;
  static readonly stoneSlab: BlockType;
  static readonly stoneSlab2: BlockType;
  static readonly stoneSlab3: BlockType;
  static readonly stoneSlab4: BlockType;
  static readonly stoneStairs: BlockType;
  static readonly strippedAcaciaLog: BlockType;
  static readonly strippedBambooBlock: BlockType;
  static readonly strippedBirchLog: BlockType;
  static readonly strippedCrimsonHyphae: BlockType;
  static readonly strippedCrimsonStem: BlockType;
  static readonly strippedDarkOakLog: BlockType;
  static readonly strippedJungleLog: BlockType;
  static readonly strippedMangroveLog: BlockType;
  static readonly strippedMangroveWood: BlockType;
  static readonly strippedOakLog: BlockType;
  static readonly strippedSpruceLog: BlockType;
  static readonly strippedWarpedHyphae: BlockType;
  static readonly strippedWarpedStem: BlockType;
  static readonly structureBlock: BlockType;
  static readonly structureVoid: BlockType;
  static readonly sweetBerryBush: BlockType;
  static readonly tallgrass: BlockType;
  static readonly target: BlockType;
  static readonly tintedGlass: BlockType;
  static readonly tnt: BlockType;
  static readonly torch: BlockType;
  static readonly trapdoor: BlockType;
  static readonly trappedChest: BlockType;
  static readonly tripWire: BlockType;
  static readonly tripwireHook: BlockType;
  static readonly tuff: BlockType;
  static readonly turtleEgg: BlockType;
  static readonly twistingVines: BlockType;
  static readonly underwaterTorch: BlockType;
  static readonly undyedShulkerBox: BlockType;
  static readonly unknown: BlockType;
  static readonly unlitRedstoneTorch: BlockType;
  static readonly unpoweredComparator: BlockType;
  static readonly unpoweredRepeater: BlockType;
  static readonly verdantFroglight: BlockType;
  static readonly vine: BlockType;
  static readonly wallBanner: BlockType;
  static readonly wallSign: BlockType;
  static readonly warpedButton: BlockType;
  static readonly warpedDoor: BlockType;
  static readonly warpedDoubleSlab: BlockType;
  static readonly warpedFence: BlockType;
  static readonly warpedFenceGate: BlockType;
  static readonly warpedFungus: BlockType;
  static readonly warpedHangingSign: BlockType;
  static readonly warpedHyphae: BlockType;
  static readonly warpedNylium: BlockType;
  static readonly warpedPlanks: BlockType;
  static readonly warpedPressurePlate: BlockType;
  static readonly warpedRoots: BlockType;
  static readonly warpedSlab: BlockType;
  static readonly warpedStairs: BlockType;
  static readonly warpedStandingSign: BlockType;
  static readonly warpedStem: BlockType;
  static readonly warpedTrapdoor: BlockType;
  static readonly warpedWallSign: BlockType;
  static readonly warpedWartBlock: BlockType;
  static readonly water: BlockType;
  static readonly waterlily: BlockType;
  static readonly waxedCopper: BlockType;
  static readonly waxedCutCopper: BlockType;
  static readonly waxedCutCopperSlab: BlockType;
  static readonly waxedCutCopperStairs: BlockType;
  static readonly waxedDoubleCutCopperSlab: BlockType;
  static readonly waxedExposedCopper: BlockType;
  static readonly waxedExposedCutCopper: BlockType;
  static readonly waxedExposedCutCopperSlab: BlockType;
  static readonly waxedExposedCutCopperStairs: BlockType;
  static readonly waxedExposedDoubleCutCopperSlab: BlockType;
  static readonly waxedOxidizedCopper: BlockType;
  static readonly waxedOxidizedCutCopper: BlockType;
  static readonly waxedOxidizedCutCopperSlab: BlockType;
  static readonly waxedOxidizedCutCopperStairs: BlockType;
  static readonly waxedOxidizedDoubleCutCopperSlab: BlockType;
  static readonly waxedWeatheredCopper: BlockType;
  static readonly waxedWeatheredCutCopper: BlockType;
  static readonly waxedWeatheredCutCopperSlab: BlockType;
  static readonly waxedWeatheredCutCopperStairs: BlockType;
  static readonly waxedWeatheredDoubleCutCopperSlab: BlockType;
  static readonly weatheredCopper: BlockType;
  static readonly weatheredCutCopper: BlockType;
  static readonly weatheredCutCopperSlab: BlockType;
  static readonly weatheredCutCopperStairs: BlockType;
  static readonly weatheredDoubleCutCopperSlab: BlockType;
  static readonly web: BlockType;
  static readonly weepingVines: BlockType;
  static readonly wheat: BlockType;
  static readonly whiteCandle: BlockType;
  static readonly whiteCandleCake: BlockType;
  static readonly whiteGlazedTerracotta: BlockType;
  static readonly witherRose: BlockType;
  static readonly wood: BlockType;
  static readonly woodenButton: BlockType;
  static readonly woodenDoor: BlockType;
  static readonly woodenPressurePlate: BlockType;
  static readonly woodenSlab: BlockType;
  static readonly wool: BlockType;
  static readonly yellowCandle: BlockType;
  static readonly yellowCandleCake: BlockType;
  static readonly yellowFlower: BlockType;
  static readonly yellowGlazedTerracotta: BlockType;
  static get(typeName: string): BlockType;
  static getAllBlockTypes(): BlockType[];
}
export class MinecraftDimensionTypes {
  protected constructor();
  static readonly nether = "minecraft:nether";
  static readonly overworld = "minecraft:overworld";
  static readonly theEnd = "minecraft:the_end";
}
export class MinecraftEffectTypes {
  protected constructor();
  static readonly absorption: EffectType;
  static readonly badOmen: EffectType;
  static readonly blindness: EffectType;
  static readonly conduitPower: EffectType;
  static readonly darkness: EffectType;
  static readonly empty: EffectType;
  static readonly fatalPoison: EffectType;
  static readonly fireResistance: EffectType;
  static readonly haste: EffectType;
  static readonly healthBoost: EffectType;
  static readonly hunger: EffectType;
  static readonly instantDamage: EffectType;
  static readonly instantHealth: EffectType;
  static readonly invisibility: EffectType;
  static readonly jumpBoost: EffectType;
  static readonly levitation: EffectType;
  static readonly miningFatigue: EffectType;
  static readonly nausea: EffectType;
  static readonly nightVision: EffectType;
  static readonly poison: EffectType;
  static readonly regeneration: EffectType;
  static readonly resistance: EffectType;
  static readonly saturation: EffectType;
  static readonly slowFalling: EffectType;
  static readonly slowness: EffectType;
  static readonly speed: EffectType;
  static readonly strength: EffectType;
  static readonly villageHero: EffectType;
  static readonly waterBreathing: EffectType;
  static readonly weakness: EffectType;
  static readonly wither: EffectType;
}
export class MinecraftEnchantmentTypes {
  protected constructor();
  static readonly aquaAffinity: EnchantmentType;
  static readonly baneOfArthropods: EnchantmentType;
  static readonly binding: EnchantmentType;
  static readonly blastProtection: EnchantmentType;
  static readonly channeling: EnchantmentType;
  static readonly depthStrider: EnchantmentType;
  static readonly efficiency: EnchantmentType;
  static readonly featherFalling: EnchantmentType;
  static readonly fireAspect: EnchantmentType;
  static readonly fireProtection: EnchantmentType;
  static readonly flame: EnchantmentType;
  static readonly fortune: EnchantmentType;
  static readonly frostWalker: EnchantmentType;
  static readonly impaling: EnchantmentType;
  static readonly infinity: EnchantmentType;
  static readonly knockback: EnchantmentType;
  static readonly looting: EnchantmentType;
  static readonly loyalty: EnchantmentType;
  static readonly luckOfTheSea: EnchantmentType;
  static readonly lure: EnchantmentType;
  static readonly mending: EnchantmentType;
  static readonly multishot: EnchantmentType;
  static readonly piercing: EnchantmentType;
  static readonly power: EnchantmentType;
  static readonly projectileProtection: EnchantmentType;
  static readonly protection: EnchantmentType;
  static readonly punch: EnchantmentType;
  static readonly quickCharge: EnchantmentType;
  static readonly respiration: EnchantmentType;
  static readonly riptide: EnchantmentType;
  static readonly sharpness: EnchantmentType;
  static readonly silkTouch: EnchantmentType;
  static readonly smite: EnchantmentType;
  static readonly soulSpeed: EnchantmentType;
  static readonly swiftSneak: EnchantmentType;
  static readonly thorns: EnchantmentType;
  static readonly unbreaking: EnchantmentType;
  static readonly vanishing: EnchantmentType;
}
export class MinecraftEntityTypes {
  protected constructor();
  static readonly agent: EntityType;
  static readonly allay: EntityType;
  static readonly areaEffectCloud: EntityType;
  static readonly armorStand: EntityType;
  static readonly arrow: EntityType;
  static readonly axolotl: EntityType;
  static readonly bat: EntityType;
  static readonly bee: EntityType;
  static readonly blaze: EntityType;
  static readonly boat: EntityType;
  static readonly cat: EntityType;
  static readonly caveSpider: EntityType;
  static readonly chestBoat: EntityType;
  static readonly chestMinecart: EntityType;
  static readonly chicken: EntityType;
  static readonly cod: EntityType;
  static readonly commandBlockMinecart: EntityType;
  static readonly cow: EntityType;
  static readonly creeper: EntityType;
  static readonly dolphin: EntityType;
  static readonly donkey: EntityType;
  static readonly dragonFireball: EntityType;
  static readonly drowned: EntityType;
  static readonly egg: EntityType;
  static readonly elderGuardian: EntityType;
  static readonly enderCrystal: EntityType;
  static readonly enderDragon: EntityType;
  static readonly enderman: EntityType;
  static readonly endermite: EntityType;
  static readonly enderPearl: EntityType;
  static readonly evocationIllager: EntityType;
  static readonly eyeOfEnderSignal: EntityType;
  static readonly fireball: EntityType;
  static readonly fireworksRocket: EntityType;
  static readonly fishingHook: EntityType;
  static readonly fox: EntityType;
  static readonly frog: EntityType;
  static readonly ghast: EntityType;
  static readonly glowSquid: EntityType;
  static readonly goat: EntityType;
  static readonly guardian: EntityType;
  static readonly hoglin: EntityType;
  static readonly hopperMinecart: EntityType;
  static readonly horse: EntityType;
  static readonly husk: EntityType;
  static readonly ironGolem: EntityType;
  static readonly lightningBolt: EntityType;
  static readonly lingeringPotion: EntityType;
  static readonly llama: EntityType;
  static readonly llamaSpit: EntityType;
  static readonly magmaCube: EntityType;
  static readonly minecart: EntityType;
  static readonly mooshroom: EntityType;
  static readonly mule: EntityType;
  static readonly npc: EntityType;
  static readonly ocelot: EntityType;
  static readonly panda: EntityType;
  static readonly parrot: EntityType;
  static readonly phantom: EntityType;
  static readonly pig: EntityType;
  static readonly piglin: EntityType;
  static readonly piglinBrute: EntityType;
  static readonly pillager: EntityType;
  static readonly player: EntityType;
  static readonly polarBear: EntityType;
  static readonly pufferfish: EntityType;
  static readonly rabbit: EntityType;
  static readonly ravager: EntityType;
  static readonly salmon: EntityType;
  static readonly sheep: EntityType;
  static readonly shulker: EntityType;
  static readonly shulkerBullet: EntityType;
  static readonly silverfish: EntityType;
  static readonly skeleton: EntityType;
  static readonly skeletonHorse: EntityType;
  static readonly slime: EntityType;
  static readonly smallFireball: EntityType;
  static readonly snowball: EntityType;
  static readonly snowGolem: EntityType;
  static readonly spider: EntityType;
  static readonly splashPotion: EntityType;
  static readonly squid: EntityType;
  static readonly stray: EntityType;
  static readonly strider: EntityType;
  static readonly tadpole: EntityType;
  static readonly thrownTrident: EntityType;
  static readonly tnt: EntityType;
  static readonly tntMinecart: EntityType;
  static readonly traderLlama: EntityType;
  static readonly tripodCamera: EntityType;
  static readonly tropicalfish: EntityType;
  static readonly turtle: EntityType;
  static readonly vex: EntityType;
  static readonly villager: EntityType;
  static readonly villagerV2: EntityType;
  static readonly vindicator: EntityType;
  static readonly wanderingTrader: EntityType;
  static readonly warden: EntityType;
  static readonly witch: EntityType;
  static readonly wither: EntityType;
  static readonly witherSkeleton: EntityType;
  static readonly witherSkull: EntityType;
  static readonly witherSkullDangerous: EntityType;
  static readonly wolf: EntityType;
  static readonly xpBottle: EntityType;
  static readonly xpOrb: EntityType;
  static readonly zoglin: EntityType;
  static readonly zombie: EntityType;
  static readonly zombieHorse: EntityType;
  static readonly zombiePigman: EntityType;
  static readonly zombieVillager: EntityType;
  static readonly zombieVillagerV2: EntityType;
}
export class MinecraftItemTypes {
  protected constructor();
  static readonly acaciaBoat: ItemType;
  static readonly acaciaButton: ItemType;
  static readonly acaciaChestBoat: ItemType;
  static readonly acaciaDoor: ItemType;
  static readonly acaciaFenceGate: ItemType;
  static readonly acaciaPressurePlate: ItemType;
  static readonly acaciaSign: ItemType;
  static readonly acaciaStairs: ItemType;
  static readonly acaciaTrapdoor: ItemType;
  static readonly activatorRail: ItemType;
  static readonly allaySpawnEgg: ItemType;
  static readonly allow: ItemType;
  static readonly amethystBlock: ItemType;
  static readonly amethystCluster: ItemType;
  static readonly amethystShard: ItemType;
  static readonly ancientDebris: ItemType;
  static readonly andesiteStairs: ItemType;
  static readonly anvil: ItemType;
  static readonly apple: ItemType;
  static readonly armorStand: ItemType;
  static readonly arrow: ItemType;
  static readonly axolotlBucket: ItemType;
  static readonly axolotlSpawnEgg: ItemType;
  static readonly azalea: ItemType;
  static readonly azaleaLeaves: ItemType;
  static readonly azaleaLeavesFlowered: ItemType;
  static readonly bakedPotato: ItemType;
  static readonly bamboo: ItemType;
  static readonly banner: ItemType;
  static readonly bannerPattern: ItemType;
  static readonly barrel: ItemType;
  static readonly barrier: ItemType;
  static readonly basalt: ItemType;
  static readonly batSpawnEgg: ItemType;
  static readonly beacon: ItemType;
  static readonly bed: ItemType;
  static readonly bedrock: ItemType;
  static readonly beef: ItemType;
  static readonly beehive: ItemType;
  static readonly beeNest: ItemType;
  static readonly beeSpawnEgg: ItemType;
  static readonly beetroot: ItemType;
  static readonly beetrootSeeds: ItemType;
  static readonly beetrootSoup: ItemType;
  static readonly bell: ItemType;
  static readonly bigDripleaf: ItemType;
  static readonly birchBoat: ItemType;
  static readonly birchButton: ItemType;
  static readonly birchChestBoat: ItemType;
  static readonly birchDoor: ItemType;
  static readonly birchFenceGate: ItemType;
  static readonly birchPressurePlate: ItemType;
  static readonly birchSign: ItemType;
  static readonly birchStairs: ItemType;
  static readonly birchTrapdoor: ItemType;
  static readonly blackCandle: ItemType;
  static readonly blackDye: ItemType;
  static readonly blackGlazedTerracotta: ItemType;
  static readonly blackstone: ItemType;
  static readonly blackstoneSlab: ItemType;
  static readonly blackstoneStairs: ItemType;
  static readonly blackstoneWall: ItemType;
  static readonly blastFurnace: ItemType;
  static readonly blazePowder: ItemType;
  static readonly blazeRod: ItemType;
  static readonly blazeSpawnEgg: ItemType;
  static readonly blueCandle: ItemType;
  static readonly blueDye: ItemType;
  static readonly blueGlazedTerracotta: ItemType;
  static readonly blueIce: ItemType;
  static readonly boat: ItemType;
  static readonly bone: ItemType;
  static readonly boneBlock: ItemType;
  static readonly boneMeal: ItemType;
  static readonly book: ItemType;
  static readonly bookshelf: ItemType;
  static readonly borderBlock: ItemType;
  static readonly bordureIndentedBannerPattern: ItemType;
  static readonly bow: ItemType;
  static readonly bowl: ItemType;
  static readonly bread: ItemType;
  static readonly brewingStand: ItemType;
  static readonly brick: ItemType;
  static readonly brickBlock: ItemType;
  static readonly brickStairs: ItemType;
  static readonly brownCandle: ItemType;
  static readonly brownDye: ItemType;
  static readonly brownGlazedTerracotta: ItemType;
  static readonly brownMushroom: ItemType;
  static readonly brownMushroomBlock: ItemType;
  static readonly bucket: ItemType;
  static readonly buddingAmethyst: ItemType;
  static readonly cactus: ItemType;
  static readonly cake: ItemType;
  static readonly calcite: ItemType;
  static readonly campfire: ItemType;
  static readonly candle: ItemType;
  static readonly carpet: ItemType;
  static readonly carrot: ItemType;
  static readonly carrotOnAStick: ItemType;
  static readonly cartographyTable: ItemType;
  static readonly carvedPumpkin: ItemType;
  static readonly catSpawnEgg: ItemType;
  static readonly cauldron: ItemType;
  static readonly caveSpiderSpawnEgg: ItemType;
  static readonly chain: ItemType;
  static readonly chainCommandBlock: ItemType;
  static readonly chainmailBoots: ItemType;
  static readonly chainmailChestplate: ItemType;
  static readonly chainmailHelmet: ItemType;
  static readonly chainmailLeggings: ItemType;
  static readonly charcoal: ItemType;
  static readonly chest: ItemType;
  static readonly chestBoat: ItemType;
  static readonly chestMinecart: ItemType;
  static readonly chicken: ItemType;
  static readonly chickenSpawnEgg: ItemType;
  static readonly chiseledDeepslate: ItemType;
  static readonly chiseledNetherBricks: ItemType;
  static readonly chiseledPolishedBlackstone: ItemType;
  static readonly chorusFlower: ItemType;
  static readonly chorusFruit: ItemType;
  static readonly chorusPlant: ItemType;
  static readonly clay: ItemType;
  static readonly clayBall: ItemType;
  static readonly clock: ItemType;
  static readonly coal: ItemType;
  static readonly coalBlock: ItemType;
  static readonly coalOre: ItemType;
  static readonly cobbledDeepslate: ItemType;
  static readonly cobbledDeepslateSlab: ItemType;
  static readonly cobbledDeepslateStairs: ItemType;
  static readonly cobbledDeepslateWall: ItemType;
  static readonly cobblestone: ItemType;
  static readonly cobblestoneWall: ItemType;
  static readonly cocoaBeans: ItemType;
  static readonly cod: ItemType;
  static readonly codBucket: ItemType;
  static readonly codSpawnEgg: ItemType;
  static readonly commandBlock: ItemType;
  static readonly commandBlockMinecart: ItemType;
  static readonly comparator: ItemType;
  static readonly compass: ItemType;
  static readonly composter: ItemType;
  static readonly concrete: ItemType;
  static readonly concretePowder: ItemType;
  static readonly conduit: ItemType;
  static readonly cookedBeef: ItemType;
  static readonly cookedChicken: ItemType;
  static readonly cookedCod: ItemType;
  static readonly cookedMutton: ItemType;
  static readonly cookedPorkchop: ItemType;
  static readonly cookedRabbit: ItemType;
  static readonly cookedSalmon: ItemType;
  static readonly cookie: ItemType;
  static readonly copperBlock: ItemType;
  static readonly copperIngot: ItemType;
  static readonly copperOre: ItemType;
  static readonly coral: ItemType;
  static readonly coralBlock: ItemType;
  static readonly coralFan: ItemType;
  static readonly coralFanDead: ItemType;
  static readonly cowSpawnEgg: ItemType;
  static readonly crackedDeepslateBricks: ItemType;
  static readonly crackedDeepslateTiles: ItemType;
  static readonly crackedNetherBricks: ItemType;
  static readonly crackedPolishedBlackstoneBricks: ItemType;
  static readonly craftingTable: ItemType;
  static readonly creeperBannerPattern: ItemType;
  static readonly creeperSpawnEgg: ItemType;
  static readonly crimsonButton: ItemType;
  static readonly crimsonDoor: ItemType;
  static readonly crimsonFence: ItemType;
  static readonly crimsonFenceGate: ItemType;
  static readonly crimsonFungus: ItemType;
  static readonly crimsonHyphae: ItemType;
  static readonly crimsonNylium: ItemType;
  static readonly crimsonPlanks: ItemType;
  static readonly crimsonPressurePlate: ItemType;
  static readonly crimsonRoots: ItemType;
  static readonly crimsonSign: ItemType;
  static readonly crimsonSlab: ItemType;
  static readonly crimsonStairs: ItemType;
  static readonly crimsonStem: ItemType;
  static readonly crimsonTrapdoor: ItemType;
  static readonly crossbow: ItemType;
  static readonly cryingObsidian: ItemType;
  static readonly cutCopper: ItemType;
  static readonly cutCopperSlab: ItemType;
  static readonly cutCopperStairs: ItemType;
  static readonly cyanCandle: ItemType;
  static readonly cyanDye: ItemType;
  static readonly cyanGlazedTerracotta: ItemType;
  static readonly darkOakBoat: ItemType;
  static readonly darkOakButton: ItemType;
  static readonly darkOakChestBoat: ItemType;
  static readonly darkOakDoor: ItemType;
  static readonly darkOakFenceGate: ItemType;
  static readonly darkOakPressurePlate: ItemType;
  static readonly darkOakSign: ItemType;
  static readonly darkOakStairs: ItemType;
  static readonly darkOakTrapdoor: ItemType;
  static readonly darkPrismarineStairs: ItemType;
  static readonly daylightDetector: ItemType;
  static readonly deadbush: ItemType;
  static readonly debugStick: ItemType;
  static readonly deepslate: ItemType;
  static readonly deepslateBricks: ItemType;
  static readonly deepslateBrickSlab: ItemType;
  static readonly deepslateBrickStairs: ItemType;
  static readonly deepslateBrickWall: ItemType;
  static readonly deepslateCoalOre: ItemType;
  static readonly deepslateCopperOre: ItemType;
  static readonly deepslateDiamondOre: ItemType;
  static readonly deepslateEmeraldOre: ItemType;
  static readonly deepslateGoldOre: ItemType;
  static readonly deepslateIronOre: ItemType;
  static readonly deepslateLapisOre: ItemType;
  static readonly deepslateRedstoneOre: ItemType;
  static readonly deepslateTiles: ItemType;
  static readonly deepslateTileSlab: ItemType;
  static readonly deepslateTileStairs: ItemType;
  static readonly deepslateTileWall: ItemType;
  static readonly deny: ItemType;
  static readonly detectorRail: ItemType;
  static readonly diamond: ItemType;
  static readonly diamondAxe: ItemType;
  static readonly diamondBlock: ItemType;
  static readonly diamondBoots: ItemType;
  static readonly diamondChestplate: ItemType;
  static readonly diamondHelmet: ItemType;
  static readonly diamondHoe: ItemType;
  static readonly diamondHorseArmor: ItemType;
  static readonly diamondLeggings: ItemType;
  static readonly diamondOre: ItemType;
  static readonly diamondPickaxe: ItemType;
  static readonly diamondShovel: ItemType;
  static readonly diamondSword: ItemType;
  static readonly dioriteStairs: ItemType;
  static readonly dirt: ItemType;
  static readonly dirtWithRoots: ItemType;
  static readonly discFragment5: ItemType;
  static readonly dispenser: ItemType;
  static readonly dolphinSpawnEgg: ItemType;
  static readonly donkeySpawnEgg: ItemType;
  static readonly doublePlant: ItemType;
  static readonly dragonBreath: ItemType;
  static readonly dragonEgg: ItemType;
  static readonly driedKelp: ItemType;
  static readonly driedKelpBlock: ItemType;
  static readonly dripstoneBlock: ItemType;
  static readonly dropper: ItemType;
  static readonly drownedSpawnEgg: ItemType;
  static readonly dye: ItemType;
  static readonly echoShard: ItemType;
  static readonly egg: ItemType;
  static readonly elderGuardianSpawnEgg: ItemType;
  static readonly elytra: ItemType;
  static readonly emerald: ItemType;
  static readonly emeraldBlock: ItemType;
  static readonly emeraldOre: ItemType;
  static readonly emptyMap: ItemType;
  static readonly enchantedBook: ItemType;
  static readonly enchantedGoldenApple: ItemType;
  static readonly enchantingTable: ItemType;
  static readonly endBricks: ItemType;
  static readonly endBrickStairs: ItemType;
  static readonly endCrystal: ItemType;
  static readonly enderChest: ItemType;
  static readonly enderDragonSpawnEgg: ItemType;
  static readonly enderEye: ItemType;
  static readonly endermanSpawnEgg: ItemType;
  static readonly endermiteSpawnEgg: ItemType;
  static readonly enderPearl: ItemType;
  static readonly endPortalFrame: ItemType;
  static readonly endRod: ItemType;
  static readonly endStone: ItemType;
  static readonly evokerSpawnEgg: ItemType;
  static readonly experienceBottle: ItemType;
  static readonly exposedCopper: ItemType;
  static readonly exposedCutCopper: ItemType;
  static readonly exposedCutCopperSlab: ItemType;
  static readonly exposedCutCopperStairs: ItemType;
  static readonly farmland: ItemType;
  static readonly feather: ItemType;
  static readonly fence: ItemType;
  static readonly fenceGate: ItemType;
  static readonly fermentedSpiderEye: ItemType;
  static readonly fieldMasonedBannerPattern: ItemType;
  static readonly filledMap: ItemType;
  static readonly fireCharge: ItemType;
  static readonly fireworkRocket: ItemType;
  static readonly fireworkStar: ItemType;
  static readonly fishingRod: ItemType;
  static readonly fletchingTable: ItemType;
  static readonly flint: ItemType;
  static readonly flintAndSteel: ItemType;
  static readonly flowerBannerPattern: ItemType;
  static readonly floweringAzalea: ItemType;
  static readonly flowerPot: ItemType;
  static readonly foxSpawnEgg: ItemType;
  static readonly frame: ItemType;
  static readonly frogSpawn: ItemType;
  static readonly frogSpawnEgg: ItemType;
  static readonly frostedIce: ItemType;
  static readonly furnace: ItemType;
  static readonly ghastSpawnEgg: ItemType;
  static readonly ghastTear: ItemType;
  static readonly gildedBlackstone: ItemType;
  static readonly glass: ItemType;
  static readonly glassBottle: ItemType;
  static readonly glassPane: ItemType;
  static readonly glisteringMelonSlice: ItemType;
  static readonly globeBannerPattern: ItemType;
  static readonly glowBerries: ItemType;
  static readonly glowFrame: ItemType;
  static readonly glowInkSac: ItemType;
  static readonly glowLichen: ItemType;
  static readonly glowSquidSpawnEgg: ItemType;
  static readonly glowstone: ItemType;
  static readonly glowstoneDust: ItemType;
  static readonly goatHorn: ItemType;
  static readonly goatSpawnEgg: ItemType;
  static readonly goldBlock: ItemType;
  static readonly goldenApple: ItemType;
  static readonly goldenAxe: ItemType;
  static readonly goldenBoots: ItemType;
  static readonly goldenCarrot: ItemType;
  static readonly goldenChestplate: ItemType;
  static readonly goldenHelmet: ItemType;
  static readonly goldenHoe: ItemType;
  static readonly goldenHorseArmor: ItemType;
  static readonly goldenLeggings: ItemType;
  static readonly goldenPickaxe: ItemType;
  static readonly goldenRail: ItemType;
  static readonly goldenShovel: ItemType;
  static readonly goldenSword: ItemType;
  static readonly goldIngot: ItemType;
  static readonly goldNugget: ItemType;
  static readonly goldOre: ItemType;
  static readonly graniteStairs: ItemType;
  static readonly grass: ItemType;
  static readonly grassPath: ItemType;
  static readonly gravel: ItemType;
  static readonly grayCandle: ItemType;
  static readonly grayDye: ItemType;
  static readonly grayGlazedTerracotta: ItemType;
  static readonly greenCandle: ItemType;
  static readonly greenDye: ItemType;
  static readonly greenGlazedTerracotta: ItemType;
  static readonly grindstone: ItemType;
  static readonly guardianSpawnEgg: ItemType;
  static readonly gunpowder: ItemType;
  static readonly hangingRoots: ItemType;
  static readonly hardenedClay: ItemType;
  static readonly hayBlock: ItemType;
  static readonly heartOfTheSea: ItemType;
  static readonly heavyWeightedPressurePlate: ItemType;
  static readonly hoglinSpawnEgg: ItemType;
  static readonly honeyBlock: ItemType;
  static readonly honeyBottle: ItemType;
  static readonly honeycomb: ItemType;
  static readonly honeycombBlock: ItemType;
  static readonly hopper: ItemType;
  static readonly hopperMinecart: ItemType;
  static readonly horseSpawnEgg: ItemType;
  static readonly huskSpawnEgg: ItemType;
  static readonly ice: ItemType;
  static readonly infestedDeepslate: ItemType;
  static readonly inkSac: ItemType;
  static readonly ironAxe: ItemType;
  static readonly ironBars: ItemType;
  static readonly ironBlock: ItemType;
  static readonly ironBoots: ItemType;
  static readonly ironChestplate: ItemType;
  static readonly ironDoor: ItemType;
  static readonly ironGolemSpawnEgg: ItemType;
  static readonly ironHelmet: ItemType;
  static readonly ironHoe: ItemType;
  static readonly ironHorseArmor: ItemType;
  static readonly ironIngot: ItemType;
  static readonly ironLeggings: ItemType;
  static readonly ironNugget: ItemType;
  static readonly ironOre: ItemType;
  static readonly ironPickaxe: ItemType;
  static readonly ironShovel: ItemType;
  static readonly ironSword: ItemType;
  static readonly ironTrapdoor: ItemType;
  static readonly jigsaw: ItemType;
  static readonly jukebox: ItemType;
  static readonly jungleBoat: ItemType;
  static readonly jungleButton: ItemType;
  static readonly jungleChestBoat: ItemType;
  static readonly jungleDoor: ItemType;
  static readonly jungleFenceGate: ItemType;
  static readonly junglePressurePlate: ItemType;
  static readonly jungleSign: ItemType;
  static readonly jungleStairs: ItemType;
  static readonly jungleTrapdoor: ItemType;
  static readonly kelp: ItemType;
  static readonly ladder: ItemType;
  static readonly lantern: ItemType;
  static readonly lapisBlock: ItemType;
  static readonly lapisLazuli: ItemType;
  static readonly lapisOre: ItemType;
  static readonly largeAmethystBud: ItemType;
  static readonly lavaBucket: ItemType;
  static readonly lead: ItemType;
  static readonly leather: ItemType;
  static readonly leatherBoots: ItemType;
  static readonly leatherChestplate: ItemType;
  static readonly leatherHelmet: ItemType;
  static readonly leatherHorseArmor: ItemType;
  static readonly leatherLeggings: ItemType;
  static readonly leaves: ItemType;
  static readonly leaves2: ItemType;
  static readonly lectern: ItemType;
  static readonly lever: ItemType;
  static readonly lightBlock: ItemType;
  static readonly lightBlueCandle: ItemType;
  static readonly lightBlueDye: ItemType;
  static readonly lightBlueGlazedTerracotta: ItemType;
  static readonly lightGrayCandle: ItemType;
  static readonly lightGrayDye: ItemType;
  static readonly lightningRod: ItemType;
  static readonly lightWeightedPressurePlate: ItemType;
  static readonly limeCandle: ItemType;
  static readonly limeDye: ItemType;
  static readonly limeGlazedTerracotta: ItemType;
  static readonly lingeringPotion: ItemType;
  static readonly litPumpkin: ItemType;
  static readonly llamaSpawnEgg: ItemType;
  static readonly lodestone: ItemType;
  static readonly lodestoneCompass: ItemType;
  static readonly log: ItemType;
  static readonly log2: ItemType;
  static readonly loom: ItemType;
  static readonly magentaCandle: ItemType;
  static readonly magentaDye: ItemType;
  static readonly magentaGlazedTerracotta: ItemType;
  static readonly magma: ItemType;
  static readonly magmaCream: ItemType;
  static readonly magmaCubeSpawnEgg: ItemType;
  static readonly mangroveBoat: ItemType;
  static readonly mangroveButton: ItemType;
  static readonly mangroveChestBoat: ItemType;
  static readonly mangroveDoor: ItemType;
  static readonly mangroveFence: ItemType;
  static readonly mangroveFenceGate: ItemType;
  static readonly mangroveLeaves: ItemType;
  static readonly mangroveLog: ItemType;
  static readonly mangrovePlanks: ItemType;
  static readonly mangrovePressurePlate: ItemType;
  static readonly mangrovePropagule: ItemType;
  static readonly mangroveRoots: ItemType;
  static readonly mangroveSign: ItemType;
  static readonly mangroveSlab: ItemType;
  static readonly mangroveStairs: ItemType;
  static readonly mangroveTrapdoor: ItemType;
  static readonly mangroveWood: ItemType;
  static readonly mediumAmethystBud: ItemType;
  static readonly melonBlock: ItemType;
  static readonly melonSeeds: ItemType;
  static readonly melonSlice: ItemType;
  static readonly milkBucket: ItemType;
  static readonly minecart: ItemType;
  static readonly mobSpawner: ItemType;
  static readonly mojangBannerPattern: ItemType;
  static readonly monsterEgg: ItemType;
  static readonly mooshroomSpawnEgg: ItemType;
  static readonly mossBlock: ItemType;
  static readonly mossCarpet: ItemType;
  static readonly mossyCobblestone: ItemType;
  static readonly mossyCobblestoneStairs: ItemType;
  static readonly mossyStoneBrickStairs: ItemType;
  static readonly mud: ItemType;
  static readonly mudBricks: ItemType;
  static readonly mudBrickSlab: ItemType;
  static readonly mudBrickStairs: ItemType;
  static readonly mudBrickWall: ItemType;
  static readonly muddyMangroveRoots: ItemType;
  static readonly muleSpawnEgg: ItemType;
  static readonly mushroomStew: ItemType;
  static readonly musicDisc11: ItemType;
  static readonly musicDisc13: ItemType;
  static readonly musicDisc5: ItemType;
  static readonly musicDiscBlocks: ItemType;
  static readonly musicDiscCat: ItemType;
  static readonly musicDiscChirp: ItemType;
  static readonly musicDiscFar: ItemType;
  static readonly musicDiscMall: ItemType;
  static readonly musicDiscMellohi: ItemType;
  static readonly musicDiscOtherside: ItemType;
  static readonly musicDiscPigstep: ItemType;
  static readonly musicDiscStal: ItemType;
  static readonly musicDiscStrad: ItemType;
  static readonly musicDiscWait: ItemType;
  static readonly musicDiscWard: ItemType;
  static readonly mutton: ItemType;
  static readonly mycelium: ItemType;
  static readonly nameTag: ItemType;
  static readonly nautilusShell: ItemType;
  static readonly netherbrick: ItemType;
  static readonly netherBrick: ItemType;
  static readonly netherBrickFence: ItemType;
  static readonly netherBrickStairs: ItemType;
  static readonly netherGoldOre: ItemType;
  static readonly netheriteAxe: ItemType;
  static readonly netheriteBlock: ItemType;
  static readonly netheriteBoots: ItemType;
  static readonly netheriteChestplate: ItemType;
  static readonly netheriteHelmet: ItemType;
  static readonly netheriteHoe: ItemType;
  static readonly netheriteIngot: ItemType;
  static readonly netheriteLeggings: ItemType;
  static readonly netheritePickaxe: ItemType;
  static readonly netheriteScrap: ItemType;
  static readonly netheriteShovel: ItemType;
  static readonly netheriteSword: ItemType;
  static readonly netherrack: ItemType;
  static readonly netherSprouts: ItemType;
  static readonly netherStar: ItemType;
  static readonly netherWart: ItemType;
  static readonly netherWartBlock: ItemType;
  static readonly normalStoneStairs: ItemType;
  static readonly noteblock: ItemType;
  static readonly oakBoat: ItemType;
  static readonly oakChestBoat: ItemType;
  static readonly oakSign: ItemType;
  static readonly oakStairs: ItemType;
  static readonly observer: ItemType;
  static readonly obsidian: ItemType;
  static readonly ocelotSpawnEgg: ItemType;
  static readonly ochreFroglight: ItemType;
  static readonly orangeCandle: ItemType;
  static readonly orangeDye: ItemType;
  static readonly orangeGlazedTerracotta: ItemType;
  static readonly oxidizedCopper: ItemType;
  static readonly oxidizedCutCopper: ItemType;
  static readonly oxidizedCutCopperSlab: ItemType;
  static readonly oxidizedCutCopperStairs: ItemType;
  static readonly packedIce: ItemType;
  static readonly packedMud: ItemType;
  static readonly painting: ItemType;
  static readonly pandaSpawnEgg: ItemType;
  static readonly paper: ItemType;
  static readonly parrotSpawnEgg: ItemType;
  static readonly pearlescentFroglight: ItemType;
  static readonly phantomMembrane: ItemType;
  static readonly phantomSpawnEgg: ItemType;
  static readonly piglinBannerPattern: ItemType;
  static readonly piglinBruteSpawnEgg: ItemType;
  static readonly piglinSpawnEgg: ItemType;
  static readonly pigSpawnEgg: ItemType;
  static readonly pillagerSpawnEgg: ItemType;
  static readonly pinkCandle: ItemType;
  static readonly pinkDye: ItemType;
  static readonly pinkGlazedTerracotta: ItemType;
  static readonly piston: ItemType;
  static readonly planks: ItemType;
  static readonly podzol: ItemType;
  static readonly pointedDripstone: ItemType;
  static readonly poisonousPotato: ItemType;
  static readonly polarBearSpawnEgg: ItemType;
  static readonly polishedAndesiteStairs: ItemType;
  static readonly polishedBasalt: ItemType;
  static readonly polishedBlackstone: ItemType;
  static readonly polishedBlackstoneBricks: ItemType;
  static readonly polishedBlackstoneBrickSlab: ItemType;
  static readonly polishedBlackstoneBrickStairs: ItemType;
  static readonly polishedBlackstoneBrickWall: ItemType;
  static readonly polishedBlackstoneButton: ItemType;
  static readonly polishedBlackstonePressurePlate: ItemType;
  static readonly polishedBlackstoneSlab: ItemType;
  static readonly polishedBlackstoneStairs: ItemType;
  static readonly polishedBlackstoneWall: ItemType;
  static readonly polishedDeepslate: ItemType;
  static readonly polishedDeepslateSlab: ItemType;
  static readonly polishedDeepslateStairs: ItemType;
  static readonly polishedDeepslateWall: ItemType;
  static readonly polishedDioriteStairs: ItemType;
  static readonly polishedGraniteStairs: ItemType;
  static readonly poppedChorusFruit: ItemType;
  static readonly porkchop: ItemType;
  static readonly potato: ItemType;
  static readonly potion: ItemType;
  static readonly powderSnowBucket: ItemType;
  static readonly prismarine: ItemType;
  static readonly prismarineBricksStairs: ItemType;
  static readonly prismarineCrystals: ItemType;
  static readonly prismarineShard: ItemType;
  static readonly prismarineStairs: ItemType;
  static readonly pufferfish: ItemType;
  static readonly pufferfishBucket: ItemType;
  static readonly pufferfishSpawnEgg: ItemType;
  static readonly pumpkin: ItemType;
  static readonly pumpkinPie: ItemType;
  static readonly pumpkinSeeds: ItemType;
  static readonly purpleCandle: ItemType;
  static readonly purpleDye: ItemType;
  static readonly purpleGlazedTerracotta: ItemType;
  static readonly purpurBlock: ItemType;
  static readonly purpurStairs: ItemType;
  static readonly quartz: ItemType;
  static readonly quartzBlock: ItemType;
  static readonly quartzBricks: ItemType;
  static readonly quartzOre: ItemType;
  static readonly quartzStairs: ItemType;
  static readonly rabbit: ItemType;
  static readonly rabbitFoot: ItemType;
  static readonly rabbitHide: ItemType;
  static readonly rabbitSpawnEgg: ItemType;
  static readonly rabbitStew: ItemType;
  static readonly rail: ItemType;
  static readonly ravagerSpawnEgg: ItemType;
  static readonly rawCopper: ItemType;
  static readonly rawCopperBlock: ItemType;
  static readonly rawGold: ItemType;
  static readonly rawGoldBlock: ItemType;
  static readonly rawIron: ItemType;
  static readonly rawIronBlock: ItemType;
  static readonly recoveryCompass: ItemType;
  static readonly redCandle: ItemType;
  static readonly redDye: ItemType;
  static readonly redFlower: ItemType;
  static readonly redGlazedTerracotta: ItemType;
  static readonly redMushroom: ItemType;
  static readonly redMushroomBlock: ItemType;
  static readonly redNetherBrick: ItemType;
  static readonly redNetherBrickStairs: ItemType;
  static readonly redSandstone: ItemType;
  static readonly redSandstoneStairs: ItemType;
  static readonly redstone: ItemType;
  static readonly redstoneBlock: ItemType;
  static readonly redstoneLamp: ItemType;
  static readonly redstoneOre: ItemType;
  static readonly redstoneTorch: ItemType;
  static readonly reinforcedDeepslate: ItemType;
  static readonly repeater: ItemType;
  static readonly repeatingCommandBlock: ItemType;
  static readonly respawnAnchor: ItemType;
  static readonly rottenFlesh: ItemType;
  static readonly saddle: ItemType;
  static readonly salmon: ItemType;
  static readonly salmonBucket: ItemType;
  static readonly salmonSpawnEgg: ItemType;
  static readonly sand: ItemType;
  static readonly sandstone: ItemType;
  static readonly sandstoneStairs: ItemType;
  static readonly sapling: ItemType;
  static readonly scaffolding: ItemType;
  static readonly sculk: ItemType;
  static readonly sculkCatalyst: ItemType;
  static readonly sculkSensor: ItemType;
  static readonly sculkShrieker: ItemType;
  static readonly sculkVein: ItemType;
  static readonly scute: ItemType;
  static readonly seagrass: ItemType;
  static readonly seaLantern: ItemType;
  static readonly seaPickle: ItemType;
  static readonly shears: ItemType;
  static readonly sheepSpawnEgg: ItemType;
  static readonly shield: ItemType;
  static readonly shroomlight: ItemType;
  static readonly shulkerBox: ItemType;
  static readonly shulkerShell: ItemType;
  static readonly shulkerSpawnEgg: ItemType;
  static readonly silverfishSpawnEgg: ItemType;
  static readonly silverGlazedTerracotta: ItemType;
  static readonly skeletonHorseSpawnEgg: ItemType;
  static readonly skeletonSpawnEgg: ItemType;
  static readonly skull: ItemType;
  static readonly skullBannerPattern: ItemType;
  static readonly slime: ItemType;
  static readonly slimeBall: ItemType;
  static readonly slimeSpawnEgg: ItemType;
  static readonly smallAmethystBud: ItemType;
  static readonly smallDripleafBlock: ItemType;
  static readonly smithingTable: ItemType;
  static readonly smoker: ItemType;
  static readonly smoothBasalt: ItemType;
  static readonly smoothQuartzStairs: ItemType;
  static readonly smoothRedSandstoneStairs: ItemType;
  static readonly smoothSandstoneStairs: ItemType;
  static readonly smoothStone: ItemType;
  static readonly snow: ItemType;
  static readonly snowball: ItemType;
  static readonly snowGolemSpawnEgg: ItemType;
  static readonly snowLayer: ItemType;
  static readonly soulCampfire: ItemType;
  static readonly soulLantern: ItemType;
  static readonly soulSand: ItemType;
  static readonly soulSoil: ItemType;
  static readonly soulTorch: ItemType;
  static readonly spawnEgg: ItemType;
  static readonly spiderEye: ItemType;
  static readonly spiderSpawnEgg: ItemType;
  static readonly splashPotion: ItemType;
  static readonly sponge: ItemType;
  static readonly sporeBlossom: ItemType;
  static readonly spruceBoat: ItemType;
  static readonly spruceButton: ItemType;
  static readonly spruceChestBoat: ItemType;
  static readonly spruceDoor: ItemType;
  static readonly spruceFenceGate: ItemType;
  static readonly sprucePressurePlate: ItemType;
  static readonly spruceSign: ItemType;
  static readonly spruceStairs: ItemType;
  static readonly spruceTrapdoor: ItemType;
  static readonly spyglass: ItemType;
  static readonly squidSpawnEgg: ItemType;
  static readonly stainedGlass: ItemType;
  static readonly stainedGlassPane: ItemType;
  static readonly stainedHardenedClay: ItemType;
  static readonly stick: ItemType;
  static readonly stickyPiston: ItemType;
  static readonly stone: ItemType;
  static readonly stoneAxe: ItemType;
  static readonly stoneBlockSlab: ItemType;
  static readonly stoneBlockSlab2: ItemType;
  static readonly stoneBlockSlab3: ItemType;
  static readonly stoneBlockSlab4: ItemType;
  static readonly stonebrick: ItemType;
  static readonly stoneBrickStairs: ItemType;
  static readonly stoneButton: ItemType;
  static readonly stonecutterBlock: ItemType;
  static readonly stoneHoe: ItemType;
  static readonly stonePickaxe: ItemType;
  static readonly stonePressurePlate: ItemType;
  static readonly stoneShovel: ItemType;
  static readonly stoneStairs: ItemType;
  static readonly stoneSword: ItemType;
  static readonly straySpawnEgg: ItemType;
  static readonly striderSpawnEgg: ItemType;
  static readonly "string": ItemType;
  static readonly strippedAcaciaLog: ItemType;
  static readonly strippedBirchLog: ItemType;
  static readonly strippedCrimsonHyphae: ItemType;
  static readonly strippedCrimsonStem: ItemType;
  static readonly strippedDarkOakLog: ItemType;
  static readonly strippedJungleLog: ItemType;
  static readonly strippedMangroveLog: ItemType;
  static readonly strippedMangroveWood: ItemType;
  static readonly strippedOakLog: ItemType;
  static readonly strippedSpruceLog: ItemType;
  static readonly strippedWarpedHyphae: ItemType;
  static readonly strippedWarpedStem: ItemType;
  static readonly structureBlock: ItemType;
  static readonly structureVoid: ItemType;
  static readonly sugar: ItemType;
  static readonly sugarCane: ItemType;
  static readonly suspiciousStew: ItemType;
  static readonly sweetBerries: ItemType;
  static readonly tadpoleBucket: ItemType;
  static readonly tadpoleSpawnEgg: ItemType;
  static readonly tallgrass: ItemType;
  static readonly target: ItemType;
  static readonly tintedGlass: ItemType;
  static readonly tnt: ItemType;
  static readonly tntMinecart: ItemType;
  static readonly torch: ItemType;
  static readonly totemOfUndying: ItemType;
  static readonly traderLlamaSpawnEgg: ItemType;
  static readonly trapdoor: ItemType;
  static readonly trappedChest: ItemType;
  static readonly trident: ItemType;
  static readonly tripwireHook: ItemType;
  static readonly tropicalFish: ItemType;
  static readonly tropicalFishBucket: ItemType;
  static readonly tropicalFishSpawnEgg: ItemType;
  static readonly tuff: ItemType;
  static readonly turtleEgg: ItemType;
  static readonly turtleHelmet: ItemType;
  static readonly turtleSpawnEgg: ItemType;
  static readonly twistingVines: ItemType;
  static readonly undyedShulkerBox: ItemType;
  static readonly verdantFroglight: ItemType;
  static readonly vexSpawnEgg: ItemType;
  static readonly villagerSpawnEgg: ItemType;
  static readonly vindicatorSpawnEgg: ItemType;
  static readonly vine: ItemType;
  static readonly wanderingTraderSpawnEgg: ItemType;
  static readonly wardenSpawnEgg: ItemType;
  static readonly warpedButton: ItemType;
  static readonly warpedDoor: ItemType;
  static readonly warpedFence: ItemType;
  static readonly warpedFenceGate: ItemType;
  static readonly warpedFungus: ItemType;
  static readonly warpedFungusOnAStick: ItemType;
  static readonly warpedHyphae: ItemType;
  static readonly warpedNylium: ItemType;
  static readonly warpedPlanks: ItemType;
  static readonly warpedPressurePlate: ItemType;
  static readonly warpedRoots: ItemType;
  static readonly warpedSign: ItemType;
  static readonly warpedSlab: ItemType;
  static readonly warpedStairs: ItemType;
  static readonly warpedStem: ItemType;
  static readonly warpedTrapdoor: ItemType;
  static readonly warpedWartBlock: ItemType;
  static readonly waterBucket: ItemType;
  static readonly waterlily: ItemType;
  static readonly waxedCopper: ItemType;
  static readonly waxedCutCopper: ItemType;
  static readonly waxedCutCopperSlab: ItemType;
  static readonly waxedCutCopperStairs: ItemType;
  static readonly waxedExposedCopper: ItemType;
  static readonly waxedExposedCutCopper: ItemType;
  static readonly waxedExposedCutCopperSlab: ItemType;
  static readonly waxedExposedCutCopperStairs: ItemType;
  static readonly waxedOxidizedCopper: ItemType;
  static readonly waxedOxidizedCutCopper: ItemType;
  static readonly waxedOxidizedCutCopperSlab: ItemType;
  static readonly waxedOxidizedCutCopperStairs: ItemType;
  static readonly waxedWeatheredCopper: ItemType;
  static readonly waxedWeatheredCutCopper: ItemType;
  static readonly waxedWeatheredCutCopperSlab: ItemType;
  static readonly waxedWeatheredCutCopperStairs: ItemType;
  static readonly weatheredCopper: ItemType;
  static readonly weatheredCutCopper: ItemType;
  static readonly weatheredCutCopperSlab: ItemType;
  static readonly weatheredCutCopperStairs: ItemType;
  static readonly web: ItemType;
  static readonly weepingVines: ItemType;
  static readonly wheat: ItemType;
  static readonly wheatSeeds: ItemType;
  static readonly whiteCandle: ItemType;
  static readonly whiteDye: ItemType;
  static readonly whiteGlazedTerracotta: ItemType;
  static readonly witchSpawnEgg: ItemType;
  static readonly witherRose: ItemType;
  static readonly witherSkeletonSpawnEgg: ItemType;
  static readonly witherSpawnEgg: ItemType;
  static readonly wolfSpawnEgg: ItemType;
  static readonly wood: ItemType;
  static readonly woodenAxe: ItemType;
  static readonly woodenButton: ItemType;
  static readonly woodenDoor: ItemType;
  static readonly woodenHoe: ItemType;
  static readonly woodenPickaxe: ItemType;
  static readonly woodenPressurePlate: ItemType;
  static readonly woodenShovel: ItemType;
  static readonly woodenSlab: ItemType;
  static readonly woodenSword: ItemType;
  static readonly wool: ItemType;
  static readonly writableBook: ItemType;
  static readonly yellowCandle: ItemType;
  static readonly yellowDye: ItemType;
  static readonly yellowFlower: ItemType;
  static readonly yellowGlazedTerracotta: ItemType;
  static readonly zoglinSpawnEgg: ItemType;
  static readonly zombieHorseSpawnEgg: ItemType;
  static readonly zombiePigmanSpawnEgg: ItemType;
  static readonly zombieSpawnEgg: ItemType;
  static readonly zombieVillagerSpawnEgg: ItemType;
}
export class MolangVariableMap {
  setColorRGB(variableName: string, color: Color): MolangVariableMap;
  setColorRGBA(variableName: string, color: Color): MolangVariableMap;
  setSpeedAndDirection(
    variableName: string,
    speed: number,
    direction: Vector
  ): MolangVariableMap;
  setVector3(variableName: string, vector: Vector): MolangVariableMap;
}
export class NavigationResult {
  protected constructor();
  readonly isFullPath: boolean;
  readonly path: BlockLocation[];
}
export class NumberRange {
  protected constructor();
  max: number;
  min: number;
  next(): number;
}
export class PistonActivateEvent extends BlockEvent {
  protected constructor();
  readonly block: Block;
  readonly dimension: Dimension;
  readonly isExpanding: boolean;
  readonly piston: BlockPistonComponent;
}
export class PistonActivateEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: PistonActivateEvent) => void
  ): (arg: PistonActivateEvent) => void;
  unsubscribe(callback: (arg: PistonActivateEvent) => void): void;
}
export class Player extends Entity {
  protected constructor();
  readonly dimension: Dimension;
  readonly headLocation: Location;
  readonly id: string;
  isSneaking: boolean;
  readonly level: number;
  readonly location: Vector3;
  readonly name: string;
  nameTag: string;
  readonly onScreenDisplay: ScreenDisplay;
  readonly rotation: XYRotation;
  readonly scoreboard: ScoreboardIdentity;
  selectedSlot: number;
  readonly target: Entity;
  readonly totalXpNeededForNextLevel: number;
  readonly typeId: string;
  readonly velocity: Vector;
  readonly viewDirection: Vector3;
  readonly xpEarnedAtCurrentLevel: number;
  addEffect(
    effectType: EffectType,
    duration: number,
    amplifier?: number,
    showParticles?: boolean
  ): void;
  addExperience(amount: number): number;
  addLevels(amount: number): number;
  addTag(tag: string): boolean;
  applyDamage(amount: number, source?: EntityDamageSource): boolean;
  extinguishFire(useEffects?: boolean): boolean;
  getBlockFromViewDirection(options?: BlockRaycastOptions): Block;
  getComponent<T extends keyof EntityComponentRoute>(
    componentId: T
  ): EntityComponentRoute[T];
  getComponents(): IEntityComponent[];
  getDynamicProperty(identifier: string): boolean | number | string | undefined;
  getEffect(effectType: EffectType): Effect;
  getEffects(): Effect[];
  getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[];
  getItemCooldown(itemCategory: string): number;
  getTags(): string[];
  getTotalXp(): number;
  hasComponent<T extends keyof EntityComponentRoute>(componentId: T): boolean;
  hasTag(tag: string): boolean;
  isOp(): boolean;
  kill(): void;
  playSound(soundID: string, soundOptions?: SoundOptions): void;
  postClientMessage(id: string, value: string): void;
  removeDynamicProperty(identifier: string): boolean;
  removeTag(tag: string): boolean;
  resetLevel(): void;
  runCommandAsync(commandString: string): Promise<CommandResult>;
  setDynamicProperty(
    identifier: string,
    value: boolean | number | string
  ): void;
  setOnFire(seconds: number, useEffects?: boolean): boolean;
  setOp(isOp: boolean): void;
  setRotation(degreesX: number, degreesY: number): void;
  setVelocity(velocity: Vector3): void;
  startItemCooldown(itemCategory: string, tickDuration: number): void;
  teleport(
    location: Vector3,
    dimension: Dimension,
    xRotation: number,
    yRotation: number,
    keepVelocity?: boolean
  ): void;
  teleportFacing(
    location: Vector3,
    dimension: Dimension,
    facingLocation: Vector3,
    keepVelocity?: boolean
  ): void;
  tell(message: (RawMessage | string)[] | RawMessage | string): void;
  triggerEvent(eventName: string): void;
}
export class PlayerInventoryComponentContainer extends InventoryComponentContainer {
  protected constructor();
  readonly emptySlotsCount: number;
  readonly size: number;
  addItem(itemStack: ItemStack): void;
  clearAll(): void;
  clearItem(slot: number): void;
  getItem(slot: number): ItemStack;
  getSlot(slot: number): ContainerSlot;
  setItem(slot: number, itemStack?: ItemStack): void;
  swapItems(
    slot: number,
    otherSlot: number,
    otherContainer: Container
  ): boolean;
  transferItem(
    fromSlot: number,
    toSlot: number,
    toContainer: Container
  ): boolean;
}
export class PlayerIterator implements Iterable<Player> {
  protected constructor();
  [Symbol.iterator](): Iterator<Player>;
  next(): IteratorResult<Player>;
}
export class PlayerJoinEvent {
  protected constructor();
  readonly playerId: string;
  readonly playerName: string;
}
export class PlayerJoinEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: PlayerJoinEvent) => void
  ): (arg: PlayerJoinEvent) => void;
  unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
}
export class PlayerLeaveEvent {
  protected constructor();
  readonly playerId: string;
  readonly playerName: string;
}
export class PlayerLeaveEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: PlayerLeaveEvent) => void
  ): (arg: PlayerLeaveEvent) => void;
  unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
}
export class PlayerSpawnEvent {
  protected constructor();
  initialSpawn: boolean;
  player: Player;
}
export class PlayerSpawnEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: PlayerSpawnEvent) => void
  ): (arg: PlayerSpawnEvent) => void;
  unsubscribe(callback: (arg: PlayerSpawnEvent) => void): void;
}
export class ProjectileHitEvent {
  protected constructor();
  readonly blockHit?: BlockHitInformation;
  readonly dimension: Dimension;
  readonly entityHit?: EntityHitInformation;
  readonly hitVector: Vector;
  readonly location: Location;
  readonly projectile: Entity;
  readonly source: Entity;
}
export class ProjectileHitEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: ProjectileHitEvent) => void
  ): (arg: ProjectileHitEvent) => void;
  unsubscribe(callback: (arg: ProjectileHitEvent) => void): void;
}
export class PropertyRegistry {
  protected constructor();
  registerEntityTypeDynamicProperties(
    propertiesDefinition: DynamicPropertiesDefinition,
    entityType: EntityType
  ): void;
  registerWorldDynamicProperties(
    propertiesDefinition: DynamicPropertiesDefinition
  ): void;
}
export class Scoreboard {
  protected constructor();
  addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
  clearObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjective;
  getObjective(objectiveId: string): ScoreboardObjective;
  getObjectiveAtDisplaySlot(
    displaySlotId: string
  ): ScoreboardObjectiveDisplayOptions;
  getObjectives(): ScoreboardObjective[];
  getParticipants(): ScoreboardIdentity[];
  getScore(
    objective: ScoreboardObjective,
    participant: ScoreboardIdentity
  ): number;
  removeObjective(objectiveId: ScoreboardObjective | string): boolean;
  setObjectiveAtDisplaySlot(
    displaySlotId: string,
    objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions
  ): ScoreboardObjective;
  setScore(
    objective: ScoreboardObjective,
    participant: ScoreboardIdentity,
    score: number
  ): boolean;
}
export class ScoreboardIdentity {
  protected constructor();
  readonly displayName: string;
  readonly id: number;
  readonly "type": ScoreboardIdentityType;
  getEntity(): Entity;
  getScore(objective: ScoreboardObjective): number;
  removeFromObjective(objective: ScoreboardObjective): boolean;
  setScore(objective: ScoreboardObjective, score: number): boolean;
}
export class ScoreboardObjective {
  protected constructor();
  readonly displayName: string;
  readonly id: string;
  getParticipants(): ScoreboardIdentity[];
  getScore(participant: ScoreboardIdentity): number;
  getScores(): ScoreboardScoreInfo[];
  removeParticipant(participant: ScoreboardIdentity): boolean;
  setScore(participant: ScoreboardIdentity, score: number): boolean;
}
export class ScoreboardScoreInfo {
  protected constructor();
  readonly participant: ScoreboardIdentity;
  readonly score: number;
}
export class ScreenDisplay {
  protected constructor();
  clearTitle(): void;
  setActionBar(text: string): void;
  setTitle(title: string, options?: TitleDisplayOptions): void;
  updateSubtitle(subtitle: string): void;
}
export class ScriptEventCommandMessageEvent {
  protected constructor();
  readonly id: string;
  readonly initiator: Entity;
  readonly message: string;
  readonly sourceBlock: Block;
  readonly sourceEntity: Entity;
  readonly sourceType: MessageSourceType;
}
export class ScriptEventCommandMessageSignal {
  protected constructor();
  subscribe(
    callback: (arg: ScriptEventCommandMessageEvent) => void,
    options?: ScriptEventMessageFilterOptions
  ): (arg: ScriptEventCommandMessageEvent) => void;
  unsubscribe(callback: (arg: ScriptEventCommandMessageEvent) => void): void;
}
export class Seat {
  protected constructor();
  readonly lockRiderRotation: number;
  readonly maxRiderCount: number;
  readonly minRiderCount: number;
  readonly position: Location;
}
export class ServerMessageSignal {
  protected constructor();
  subscribe(
    callback: (arg: MessageReceiveEvent) => void
  ): (arg: MessageReceiveEvent) => void;
  unsubscribe(callback: (arg: MessageReceiveEvent) => void): void;
}
export class StringBlockProperty extends IBlockProperty {
  protected constructor();
  readonly name: string;
  readonly validValues: string[];
  value: string;
}
export class System {
  protected constructor();
  readonly currentTick: number;
  readonly events: SystemEvents;
  clearRun(runId: number): void;
  clearRunSchedule(runScheduleId: number): void;
  run(callback: () => void): number;
  runSchedule(callback: () => void, tickInterval?: number): number;
}
export class SystemEvents {
  protected constructor();
  readonly beforeWatchdogTerminate: BeforeWatchdogTerminateEventSignal;
  readonly scriptEventReceive: ScriptEventCommandMessageSignal;
}
export class TickEvent {
  protected constructor();
  readonly currentTick: number;
  readonly deltaTime: number;
}
export class TickEventSignal {
  protected constructor();
  subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
  unsubscribe(callback: (arg: TickEvent) => void): void;
}
export class Trigger {
  eventName: string;
  constructor(eventName: string);
}
export class Vector {
  x: number;
  y: number;
  z: number;
  static readonly back: Vector;
  static readonly down: Vector;
  static readonly forward: Vector;
  static readonly left: Vector;
  static readonly one: Vector;
  static readonly right: Vector;
  static readonly up: Vector;
  static readonly zero: Vector;
  constructor(x: number, y: number, z: number);
  equals(other: Vector): boolean;
  length(): number;
  lengthSquared(): number;
  normalized(): Vector;
  static add(a: Vector3, b: Vector3): Vector;
  static cross(a: Vector3, b: Vector3): Vector;
  static distance(a: Vector3, b: Vector3): number;
  static divide(a: Vector3, b: number | Vector3): Vector;
  static lerp(a: Vector3, b: Vector3, t: number): Vector;
  static max(a: Vector3, b: Vector3): Vector;
  static min(a: Vector3, b: Vector3): Vector;
  static multiply(a: Vector3, b: number | Vector3): Vector;
  static slerp(a: Vector3, b: Vector3, s: number): Vector;
  static subtract(a: Vector3, b: Vector3): Vector;
}
export class WeatherChangeEvent {
  protected constructor();
  readonly dimension: string;
  readonly lightning: boolean;
  readonly raining: boolean;
}
export class WeatherChangeEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: WeatherChangeEvent) => void
  ): (arg: WeatherChangeEvent) => void;
  unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
}
export class World {
  protected constructor();
  readonly events: Events;
  readonly scoreboard: Scoreboard;
  broadcastClientMessage(id: string, value: string): void;
  getAbsoluteTime(): number;
  getAllPlayers(): Player[];
  getDimension(
    dimensionId:
      | "overworld"
      | "nether"
      | "the end"
      | "the_end"
      | "minecraft:overworld"
      | "minecraft:nether"
      | "minecraft:the_end"
  ): Dimension;
  getDynamicProperty(identifier: string): boolean | number | string | undefined;
  getPlayers(options?: EntityQueryOptions): PlayerIterator;
  getTime(): number;
  playMusic(trackID: string, musicOptions?: MusicOptions): void;
  playSound(soundID: string, soundOptions?: SoundOptions): void;
  queueMusic(trackID: string, musicOptions?: MusicOptions): void;
  removeDynamicProperty(identifier: string): boolean;
  say(message: (RawMessage | string)[] | RawMessage | string): void;
  setDynamicProperty(
    identifier: string,
    value: boolean | number | string
  ): void;
  setTime(timeOfDay: number): void;
  stopMusic(): void;
}
export class WorldInitializeEvent {
  protected constructor();
  readonly propertyRegistry: PropertyRegistry;
}
export class WorldInitializeEventSignal {
  protected constructor();
  subscribe(
    callback: (arg: WorldInitializeEvent) => void
  ): (arg: WorldInitializeEvent) => void;
  unsubscribe(callback: (arg: WorldInitializeEvent) => void): void;
}
export class XYRotation {
  protected constructor();
  x: number;
  y: number;
}
export interface BlockFillOptions {
  matchingBlock?: BlockPermutation;
}
export interface BlockRaycastOptions {
  includeLiquidBlocks?: boolean;
  includePassableBlocks?: boolean;
  maxDistance?: number;
}
export interface EntityDamageSource {
  cause: EntityDamageCause;
  damagingEntity?: Entity;
  damagingProjectile?: Entity;
}
export interface EntityDataDrivenTriggerEventOptions {
  entities?: Entity[];
  entityTypes?: string[];
  eventTypes?: string[];
}
export interface EntityEventOptions {
  entities?: Entity[];
  entityTypes?: string[];
}
export interface EntityQueryOptions {
  closest?: number;
  excludeFamilies?: string[];
  excludeGameModes?: GameMode[];
  excludeNames?: string[];
  excludeTags?: string[];
  excludeTypes?: string[];
  families?: string[];
  farthest?: number;
  gameMode?: GameMode;
  location?: Location;
  maxDistance?: number;
  maxHorizontalRotation?: number;
  maxLevel?: number;
  maxVerticalRotation?: number;
  minDistance?: number;
  minHorizontalRotation?: number;
  minLevel?: number;
  minVerticalRotation?: number;
  name?: string;
  scoreOptions?: EntityQueryScoreOptions[];
  tags?: string[];
  type?: string;
  volume?: BlockAreaSize;
}
export interface EntityQueryScoreOptions {
  exclude?: boolean;
  maxScore?: number;
  minScore?: number;
  objective?: string;
}
export interface EntityRaycastOptions {
  maxDistance?: number;
}
export interface ExplosionOptions {
  allowUnderwater?: boolean;
  breaksBlocks?: boolean;
  causesFire?: boolean;
  source?: Entity;
}
export interface MusicOptions {
  fade?: number;
  loop?: boolean;
  volume?: number;
}
export interface RawMessage {
  rawtext?: (RawMessage | string)[];
  text?: string;
  translate?: string;
  with?: string[] | RawMessage;
}
export interface ScoreboardObjectiveDisplayOptions {
  objective: ScoreboardObjective;
  sortOrder?: ObjectiveSortOrder;
}
export interface ScriptEventMessageFilterOptions {
  namespaces: string[];
}
export interface SoundOptions {
  location?: Location;
  pitch?: number;
  volume?: number;
}
export interface TitleDisplayOptions {
  fadeInSeconds: number;
  fadeOutSeconds: number;
  staySeconds: number;
  subtitle?: string;
}
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}
export const TicksPerDay = 24000;
export const TicksPerSecond = 20;
export const system: System;
export const world: World;
interface EntityComponentRoute {
  addrider: EntityAddRiderComponent;
  "minecraft:addrider": EntityAddRiderComponent;
  ageable: EntityAgeableComponent;
  "minecraft:ageable": EntityAgeableComponent;
  breathable: EntityBreathableComponent;
  "minecraft:breathable": EntityBreathableComponent;
  can_climb: EntityCanClimbComponent;
  "minecraft:can_climb": EntityCanClimbComponent;
  can_fly: EntityCanFlyComponent;
  "minecraft:can_fly": EntityCanFlyComponent;
  can_power_jump: EntityCanPowerJumpComponent;
  "minecraft:can_power_jump": EntityCanPowerJumpComponent;
  color: EntityColorComponent;
  "minecraft:color": EntityColorComponent;
  fire_immune: EntityFireImmuneComponent;
  "minecraft:fire_immune": EntityFireImmuneComponent;
  floats_in_liquid: EntityFloatsInLiquidComponent;
  "minecraft:floats_in_liquid": EntityFloatsInLiquidComponent;
  flying_speed: EntityFlyingSpeedComponent;
  "minecraft:flying_speed": EntityFlyingSpeedComponent;
  friction_modifier: EntityFrictionModifierComponent;
  "minecraft:friction_modifier": EntityFrictionModifierComponent;
  ground_offset: EntityGroundOffsetComponent;
  "minecraft:ground_offset": EntityGroundOffsetComponent;
  healable: EntityHealableComponent;
  "minecraft:healable": EntityHealableComponent;
  health: EntityHealthComponent;
  "minecraft:health": EntityHealthComponent;
  inventory: EntityInventoryComponent;
  "minecraft:inventory": EntityInventoryComponent;
  is_baby: EntityIsBabyComponent;
  "minecraft:is_baby": EntityIsBabyComponent;
  is_charged: EntityIsChargedComponent;
  "minecraft:is_charged": EntityIsChargedComponent;
  is_chested: EntityIsChestedComponent;
  "minecraft:is_chested": EntityIsChestedComponent;
  is_dyeable: EntityIsDyableComponent;
  "minecraft:is_dyeable": EntityIsDyableComponent;
  is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
  "minecraft:is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
  is_ignited: EntityIsIgnitedComponent;
  "minecraft:is_ignited": EntityIsIgnitedComponent;
  is_illager_captain: EntityIsIllagerCaptainComponent;
  "minecraft:is_illager_captain": EntityIsIllagerCaptainComponent;
  is_saddled: EntityIsSaddledComponent;
  "minecraft:is_saddled": EntityIsSaddledComponent;
  is_shaking: EntityIsShakingComponent;
  "minecraft:is_shaking": EntityIsShakingComponent;
  is_sheared: EntityIsShearedComponent;
  "minecraft:is_sheared": EntityIsShearedComponent;
  is_stackable: EntityIsStackableComponent;
  "minecraft:is_stackable": EntityIsStackableComponent;
  is_stunned: EntityIsStunnedComponent;
  "minecraft:is_stunned": EntityIsStunnedComponent;
  is_tamed: EntityIsTamedComponent;
  "minecraft:is_tamed": EntityIsTamedComponent;
  item: EntityItemComponent;
  "minecraft:item": EntityItemComponent;
  lava_movement: EntityLavaMovementComponent;
  "minecraft:lava_movement": EntityLavaMovementComponent;
  leashable: EntityLeashableComponent;
  "minecraft:leashable": EntityLeashableComponent;
  mark_variant: EntityMarkVariantComponent;
  "minecraft:mark_variant": EntityMarkVariantComponent;
  tamemount: EntityMountTamingComponent;
  "minecraft:tamemount": EntityMountTamingComponent;
  "movement.amphibious": EntityMovementAmphibiousComponent;
  "minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
  "movement.basic": EntityMovementBasicComponent;
  "minecraft:movement.basic": EntityMovementBasicComponent;
  movement: EntityMovementComponent;
  "minecraft:movement": EntityMovementComponent;
  "movement.fly": EntityMovementFlyComponent;
  "minecraft:movement.fly": EntityMovementFlyComponent;
  "movement.generic": EntityMovementGenericComponent;
  "minecraft:movement.generic": EntityMovementGenericComponent;
  "movement.glide": EntityMovementGlideComponent;
  "minecraft:movement.glide": EntityMovementGlideComponent;
  "movement.hover": EntityMovementHoverComponent;
  "minecraft:movement.hover": EntityMovementHoverComponent;
  "movement.jump": EntityMovementJumpComponent;
  "minecraft:movement.jump": EntityMovementJumpComponent;
  "movement.skip": EntityMovementSkipComponent;
  "minecraft:movement.skip": EntityMovementSkipComponent;
  "movement.sway": EntityMovementSwayComponent;
  "minecraft:movement.sway": EntityMovementSwayComponent;
  "navigation.climb": EntityNavigationClimbComponent;
  "minecraft:navigation.climb": EntityNavigationClimbComponent;
  "navigation.float": EntityNavigationFloatComponent;
  "minecraft:navigation.float": EntityNavigationFloatComponent;
  "navigation.fly": EntityNavigationFlyComponent;
  "minecraft:navigation.fly": EntityNavigationFlyComponent;
  "navigation.generic": EntityNavigationGenericComponent;
  "minecraft:navigation.generic": EntityNavigationGenericComponent;
  "navigation.hover": EntityNavigationHoverComponent;
  "minecraft:navigation.hover": EntityNavigationHoverComponent;
  "navigation.walk": EntityNavigationWalkComponent;
  "minecraft:navigation.walk": EntityNavigationWalkComponent;
  onfire: EntityOnFireComponent;
  "minecraft:onfire": EntityOnFireComponent;
  push_through: EntityPushThroughComponent;
  "minecraft:push_through": EntityPushThroughComponent;
  rideable: EntityRideableComponent;
  "minecraft:rideable": EntityRideableComponent;
  scale: EntityScaleComponent;
  "minecraft:scale": EntityScaleComponent;
  skin_id: EntitySkinIdComponent;
  "minecraft:skin_id": EntitySkinIdComponent;
  strength: EntityStrengthComponent;
  "minecraft:strength": EntityStrengthComponent;
  tameable: EntityTameableComponent;
  "minecraft:tameable": EntityTameableComponent;
  underwater_movement: EntityUnderwaterMovementComponent;
  "minecraft:underwater_movement": EntityUnderwaterMovementComponent;
  variant: EntityVariantComponent;
  "minecraft:variant": EntityVariantComponent;
  wants_jockey: EntityWantsJockeyComponent;
  "minecraft:wants_jockey": EntityWantsJockeyComponent;
}
interface BlockComponentRoute {
  inventory: BlockInventoryComponent;
  "minecraft:inventory": BlockInventoryComponent;
  lavaContainer: BlockLavaContainerComponent;
  "minecraft:lavaContainer": BlockLavaContainerComponent;
  piston: BlockPistonComponent;
  "minecraft:piston": BlockPistonComponent;
  potionContainer: BlockPotionContainerComponent;
  "minecraft:potionContainer": BlockPotionContainerComponent;
  recordPlayer: BlockRecordPlayerComponent;
  "minecraft:recordPlayer": BlockRecordPlayerComponent;
  sign: BlockSignComponent;
  "minecraft:sign": BlockSignComponent;
  snowContainer: BlockSnowContainerComponent;
  "minecraft:snowContainer": BlockSnowContainerComponent;
  waterContainer: BlockWaterContainerComponent;
  "minecraft:waterContainer": BlockWaterContainerComponent;
}
interface ItemComponentRoute {
  cooldown: ItemCooldownComponent;
  "minecraft:cooldown": ItemCooldownComponent;
  durability: ItemDurabilityComponent;
  "minecraft:durability": ItemDurabilityComponent;
  enchantments: ItemEnchantsComponent;
  "minecraft:enchantments": ItemEnchantsComponent;
  food: ItemFoodComponent;
  "minecraft:food": ItemFoodComponent;
}
