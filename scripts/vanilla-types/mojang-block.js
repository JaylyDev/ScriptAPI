import { BlockTypes } from "@minecraft/server";
/**
 * All possible MinecraftBlockTypes
 */
export class MinecraftBlockTypes {
    constructor() {
        throw new TypeError("Illegal constructor");
    }
    ;
    static get(typeName) {
        return BlockTypes.get(typeName);
    }
    ;
    static getAll() {
        return BlockTypes.getAll();
    }
    ;
    static get AcaciaButton() { return BlockTypes.get("minecraft:acacia_button"); }
    ;
    static get AcaciaDoor() { return BlockTypes.get("minecraft:acacia_door"); }
    ;
    static get AcaciaFence() { return BlockTypes.get("minecraft:acacia_fence"); }
    ;
    static get AcaciaFenceGate() { return BlockTypes.get("minecraft:acacia_fence_gate"); }
    ;
    static get AcaciaHangingSign() { return BlockTypes.get("minecraft:acacia_hanging_sign"); }
    ;
    static get AcaciaLog() { return BlockTypes.get("minecraft:acacia_log"); }
    ;
    static get AcaciaPressurePlate() { return BlockTypes.get("minecraft:acacia_pressure_plate"); }
    ;
    static get AcaciaStairs() { return BlockTypes.get("minecraft:acacia_stairs"); }
    ;
    static get AcaciaStandingSign() { return BlockTypes.get("minecraft:acacia_standing_sign"); }
    ;
    static get AcaciaTrapdoor() { return BlockTypes.get("minecraft:acacia_trapdoor"); }
    ;
    static get AcaciaWallSign() { return BlockTypes.get("minecraft:acacia_wall_sign"); }
    ;
    static get ActivatorRail() { return BlockTypes.get("minecraft:activator_rail"); }
    ;
    static get Air() { return BlockTypes.get("minecraft:air"); }
    ;
    static get Allow() { return BlockTypes.get("minecraft:allow"); }
    ;
    static get AmethystBlock() { return BlockTypes.get("minecraft:amethyst_block"); }
    ;
    static get AmethystCluster() { return BlockTypes.get("minecraft:amethyst_cluster"); }
    ;
    static get AncientDebris() { return BlockTypes.get("minecraft:ancient_debris"); }
    ;
    static get AndesiteStairs() { return BlockTypes.get("minecraft:andesite_stairs"); }
    ;
    static get Anvil() { return BlockTypes.get("minecraft:anvil"); }
    ;
    static get Azalea() { return BlockTypes.get("minecraft:azalea"); }
    ;
    static get AzaleaLeaves() { return BlockTypes.get("minecraft:azalea_leaves"); }
    ;
    static get AzaleaLeavesFlowered() { return BlockTypes.get("minecraft:azalea_leaves_flowered"); }
    ;
    static get Bamboo() { return BlockTypes.get("minecraft:bamboo"); }
    ;
    static get BambooBlock() { return BlockTypes.get("minecraft:bamboo_block"); }
    ;
    static get BambooButton() { return BlockTypes.get("minecraft:bamboo_button"); }
    ;
    static get BambooDoor() { return BlockTypes.get("minecraft:bamboo_door"); }
    ;
    static get BambooDoubleSlab() { return BlockTypes.get("minecraft:bamboo_double_slab"); }
    ;
    static get BambooFence() { return BlockTypes.get("minecraft:bamboo_fence"); }
    ;
    static get BambooFenceGate() { return BlockTypes.get("minecraft:bamboo_fence_gate"); }
    ;
    static get BambooHangingSign() { return BlockTypes.get("minecraft:bamboo_hanging_sign"); }
    ;
    static get BambooMosaic() { return BlockTypes.get("minecraft:bamboo_mosaic"); }
    ;
    static get BambooMosaicDoubleSlab() { return BlockTypes.get("minecraft:bamboo_mosaic_double_slab"); }
    ;
    static get BambooMosaicSlab() { return BlockTypes.get("minecraft:bamboo_mosaic_slab"); }
    ;
    static get BambooMosaicStairs() { return BlockTypes.get("minecraft:bamboo_mosaic_stairs"); }
    ;
    static get BambooPlanks() { return BlockTypes.get("minecraft:bamboo_planks"); }
    ;
    static get BambooPressurePlate() { return BlockTypes.get("minecraft:bamboo_pressure_plate"); }
    ;
    static get BambooSapling() { return BlockTypes.get("minecraft:bamboo_sapling"); }
    ;
    static get BambooSlab() { return BlockTypes.get("minecraft:bamboo_slab"); }
    ;
    static get BambooStairs() { return BlockTypes.get("minecraft:bamboo_stairs"); }
    ;
    static get BambooStandingSign() { return BlockTypes.get("minecraft:bamboo_standing_sign"); }
    ;
    static get BambooTrapdoor() { return BlockTypes.get("minecraft:bamboo_trapdoor"); }
    ;
    static get BambooWallSign() { return BlockTypes.get("minecraft:bamboo_wall_sign"); }
    ;
    static get Barrel() { return BlockTypes.get("minecraft:barrel"); }
    ;
    static get Barrier() { return BlockTypes.get("minecraft:barrier"); }
    ;
    static get Basalt() { return BlockTypes.get("minecraft:basalt"); }
    ;
    static get Beacon() { return BlockTypes.get("minecraft:beacon"); }
    ;
    static get Bed() { return BlockTypes.get("minecraft:bed"); }
    ;
    static get Bedrock() { return BlockTypes.get("minecraft:bedrock"); }
    ;
    static get BeeNest() { return BlockTypes.get("minecraft:bee_nest"); }
    ;
    static get Beehive() { return BlockTypes.get("minecraft:beehive"); }
    ;
    static get Beetroot() { return BlockTypes.get("minecraft:beetroot"); }
    ;
    static get Bell() { return BlockTypes.get("minecraft:bell"); }
    ;
    static get BigDripleaf() { return BlockTypes.get("minecraft:big_dripleaf"); }
    ;
    static get BirchButton() { return BlockTypes.get("minecraft:birch_button"); }
    ;
    static get BirchDoor() { return BlockTypes.get("minecraft:birch_door"); }
    ;
    static get BirchFence() { return BlockTypes.get("minecraft:birch_fence"); }
    ;
    static get BirchFenceGate() { return BlockTypes.get("minecraft:birch_fence_gate"); }
    ;
    static get BirchHangingSign() { return BlockTypes.get("minecraft:birch_hanging_sign"); }
    ;
    static get BirchLog() { return BlockTypes.get("minecraft:birch_log"); }
    ;
    static get BirchPressurePlate() { return BlockTypes.get("minecraft:birch_pressure_plate"); }
    ;
    static get BirchStairs() { return BlockTypes.get("minecraft:birch_stairs"); }
    ;
    static get BirchStandingSign() { return BlockTypes.get("minecraft:birch_standing_sign"); }
    ;
    static get BirchTrapdoor() { return BlockTypes.get("minecraft:birch_trapdoor"); }
    ;
    static get BirchWallSign() { return BlockTypes.get("minecraft:birch_wall_sign"); }
    ;
    static get BlackCandle() { return BlockTypes.get("minecraft:black_candle"); }
    ;
    static get BlackCandleCake() { return BlockTypes.get("minecraft:black_candle_cake"); }
    ;
    static get BlackCarpet() { return BlockTypes.get("minecraft:black_carpet"); }
    ;
    static get BlackConcrete() { return BlockTypes.get("minecraft:black_concrete"); }
    ;
    static get BlackConcretePowder() { return BlockTypes.get("minecraft:black_concrete_powder"); }
    ;
    static get BlackGlazedTerracotta() { return BlockTypes.get("minecraft:black_glazed_terracotta"); }
    ;
    static get BlackShulkerBox() { return BlockTypes.get("minecraft:black_shulker_box"); }
    ;
    static get BlackStainedGlass() { return BlockTypes.get("minecraft:black_stained_glass"); }
    ;
    static get BlackStainedGlassPane() { return BlockTypes.get("minecraft:black_stained_glass_pane"); }
    ;
    static get BlackTerracotta() { return BlockTypes.get("minecraft:black_terracotta"); }
    ;
    static get BlackWool() { return BlockTypes.get("minecraft:black_wool"); }
    ;
    static get Blackstone() { return BlockTypes.get("minecraft:blackstone"); }
    ;
    static get BlackstoneDoubleSlab() { return BlockTypes.get("minecraft:blackstone_double_slab"); }
    ;
    static get BlackstoneSlab() { return BlockTypes.get("minecraft:blackstone_slab"); }
    ;
    static get BlackstoneStairs() { return BlockTypes.get("minecraft:blackstone_stairs"); }
    ;
    static get BlackstoneWall() { return BlockTypes.get("minecraft:blackstone_wall"); }
    ;
    static get BlastFurnace() { return BlockTypes.get("minecraft:blast_furnace"); }
    ;
    static get BlueCandle() { return BlockTypes.get("minecraft:blue_candle"); }
    ;
    static get BlueCandleCake() { return BlockTypes.get("minecraft:blue_candle_cake"); }
    ;
    static get BlueCarpet() { return BlockTypes.get("minecraft:blue_carpet"); }
    ;
    static get BlueConcrete() { return BlockTypes.get("minecraft:blue_concrete"); }
    ;
    static get BlueConcretePowder() { return BlockTypes.get("minecraft:blue_concrete_powder"); }
    ;
    static get BlueGlazedTerracotta() { return BlockTypes.get("minecraft:blue_glazed_terracotta"); }
    ;
    static get BlueIce() { return BlockTypes.get("minecraft:blue_ice"); }
    ;
    static get BlueShulkerBox() { return BlockTypes.get("minecraft:blue_shulker_box"); }
    ;
    static get BlueStainedGlass() { return BlockTypes.get("minecraft:blue_stained_glass"); }
    ;
    static get BlueStainedGlassPane() { return BlockTypes.get("minecraft:blue_stained_glass_pane"); }
    ;
    static get BlueTerracotta() { return BlockTypes.get("minecraft:blue_terracotta"); }
    ;
    static get BlueWool() { return BlockTypes.get("minecraft:blue_wool"); }
    ;
    static get BoneBlock() { return BlockTypes.get("minecraft:bone_block"); }
    ;
    static get Bookshelf() { return BlockTypes.get("minecraft:bookshelf"); }
    ;
    static get BorderBlock() { return BlockTypes.get("minecraft:border_block"); }
    ;
    static get BrainCoral() { return BlockTypes.get("minecraft:brain_coral"); }
    ;
    static get BrewingStand() { return BlockTypes.get("minecraft:brewing_stand"); }
    ;
    static get BrickBlock() { return BlockTypes.get("minecraft:brick_block"); }
    ;
    static get BrickStairs() { return BlockTypes.get("minecraft:brick_stairs"); }
    ;
    static get BrownCandle() { return BlockTypes.get("minecraft:brown_candle"); }
    ;
    static get BrownCandleCake() { return BlockTypes.get("minecraft:brown_candle_cake"); }
    ;
    static get BrownCarpet() { return BlockTypes.get("minecraft:brown_carpet"); }
    ;
    static get BrownConcrete() { return BlockTypes.get("minecraft:brown_concrete"); }
    ;
    static get BrownConcretePowder() { return BlockTypes.get("minecraft:brown_concrete_powder"); }
    ;
    static get BrownGlazedTerracotta() { return BlockTypes.get("minecraft:brown_glazed_terracotta"); }
    ;
    static get BrownMushroom() { return BlockTypes.get("minecraft:brown_mushroom"); }
    ;
    static get BrownMushroomBlock() { return BlockTypes.get("minecraft:brown_mushroom_block"); }
    ;
    static get BrownShulkerBox() { return BlockTypes.get("minecraft:brown_shulker_box"); }
    ;
    static get BrownStainedGlass() { return BlockTypes.get("minecraft:brown_stained_glass"); }
    ;
    static get BrownStainedGlassPane() { return BlockTypes.get("minecraft:brown_stained_glass_pane"); }
    ;
    static get BrownTerracotta() { return BlockTypes.get("minecraft:brown_terracotta"); }
    ;
    static get BrownWool() { return BlockTypes.get("minecraft:brown_wool"); }
    ;
    static get BubbleColumn() { return BlockTypes.get("minecraft:bubble_column"); }
    ;
    static get BubbleCoral() { return BlockTypes.get("minecraft:bubble_coral"); }
    ;
    static get BuddingAmethyst() { return BlockTypes.get("minecraft:budding_amethyst"); }
    ;
    static get Cactus() { return BlockTypes.get("minecraft:cactus"); }
    ;
    static get Cake() { return BlockTypes.get("minecraft:cake"); }
    ;
    static get Calcite() { return BlockTypes.get("minecraft:calcite"); }
    ;
    static get CalibratedSculkSensor() { return BlockTypes.get("minecraft:calibrated_sculk_sensor"); }
    ;
    static get Camera() { return BlockTypes.get("minecraft:camera"); }
    ;
    static get Campfire() { return BlockTypes.get("minecraft:campfire"); }
    ;
    static get Candle() { return BlockTypes.get("minecraft:candle"); }
    ;
    static get CandleCake() { return BlockTypes.get("minecraft:candle_cake"); }
    ;
    static get Carrots() { return BlockTypes.get("minecraft:carrots"); }
    ;
    static get CartographyTable() { return BlockTypes.get("minecraft:cartography_table"); }
    ;
    static get CarvedPumpkin() { return BlockTypes.get("minecraft:carved_pumpkin"); }
    ;
    static get Cauldron() { return BlockTypes.get("minecraft:cauldron"); }
    ;
    static get CaveVines() { return BlockTypes.get("minecraft:cave_vines"); }
    ;
    static get CaveVinesBodyWithBerries() { return BlockTypes.get("minecraft:cave_vines_body_with_berries"); }
    ;
    static get CaveVinesHeadWithBerries() { return BlockTypes.get("minecraft:cave_vines_head_with_berries"); }
    ;
    static get Chain() { return BlockTypes.get("minecraft:chain"); }
    ;
    static get ChainCommandBlock() { return BlockTypes.get("minecraft:chain_command_block"); }
    ;
    static get ChemicalHeat() { return BlockTypes.get("minecraft:chemical_heat"); }
    ;
    static get ChemistryTable() { return BlockTypes.get("minecraft:chemistry_table"); }
    ;
    static get CherryButton() { return BlockTypes.get("minecraft:cherry_button"); }
    ;
    static get CherryDoor() { return BlockTypes.get("minecraft:cherry_door"); }
    ;
    static get CherryDoubleSlab() { return BlockTypes.get("minecraft:cherry_double_slab"); }
    ;
    static get CherryFence() { return BlockTypes.get("minecraft:cherry_fence"); }
    ;
    static get CherryFenceGate() { return BlockTypes.get("minecraft:cherry_fence_gate"); }
    ;
    static get CherryHangingSign() { return BlockTypes.get("minecraft:cherry_hanging_sign"); }
    ;
    static get CherryLeaves() { return BlockTypes.get("minecraft:cherry_leaves"); }
    ;
    static get CherryLog() { return BlockTypes.get("minecraft:cherry_log"); }
    ;
    static get CherryPlanks() { return BlockTypes.get("minecraft:cherry_planks"); }
    ;
    static get CherryPressurePlate() { return BlockTypes.get("minecraft:cherry_pressure_plate"); }
    ;
    static get CherrySapling() { return BlockTypes.get("minecraft:cherry_sapling"); }
    ;
    static get CherrySlab() { return BlockTypes.get("minecraft:cherry_slab"); }
    ;
    static get CherryStairs() { return BlockTypes.get("minecraft:cherry_stairs"); }
    ;
    static get CherryStandingSign() { return BlockTypes.get("minecraft:cherry_standing_sign"); }
    ;
    static get CherryTrapdoor() { return BlockTypes.get("minecraft:cherry_trapdoor"); }
    ;
    static get CherryWallSign() { return BlockTypes.get("minecraft:cherry_wall_sign"); }
    ;
    static get CherryWood() { return BlockTypes.get("minecraft:cherry_wood"); }
    ;
    static get Chest() { return BlockTypes.get("minecraft:chest"); }
    ;
    static get ChiseledBookshelf() { return BlockTypes.get("minecraft:chiseled_bookshelf"); }
    ;
    static get ChiseledDeepslate() { return BlockTypes.get("minecraft:chiseled_deepslate"); }
    ;
    static get ChiseledNetherBricks() { return BlockTypes.get("minecraft:chiseled_nether_bricks"); }
    ;
    static get ChiseledPolishedBlackstone() { return BlockTypes.get("minecraft:chiseled_polished_blackstone"); }
    ;
    static get ChorusFlower() { return BlockTypes.get("minecraft:chorus_flower"); }
    ;
    static get ChorusPlant() { return BlockTypes.get("minecraft:chorus_plant"); }
    ;
    static get Clay() { return BlockTypes.get("minecraft:clay"); }
    ;
    static get ClientRequestPlaceholderBlock() { return BlockTypes.get("minecraft:client_request_placeholder_block"); }
    ;
    static get CoalBlock() { return BlockTypes.get("minecraft:coal_block"); }
    ;
    static get CoalOre() { return BlockTypes.get("minecraft:coal_ore"); }
    ;
    static get CobbledDeepslate() { return BlockTypes.get("minecraft:cobbled_deepslate"); }
    ;
    static get CobbledDeepslateDoubleSlab() { return BlockTypes.get("minecraft:cobbled_deepslate_double_slab"); }
    ;
    static get CobbledDeepslateSlab() { return BlockTypes.get("minecraft:cobbled_deepslate_slab"); }
    ;
    static get CobbledDeepslateStairs() { return BlockTypes.get("minecraft:cobbled_deepslate_stairs"); }
    ;
    static get CobbledDeepslateWall() { return BlockTypes.get("minecraft:cobbled_deepslate_wall"); }
    ;
    static get Cobblestone() { return BlockTypes.get("minecraft:cobblestone"); }
    ;
    static get CobblestoneWall() { return BlockTypes.get("minecraft:cobblestone_wall"); }
    ;
    static get Cocoa() { return BlockTypes.get("minecraft:cocoa"); }
    ;
    static get ColoredTorchBp() { return BlockTypes.get("minecraft:colored_torch_bp"); }
    ;
    static get ColoredTorchRg() { return BlockTypes.get("minecraft:colored_torch_rg"); }
    ;
    static get CommandBlock() { return BlockTypes.get("minecraft:command_block"); }
    ;
    static get Composter() { return BlockTypes.get("minecraft:composter"); }
    ;
    static get Conduit() { return BlockTypes.get("minecraft:conduit"); }
    ;
    static get CopperBlock() { return BlockTypes.get("minecraft:copper_block"); }
    ;
    static get CopperOre() { return BlockTypes.get("minecraft:copper_ore"); }
    ;
    static get CoralBlock() { return BlockTypes.get("minecraft:coral_block"); }
    ;
    static get CoralFan() { return BlockTypes.get("minecraft:coral_fan"); }
    ;
    static get CoralFanDead() { return BlockTypes.get("minecraft:coral_fan_dead"); }
    ;
    static get CoralFanHang() { return BlockTypes.get("minecraft:coral_fan_hang"); }
    ;
    static get CoralFanHang2() { return BlockTypes.get("minecraft:coral_fan_hang2"); }
    ;
    static get CoralFanHang3() { return BlockTypes.get("minecraft:coral_fan_hang3"); }
    ;
    static get CrackedDeepslateBricks() { return BlockTypes.get("minecraft:cracked_deepslate_bricks"); }
    ;
    static get CrackedDeepslateTiles() { return BlockTypes.get("minecraft:cracked_deepslate_tiles"); }
    ;
    static get CrackedNetherBricks() { return BlockTypes.get("minecraft:cracked_nether_bricks"); }
    ;
    static get CrackedPolishedBlackstoneBricks() { return BlockTypes.get("minecraft:cracked_polished_blackstone_bricks"); }
    ;
    static get CraftingTable() { return BlockTypes.get("minecraft:crafting_table"); }
    ;
    static get CrimsonButton() { return BlockTypes.get("minecraft:crimson_button"); }
    ;
    static get CrimsonDoor() { return BlockTypes.get("minecraft:crimson_door"); }
    ;
    static get CrimsonDoubleSlab() { return BlockTypes.get("minecraft:crimson_double_slab"); }
    ;
    static get CrimsonFence() { return BlockTypes.get("minecraft:crimson_fence"); }
    ;
    static get CrimsonFenceGate() { return BlockTypes.get("minecraft:crimson_fence_gate"); }
    ;
    static get CrimsonFungus() { return BlockTypes.get("minecraft:crimson_fungus"); }
    ;
    static get CrimsonHangingSign() { return BlockTypes.get("minecraft:crimson_hanging_sign"); }
    ;
    static get CrimsonHyphae() { return BlockTypes.get("minecraft:crimson_hyphae"); }
    ;
    static get CrimsonNylium() { return BlockTypes.get("minecraft:crimson_nylium"); }
    ;
    static get CrimsonPlanks() { return BlockTypes.get("minecraft:crimson_planks"); }
    ;
    static get CrimsonPressurePlate() { return BlockTypes.get("minecraft:crimson_pressure_plate"); }
    ;
    static get CrimsonRoots() { return BlockTypes.get("minecraft:crimson_roots"); }
    ;
    static get CrimsonSlab() { return BlockTypes.get("minecraft:crimson_slab"); }
    ;
    static get CrimsonStairs() { return BlockTypes.get("minecraft:crimson_stairs"); }
    ;
    static get CrimsonStandingSign() { return BlockTypes.get("minecraft:crimson_standing_sign"); }
    ;
    static get CrimsonStem() { return BlockTypes.get("minecraft:crimson_stem"); }
    ;
    static get CrimsonTrapdoor() { return BlockTypes.get("minecraft:crimson_trapdoor"); }
    ;
    static get CrimsonWallSign() { return BlockTypes.get("minecraft:crimson_wall_sign"); }
    ;
    static get CryingObsidian() { return BlockTypes.get("minecraft:crying_obsidian"); }
    ;
    static get CutCopper() { return BlockTypes.get("minecraft:cut_copper"); }
    ;
    static get CutCopperSlab() { return BlockTypes.get("minecraft:cut_copper_slab"); }
    ;
    static get CutCopperStairs() { return BlockTypes.get("minecraft:cut_copper_stairs"); }
    ;
    static get CyanCandle() { return BlockTypes.get("minecraft:cyan_candle"); }
    ;
    static get CyanCandleCake() { return BlockTypes.get("minecraft:cyan_candle_cake"); }
    ;
    static get CyanCarpet() { return BlockTypes.get("minecraft:cyan_carpet"); }
    ;
    static get CyanConcrete() { return BlockTypes.get("minecraft:cyan_concrete"); }
    ;
    static get CyanConcretePowder() { return BlockTypes.get("minecraft:cyan_concrete_powder"); }
    ;
    static get CyanGlazedTerracotta() { return BlockTypes.get("minecraft:cyan_glazed_terracotta"); }
    ;
    static get CyanShulkerBox() { return BlockTypes.get("minecraft:cyan_shulker_box"); }
    ;
    static get CyanStainedGlass() { return BlockTypes.get("minecraft:cyan_stained_glass"); }
    ;
    static get CyanStainedGlassPane() { return BlockTypes.get("minecraft:cyan_stained_glass_pane"); }
    ;
    static get CyanTerracotta() { return BlockTypes.get("minecraft:cyan_terracotta"); }
    ;
    static get CyanWool() { return BlockTypes.get("minecraft:cyan_wool"); }
    ;
    static get DarkOakButton() { return BlockTypes.get("minecraft:dark_oak_button"); }
    ;
    static get DarkOakDoor() { return BlockTypes.get("minecraft:dark_oak_door"); }
    ;
    static get DarkOakFence() { return BlockTypes.get("minecraft:dark_oak_fence"); }
    ;
    static get DarkOakFenceGate() { return BlockTypes.get("minecraft:dark_oak_fence_gate"); }
    ;
    static get DarkOakHangingSign() { return BlockTypes.get("minecraft:dark_oak_hanging_sign"); }
    ;
    static get DarkOakLog() { return BlockTypes.get("minecraft:dark_oak_log"); }
    ;
    static get DarkOakPressurePlate() { return BlockTypes.get("minecraft:dark_oak_pressure_plate"); }
    ;
    static get DarkOakStairs() { return BlockTypes.get("minecraft:dark_oak_stairs"); }
    ;
    static get DarkOakTrapdoor() { return BlockTypes.get("minecraft:dark_oak_trapdoor"); }
    ;
    static get DarkPrismarineStairs() { return BlockTypes.get("minecraft:dark_prismarine_stairs"); }
    ;
    static get DarkoakStandingSign() { return BlockTypes.get("minecraft:darkoak_standing_sign"); }
    ;
    static get DarkoakWallSign() { return BlockTypes.get("minecraft:darkoak_wall_sign"); }
    ;
    static get DaylightDetector() { return BlockTypes.get("minecraft:daylight_detector"); }
    ;
    static get DaylightDetectorInverted() { return BlockTypes.get("minecraft:daylight_detector_inverted"); }
    ;
    static get DeadBrainCoral() { return BlockTypes.get("minecraft:dead_brain_coral"); }
    ;
    static get DeadBubbleCoral() { return BlockTypes.get("minecraft:dead_bubble_coral"); }
    ;
    static get DeadFireCoral() { return BlockTypes.get("minecraft:dead_fire_coral"); }
    ;
    static get DeadHornCoral() { return BlockTypes.get("minecraft:dead_horn_coral"); }
    ;
    static get DeadTubeCoral() { return BlockTypes.get("minecraft:dead_tube_coral"); }
    ;
    static get Deadbush() { return BlockTypes.get("minecraft:deadbush"); }
    ;
    static get DecoratedPot() { return BlockTypes.get("minecraft:decorated_pot"); }
    ;
    static get Deepslate() { return BlockTypes.get("minecraft:deepslate"); }
    ;
    static get DeepslateBrickDoubleSlab() { return BlockTypes.get("minecraft:deepslate_brick_double_slab"); }
    ;
    static get DeepslateBrickSlab() { return BlockTypes.get("minecraft:deepslate_brick_slab"); }
    ;
    static get DeepslateBrickStairs() { return BlockTypes.get("minecraft:deepslate_brick_stairs"); }
    ;
    static get DeepslateBrickWall() { return BlockTypes.get("minecraft:deepslate_brick_wall"); }
    ;
    static get DeepslateBricks() { return BlockTypes.get("minecraft:deepslate_bricks"); }
    ;
    static get DeepslateCoalOre() { return BlockTypes.get("minecraft:deepslate_coal_ore"); }
    ;
    static get DeepslateCopperOre() { return BlockTypes.get("minecraft:deepslate_copper_ore"); }
    ;
    static get DeepslateDiamondOre() { return BlockTypes.get("minecraft:deepslate_diamond_ore"); }
    ;
    static get DeepslateEmeraldOre() { return BlockTypes.get("minecraft:deepslate_emerald_ore"); }
    ;
    static get DeepslateGoldOre() { return BlockTypes.get("minecraft:deepslate_gold_ore"); }
    ;
    static get DeepslateIronOre() { return BlockTypes.get("minecraft:deepslate_iron_ore"); }
    ;
    static get DeepslateLapisOre() { return BlockTypes.get("minecraft:deepslate_lapis_ore"); }
    ;
    static get DeepslateRedstoneOre() { return BlockTypes.get("minecraft:deepslate_redstone_ore"); }
    ;
    static get DeepslateTileDoubleSlab() { return BlockTypes.get("minecraft:deepslate_tile_double_slab"); }
    ;
    static get DeepslateTileSlab() { return BlockTypes.get("minecraft:deepslate_tile_slab"); }
    ;
    static get DeepslateTileStairs() { return BlockTypes.get("minecraft:deepslate_tile_stairs"); }
    ;
    static get DeepslateTileWall() { return BlockTypes.get("minecraft:deepslate_tile_wall"); }
    ;
    static get DeepslateTiles() { return BlockTypes.get("minecraft:deepslate_tiles"); }
    ;
    static get Deny() { return BlockTypes.get("minecraft:deny"); }
    ;
    static get DetectorRail() { return BlockTypes.get("minecraft:detector_rail"); }
    ;
    static get DiamondBlock() { return BlockTypes.get("minecraft:diamond_block"); }
    ;
    static get DiamondOre() { return BlockTypes.get("minecraft:diamond_ore"); }
    ;
    static get DioriteStairs() { return BlockTypes.get("minecraft:diorite_stairs"); }
    ;
    static get Dirt() { return BlockTypes.get("minecraft:dirt"); }
    ;
    static get DirtWithRoots() { return BlockTypes.get("minecraft:dirt_with_roots"); }
    ;
    static get Dispenser() { return BlockTypes.get("minecraft:dispenser"); }
    ;
    static get DoubleCutCopperSlab() { return BlockTypes.get("minecraft:double_cut_copper_slab"); }
    ;
    static get DoublePlant() { return BlockTypes.get("minecraft:double_plant"); }
    ;
    static get DoubleStoneBlockSlab() { return BlockTypes.get("minecraft:double_stone_block_slab"); }
    ;
    static get DoubleStoneBlockSlab2() { return BlockTypes.get("minecraft:double_stone_block_slab2"); }
    ;
    static get DoubleStoneBlockSlab3() { return BlockTypes.get("minecraft:double_stone_block_slab3"); }
    ;
    static get DoubleStoneBlockSlab4() { return BlockTypes.get("minecraft:double_stone_block_slab4"); }
    ;
    static get DoubleWoodenSlab() { return BlockTypes.get("minecraft:double_wooden_slab"); }
    ;
    static get DragonEgg() { return BlockTypes.get("minecraft:dragon_egg"); }
    ;
    static get DriedKelpBlock() { return BlockTypes.get("minecraft:dried_kelp_block"); }
    ;
    static get DripstoneBlock() { return BlockTypes.get("minecraft:dripstone_block"); }
    ;
    static get Dropper() { return BlockTypes.get("minecraft:dropper"); }
    ;
    static get Element0() { return BlockTypes.get("minecraft:element_0"); }
    ;
    static get Element1() { return BlockTypes.get("minecraft:element_1"); }
    ;
    static get Element10() { return BlockTypes.get("minecraft:element_10"); }
    ;
    static get Element100() { return BlockTypes.get("minecraft:element_100"); }
    ;
    static get Element101() { return BlockTypes.get("minecraft:element_101"); }
    ;
    static get Element102() { return BlockTypes.get("minecraft:element_102"); }
    ;
    static get Element103() { return BlockTypes.get("minecraft:element_103"); }
    ;
    static get Element104() { return BlockTypes.get("minecraft:element_104"); }
    ;
    static get Element105() { return BlockTypes.get("minecraft:element_105"); }
    ;
    static get Element106() { return BlockTypes.get("minecraft:element_106"); }
    ;
    static get Element107() { return BlockTypes.get("minecraft:element_107"); }
    ;
    static get Element108() { return BlockTypes.get("minecraft:element_108"); }
    ;
    static get Element109() { return BlockTypes.get("minecraft:element_109"); }
    ;
    static get Element11() { return BlockTypes.get("minecraft:element_11"); }
    ;
    static get Element110() { return BlockTypes.get("minecraft:element_110"); }
    ;
    static get Element111() { return BlockTypes.get("minecraft:element_111"); }
    ;
    static get Element112() { return BlockTypes.get("minecraft:element_112"); }
    ;
    static get Element113() { return BlockTypes.get("minecraft:element_113"); }
    ;
    static get Element114() { return BlockTypes.get("minecraft:element_114"); }
    ;
    static get Element115() { return BlockTypes.get("minecraft:element_115"); }
    ;
    static get Element116() { return BlockTypes.get("minecraft:element_116"); }
    ;
    static get Element117() { return BlockTypes.get("minecraft:element_117"); }
    ;
    static get Element118() { return BlockTypes.get("minecraft:element_118"); }
    ;
    static get Element12() { return BlockTypes.get("minecraft:element_12"); }
    ;
    static get Element13() { return BlockTypes.get("minecraft:element_13"); }
    ;
    static get Element14() { return BlockTypes.get("minecraft:element_14"); }
    ;
    static get Element15() { return BlockTypes.get("minecraft:element_15"); }
    ;
    static get Element16() { return BlockTypes.get("minecraft:element_16"); }
    ;
    static get Element17() { return BlockTypes.get("minecraft:element_17"); }
    ;
    static get Element18() { return BlockTypes.get("minecraft:element_18"); }
    ;
    static get Element19() { return BlockTypes.get("minecraft:element_19"); }
    ;
    static get Element2() { return BlockTypes.get("minecraft:element_2"); }
    ;
    static get Element20() { return BlockTypes.get("minecraft:element_20"); }
    ;
    static get Element21() { return BlockTypes.get("minecraft:element_21"); }
    ;
    static get Element22() { return BlockTypes.get("minecraft:element_22"); }
    ;
    static get Element23() { return BlockTypes.get("minecraft:element_23"); }
    ;
    static get Element24() { return BlockTypes.get("minecraft:element_24"); }
    ;
    static get Element25() { return BlockTypes.get("minecraft:element_25"); }
    ;
    static get Element26() { return BlockTypes.get("minecraft:element_26"); }
    ;
    static get Element27() { return BlockTypes.get("minecraft:element_27"); }
    ;
    static get Element28() { return BlockTypes.get("minecraft:element_28"); }
    ;
    static get Element29() { return BlockTypes.get("minecraft:element_29"); }
    ;
    static get Element3() { return BlockTypes.get("minecraft:element_3"); }
    ;
    static get Element30() { return BlockTypes.get("minecraft:element_30"); }
    ;
    static get Element31() { return BlockTypes.get("minecraft:element_31"); }
    ;
    static get Element32() { return BlockTypes.get("minecraft:element_32"); }
    ;
    static get Element33() { return BlockTypes.get("minecraft:element_33"); }
    ;
    static get Element34() { return BlockTypes.get("minecraft:element_34"); }
    ;
    static get Element35() { return BlockTypes.get("minecraft:element_35"); }
    ;
    static get Element36() { return BlockTypes.get("minecraft:element_36"); }
    ;
    static get Element37() { return BlockTypes.get("minecraft:element_37"); }
    ;
    static get Element38() { return BlockTypes.get("minecraft:element_38"); }
    ;
    static get Element39() { return BlockTypes.get("minecraft:element_39"); }
    ;
    static get Element4() { return BlockTypes.get("minecraft:element_4"); }
    ;
    static get Element40() { return BlockTypes.get("minecraft:element_40"); }
    ;
    static get Element41() { return BlockTypes.get("minecraft:element_41"); }
    ;
    static get Element42() { return BlockTypes.get("minecraft:element_42"); }
    ;
    static get Element43() { return BlockTypes.get("minecraft:element_43"); }
    ;
    static get Element44() { return BlockTypes.get("minecraft:element_44"); }
    ;
    static get Element45() { return BlockTypes.get("minecraft:element_45"); }
    ;
    static get Element46() { return BlockTypes.get("minecraft:element_46"); }
    ;
    static get Element47() { return BlockTypes.get("minecraft:element_47"); }
    ;
    static get Element48() { return BlockTypes.get("minecraft:element_48"); }
    ;
    static get Element49() { return BlockTypes.get("minecraft:element_49"); }
    ;
    static get Element5() { return BlockTypes.get("minecraft:element_5"); }
    ;
    static get Element50() { return BlockTypes.get("minecraft:element_50"); }
    ;
    static get Element51() { return BlockTypes.get("minecraft:element_51"); }
    ;
    static get Element52() { return BlockTypes.get("minecraft:element_52"); }
    ;
    static get Element53() { return BlockTypes.get("minecraft:element_53"); }
    ;
    static get Element54() { return BlockTypes.get("minecraft:element_54"); }
    ;
    static get Element55() { return BlockTypes.get("minecraft:element_55"); }
    ;
    static get Element56() { return BlockTypes.get("minecraft:element_56"); }
    ;
    static get Element57() { return BlockTypes.get("minecraft:element_57"); }
    ;
    static get Element58() { return BlockTypes.get("minecraft:element_58"); }
    ;
    static get Element59() { return BlockTypes.get("minecraft:element_59"); }
    ;
    static get Element6() { return BlockTypes.get("minecraft:element_6"); }
    ;
    static get Element60() { return BlockTypes.get("minecraft:element_60"); }
    ;
    static get Element61() { return BlockTypes.get("minecraft:element_61"); }
    ;
    static get Element62() { return BlockTypes.get("minecraft:element_62"); }
    ;
    static get Element63() { return BlockTypes.get("minecraft:element_63"); }
    ;
    static get Element64() { return BlockTypes.get("minecraft:element_64"); }
    ;
    static get Element65() { return BlockTypes.get("minecraft:element_65"); }
    ;
    static get Element66() { return BlockTypes.get("minecraft:element_66"); }
    ;
    static get Element67() { return BlockTypes.get("minecraft:element_67"); }
    ;
    static get Element68() { return BlockTypes.get("minecraft:element_68"); }
    ;
    static get Element69() { return BlockTypes.get("minecraft:element_69"); }
    ;
    static get Element7() { return BlockTypes.get("minecraft:element_7"); }
    ;
    static get Element70() { return BlockTypes.get("minecraft:element_70"); }
    ;
    static get Element71() { return BlockTypes.get("minecraft:element_71"); }
    ;
    static get Element72() { return BlockTypes.get("minecraft:element_72"); }
    ;
    static get Element73() { return BlockTypes.get("minecraft:element_73"); }
    ;
    static get Element74() { return BlockTypes.get("minecraft:element_74"); }
    ;
    static get Element75() { return BlockTypes.get("minecraft:element_75"); }
    ;
    static get Element76() { return BlockTypes.get("minecraft:element_76"); }
    ;
    static get Element77() { return BlockTypes.get("minecraft:element_77"); }
    ;
    static get Element78() { return BlockTypes.get("minecraft:element_78"); }
    ;
    static get Element79() { return BlockTypes.get("minecraft:element_79"); }
    ;
    static get Element8() { return BlockTypes.get("minecraft:element_8"); }
    ;
    static get Element80() { return BlockTypes.get("minecraft:element_80"); }
    ;
    static get Element81() { return BlockTypes.get("minecraft:element_81"); }
    ;
    static get Element82() { return BlockTypes.get("minecraft:element_82"); }
    ;
    static get Element83() { return BlockTypes.get("minecraft:element_83"); }
    ;
    static get Element84() { return BlockTypes.get("minecraft:element_84"); }
    ;
    static get Element85() { return BlockTypes.get("minecraft:element_85"); }
    ;
    static get Element86() { return BlockTypes.get("minecraft:element_86"); }
    ;
    static get Element87() { return BlockTypes.get("minecraft:element_87"); }
    ;
    static get Element88() { return BlockTypes.get("minecraft:element_88"); }
    ;
    static get Element89() { return BlockTypes.get("minecraft:element_89"); }
    ;
    static get Element9() { return BlockTypes.get("minecraft:element_9"); }
    ;
    static get Element90() { return BlockTypes.get("minecraft:element_90"); }
    ;
    static get Element91() { return BlockTypes.get("minecraft:element_91"); }
    ;
    static get Element92() { return BlockTypes.get("minecraft:element_92"); }
    ;
    static get Element93() { return BlockTypes.get("minecraft:element_93"); }
    ;
    static get Element94() { return BlockTypes.get("minecraft:element_94"); }
    ;
    static get Element95() { return BlockTypes.get("minecraft:element_95"); }
    ;
    static get Element96() { return BlockTypes.get("minecraft:element_96"); }
    ;
    static get Element97() { return BlockTypes.get("minecraft:element_97"); }
    ;
    static get Element98() { return BlockTypes.get("minecraft:element_98"); }
    ;
    static get Element99() { return BlockTypes.get("minecraft:element_99"); }
    ;
    static get EmeraldBlock() { return BlockTypes.get("minecraft:emerald_block"); }
    ;
    static get EmeraldOre() { return BlockTypes.get("minecraft:emerald_ore"); }
    ;
    static get EnchantingTable() { return BlockTypes.get("minecraft:enchanting_table"); }
    ;
    static get EndBrickStairs() { return BlockTypes.get("minecraft:end_brick_stairs"); }
    ;
    static get EndBricks() { return BlockTypes.get("minecraft:end_bricks"); }
    ;
    static get EndGateway() { return BlockTypes.get("minecraft:end_gateway"); }
    ;
    static get EndPortal() { return BlockTypes.get("minecraft:end_portal"); }
    ;
    static get EndPortalFrame() { return BlockTypes.get("minecraft:end_portal_frame"); }
    ;
    static get EndRod() { return BlockTypes.get("minecraft:end_rod"); }
    ;
    static get EndStone() { return BlockTypes.get("minecraft:end_stone"); }
    ;
    static get EnderChest() { return BlockTypes.get("minecraft:ender_chest"); }
    ;
    static get ExposedCopper() { return BlockTypes.get("minecraft:exposed_copper"); }
    ;
    static get ExposedCutCopper() { return BlockTypes.get("minecraft:exposed_cut_copper"); }
    ;
    static get ExposedCutCopperSlab() { return BlockTypes.get("minecraft:exposed_cut_copper_slab"); }
    ;
    static get ExposedCutCopperStairs() { return BlockTypes.get("minecraft:exposed_cut_copper_stairs"); }
    ;
    static get ExposedDoubleCutCopperSlab() { return BlockTypes.get("minecraft:exposed_double_cut_copper_slab"); }
    ;
    static get Farmland() { return BlockTypes.get("minecraft:farmland"); }
    ;
    static get FenceGate() { return BlockTypes.get("minecraft:fence_gate"); }
    ;
    static get Fire() { return BlockTypes.get("minecraft:fire"); }
    ;
    static get FireCoral() { return BlockTypes.get("minecraft:fire_coral"); }
    ;
    static get FletchingTable() { return BlockTypes.get("minecraft:fletching_table"); }
    ;
    static get FlowerPot() { return BlockTypes.get("minecraft:flower_pot"); }
    ;
    static get FloweringAzalea() { return BlockTypes.get("minecraft:flowering_azalea"); }
    ;
    static get FlowingLava() { return BlockTypes.get("minecraft:flowing_lava"); }
    ;
    static get FlowingWater() { return BlockTypes.get("minecraft:flowing_water"); }
    ;
    static get Frame() { return BlockTypes.get("minecraft:frame"); }
    ;
    static get FrogSpawn() { return BlockTypes.get("minecraft:frog_spawn"); }
    ;
    static get FrostedIce() { return BlockTypes.get("minecraft:frosted_ice"); }
    ;
    static get Furnace() { return BlockTypes.get("minecraft:furnace"); }
    ;
    static get GildedBlackstone() { return BlockTypes.get("minecraft:gilded_blackstone"); }
    ;
    static get Glass() { return BlockTypes.get("minecraft:glass"); }
    ;
    static get GlassPane() { return BlockTypes.get("minecraft:glass_pane"); }
    ;
    static get GlowFrame() { return BlockTypes.get("minecraft:glow_frame"); }
    ;
    static get GlowLichen() { return BlockTypes.get("minecraft:glow_lichen"); }
    ;
    static get Glowingobsidian() { return BlockTypes.get("minecraft:glowingobsidian"); }
    ;
    static get Glowstone() { return BlockTypes.get("minecraft:glowstone"); }
    ;
    static get GoldBlock() { return BlockTypes.get("minecraft:gold_block"); }
    ;
    static get GoldOre() { return BlockTypes.get("minecraft:gold_ore"); }
    ;
    static get GoldenRail() { return BlockTypes.get("minecraft:golden_rail"); }
    ;
    static get GraniteStairs() { return BlockTypes.get("minecraft:granite_stairs"); }
    ;
    static get Grass() { return BlockTypes.get("minecraft:grass"); }
    ;
    static get GrassPath() { return BlockTypes.get("minecraft:grass_path"); }
    ;
    static get Gravel() { return BlockTypes.get("minecraft:gravel"); }
    ;
    static get GrayCandle() { return BlockTypes.get("minecraft:gray_candle"); }
    ;
    static get GrayCandleCake() { return BlockTypes.get("minecraft:gray_candle_cake"); }
    ;
    static get GrayCarpet() { return BlockTypes.get("minecraft:gray_carpet"); }
    ;
    static get GrayConcrete() { return BlockTypes.get("minecraft:gray_concrete"); }
    ;
    static get GrayConcretePowder() { return BlockTypes.get("minecraft:gray_concrete_powder"); }
    ;
    static get GrayGlazedTerracotta() { return BlockTypes.get("minecraft:gray_glazed_terracotta"); }
    ;
    static get GrayShulkerBox() { return BlockTypes.get("minecraft:gray_shulker_box"); }
    ;
    static get GrayStainedGlass() { return BlockTypes.get("minecraft:gray_stained_glass"); }
    ;
    static get GrayStainedGlassPane() { return BlockTypes.get("minecraft:gray_stained_glass_pane"); }
    ;
    static get GrayTerracotta() { return BlockTypes.get("minecraft:gray_terracotta"); }
    ;
    static get GrayWool() { return BlockTypes.get("minecraft:gray_wool"); }
    ;
    static get GreenCandle() { return BlockTypes.get("minecraft:green_candle"); }
    ;
    static get GreenCandleCake() { return BlockTypes.get("minecraft:green_candle_cake"); }
    ;
    static get GreenCarpet() { return BlockTypes.get("minecraft:green_carpet"); }
    ;
    static get GreenConcrete() { return BlockTypes.get("minecraft:green_concrete"); }
    ;
    static get GreenConcretePowder() { return BlockTypes.get("minecraft:green_concrete_powder"); }
    ;
    static get GreenGlazedTerracotta() { return BlockTypes.get("minecraft:green_glazed_terracotta"); }
    ;
    static get GreenShulkerBox() { return BlockTypes.get("minecraft:green_shulker_box"); }
    ;
    static get GreenStainedGlass() { return BlockTypes.get("minecraft:green_stained_glass"); }
    ;
    static get GreenStainedGlassPane() { return BlockTypes.get("minecraft:green_stained_glass_pane"); }
    ;
    static get GreenTerracotta() { return BlockTypes.get("minecraft:green_terracotta"); }
    ;
    static get GreenWool() { return BlockTypes.get("minecraft:green_wool"); }
    ;
    static get Grindstone() { return BlockTypes.get("minecraft:grindstone"); }
    ;
    static get HangingRoots() { return BlockTypes.get("minecraft:hanging_roots"); }
    ;
    static get HardGlass() { return BlockTypes.get("minecraft:hard_glass"); }
    ;
    static get HardGlassPane() { return BlockTypes.get("minecraft:hard_glass_pane"); }
    ;
    static get HardStainedGlass() { return BlockTypes.get("minecraft:hard_stained_glass"); }
    ;
    static get HardStainedGlassPane() { return BlockTypes.get("minecraft:hard_stained_glass_pane"); }
    ;
    static get HardenedClay() { return BlockTypes.get("minecraft:hardened_clay"); }
    ;
    static get HayBlock() { return BlockTypes.get("minecraft:hay_block"); }
    ;
    static get HeavyWeightedPressurePlate() { return BlockTypes.get("minecraft:heavy_weighted_pressure_plate"); }
    ;
    static get HoneyBlock() { return BlockTypes.get("minecraft:honey_block"); }
    ;
    static get HoneycombBlock() { return BlockTypes.get("minecraft:honeycomb_block"); }
    ;
    static get Hopper() { return BlockTypes.get("minecraft:hopper"); }
    ;
    static get HornCoral() { return BlockTypes.get("minecraft:horn_coral"); }
    ;
    static get Ice() { return BlockTypes.get("minecraft:ice"); }
    ;
    static get InfestedDeepslate() { return BlockTypes.get("minecraft:infested_deepslate"); }
    ;
    static get InfoUpdate() { return BlockTypes.get("minecraft:info_update"); }
    ;
    static get InfoUpdate2() { return BlockTypes.get("minecraft:info_update2"); }
    ;
    static get InvisibleBedrock() { return BlockTypes.get("minecraft:invisible_bedrock"); }
    ;
    static get IronBars() { return BlockTypes.get("minecraft:iron_bars"); }
    ;
    static get IronBlock() { return BlockTypes.get("minecraft:iron_block"); }
    ;
    static get IronDoor() { return BlockTypes.get("minecraft:iron_door"); }
    ;
    static get IronOre() { return BlockTypes.get("minecraft:iron_ore"); }
    ;
    static get IronTrapdoor() { return BlockTypes.get("minecraft:iron_trapdoor"); }
    ;
    static get Jigsaw() { return BlockTypes.get("minecraft:jigsaw"); }
    ;
    static get Jukebox() { return BlockTypes.get("minecraft:jukebox"); }
    ;
    static get JungleButton() { return BlockTypes.get("minecraft:jungle_button"); }
    ;
    static get JungleDoor() { return BlockTypes.get("minecraft:jungle_door"); }
    ;
    static get JungleFence() { return BlockTypes.get("minecraft:jungle_fence"); }
    ;
    static get JungleFenceGate() { return BlockTypes.get("minecraft:jungle_fence_gate"); }
    ;
    static get JungleHangingSign() { return BlockTypes.get("minecraft:jungle_hanging_sign"); }
    ;
    static get JungleLog() { return BlockTypes.get("minecraft:jungle_log"); }
    ;
    static get JunglePressurePlate() { return BlockTypes.get("minecraft:jungle_pressure_plate"); }
    ;
    static get JungleStairs() { return BlockTypes.get("minecraft:jungle_stairs"); }
    ;
    static get JungleStandingSign() { return BlockTypes.get("minecraft:jungle_standing_sign"); }
    ;
    static get JungleTrapdoor() { return BlockTypes.get("minecraft:jungle_trapdoor"); }
    ;
    static get JungleWallSign() { return BlockTypes.get("minecraft:jungle_wall_sign"); }
    ;
    static get Kelp() { return BlockTypes.get("minecraft:kelp"); }
    ;
    static get Ladder() { return BlockTypes.get("minecraft:ladder"); }
    ;
    static get Lantern() { return BlockTypes.get("minecraft:lantern"); }
    ;
    static get LapisBlock() { return BlockTypes.get("minecraft:lapis_block"); }
    ;
    static get LapisOre() { return BlockTypes.get("minecraft:lapis_ore"); }
    ;
    static get LargeAmethystBud() { return BlockTypes.get("minecraft:large_amethyst_bud"); }
    ;
    static get Lava() { return BlockTypes.get("minecraft:lava"); }
    ;
    static get Leaves() { return BlockTypes.get("minecraft:leaves"); }
    ;
    static get Leaves2() { return BlockTypes.get("minecraft:leaves2"); }
    ;
    static get Lectern() { return BlockTypes.get("minecraft:lectern"); }
    ;
    static get Lever() { return BlockTypes.get("minecraft:lever"); }
    ;
    static get LightBlock() { return BlockTypes.get("minecraft:light_block"); }
    ;
    static get LightBlueCandle() { return BlockTypes.get("minecraft:light_blue_candle"); }
    ;
    static get LightBlueCandleCake() { return BlockTypes.get("minecraft:light_blue_candle_cake"); }
    ;
    static get LightBlueCarpet() { return BlockTypes.get("minecraft:light_blue_carpet"); }
    ;
    static get LightBlueConcrete() { return BlockTypes.get("minecraft:light_blue_concrete"); }
    ;
    static get LightBlueConcretePowder() { return BlockTypes.get("minecraft:light_blue_concrete_powder"); }
    ;
    static get LightBlueGlazedTerracotta() { return BlockTypes.get("minecraft:light_blue_glazed_terracotta"); }
    ;
    static get LightBlueShulkerBox() { return BlockTypes.get("minecraft:light_blue_shulker_box"); }
    ;
    static get LightBlueStainedGlass() { return BlockTypes.get("minecraft:light_blue_stained_glass"); }
    ;
    static get LightBlueStainedGlassPane() { return BlockTypes.get("minecraft:light_blue_stained_glass_pane"); }
    ;
    static get LightBlueTerracotta() { return BlockTypes.get("minecraft:light_blue_terracotta"); }
    ;
    static get LightBlueWool() { return BlockTypes.get("minecraft:light_blue_wool"); }
    ;
    static get LightGrayCandle() { return BlockTypes.get("minecraft:light_gray_candle"); }
    ;
    static get LightGrayCandleCake() { return BlockTypes.get("minecraft:light_gray_candle_cake"); }
    ;
    static get LightGrayCarpet() { return BlockTypes.get("minecraft:light_gray_carpet"); }
    ;
    static get LightGrayConcrete() { return BlockTypes.get("minecraft:light_gray_concrete"); }
    ;
    static get LightGrayConcretePowder() { return BlockTypes.get("minecraft:light_gray_concrete_powder"); }
    ;
    static get LightGrayShulkerBox() { return BlockTypes.get("minecraft:light_gray_shulker_box"); }
    ;
    static get LightGrayStainedGlass() { return BlockTypes.get("minecraft:light_gray_stained_glass"); }
    ;
    static get LightGrayStainedGlassPane() { return BlockTypes.get("minecraft:light_gray_stained_glass_pane"); }
    ;
    static get LightGrayTerracotta() { return BlockTypes.get("minecraft:light_gray_terracotta"); }
    ;
    static get LightGrayWool() { return BlockTypes.get("minecraft:light_gray_wool"); }
    ;
    static get LightWeightedPressurePlate() { return BlockTypes.get("minecraft:light_weighted_pressure_plate"); }
    ;
    static get LightningRod() { return BlockTypes.get("minecraft:lightning_rod"); }
    ;
    static get LimeCandle() { return BlockTypes.get("minecraft:lime_candle"); }
    ;
    static get LimeCandleCake() { return BlockTypes.get("minecraft:lime_candle_cake"); }
    ;
    static get LimeCarpet() { return BlockTypes.get("minecraft:lime_carpet"); }
    ;
    static get LimeConcrete() { return BlockTypes.get("minecraft:lime_concrete"); }
    ;
    static get LimeConcretePowder() { return BlockTypes.get("minecraft:lime_concrete_powder"); }
    ;
    static get LimeGlazedTerracotta() { return BlockTypes.get("minecraft:lime_glazed_terracotta"); }
    ;
    static get LimeShulkerBox() { return BlockTypes.get("minecraft:lime_shulker_box"); }
    ;
    static get LimeStainedGlass() { return BlockTypes.get("minecraft:lime_stained_glass"); }
    ;
    static get LimeStainedGlassPane() { return BlockTypes.get("minecraft:lime_stained_glass_pane"); }
    ;
    static get LimeTerracotta() { return BlockTypes.get("minecraft:lime_terracotta"); }
    ;
    static get LimeWool() { return BlockTypes.get("minecraft:lime_wool"); }
    ;
    static get LitBlastFurnace() { return BlockTypes.get("minecraft:lit_blast_furnace"); }
    ;
    static get LitDeepslateRedstoneOre() { return BlockTypes.get("minecraft:lit_deepslate_redstone_ore"); }
    ;
    static get LitFurnace() { return BlockTypes.get("minecraft:lit_furnace"); }
    ;
    static get LitPumpkin() { return BlockTypes.get("minecraft:lit_pumpkin"); }
    ;
    static get LitRedstoneLamp() { return BlockTypes.get("minecraft:lit_redstone_lamp"); }
    ;
    static get LitRedstoneOre() { return BlockTypes.get("minecraft:lit_redstone_ore"); }
    ;
    static get LitSmoker() { return BlockTypes.get("minecraft:lit_smoker"); }
    ;
    static get Lodestone() { return BlockTypes.get("minecraft:lodestone"); }
    ;
    static get Loom() { return BlockTypes.get("minecraft:loom"); }
    ;
    static get MagentaCandle() { return BlockTypes.get("minecraft:magenta_candle"); }
    ;
    static get MagentaCandleCake() { return BlockTypes.get("minecraft:magenta_candle_cake"); }
    ;
    static get MagentaCarpet() { return BlockTypes.get("minecraft:magenta_carpet"); }
    ;
    static get MagentaConcrete() { return BlockTypes.get("minecraft:magenta_concrete"); }
    ;
    static get MagentaConcretePowder() { return BlockTypes.get("minecraft:magenta_concrete_powder"); }
    ;
    static get MagentaGlazedTerracotta() { return BlockTypes.get("minecraft:magenta_glazed_terracotta"); }
    ;
    static get MagentaShulkerBox() { return BlockTypes.get("minecraft:magenta_shulker_box"); }
    ;
    static get MagentaStainedGlass() { return BlockTypes.get("minecraft:magenta_stained_glass"); }
    ;
    static get MagentaStainedGlassPane() { return BlockTypes.get("minecraft:magenta_stained_glass_pane"); }
    ;
    static get MagentaTerracotta() { return BlockTypes.get("minecraft:magenta_terracotta"); }
    ;
    static get MagentaWool() { return BlockTypes.get("minecraft:magenta_wool"); }
    ;
    static get Magma() { return BlockTypes.get("minecraft:magma"); }
    ;
    static get MangroveButton() { return BlockTypes.get("minecraft:mangrove_button"); }
    ;
    static get MangroveDoor() { return BlockTypes.get("minecraft:mangrove_door"); }
    ;
    static get MangroveDoubleSlab() { return BlockTypes.get("minecraft:mangrove_double_slab"); }
    ;
    static get MangroveFence() { return BlockTypes.get("minecraft:mangrove_fence"); }
    ;
    static get MangroveFenceGate() { return BlockTypes.get("minecraft:mangrove_fence_gate"); }
    ;
    static get MangroveHangingSign() { return BlockTypes.get("minecraft:mangrove_hanging_sign"); }
    ;
    static get MangroveLeaves() { return BlockTypes.get("minecraft:mangrove_leaves"); }
    ;
    static get MangroveLog() { return BlockTypes.get("minecraft:mangrove_log"); }
    ;
    static get MangrovePlanks() { return BlockTypes.get("minecraft:mangrove_planks"); }
    ;
    static get MangrovePressurePlate() { return BlockTypes.get("minecraft:mangrove_pressure_plate"); }
    ;
    static get MangrovePropagule() { return BlockTypes.get("minecraft:mangrove_propagule"); }
    ;
    static get MangroveRoots() { return BlockTypes.get("minecraft:mangrove_roots"); }
    ;
    static get MangroveSlab() { return BlockTypes.get("minecraft:mangrove_slab"); }
    ;
    static get MangroveStairs() { return BlockTypes.get("minecraft:mangrove_stairs"); }
    ;
    static get MangroveStandingSign() { return BlockTypes.get("minecraft:mangrove_standing_sign"); }
    ;
    static get MangroveTrapdoor() { return BlockTypes.get("minecraft:mangrove_trapdoor"); }
    ;
    static get MangroveWallSign() { return BlockTypes.get("minecraft:mangrove_wall_sign"); }
    ;
    static get MangroveWood() { return BlockTypes.get("minecraft:mangrove_wood"); }
    ;
    static get MediumAmethystBud() { return BlockTypes.get("minecraft:medium_amethyst_bud"); }
    ;
    static get MelonBlock() { return BlockTypes.get("minecraft:melon_block"); }
    ;
    static get MelonStem() { return BlockTypes.get("minecraft:melon_stem"); }
    ;
    static get MobSpawner() { return BlockTypes.get("minecraft:mob_spawner"); }
    ;
    static get MonsterEgg() { return BlockTypes.get("minecraft:monster_egg"); }
    ;
    static get MossBlock() { return BlockTypes.get("minecraft:moss_block"); }
    ;
    static get MossCarpet() { return BlockTypes.get("minecraft:moss_carpet"); }
    ;
    static get MossyCobblestone() { return BlockTypes.get("minecraft:mossy_cobblestone"); }
    ;
    static get MossyCobblestoneStairs() { return BlockTypes.get("minecraft:mossy_cobblestone_stairs"); }
    ;
    static get MossyStoneBrickStairs() { return BlockTypes.get("minecraft:mossy_stone_brick_stairs"); }
    ;
    static get MovingBlock() { return BlockTypes.get("minecraft:moving_block"); }
    ;
    static get Mud() { return BlockTypes.get("minecraft:mud"); }
    ;
    static get MudBrickDoubleSlab() { return BlockTypes.get("minecraft:mud_brick_double_slab"); }
    ;
    static get MudBrickSlab() { return BlockTypes.get("minecraft:mud_brick_slab"); }
    ;
    static get MudBrickStairs() { return BlockTypes.get("minecraft:mud_brick_stairs"); }
    ;
    static get MudBrickWall() { return BlockTypes.get("minecraft:mud_brick_wall"); }
    ;
    static get MudBricks() { return BlockTypes.get("minecraft:mud_bricks"); }
    ;
    static get MuddyMangroveRoots() { return BlockTypes.get("minecraft:muddy_mangrove_roots"); }
    ;
    static get Mycelium() { return BlockTypes.get("minecraft:mycelium"); }
    ;
    static get NetherBrick() { return BlockTypes.get("minecraft:nether_brick"); }
    ;
    static get NetherBrickFence() { return BlockTypes.get("minecraft:nether_brick_fence"); }
    ;
    static get NetherBrickStairs() { return BlockTypes.get("minecraft:nether_brick_stairs"); }
    ;
    static get NetherGoldOre() { return BlockTypes.get("minecraft:nether_gold_ore"); }
    ;
    static get NetherSprouts() { return BlockTypes.get("minecraft:nether_sprouts"); }
    ;
    static get NetherWart() { return BlockTypes.get("minecraft:nether_wart"); }
    ;
    static get NetherWartBlock() { return BlockTypes.get("minecraft:nether_wart_block"); }
    ;
    static get NetheriteBlock() { return BlockTypes.get("minecraft:netherite_block"); }
    ;
    static get Netherrack() { return BlockTypes.get("minecraft:netherrack"); }
    ;
    static get Netherreactor() { return BlockTypes.get("minecraft:netherreactor"); }
    ;
    static get NormalStoneStairs() { return BlockTypes.get("minecraft:normal_stone_stairs"); }
    ;
    static get Noteblock() { return BlockTypes.get("minecraft:noteblock"); }
    ;
    static get OakFence() { return BlockTypes.get("minecraft:oak_fence"); }
    ;
    static get OakHangingSign() { return BlockTypes.get("minecraft:oak_hanging_sign"); }
    ;
    static get OakLog() { return BlockTypes.get("minecraft:oak_log"); }
    ;
    static get OakStairs() { return BlockTypes.get("minecraft:oak_stairs"); }
    ;
    static get Observer() { return BlockTypes.get("minecraft:observer"); }
    ;
    static get Obsidian() { return BlockTypes.get("minecraft:obsidian"); }
    ;
    static get OchreFroglight() { return BlockTypes.get("minecraft:ochre_froglight"); }
    ;
    static get OrangeCandle() { return BlockTypes.get("minecraft:orange_candle"); }
    ;
    static get OrangeCandleCake() { return BlockTypes.get("minecraft:orange_candle_cake"); }
    ;
    static get OrangeCarpet() { return BlockTypes.get("minecraft:orange_carpet"); }
    ;
    static get OrangeConcrete() { return BlockTypes.get("minecraft:orange_concrete"); }
    ;
    static get OrangeConcretePowder() { return BlockTypes.get("minecraft:orange_concrete_powder"); }
    ;
    static get OrangeGlazedTerracotta() { return BlockTypes.get("minecraft:orange_glazed_terracotta"); }
    ;
    static get OrangeShulkerBox() { return BlockTypes.get("minecraft:orange_shulker_box"); }
    ;
    static get OrangeStainedGlass() { return BlockTypes.get("minecraft:orange_stained_glass"); }
    ;
    static get OrangeStainedGlassPane() { return BlockTypes.get("minecraft:orange_stained_glass_pane"); }
    ;
    static get OrangeTerracotta() { return BlockTypes.get("minecraft:orange_terracotta"); }
    ;
    static get OrangeWool() { return BlockTypes.get("minecraft:orange_wool"); }
    ;
    static get OxidizedCopper() { return BlockTypes.get("minecraft:oxidized_copper"); }
    ;
    static get OxidizedCutCopper() { return BlockTypes.get("minecraft:oxidized_cut_copper"); }
    ;
    static get OxidizedCutCopperSlab() { return BlockTypes.get("minecraft:oxidized_cut_copper_slab"); }
    ;
    static get OxidizedCutCopperStairs() { return BlockTypes.get("minecraft:oxidized_cut_copper_stairs"); }
    ;
    static get OxidizedDoubleCutCopperSlab() { return BlockTypes.get("minecraft:oxidized_double_cut_copper_slab"); }
    ;
    static get PackedIce() { return BlockTypes.get("minecraft:packed_ice"); }
    ;
    static get PackedMud() { return BlockTypes.get("minecraft:packed_mud"); }
    ;
    static get PearlescentFroglight() { return BlockTypes.get("minecraft:pearlescent_froglight"); }
    ;
    static get PinkCandle() { return BlockTypes.get("minecraft:pink_candle"); }
    ;
    static get PinkCandleCake() { return BlockTypes.get("minecraft:pink_candle_cake"); }
    ;
    static get PinkCarpet() { return BlockTypes.get("minecraft:pink_carpet"); }
    ;
    static get PinkConcrete() { return BlockTypes.get("minecraft:pink_concrete"); }
    ;
    static get PinkConcretePowder() { return BlockTypes.get("minecraft:pink_concrete_powder"); }
    ;
    static get PinkGlazedTerracotta() { return BlockTypes.get("minecraft:pink_glazed_terracotta"); }
    ;
    static get PinkPetals() { return BlockTypes.get("minecraft:pink_petals"); }
    ;
    static get PinkShulkerBox() { return BlockTypes.get("minecraft:pink_shulker_box"); }
    ;
    static get PinkStainedGlass() { return BlockTypes.get("minecraft:pink_stained_glass"); }
    ;
    static get PinkStainedGlassPane() { return BlockTypes.get("minecraft:pink_stained_glass_pane"); }
    ;
    static get PinkTerracotta() { return BlockTypes.get("minecraft:pink_terracotta"); }
    ;
    static get PinkWool() { return BlockTypes.get("minecraft:pink_wool"); }
    ;
    static get Piston() { return BlockTypes.get("minecraft:piston"); }
    ;
    static get PistonArmCollision() { return BlockTypes.get("minecraft:piston_arm_collision"); }
    ;
    static get PitcherCrop() { return BlockTypes.get("minecraft:pitcher_crop"); }
    ;
    static get PitcherPlant() { return BlockTypes.get("minecraft:pitcher_plant"); }
    ;
    static get Planks() { return BlockTypes.get("minecraft:planks"); }
    ;
    static get Podzol() { return BlockTypes.get("minecraft:podzol"); }
    ;
    static get PointedDripstone() { return BlockTypes.get("minecraft:pointed_dripstone"); }
    ;
    static get PolishedAndesiteStairs() { return BlockTypes.get("minecraft:polished_andesite_stairs"); }
    ;
    static get PolishedBasalt() { return BlockTypes.get("minecraft:polished_basalt"); }
    ;
    static get PolishedBlackstone() { return BlockTypes.get("minecraft:polished_blackstone"); }
    ;
    static get PolishedBlackstoneBrickDoubleSlab() { return BlockTypes.get("minecraft:polished_blackstone_brick_double_slab"); }
    ;
    static get PolishedBlackstoneBrickSlab() { return BlockTypes.get("minecraft:polished_blackstone_brick_slab"); }
    ;
    static get PolishedBlackstoneBrickStairs() { return BlockTypes.get("minecraft:polished_blackstone_brick_stairs"); }
    ;
    static get PolishedBlackstoneBrickWall() { return BlockTypes.get("minecraft:polished_blackstone_brick_wall"); }
    ;
    static get PolishedBlackstoneBricks() { return BlockTypes.get("minecraft:polished_blackstone_bricks"); }
    ;
    static get PolishedBlackstoneButton() { return BlockTypes.get("minecraft:polished_blackstone_button"); }
    ;
    static get PolishedBlackstoneDoubleSlab() { return BlockTypes.get("minecraft:polished_blackstone_double_slab"); }
    ;
    static get PolishedBlackstonePressurePlate() { return BlockTypes.get("minecraft:polished_blackstone_pressure_plate"); }
    ;
    static get PolishedBlackstoneSlab() { return BlockTypes.get("minecraft:polished_blackstone_slab"); }
    ;
    static get PolishedBlackstoneStairs() { return BlockTypes.get("minecraft:polished_blackstone_stairs"); }
    ;
    static get PolishedBlackstoneWall() { return BlockTypes.get("minecraft:polished_blackstone_wall"); }
    ;
    static get PolishedDeepslate() { return BlockTypes.get("minecraft:polished_deepslate"); }
    ;
    static get PolishedDeepslateDoubleSlab() { return BlockTypes.get("minecraft:polished_deepslate_double_slab"); }
    ;
    static get PolishedDeepslateSlab() { return BlockTypes.get("minecraft:polished_deepslate_slab"); }
    ;
    static get PolishedDeepslateStairs() { return BlockTypes.get("minecraft:polished_deepslate_stairs"); }
    ;
    static get PolishedDeepslateWall() { return BlockTypes.get("minecraft:polished_deepslate_wall"); }
    ;
    static get PolishedDioriteStairs() { return BlockTypes.get("minecraft:polished_diorite_stairs"); }
    ;
    static get PolishedGraniteStairs() { return BlockTypes.get("minecraft:polished_granite_stairs"); }
    ;
    static get Portal() { return BlockTypes.get("minecraft:portal"); }
    ;
    static get Potatoes() { return BlockTypes.get("minecraft:potatoes"); }
    ;
    static get PowderSnow() { return BlockTypes.get("minecraft:powder_snow"); }
    ;
    static get PoweredComparator() { return BlockTypes.get("minecraft:powered_comparator"); }
    ;
    static get PoweredRepeater() { return BlockTypes.get("minecraft:powered_repeater"); }
    ;
    static get Prismarine() { return BlockTypes.get("minecraft:prismarine"); }
    ;
    static get PrismarineBricksStairs() { return BlockTypes.get("minecraft:prismarine_bricks_stairs"); }
    ;
    static get PrismarineStairs() { return BlockTypes.get("minecraft:prismarine_stairs"); }
    ;
    static get Pumpkin() { return BlockTypes.get("minecraft:pumpkin"); }
    ;
    static get PumpkinStem() { return BlockTypes.get("minecraft:pumpkin_stem"); }
    ;
    static get PurpleCandle() { return BlockTypes.get("minecraft:purple_candle"); }
    ;
    static get PurpleCandleCake() { return BlockTypes.get("minecraft:purple_candle_cake"); }
    ;
    static get PurpleCarpet() { return BlockTypes.get("minecraft:purple_carpet"); }
    ;
    static get PurpleConcrete() { return BlockTypes.get("minecraft:purple_concrete"); }
    ;
    static get PurpleConcretePowder() { return BlockTypes.get("minecraft:purple_concrete_powder"); }
    ;
    static get PurpleGlazedTerracotta() { return BlockTypes.get("minecraft:purple_glazed_terracotta"); }
    ;
    static get PurpleShulkerBox() { return BlockTypes.get("minecraft:purple_shulker_box"); }
    ;
    static get PurpleStainedGlass() { return BlockTypes.get("minecraft:purple_stained_glass"); }
    ;
    static get PurpleStainedGlassPane() { return BlockTypes.get("minecraft:purple_stained_glass_pane"); }
    ;
    static get PurpleTerracotta() { return BlockTypes.get("minecraft:purple_terracotta"); }
    ;
    static get PurpleWool() { return BlockTypes.get("minecraft:purple_wool"); }
    ;
    static get PurpurBlock() { return BlockTypes.get("minecraft:purpur_block"); }
    ;
    static get PurpurStairs() { return BlockTypes.get("minecraft:purpur_stairs"); }
    ;
    static get QuartzBlock() { return BlockTypes.get("minecraft:quartz_block"); }
    ;
    static get QuartzBricks() { return BlockTypes.get("minecraft:quartz_bricks"); }
    ;
    static get QuartzOre() { return BlockTypes.get("minecraft:quartz_ore"); }
    ;
    static get QuartzStairs() { return BlockTypes.get("minecraft:quartz_stairs"); }
    ;
    static get Rail() { return BlockTypes.get("minecraft:rail"); }
    ;
    static get RawCopperBlock() { return BlockTypes.get("minecraft:raw_copper_block"); }
    ;
    static get RawGoldBlock() { return BlockTypes.get("minecraft:raw_gold_block"); }
    ;
    static get RawIronBlock() { return BlockTypes.get("minecraft:raw_iron_block"); }
    ;
    static get RedCandle() { return BlockTypes.get("minecraft:red_candle"); }
    ;
    static get RedCandleCake() { return BlockTypes.get("minecraft:red_candle_cake"); }
    ;
    static get RedCarpet() { return BlockTypes.get("minecraft:red_carpet"); }
    ;
    static get RedConcrete() { return BlockTypes.get("minecraft:red_concrete"); }
    ;
    static get RedConcretePowder() { return BlockTypes.get("minecraft:red_concrete_powder"); }
    ;
    static get RedFlower() { return BlockTypes.get("minecraft:red_flower"); }
    ;
    static get RedGlazedTerracotta() { return BlockTypes.get("minecraft:red_glazed_terracotta"); }
    ;
    static get RedMushroom() { return BlockTypes.get("minecraft:red_mushroom"); }
    ;
    static get RedMushroomBlock() { return BlockTypes.get("minecraft:red_mushroom_block"); }
    ;
    static get RedNetherBrick() { return BlockTypes.get("minecraft:red_nether_brick"); }
    ;
    static get RedNetherBrickStairs() { return BlockTypes.get("minecraft:red_nether_brick_stairs"); }
    ;
    static get RedSandstone() { return BlockTypes.get("minecraft:red_sandstone"); }
    ;
    static get RedSandstoneStairs() { return BlockTypes.get("minecraft:red_sandstone_stairs"); }
    ;
    static get RedShulkerBox() { return BlockTypes.get("minecraft:red_shulker_box"); }
    ;
    static get RedStainedGlass() { return BlockTypes.get("minecraft:red_stained_glass"); }
    ;
    static get RedStainedGlassPane() { return BlockTypes.get("minecraft:red_stained_glass_pane"); }
    ;
    static get RedTerracotta() { return BlockTypes.get("minecraft:red_terracotta"); }
    ;
    static get RedWool() { return BlockTypes.get("minecraft:red_wool"); }
    ;
    static get RedstoneBlock() { return BlockTypes.get("minecraft:redstone_block"); }
    ;
    static get RedstoneLamp() { return BlockTypes.get("minecraft:redstone_lamp"); }
    ;
    static get RedstoneOre() { return BlockTypes.get("minecraft:redstone_ore"); }
    ;
    static get RedstoneTorch() { return BlockTypes.get("minecraft:redstone_torch"); }
    ;
    static get RedstoneWire() { return BlockTypes.get("minecraft:redstone_wire"); }
    ;
    static get Reeds() { return BlockTypes.get("minecraft:reeds"); }
    ;
    static get ReinforcedDeepslate() { return BlockTypes.get("minecraft:reinforced_deepslate"); }
    ;
    static get RepeatingCommandBlock() { return BlockTypes.get("minecraft:repeating_command_block"); }
    ;
    static get Reserved6() { return BlockTypes.get("minecraft:reserved6"); }
    ;
    static get RespawnAnchor() { return BlockTypes.get("minecraft:respawn_anchor"); }
    ;
    static get Sand() { return BlockTypes.get("minecraft:sand"); }
    ;
    static get Sandstone() { return BlockTypes.get("minecraft:sandstone"); }
    ;
    static get SandstoneStairs() { return BlockTypes.get("minecraft:sandstone_stairs"); }
    ;
    static get Sapling() { return BlockTypes.get("minecraft:sapling"); }
    ;
    static get Scaffolding() { return BlockTypes.get("minecraft:scaffolding"); }
    ;
    static get Sculk() { return BlockTypes.get("minecraft:sculk"); }
    ;
    static get SculkCatalyst() { return BlockTypes.get("minecraft:sculk_catalyst"); }
    ;
    static get SculkSensor() { return BlockTypes.get("minecraft:sculk_sensor"); }
    ;
    static get SculkShrieker() { return BlockTypes.get("minecraft:sculk_shrieker"); }
    ;
    static get SculkVein() { return BlockTypes.get("minecraft:sculk_vein"); }
    ;
    static get SeaLantern() { return BlockTypes.get("minecraft:sea_lantern"); }
    ;
    static get SeaPickle() { return BlockTypes.get("minecraft:sea_pickle"); }
    ;
    static get Seagrass() { return BlockTypes.get("minecraft:seagrass"); }
    ;
    static get Shroomlight() { return BlockTypes.get("minecraft:shroomlight"); }
    ;
    static get SilverGlazedTerracotta() { return BlockTypes.get("minecraft:silver_glazed_terracotta"); }
    ;
    static get Skull() { return BlockTypes.get("minecraft:skull"); }
    ;
    static get Slime() { return BlockTypes.get("minecraft:slime"); }
    ;
    static get SmallAmethystBud() { return BlockTypes.get("minecraft:small_amethyst_bud"); }
    ;
    static get SmallDripleafBlock() { return BlockTypes.get("minecraft:small_dripleaf_block"); }
    ;
    static get SmithingTable() { return BlockTypes.get("minecraft:smithing_table"); }
    ;
    static get Smoker() { return BlockTypes.get("minecraft:smoker"); }
    ;
    static get SmoothBasalt() { return BlockTypes.get("minecraft:smooth_basalt"); }
    ;
    static get SmoothQuartzStairs() { return BlockTypes.get("minecraft:smooth_quartz_stairs"); }
    ;
    static get SmoothRedSandstoneStairs() { return BlockTypes.get("minecraft:smooth_red_sandstone_stairs"); }
    ;
    static get SmoothSandstoneStairs() { return BlockTypes.get("minecraft:smooth_sandstone_stairs"); }
    ;
    static get SmoothStone() { return BlockTypes.get("minecraft:smooth_stone"); }
    ;
    static get SnifferEgg() { return BlockTypes.get("minecraft:sniffer_egg"); }
    ;
    static get Snow() { return BlockTypes.get("minecraft:snow"); }
    ;
    static get SnowLayer() { return BlockTypes.get("minecraft:snow_layer"); }
    ;
    static get SoulCampfire() { return BlockTypes.get("minecraft:soul_campfire"); }
    ;
    static get SoulFire() { return BlockTypes.get("minecraft:soul_fire"); }
    ;
    static get SoulLantern() { return BlockTypes.get("minecraft:soul_lantern"); }
    ;
    static get SoulSand() { return BlockTypes.get("minecraft:soul_sand"); }
    ;
    static get SoulSoil() { return BlockTypes.get("minecraft:soul_soil"); }
    ;
    static get SoulTorch() { return BlockTypes.get("minecraft:soul_torch"); }
    ;
    static get Sponge() { return BlockTypes.get("minecraft:sponge"); }
    ;
    static get SporeBlossom() { return BlockTypes.get("minecraft:spore_blossom"); }
    ;
    static get SpruceButton() { return BlockTypes.get("minecraft:spruce_button"); }
    ;
    static get SpruceDoor() { return BlockTypes.get("minecraft:spruce_door"); }
    ;
    static get SpruceFence() { return BlockTypes.get("minecraft:spruce_fence"); }
    ;
    static get SpruceFenceGate() { return BlockTypes.get("minecraft:spruce_fence_gate"); }
    ;
    static get SpruceHangingSign() { return BlockTypes.get("minecraft:spruce_hanging_sign"); }
    ;
    static get SpruceLog() { return BlockTypes.get("minecraft:spruce_log"); }
    ;
    static get SprucePressurePlate() { return BlockTypes.get("minecraft:spruce_pressure_plate"); }
    ;
    static get SpruceStairs() { return BlockTypes.get("minecraft:spruce_stairs"); }
    ;
    static get SpruceStandingSign() { return BlockTypes.get("minecraft:spruce_standing_sign"); }
    ;
    static get SpruceTrapdoor() { return BlockTypes.get("minecraft:spruce_trapdoor"); }
    ;
    static get SpruceWallSign() { return BlockTypes.get("minecraft:spruce_wall_sign"); }
    ;
    static get StandingBanner() { return BlockTypes.get("minecraft:standing_banner"); }
    ;
    static get StandingSign() { return BlockTypes.get("minecraft:standing_sign"); }
    ;
    static get StickyPiston() { return BlockTypes.get("minecraft:sticky_piston"); }
    ;
    static get StickyPistonArmCollision() { return BlockTypes.get("minecraft:sticky_piston_arm_collision"); }
    ;
    static get Stone() { return BlockTypes.get("minecraft:stone"); }
    ;
    static get StoneBlockSlab() { return BlockTypes.get("minecraft:stone_block_slab"); }
    ;
    static get StoneBlockSlab2() { return BlockTypes.get("minecraft:stone_block_slab2"); }
    ;
    static get StoneBlockSlab3() { return BlockTypes.get("minecraft:stone_block_slab3"); }
    ;
    static get StoneBlockSlab4() { return BlockTypes.get("minecraft:stone_block_slab4"); }
    ;
    static get StoneBrickStairs() { return BlockTypes.get("minecraft:stone_brick_stairs"); }
    ;
    static get StoneButton() { return BlockTypes.get("minecraft:stone_button"); }
    ;
    static get StonePressurePlate() { return BlockTypes.get("minecraft:stone_pressure_plate"); }
    ;
    static get StoneStairs() { return BlockTypes.get("minecraft:stone_stairs"); }
    ;
    static get Stonebrick() { return BlockTypes.get("minecraft:stonebrick"); }
    ;
    static get Stonecutter() { return BlockTypes.get("minecraft:stonecutter"); }
    ;
    static get StonecutterBlock() { return BlockTypes.get("minecraft:stonecutter_block"); }
    ;
    static get StrippedAcaciaLog() { return BlockTypes.get("minecraft:stripped_acacia_log"); }
    ;
    static get StrippedBambooBlock() { return BlockTypes.get("minecraft:stripped_bamboo_block"); }
    ;
    static get StrippedBirchLog() { return BlockTypes.get("minecraft:stripped_birch_log"); }
    ;
    static get StrippedCherryLog() { return BlockTypes.get("minecraft:stripped_cherry_log"); }
    ;
    static get StrippedCherryWood() { return BlockTypes.get("minecraft:stripped_cherry_wood"); }
    ;
    static get StrippedCrimsonHyphae() { return BlockTypes.get("minecraft:stripped_crimson_hyphae"); }
    ;
    static get StrippedCrimsonStem() { return BlockTypes.get("minecraft:stripped_crimson_stem"); }
    ;
    static get StrippedDarkOakLog() { return BlockTypes.get("minecraft:stripped_dark_oak_log"); }
    ;
    static get StrippedJungleLog() { return BlockTypes.get("minecraft:stripped_jungle_log"); }
    ;
    static get StrippedMangroveLog() { return BlockTypes.get("minecraft:stripped_mangrove_log"); }
    ;
    static get StrippedMangroveWood() { return BlockTypes.get("minecraft:stripped_mangrove_wood"); }
    ;
    static get StrippedOakLog() { return BlockTypes.get("minecraft:stripped_oak_log"); }
    ;
    static get StrippedSpruceLog() { return BlockTypes.get("minecraft:stripped_spruce_log"); }
    ;
    static get StrippedWarpedHyphae() { return BlockTypes.get("minecraft:stripped_warped_hyphae"); }
    ;
    static get StrippedWarpedStem() { return BlockTypes.get("minecraft:stripped_warped_stem"); }
    ;
    static get StructureBlock() { return BlockTypes.get("minecraft:structure_block"); }
    ;
    static get StructureVoid() { return BlockTypes.get("minecraft:structure_void"); }
    ;
    static get SuspiciousGravel() { return BlockTypes.get("minecraft:suspicious_gravel"); }
    ;
    static get SuspiciousSand() { return BlockTypes.get("minecraft:suspicious_sand"); }
    ;
    static get SweetBerryBush() { return BlockTypes.get("minecraft:sweet_berry_bush"); }
    ;
    static get Tallgrass() { return BlockTypes.get("minecraft:tallgrass"); }
    ;
    static get Target() { return BlockTypes.get("minecraft:target"); }
    ;
    static get TintedGlass() { return BlockTypes.get("minecraft:tinted_glass"); }
    ;
    static get Tnt() { return BlockTypes.get("minecraft:tnt"); }
    ;
    static get Torch() { return BlockTypes.get("minecraft:torch"); }
    ;
    static get Torchflower() { return BlockTypes.get("minecraft:torchflower"); }
    ;
    static get TorchflowerCrop() { return BlockTypes.get("minecraft:torchflower_crop"); }
    ;
    static get Trapdoor() { return BlockTypes.get("minecraft:trapdoor"); }
    ;
    static get TrappedChest() { return BlockTypes.get("minecraft:trapped_chest"); }
    ;
    static get TripWire() { return BlockTypes.get("minecraft:trip_wire"); }
    ;
    static get TripwireHook() { return BlockTypes.get("minecraft:tripwire_hook"); }
    ;
    static get TubeCoral() { return BlockTypes.get("minecraft:tube_coral"); }
    ;
    static get Tuff() { return BlockTypes.get("minecraft:tuff"); }
    ;
    static get TurtleEgg() { return BlockTypes.get("minecraft:turtle_egg"); }
    ;
    static get TwistingVines() { return BlockTypes.get("minecraft:twisting_vines"); }
    ;
    static get UnderwaterTorch() { return BlockTypes.get("minecraft:underwater_torch"); }
    ;
    static get UndyedShulkerBox() { return BlockTypes.get("minecraft:undyed_shulker_box"); }
    ;
    static get Unknown() { return BlockTypes.get("minecraft:unknown"); }
    ;
    static get UnlitRedstoneTorch() { return BlockTypes.get("minecraft:unlit_redstone_torch"); }
    ;
    static get UnpoweredComparator() { return BlockTypes.get("minecraft:unpowered_comparator"); }
    ;
    static get UnpoweredRepeater() { return BlockTypes.get("minecraft:unpowered_repeater"); }
    ;
    static get VerdantFroglight() { return BlockTypes.get("minecraft:verdant_froglight"); }
    ;
    static get Vine() { return BlockTypes.get("minecraft:vine"); }
    ;
    static get WallBanner() { return BlockTypes.get("minecraft:wall_banner"); }
    ;
    static get WallSign() { return BlockTypes.get("minecraft:wall_sign"); }
    ;
    static get WarpedButton() { return BlockTypes.get("minecraft:warped_button"); }
    ;
    static get WarpedDoor() { return BlockTypes.get("minecraft:warped_door"); }
    ;
    static get WarpedDoubleSlab() { return BlockTypes.get("minecraft:warped_double_slab"); }
    ;
    static get WarpedFence() { return BlockTypes.get("minecraft:warped_fence"); }
    ;
    static get WarpedFenceGate() { return BlockTypes.get("minecraft:warped_fence_gate"); }
    ;
    static get WarpedFungus() { return BlockTypes.get("minecraft:warped_fungus"); }
    ;
    static get WarpedHangingSign() { return BlockTypes.get("minecraft:warped_hanging_sign"); }
    ;
    static get WarpedHyphae() { return BlockTypes.get("minecraft:warped_hyphae"); }
    ;
    static get WarpedNylium() { return BlockTypes.get("minecraft:warped_nylium"); }
    ;
    static get WarpedPlanks() { return BlockTypes.get("minecraft:warped_planks"); }
    ;
    static get WarpedPressurePlate() { return BlockTypes.get("minecraft:warped_pressure_plate"); }
    ;
    static get WarpedRoots() { return BlockTypes.get("minecraft:warped_roots"); }
    ;
    static get WarpedSlab() { return BlockTypes.get("minecraft:warped_slab"); }
    ;
    static get WarpedStairs() { return BlockTypes.get("minecraft:warped_stairs"); }
    ;
    static get WarpedStandingSign() { return BlockTypes.get("minecraft:warped_standing_sign"); }
    ;
    static get WarpedStem() { return BlockTypes.get("minecraft:warped_stem"); }
    ;
    static get WarpedTrapdoor() { return BlockTypes.get("minecraft:warped_trapdoor"); }
    ;
    static get WarpedWallSign() { return BlockTypes.get("minecraft:warped_wall_sign"); }
    ;
    static get WarpedWartBlock() { return BlockTypes.get("minecraft:warped_wart_block"); }
    ;
    static get Water() { return BlockTypes.get("minecraft:water"); }
    ;
    static get Waterlily() { return BlockTypes.get("minecraft:waterlily"); }
    ;
    static get WaxedCopper() { return BlockTypes.get("minecraft:waxed_copper"); }
    ;
    static get WaxedCutCopper() { return BlockTypes.get("minecraft:waxed_cut_copper"); }
    ;
    static get WaxedCutCopperSlab() { return BlockTypes.get("minecraft:waxed_cut_copper_slab"); }
    ;
    static get WaxedCutCopperStairs() { return BlockTypes.get("minecraft:waxed_cut_copper_stairs"); }
    ;
    static get WaxedDoubleCutCopperSlab() { return BlockTypes.get("minecraft:waxed_double_cut_copper_slab"); }
    ;
    static get WaxedExposedCopper() { return BlockTypes.get("minecraft:waxed_exposed_copper"); }
    ;
    static get WaxedExposedCutCopper() { return BlockTypes.get("minecraft:waxed_exposed_cut_copper"); }
    ;
    static get WaxedExposedCutCopperSlab() { return BlockTypes.get("minecraft:waxed_exposed_cut_copper_slab"); }
    ;
    static get WaxedExposedCutCopperStairs() { return BlockTypes.get("minecraft:waxed_exposed_cut_copper_stairs"); }
    ;
    static get WaxedExposedDoubleCutCopperSlab() { return BlockTypes.get("minecraft:waxed_exposed_double_cut_copper_slab"); }
    ;
    static get WaxedOxidizedCopper() { return BlockTypes.get("minecraft:waxed_oxidized_copper"); }
    ;
    static get WaxedOxidizedCutCopper() { return BlockTypes.get("minecraft:waxed_oxidized_cut_copper"); }
    ;
    static get WaxedOxidizedCutCopperSlab() { return BlockTypes.get("minecraft:waxed_oxidized_cut_copper_slab"); }
    ;
    static get WaxedOxidizedCutCopperStairs() { return BlockTypes.get("minecraft:waxed_oxidized_cut_copper_stairs"); }
    ;
    static get WaxedOxidizedDoubleCutCopperSlab() { return BlockTypes.get("minecraft:waxed_oxidized_double_cut_copper_slab"); }
    ;
    static get WaxedWeatheredCopper() { return BlockTypes.get("minecraft:waxed_weathered_copper"); }
    ;
    static get WaxedWeatheredCutCopper() { return BlockTypes.get("minecraft:waxed_weathered_cut_copper"); }
    ;
    static get WaxedWeatheredCutCopperSlab() { return BlockTypes.get("minecraft:waxed_weathered_cut_copper_slab"); }
    ;
    static get WaxedWeatheredCutCopperStairs() { return BlockTypes.get("minecraft:waxed_weathered_cut_copper_stairs"); }
    ;
    static get WaxedWeatheredDoubleCutCopperSlab() { return BlockTypes.get("minecraft:waxed_weathered_double_cut_copper_slab"); }
    ;
    static get WeatheredCopper() { return BlockTypes.get("minecraft:weathered_copper"); }
    ;
    static get WeatheredCutCopper() { return BlockTypes.get("minecraft:weathered_cut_copper"); }
    ;
    static get WeatheredCutCopperSlab() { return BlockTypes.get("minecraft:weathered_cut_copper_slab"); }
    ;
    static get WeatheredCutCopperStairs() { return BlockTypes.get("minecraft:weathered_cut_copper_stairs"); }
    ;
    static get WeatheredDoubleCutCopperSlab() { return BlockTypes.get("minecraft:weathered_double_cut_copper_slab"); }
    ;
    static get Web() { return BlockTypes.get("minecraft:web"); }
    ;
    static get WeepingVines() { return BlockTypes.get("minecraft:weeping_vines"); }
    ;
    static get Wheat() { return BlockTypes.get("minecraft:wheat"); }
    ;
    static get WhiteCandle() { return BlockTypes.get("minecraft:white_candle"); }
    ;
    static get WhiteCandleCake() { return BlockTypes.get("minecraft:white_candle_cake"); }
    ;
    static get WhiteCarpet() { return BlockTypes.get("minecraft:white_carpet"); }
    ;
    static get WhiteConcrete() { return BlockTypes.get("minecraft:white_concrete"); }
    ;
    static get WhiteConcretePowder() { return BlockTypes.get("minecraft:white_concrete_powder"); }
    ;
    static get WhiteGlazedTerracotta() { return BlockTypes.get("minecraft:white_glazed_terracotta"); }
    ;
    static get WhiteShulkerBox() { return BlockTypes.get("minecraft:white_shulker_box"); }
    ;
    static get WhiteStainedGlass() { return BlockTypes.get("minecraft:white_stained_glass"); }
    ;
    static get WhiteStainedGlassPane() { return BlockTypes.get("minecraft:white_stained_glass_pane"); }
    ;
    static get WhiteTerracotta() { return BlockTypes.get("minecraft:white_terracotta"); }
    ;
    static get WhiteWool() { return BlockTypes.get("minecraft:white_wool"); }
    ;
    static get WitherRose() { return BlockTypes.get("minecraft:wither_rose"); }
    ;
    static get Wood() { return BlockTypes.get("minecraft:wood"); }
    ;
    static get WoodenButton() { return BlockTypes.get("minecraft:wooden_button"); }
    ;
    static get WoodenDoor() { return BlockTypes.get("minecraft:wooden_door"); }
    ;
    static get WoodenPressurePlate() { return BlockTypes.get("minecraft:wooden_pressure_plate"); }
    ;
    static get WoodenSlab() { return BlockTypes.get("minecraft:wooden_slab"); }
    ;
    static get YellowCandle() { return BlockTypes.get("minecraft:yellow_candle"); }
    ;
    static get YellowCandleCake() { return BlockTypes.get("minecraft:yellow_candle_cake"); }
    ;
    static get YellowCarpet() { return BlockTypes.get("minecraft:yellow_carpet"); }
    ;
    static get YellowConcrete() { return BlockTypes.get("minecraft:yellow_concrete"); }
    ;
    static get YellowConcretePowder() { return BlockTypes.get("minecraft:yellow_concrete_powder"); }
    ;
    static get YellowFlower() { return BlockTypes.get("minecraft:yellow_flower"); }
    ;
    static get YellowGlazedTerracotta() { return BlockTypes.get("minecraft:yellow_glazed_terracotta"); }
    ;
    static get YellowShulkerBox() { return BlockTypes.get("minecraft:yellow_shulker_box"); }
    ;
    static get YellowStainedGlass() { return BlockTypes.get("minecraft:yellow_stained_glass"); }
    ;
    static get YellowStainedGlassPane() { return BlockTypes.get("minecraft:yellow_stained_glass_pane"); }
    ;
    static get YellowTerracotta() { return BlockTypes.get("minecraft:yellow_terracotta"); }
    ;
    static get YellowWool() { return BlockTypes.get("minecraft:yellow_wool"); }
    ;
}
