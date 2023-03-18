export declare enum AllowListAction {
    add = "add",
    remove = "remove",
    list = "list",
    reload = "reload",
    on = "on",
    off = "off"
}
export declare enum CameraShakeActionAdd {
    add = "add"
}
export declare enum CameraShakeType {
    positional = "positional",
    rotational = "rotational"
}
export declare enum CameraShakeActionStop {
    stop = "stop"
}
export declare enum BoolSettingName {
    "allow-cheats" = "allow-cheats"
}
export declare enum Boolean {
    "true" = "true",
    "false" = "false"
}
export declare enum DifficultySettingName {
    difficulty = "difficulty"
}
export declare enum Difficulty {
    normal = "normal",
    peaceful = "peaceful",
    easy = "easy",
    hard = "hard",
    p = "p",
    e = "e",
    n = "n",
    h = "h"
}
export declare enum MaskMode {
    replace = "replace",
    masked = "masked"
}
export declare enum CloneMode {
    normal = "normal",
    force = "force",
    move = "move"
}
export declare enum MaskModeFiltered {
    filtered = "filtered"
}
export declare enum DamageCause {
    piston = "piston",
    lava = "lava",
    fire = "fire",
    anvil = "anvil",
    magma = "magma",
    wither = "wither",
    falling_block = "falling_block",
    fireworks = "fireworks",
    thorns = "thorns",
    none = "none",
    contact = "contact",
    override = "override",
    entity_attack = "entity_attack",
    projectile = "projectile",
    suffocation = "suffocation",
    fall = "fall",
    starve = "starve",
    fire_tick = "fire_tick",
    stalactite = "stalactite",
    drowning = "drowning",
    block_explosion = "block_explosion",
    entity_explosion = "entity_explosion",
    "void" = "void",
    suicide = "suicide",
    magic = "magic",
    charging = "charging",
    stalagmite = "stalagmite",
    fly_into_wall = "fly_into_wall",
    lightning = "lightning",
    freezing = "freezing",
    temperature = "temperature"
}
export declare enum DamageOriginActor {
    entity = "entity"
}
export declare enum DialogueOpenAction {
    open = "open"
}
export declare enum DialogueChangeAction {
    change = "change"
}
export declare enum ClearEffects {
    clear = "clear"
}
export declare enum Effect {
    wither = "wither",
    speed = "speed",
    slowness = "slowness",
    haste = "haste",
    mining_fatigue = "mining_fatigue",
    strength = "strength",
    instant_health = "instant_health",
    instant_damage = "instant_damage",
    jump_boost = "jump_boost",
    nausea = "nausea",
    regeneration = "regeneration",
    resistance = "resistance",
    fire_resistance = "fire_resistance",
    water_breathing = "water_breathing",
    invisibility = "invisibility",
    blindness = "blindness",
    night_vision = "night_vision",
    hunger = "hunger",
    weakness = "weakness",
    poison = "poison",
    health_boost = "health_boost",
    absorption = "absorption",
    saturation = "saturation",
    levitation = "levitation",
    fatal_poison = "fatal_poison",
    conduit_power = "conduit_power",
    slow_falling = "slow_falling",
    bad_omen = "bad_omen",
    village_hero = "village_hero",
    darkness = "darkness"
}
export declare enum Enchant {
    protection = "protection",
    fire_protection = "fire_protection",
    feather_falling = "feather_falling",
    blast_protection = "blast_protection",
    projectile_protection = "projectile_protection",
    thorns = "thorns",
    respiration = "respiration",
    depth_strider = "depth_strider",
    aqua_affinity = "aqua_affinity",
    sharpness = "sharpness",
    smite = "smite",
    bane_of_arthropods = "bane_of_arthropods",
    knockback = "knockback",
    fire_aspect = "fire_aspect",
    looting = "looting",
    efficiency = "efficiency",
    silk_touch = "silk_touch",
    unbreaking = "unbreaking",
    fortune = "fortune",
    power = "power",
    punch = "punch",
    flame = "flame",
    infinity = "infinity",
    luck_of_the_sea = "luck_of_the_sea",
    lure = "lure",
    frost_walker = "frost_walker",
    mending = "mending",
    binding = "binding",
    vanishing = "vanishing",
    impaling = "impaling",
    riptide = "riptide",
    loyalty = "loyalty",
    channeling = "channeling",
    multishot = "multishot",
    piercing = "piercing",
    quick_charge = "quick_charge",
    soul_speed = "soul_speed",
    swift_sneak = "swift_sneak"
}
export declare enum EventEntityAction {
    entity = "entity"
}
export declare enum EntityEvents {
    abort_sheltering = "abort_sheltering",
    admire_item_started_event = "admire_item_started_event",
    admire_item_stopped_event = "admire_item_stopped_event",
    ageable_grow_up = "ageable_grow_up",
    attack_cooldown_complete_event = "attack_cooldown_complete_event",
    attacked = "attacked",
    become_angry = "become_angry",
    become_angry_event = "become_angry_event",
    become_calm_event = "become_calm_event",
    become_cow = "become_cow",
    become_pregnant = "become_pregnant",
    become_stray_event = "become_stray_event",
    become_witch = "become_witch",
    become_zombie = "become_zombie",
    become_zombie_event = "become_zombie_event",
    calmed_down = "calmed_down",
    change_to_skeleton = "change_to_skeleton",
    collected_nectar = "collected_nectar",
    countdown_to_perish_event = "countdown_to_perish_event",
    dried_out = "dried_out",
    enter_water = "enter_water",
    escaped_event = "escaped_event",
    find_flower_timeout = "find_flower_timeout",
    find_hive_event = "find_hive_event",
    find_hive_timeout = "find_hive_timeout",
    from_egg = "from_egg",
    from_explosion = "from_explosion",
    from_village = "from_village",
    go_back_to_spawn_failed = "go_back_to_spawn_failed",
    got_in_powder_snow = "got_in_powder_snow",
    got_out_of_powder_snow = "got_out_of_powder_snow",
    grow_up = "grow_up",
    hive_destroyed = "hive_destroyed",
    important_block_destroyed_event = "important_block_destroyed_event",
    in_desert = "in_desert",
    in_snow = "in_snow",
    killed_enemy_event = "killed_enemy_event",
    laid_egg = "laid_egg",
    "minecraft:add_attributes" = "minecraft:add_attributes",
    "minecraft:add_biome_and_skin" = "minecraft:add_biome_and_skin",
    "minecraft:ageable_grow_up" = "minecraft:ageable_grow_up",
    "minecraft:ageable_set_baby" = "minecraft:ageable_set_baby",
    "minecraft:ambient_night" = "minecraft:ambient_night",
    "minecraft:ambient_normal" = "minecraft:ambient_normal",
    "minecraft:ambient_sleep" = "minecraft:ambient_sleep",
    "minecraft:as_adult" = "minecraft:as_adult",
    "minecraft:as_baby" = "minecraft:as_baby",
    "minecraft:ate_allium" = "minecraft:ate_allium",
    "minecraft:ate_bluet" = "minecraft:ate_bluet",
    "minecraft:ate_cornflower" = "minecraft:ate_cornflower",
    "minecraft:ate_daisy" = "minecraft:ate_daisy",
    "minecraft:ate_dandelion" = "minecraft:ate_dandelion",
    "minecraft:ate_lily" = "minecraft:ate_lily",
    "minecraft:ate_orchid" = "minecraft:ate_orchid",
    "minecraft:ate_poppy" = "minecraft:ate_poppy",
    "minecraft:ate_rose" = "minecraft:ate_rose",
    "minecraft:ate_tulip" = "minecraft:ate_tulip",
    "minecraft:baby_on_calm" = "minecraft:baby_on_calm",
    "minecraft:become_aggressive" = "minecraft:become_aggressive",
    "minecraft:become_aggro" = "minecraft:become_aggro",
    "minecraft:become_anenonme" = "minecraft:become_anenonme",
    "minecraft:become_angry" = "minecraft:become_angry",
    "minecraft:become_armorer" = "minecraft:become_armorer",
    "minecraft:become_black_tang" = "minecraft:become_black_tang",
    "minecraft:become_blue_dory" = "minecraft:become_blue_dory",
    "minecraft:become_brown" = "minecraft:become_brown",
    "minecraft:become_brown_adult" = "minecraft:become_brown_adult",
    "minecraft:become_butcher" = "minecraft:become_butcher",
    "minecraft:become_butterfly_fish" = "minecraft:become_butterfly_fish",
    "minecraft:become_calm" = "minecraft:become_calm",
    "minecraft:become_cartographer" = "minecraft:become_cartographer",
    "minecraft:become_cc_betta" = "minecraft:become_cc_betta",
    "minecraft:become_charged" = "minecraft:become_charged",
    "minecraft:become_cichlid" = "minecraft:become_cichlid",
    "minecraft:become_cleric" = "minecraft:become_cleric",
    "minecraft:become_clownfish" = "minecraft:become_clownfish",
    "minecraft:become_dog_fish" = "minecraft:become_dog_fish",
    "minecraft:become_e_red_snapper" = "minecraft:become_e_red_snapper",
    "minecraft:become_farmer" = "minecraft:become_farmer",
    "minecraft:become_fisherman" = "minecraft:become_fisherman",
    "minecraft:become_fletcher" = "minecraft:become_fletcher",
    "minecraft:become_goat_fish" = "minecraft:become_goat_fish",
    "minecraft:become_hostile" = "minecraft:become_hostile",
    "minecraft:become_leatherworker" = "minecraft:become_leatherworker",
    "minecraft:become_librarian" = "minecraft:become_librarian",
    "minecraft:become_mason" = "minecraft:become_mason",
    "minecraft:become_moorish_idol" = "minecraft:become_moorish_idol",
    "minecraft:become_neutral" = "minecraft:become_neutral",
    "minecraft:become_ornate_butterfly" = "minecraft:become_ornate_butterfly",
    "minecraft:become_parrot_fish" = "minecraft:become_parrot_fish",
    "minecraft:become_pregnant" = "minecraft:become_pregnant",
    "minecraft:become_queen_angel_fish" = "minecraft:become_queen_angel_fish",
    "minecraft:become_red" = "minecraft:become_red",
    "minecraft:become_red_adult" = "minecraft:become_red_adult",
    "minecraft:become_red_cichlid" = "minecraft:become_red_cichlid",
    "minecraft:become_red_lipped_benny" = "minecraft:become_red_lipped_benny",
    "minecraft:become_red_snapper" = "minecraft:become_red_snapper",
    "minecraft:become_scared" = "minecraft:become_scared",
    "minecraft:become_sheperd" = "minecraft:become_sheperd",
    "minecraft:become_stunned" = "minecraft:become_stunned",
    "minecraft:become_threadfin" = "minecraft:become_threadfin",
    "minecraft:become_tomato_clown" = "minecraft:become_tomato_clown",
    "minecraft:become_toolsmith" = "minecraft:become_toolsmith",
    "minecraft:become_triggerfish" = "minecraft:become_triggerfish",
    "minecraft:become_unskilled" = "minecraft:become_unskilled",
    "minecraft:become_weaponsmith" = "minecraft:become_weaponsmith",
    "minecraft:become_yellow_tail_parrot" = "minecraft:become_yellow_tail_parrot",
    "minecraft:become_yellow_tang" = "minecraft:become_yellow_tang",
    "minecraft:born_default" = "minecraft:born_default",
    "minecraft:born_screamer" = "minecraft:born_screamer",
    "minecraft:calm" = "minecraft:calm",
    "minecraft:cat_gifted_owner" = "minecraft:cat_gifted_owner",
    "minecraft:clear_add_bad_omen" = "minecraft:clear_add_bad_omen",
    "minecraft:command_block_activate" = "minecraft:command_block_activate",
    "minecraft:command_block_deactivate" = "minecraft:command_block_deactivate",
    "minecraft:convert_to_drowned" = "minecraft:convert_to_drowned",
    "minecraft:convert_to_zombie" = "minecraft:convert_to_zombie",
    "minecraft:crystal_explode" = "minecraft:crystal_explode",
    "minecraft:defend_wandering_trader" = "minecraft:defend_wandering_trader",
    "minecraft:donkey_saddled" = "minecraft:donkey_saddled",
    "minecraft:donkey_unsaddled" = "minecraft:donkey_unsaddled",
    "minecraft:emerged" = "minecraft:emerged",
    "minecraft:end_roar" = "minecraft:end_roar",
    "minecraft:entered_bubble_column_down" = "minecraft:entered_bubble_column_down",
    "minecraft:entered_bubble_column_up" = "minecraft:entered_bubble_column_up",
    "minecraft:entity_born" = "minecraft:entity_born",
    "minecraft:entity_born_wild" = "minecraft:entity_born_wild",
    "minecraft:entity_spawned" = "minecraft:entity_spawned",
    "minecraft:entity_transformed" = "minecraft:entity_transformed",
    "minecraft:exited_bubble_column" = "minecraft:exited_bubble_column",
    "minecraft:exited_disturbed_hive" = "minecraft:exited_disturbed_hive",
    "minecraft:exited_hive" = "minecraft:exited_hive",
    "minecraft:exited_hive_on_fire" = "minecraft:exited_hive_on_fire",
    "minecraft:explode" = "minecraft:explode",
    "minecraft:flowerless" = "minecraft:flowerless",
    "minecraft:fox_configure_day" = "minecraft:fox_configure_day",
    "minecraft:fox_configure_defending" = "minecraft:fox_configure_defending",
    "minecraft:fox_configure_docile_day" = "minecraft:fox_configure_docile_day",
    "minecraft:fox_configure_docile_night" = "minecraft:fox_configure_docile_night",
    "minecraft:fox_configure_night" = "minecraft:fox_configure_night",
    "minecraft:fox_configure_thunderstorm" = "minecraft:fox_configure_thunderstorm",
    "minecraft:from_full_puff" = "minecraft:from_full_puff",
    "minecraft:from_player" = "minecraft:from_player",
    "minecraft:from_village" = "minecraft:from_village",
    "minecraft:from_wandering_trader" = "minecraft:from_wandering_trader",
    "minecraft:gain_bad_omen" = "minecraft:gain_bad_omen",
    "minecraft:go_lay_egg" = "minecraft:go_lay_egg",
    "minecraft:has_target" = "minecraft:has_target",
    "minecraft:hive_full" = "minecraft:hive_full",
    "minecraft:hopper_activate" = "minecraft:hopper_activate",
    "minecraft:hopper_deactivate" = "minecraft:hopper_deactivate",
    "minecraft:horse_saddled" = "minecraft:horse_saddled",
    "minecraft:horse_unsaddled" = "minecraft:horse_unsaddled",
    "minecraft:join_caravan" = "minecraft:join_caravan",
    "minecraft:laid_egg" = "minecraft:laid_egg",
    "minecraft:leave_caravan" = "minecraft:leave_caravan",
    "minecraft:lost_target" = "minecraft:lost_target",
    "minecraft:mad_at_wolf" = "minecraft:mad_at_wolf",
    "minecraft:make_black" = "minecraft:make_black",
    "minecraft:make_brown" = "minecraft:make_brown",
    "minecraft:make_chestnut" = "minecraft:make_chestnut",
    "minecraft:make_creamy" = "minecraft:make_creamy",
    "minecraft:make_darkbrown" = "minecraft:make_darkbrown",
    "minecraft:make_gray" = "minecraft:make_gray",
    "minecraft:make_white" = "minecraft:make_white",
    "minecraft:melee_mode" = "minecraft:melee_mode",
    "minecraft:mule_saddled" = "minecraft:mule_saddled",
    "minecraft:mule_unsaddled" = "minecraft:mule_unsaddled",
    "minecraft:on_anger" = "minecraft:on_anger",
    "minecraft:on_calm" = "minecraft:on_calm",
    "minecraft:on_chest" = "minecraft:on_chest",
    "minecraft:on_deflate" = "minecraft:on_deflate",
    "minecraft:on_eat_block" = "minecraft:on_eat_block",
    "minecraft:on_full_puff" = "minecraft:on_full_puff",
    "minecraft:on_half_puff" = "minecraft:on_half_puff",
    "minecraft:on_hurt_event" = "minecraft:on_hurt_event",
    "minecraft:on_instant_prime" = "minecraft:on_instant_prime",
    "minecraft:on_leash" = "minecraft:on_leash",
    "minecraft:on_normal_puff" = "minecraft:on_normal_puff",
    "minecraft:on_not_riding_player" = "minecraft:on_not_riding_player",
    "minecraft:on_prime" = "minecraft:on_prime",
    "minecraft:on_riding_player" = "minecraft:on_riding_player",
    "minecraft:on_saddled" = "minecraft:on_saddled",
    "minecraft:on_scared" = "minecraft:on_scared",
    "minecraft:on_sheared" = "minecraft:on_sheared",
    "minecraft:on_tame" = "minecraft:on_tame",
    "minecraft:on_trust" = "minecraft:on_trust",
    "minecraft:on_unleash" = "minecraft:on_unleash",
    "minecraft:panda_aggressive" = "minecraft:panda_aggressive",
    "minecraft:panda_brown" = "minecraft:panda_brown",
    "minecraft:panda_lazy" = "minecraft:panda_lazy",
    "minecraft:panda_playful" = "minecraft:panda_playful",
    "minecraft:panda_weak" = "minecraft:panda_weak",
    "minecraft:panda_worried" = "minecraft:panda_worried",
    "minecraft:pet_slept_with_owner" = "minecraft:pet_slept_with_owner",
    "minecraft:promote_to_illager_captain" = "minecraft:promote_to_illager_captain",
    "minecraft:promote_to_patrol_captain" = "minecraft:promote_to_patrol_captain",
    "minecraft:raid_expired" = "minecraft:raid_expired",
    "minecraft:ranged_mode" = "minecraft:ranged_mode",
    "minecraft:remove_persistence" = "minecraft:remove_persistence",
    "minecraft:remove_raid_trigger" = "minecraft:remove_raid_trigger",
    "minecraft:resupply_trades" = "minecraft:resupply_trades",
    "minecraft:schedule_bed_villager" = "minecraft:schedule_bed_villager",
    "minecraft:schedule_gather_villager" = "minecraft:schedule_gather_villager",
    "minecraft:schedule_home_villager" = "minecraft:schedule_home_villager",
    "minecraft:schedule_play_villager" = "minecraft:schedule_play_villager",
    "minecraft:schedule_wander_villager" = "minecraft:schedule_wander_villager",
    "minecraft:schedule_work_farmer" = "minecraft:schedule_work_farmer",
    "minecraft:schedule_work_fisher" = "minecraft:schedule_work_fisher",
    "minecraft:schedule_work_librarian" = "minecraft:schedule_work_librarian",
    "minecraft:schedule_work_pro_villager" = "minecraft:schedule_work_pro_villager",
    "minecraft:scheduled" = "minecraft:scheduled",
    "minecraft:set_trap" = "minecraft:set_trap",
    "minecraft:sink" = "minecraft:sink",
    "minecraft:spawn_adult" = "minecraft:spawn_adult",
    "minecraft:spawn_armorer" = "minecraft:spawn_armorer",
    "minecraft:spawn_as_illager_captain" = "minecraft:spawn_as_illager_captain",
    "minecraft:spawn_as_patrol_follower" = "minecraft:spawn_as_patrol_follower",
    "minecraft:spawn_as_strider_jockey" = "minecraft:spawn_as_strider_jockey",
    "minecraft:spawn_baby" = "minecraft:spawn_baby",
    "minecraft:spawn_baby_strider_jockey" = "minecraft:spawn_baby_strider_jockey",
    "minecraft:spawn_butcher" = "minecraft:spawn_butcher",
    "minecraft:spawn_cleric" = "minecraft:spawn_cleric",
    "minecraft:spawn_emerging" = "minecraft:spawn_emerging",
    "minecraft:spawn_farmer" = "minecraft:spawn_farmer",
    "minecraft:spawn_for_raid" = "minecraft:spawn_for_raid",
    "minecraft:spawn_for_raid_with_evoker_rider" = "minecraft:spawn_for_raid_with_evoker_rider",
    "minecraft:spawn_for_raid_with_pillager_rider" = "minecraft:spawn_for_raid_with_pillager_rider",
    "minecraft:spawn_from_village" = "minecraft:spawn_from_village",
    "minecraft:spawn_librarian" = "minecraft:spawn_librarian",
    "minecraft:spawn_midnight_cat" = "minecraft:spawn_midnight_cat",
    "minecraft:spawn_skilled_adult" = "minecraft:spawn_skilled_adult",
    "minecraft:spawn_with_pillager_captain_rider" = "minecraft:spawn_with_pillager_captain_rider",
    "minecraft:spawn_with_pillager_rider" = "minecraft:spawn_with_pillager_rider",
    "minecraft:spawn_with_vindicator_captain_rider" = "minecraft:spawn_with_vindicator_captain_rider",
    "minecraft:spawn_with_vindicator_rider" = "minecraft:spawn_with_vindicator_rider",
    "minecraft:spring_trap" = "minecraft:spring_trap",
    "minecraft:start_celebrating" = "minecraft:start_celebrating",
    "minecraft:start_death" = "minecraft:start_death",
    "minecraft:start_despawn" = "minecraft:start_despawn",
    "minecraft:start_exploding" = "minecraft:start_exploding",
    "minecraft:start_exploding_forced" = "minecraft:start_exploding_forced",
    "minecraft:start_fly" = "minecraft:start_fly",
    "minecraft:start_full_puff" = "minecraft:start_full_puff",
    "minecraft:start_half_puff" = "minecraft:start_half_puff",
    "minecraft:start_johnny" = "minecraft:start_johnny",
    "minecraft:start_land" = "minecraft:start_land",
    "minecraft:start_roar" = "minecraft:start_roar",
    "minecraft:start_transforming" = "minecraft:start_transforming",
    "minecraft:stop_aggro" = "minecraft:stop_aggro",
    "minecraft:stop_celebrating" = "minecraft:stop_celebrating",
    "minecraft:stop_exploding" = "minecraft:stop_exploding",
    "minecraft:stop_johnny" = "minecraft:stop_johnny",
    "minecraft:stop_transforming" = "minecraft:stop_transforming",
    "minecraft:switch_to_melee" = "minecraft:switch_to_melee",
    "minecraft:switch_to_ranged" = "minecraft:switch_to_ranged",
    "minecraft:target_far_enough" = "minecraft:target_far_enough",
    "minecraft:target_too_close" = "minecraft:target_too_close",
    "minecraft:to_full_puff" = "minecraft:to_full_puff",
    "minecraft:trigger_raid" = "minecraft:trigger_raid",
    "minecraft:turn_black" = "minecraft:turn_black",
    "minecraft:turn_blue" = "minecraft:turn_blue",
    "minecraft:turn_brown" = "minecraft:turn_brown",
    "minecraft:turn_cyan" = "minecraft:turn_cyan",
    "minecraft:turn_gray" = "minecraft:turn_gray",
    "minecraft:turn_green" = "minecraft:turn_green",
    "minecraft:turn_light_blue" = "minecraft:turn_light_blue",
    "minecraft:turn_lime" = "minecraft:turn_lime",
    "minecraft:turn_magenta" = "minecraft:turn_magenta",
    "minecraft:turn_orange" = "minecraft:turn_orange",
    "minecraft:turn_pink" = "minecraft:turn_pink",
    "minecraft:turn_purple" = "minecraft:turn_purple",
    "minecraft:turn_red" = "minecraft:turn_red",
    "minecraft:turn_silver" = "minecraft:turn_silver",
    "minecraft:turn_white" = "minecraft:turn_white",
    "minecraft:turn_yellow" = "minecraft:turn_yellow",
    navigation_off_land = "navigation_off_land",
    navigation_on_land = "navigation_on_land",
    on_calm = "on_calm",
    on_digging_event = "on_digging_event",
    on_not_riding_parent = "on_not_riding_parent",
    perish_event = "perish_event",
    pickup_item_delay = "pickup_item_delay",
    pickup_item_delay_complete = "pickup_item_delay_complete",
    recover_after_dried_out = "recover_after_dried_out",
    seek_shelter = "seek_shelter",
    spawn_adult = "spawn_adult",
    spawn_adult_melee = "spawn_adult_melee",
    spawn_adult_melee_no_hunting = "spawn_adult_melee_no_hunting",
    spawn_adult_no_hunting = "spawn_adult_no_hunting",
    spawn_adult_parent_jockey = "spawn_adult_parent_jockey",
    spawn_adult_piglin_jockey = "spawn_adult_piglin_jockey",
    spawn_adult_ranged = "spawn_adult_ranged",
    spawn_adult_ranged_no_hunting = "spawn_adult_ranged_no_hunting",
    spawn_adult_unhuntable = "spawn_adult_unhuntable",
    spawn_baby = "spawn_baby",
    spawn_cold = "spawn_cold",
    spawn_large = "spawn_large",
    spawn_medium = "spawn_medium",
    spawn_small = "spawn_small",
    spawn_temperate = "spawn_temperate",
    spawn_warm = "spawn_warm",
    start_drying_out = "start_drying_out",
    start_dryingout = "start_dryingout",
    start_event = "start_event",
    start_suffocating = "start_suffocating",
    start_zombification_event = "start_zombification_event",
    stop_drying_out = "stop_drying_out",
    stop_dryingout = "stop_dryingout",
    stop_panicking_after_fire = "stop_panicking_after_fire",
    stop_suffocating = "stop_suffocating",
    stop_zombification_event = "stop_zombification_event",
    switch_to_melee = "switch_to_melee",
    switch_to_ranged = "switch_to_ranged",
    villager_converted = "villager_converted",
    wololo = "wololo"
}
export declare enum ExecuteModeDetect {
    detect = "detect"
}
export declare enum Option_As {
    as = "as"
}
export declare enum ExecuteChainedOption_0 {
    as = "as",
    at = "at",
    "in" = "in",
    positioned = "positioned",
    rotated = "rotated",
    facing = "facing",
    align = "align",
    anchored = "anchored",
    "if" = "if",
    unless = "unless",
    run = "run"
}
export declare enum Option_At {
    at = "at"
}
export declare enum Option_In {
    "in" = "in"
}
export declare enum Dimension {
    overworld = "overworld",
    nether = "nether",
    the_end = "the_end"
}
export declare enum Option_Positioned {
    positioned = "positioned"
}
export declare enum Option_Rotated {
    rotated = "rotated"
}
export declare enum Option_Facing {
    facing = "facing"
}
export declare enum Option_Entity {
    entity = "entity"
}
export declare enum ActorLocation {
    eyes = "eyes",
    feet = "feet"
}
export declare enum Option_Align {
    align = "align"
}
export declare enum Option_Anchored {
    anchored = "anchored"
}
export declare enum Option_If_Unless {
    "if" = "if",
    unless = "unless"
}
export declare enum Option_Condition_Block {
    block = "block"
}
export declare enum Option_Condition_Blocks {
    blocks = "blocks"
}
export declare enum BlocksScanMode {
    masked = "masked",
    all = "all"
}
export declare enum Option_Condition_Entity {
    entity = "entity"
}
export declare enum Option_Condition_Score {
    score = "score"
}
export declare enum ScoreboardObjectives {
}
export declare enum ScoreRangeMode {
    matches = "matches"
}
export declare enum Option_Run {
    run = "run"
}
export declare enum FillMode {
    outline = "outline",
    hollow = "hollow",
    destroy = "destroy",
    keep = "keep"
}
export declare enum Replace {
    replace = "replace"
}
export declare enum Add {
    push = "push"
}
export declare enum Delete {
    pop = "pop",
    remove = "remove"
}
export declare enum GameMode {
    "default" = "default",
    creative = "creative",
    spectator = "spectator",
    survival = "survival",
    adventure = "adventure",
    d = "d",
    c = "c",
    s = "s",
    a = "a"
}
export declare enum BoolGameRule {
    commandblockoutput = "commandblockoutput",
    dodaylightcycle = "dodaylightcycle",
    doentitydrops = "doentitydrops",
    dofiretick = "dofiretick",
    domobloot = "domobloot",
    domobspawning = "domobspawning",
    dotiledrops = "dotiledrops",
    doweathercycle = "doweathercycle",
    drowningdamage = "drowningdamage",
    falldamage = "falldamage",
    firedamage = "firedamage",
    keepinventory = "keepinventory",
    mobgriefing = "mobgriefing",
    pvp = "pvp",
    showcoordinates = "showcoordinates",
    naturalregeneration = "naturalregeneration",
    tntexplodes = "tntexplodes",
    sendcommandfeedback = "sendcommandfeedback",
    doinsomnia = "doinsomnia",
    commandblocksenabled = "commandblocksenabled",
    doimmediaterespawn = "doimmediaterespawn",
    showdeathmessages = "showdeathmessages",
    showtags = "showtags",
    freezedamage = "freezedamage",
    respawnblocksexplode = "respawnblocksexplode",
    showbordereffect = "showbordereffect"
}
export declare enum IntGameRule {
    maxcommandchainlength = "maxcommandchainlength",
    randomtickspeed = "randomtickspeed",
    functioncommandlimit = "functioncommandlimit",
    spawnradius = "spawnradius"
}
export declare enum CommandName {
    tag = "tag",
    stop = "stop",
    camerashake = "camerashake",
    clear = "clear",
    clearspawnpoint = "clearspawnpoint",
    clone = "clone",
    damage = "damage",
    daylock = "daylock",
    alwaysday = "alwaysday",
    deop = "deop",
    dialogue = "dialogue",
    difficulty = "difficulty",
    effect = "effect",
    event = "event",
    execute = "execute",
    fill = "fill",
    fog = "fog",
    "function" = "function",
    gamemode = "gamemode",
    gamerule = "gamerule",
    gametest = "gametest",
    gettopsolidblock = "gettopsolidblock",
    give = "give",
    help = "help",
    "?" = "?",
    kick = "kick",
    kill = "kill",
    list = "list",
    listd = "listd",
    structure = "structure",
    locate = "locate",
    loot = "loot",
    me = "me",
    mobevent = "mobevent",
    music = "music",
    op = "op",
    particle = "particle",
    reload = "reload",
    permission = "permission",
    ops = "ops",
    playanimation = "playanimation",
    playsound = "playsound",
    querytarget = "querytarget",
    replaceitem = "replaceitem",
    ride = "ride",
    say = "say",
    tickingarea = "tickingarea",
    schedule = "schedule",
    scoreboard = "scoreboard",
    setblock = "setblock",
    setmaxplayers = "setmaxplayers",
    setworldspawn = "setworldspawn",
    spawnpoint = "spawnpoint",
    spreadplayers = "spreadplayers",
    stopsound = "stopsound",
    save = "save",
    summon = "summon",
    teleport = "teleport",
    tp = "tp",
    tell = "tell",
    w = "w",
    msg = "msg",
    tellraw = "tellraw",
    testforblock = "testforblock",
    testforblocks = "testforblocks",
    testfor = "testfor",
    time = "time",
    title = "title",
    titleraw = "titleraw",
    toggledownfall = "toggledownfall",
    weather = "weather",
    wsserver = "wsserver",
    connect = "connect",
    xp = "xp",
    agent = "agent",
    codebuilder_actorinfo = "codebuilder_actorinfo",
    enchant = "enchant",
    allowlist = "allowlist",
    whitelist = "whitelist",
    changesetting = "changesetting",
    script = "script"
}
export declare enum Structure {
    end_city = "end_city",
    fortress = "fortress",
    mineshaft = "mineshaft",
    monument = "monument",
    stronghold = "stronghold",
    temple = "temple",
    village = "village",
    mansion = "mansion",
    shipwreck = "shipwreck",
    buried_treasure = "buried_treasure",
    ruins = "ruins",
    pillager_outpost = "pillager_outpost",
    ruined_portal = "ruined_portal",
    bastion_remnant = "bastion_remnant",
    ancient_city = "ancient_city",
    ancientcity = "ancientcity",
    bastionremnant = "bastionremnant",
    buriedtreasure = "buriedtreasure",
    endcity = "endcity",
    pillageroutpost = "pillageroutpost",
    ruinedportal = "ruinedportal"
}
export declare enum LocateSubcommandStructure {
    structure = "structure"
}
export declare enum LocateSubcommandBiome {
    biome = "biome"
}
export declare enum Biome {
    the_end = "the_end",
    ocean = "ocean",
    plains = "plains",
    desert = "desert",
    extreme_hills = "extreme_hills",
    forest = "forest",
    taiga = "taiga",
    swampland = "swampland",
    river = "river",
    hell = "hell",
    legacy_frozen_ocean = "legacy_frozen_ocean",
    frozen_river = "frozen_river",
    ice_plains = "ice_plains",
    ice_mountains = "ice_mountains",
    mushroom_island = "mushroom_island",
    mushroom_island_shore = "mushroom_island_shore",
    beach = "beach",
    desert_hills = "desert_hills",
    forest_hills = "forest_hills",
    taiga_hills = "taiga_hills",
    extreme_hills_edge = "extreme_hills_edge",
    jungle = "jungle",
    jungle_hills = "jungle_hills",
    jungle_edge = "jungle_edge",
    deep_ocean = "deep_ocean",
    stone_beach = "stone_beach",
    cold_beach = "cold_beach",
    birch_forest = "birch_forest",
    birch_forest_hills = "birch_forest_hills",
    roofed_forest = "roofed_forest",
    cold_taiga = "cold_taiga",
    cold_taiga_hills = "cold_taiga_hills",
    mega_taiga = "mega_taiga",
    mega_taiga_hills = "mega_taiga_hills",
    extreme_hills_plus_trees = "extreme_hills_plus_trees",
    savanna = "savanna",
    savanna_plateau = "savanna_plateau",
    mesa = "mesa",
    mesa_plateau_stone = "mesa_plateau_stone",
    mesa_plateau = "mesa_plateau",
    warm_ocean = "warm_ocean",
    lukewarm_ocean = "lukewarm_ocean",
    deep_lukewarm_ocean = "deep_lukewarm_ocean",
    cold_ocean = "cold_ocean",
    deep_cold_ocean = "deep_cold_ocean",
    frozen_ocean = "frozen_ocean",
    deep_frozen_ocean = "deep_frozen_ocean",
    bamboo_jungle = "bamboo_jungle",
    bamboo_jungle_hills = "bamboo_jungle_hills",
    sunflower_plains = "sunflower_plains",
    desert_mutated = "desert_mutated",
    extreme_hills_mutated = "extreme_hills_mutated",
    flower_forest = "flower_forest",
    taiga_mutated = "taiga_mutated",
    swampland_mutated = "swampland_mutated",
    ice_plains_spikes = "ice_plains_spikes",
    jungle_mutated = "jungle_mutated",
    jungle_edge_mutated = "jungle_edge_mutated",
    birch_forest_mutated = "birch_forest_mutated",
    birch_forest_hills_mutated = "birch_forest_hills_mutated",
    roofed_forest_mutated = "roofed_forest_mutated",
    cold_taiga_mutated = "cold_taiga_mutated",
    redwood_taiga_mutated = "redwood_taiga_mutated",
    redwood_taiga_hills_mutated = "redwood_taiga_hills_mutated",
    extreme_hills_plus_trees_mutated = "extreme_hills_plus_trees_mutated",
    savanna_mutated = "savanna_mutated",
    savanna_plateau_mutated = "savanna_plateau_mutated",
    mesa_bryce = "mesa_bryce",
    mesa_plateau_stone_mutated = "mesa_plateau_stone_mutated",
    mesa_plateau_mutated = "mesa_plateau_mutated",
    soulsand_valley = "soulsand_valley",
    crimson_forest = "crimson_forest",
    warped_forest = "warped_forest",
    basalt_deltas = "basalt_deltas",
    jagged_peaks = "jagged_peaks",
    frozen_peaks = "frozen_peaks",
    snowy_slopes = "snowy_slopes",
    grove = "grove",
    meadow = "meadow",
    lush_caves = "lush_caves",
    dripstone_caves = "dripstone_caves",
    stony_peaks = "stony_peaks",
    deep_dark = "deep_dark",
    mangrove_swamp = "mangrove_swamp"
}
export declare enum TargetSpawn {
    spawn = "spawn"
}
export declare enum SourceLoot {
    loot = "loot"
}
export declare enum SourceKill {
    kill = "kill"
}
export declare enum TargetGive {
    give = "give"
}
export declare enum TargetInsert {
    insert = "insert"
}
export declare enum TargetReplace {
    replace = "replace"
}
export declare enum TargetEntity {
    entity = "entity"
}
export declare enum EntityEquipmentSlot {
    "slot.weapon.mainhand" = "slot.weapon.mainhand",
    "slot.weapon.offhand" = "slot.weapon.offhand",
    "slot.armor.head" = "slot.armor.head",
    "slot.armor.chest" = "slot.armor.chest",
    "slot.armor.legs" = "slot.armor.legs",
    "slot.armor.feet" = "slot.armor.feet",
    "slot.hotbar" = "slot.hotbar",
    "slot.inventory" = "slot.inventory",
    "slot.enderchest" = "slot.enderchest",
    "slot.saddle" = "slot.saddle",
    "slot.armor" = "slot.armor",
    "slot.chest" = "slot.chest",
    "slot.equippable" = "slot.equippable"
}
export declare enum TargetBlock {
    block = "block"
}
export declare enum BlockEquipmentSlot {
    "slot.container" = "slot.container"
}
export declare enum MobEvent {
    "minecraft:pillager_patrols_event" = "minecraft:pillager_patrols_event",
    "minecraft:wandering_trader_event" = "minecraft:wandering_trader_event",
    "minecraft:ender_dragon_event" = "minecraft:ender_dragon_event",
    events_enabled = "events_enabled"
}
export declare enum MusicQueueAction {
    queue = "queue"
}
export declare enum MusicRepeatMode {
    play_once = "play_once",
    loop = "loop"
}
export declare enum MusicPlayAction {
    play = "play"
}
export declare enum MusicStopAction {
    stop = "stop"
}
export declare enum MusicVolumeAction {
    volume = "volume"
}
export declare enum PermissionsAction {
    list = "list",
    reload = "reload"
}
export declare enum ReplaceItemBlock {
    block = "block"
}
export declare enum ReplaceItemEntity {
    entity = "entity"
}
export declare enum ReplaceMode {
    destroy = "destroy",
    keep = "keep"
}
export declare enum RideModeStart {
    start_riding = "start_riding"
}
export declare enum TeleportRules {
    teleport_rider = "teleport_rider",
    teleport_ride = "teleport_ride"
}
export declare enum FillType {
    until_full = "until_full",
    if_group_fits = "if_group_fits"
}
export declare enum RideModeStop {
    stop_riding = "stop_riding"
}
export declare enum RideModeEvict {
    evict_riders = "evict_riders"
}
export declare enum RideModeSummonRider {
    summon_rider = "summon_rider"
}
export declare enum EntityType {
    "minecraft:slime" = "minecraft:slime",
    slime = "slime",
    "minecraft:tnt" = "minecraft:tnt",
    tnt = "tnt",
    "minecraft:turtle" = "minecraft:turtle",
    turtle = "turtle",
    "minecraft:chicken" = "minecraft:chicken",
    chicken = "chicken",
    "minecraft:bee" = "minecraft:bee",
    bee = "bee",
    "minecraft:axolotl" = "minecraft:axolotl",
    axolotl = "axolotl",
    "minecraft:pig" = "minecraft:pig",
    pig = "pig",
    "minecraft:hoglin" = "minecraft:hoglin",
    hoglin = "hoglin",
    "minecraft:zoglin" = "minecraft:zoglin",
    zoglin = "zoglin",
    "minecraft:cat" = "minecraft:cat",
    cat = "cat",
    "minecraft:cow" = "minecraft:cow",
    cow = "cow",
    "minecraft:sheep" = "minecraft:sheep",
    sheep = "sheep",
    "minecraft:wolf" = "minecraft:wolf",
    wolf = "wolf",
    "minecraft:villager" = "minecraft:villager",
    villager = "villager",
    "minecraft:wandering_trader" = "minecraft:wandering_trader",
    wandering_trader = "wandering_trader",
    "minecraft:mooshroom" = "minecraft:mooshroom",
    mooshroom = "mooshroom",
    "minecraft:squid" = "minecraft:squid",
    squid = "squid",
    "minecraft:glow_squid" = "minecraft:glow_squid",
    glow_squid = "glow_squid",
    "minecraft:strider" = "minecraft:strider",
    strider = "strider",
    "minecraft:rabbit" = "minecraft:rabbit",
    rabbit = "rabbit",
    "minecraft:bat" = "minecraft:bat",
    bat = "bat",
    "minecraft:iron_golem" = "minecraft:iron_golem",
    iron_golem = "iron_golem",
    "minecraft:snow_golem" = "minecraft:snow_golem",
    snow_golem = "snow_golem",
    "minecraft:ocelot" = "minecraft:ocelot",
    ocelot = "ocelot",
    "minecraft:horse" = "minecraft:horse",
    horse = "horse",
    "minecraft:trader_llama" = "minecraft:trader_llama",
    trader_llama = "trader_llama",
    "minecraft:llama" = "minecraft:llama",
    llama = "llama",
    "minecraft:polar_bear" = "minecraft:polar_bear",
    polar_bear = "polar_bear",
    "minecraft:parrot" = "minecraft:parrot",
    parrot = "parrot",
    "minecraft:dolphin" = "minecraft:dolphin",
    dolphin = "dolphin",
    "minecraft:panda" = "minecraft:panda",
    panda = "panda",
    "minecraft:fox" = "minecraft:fox",
    fox = "fox",
    "minecraft:frog" = "minecraft:frog",
    frog = "frog",
    "minecraft:tadpole" = "minecraft:tadpole",
    tadpole = "tadpole",
    "minecraft:allay" = "minecraft:allay",
    allay = "allay",
    "minecraft:husk" = "minecraft:husk",
    husk = "husk",
    "minecraft:tropicalfish" = "minecraft:tropicalfish",
    tropicalfish = "tropicalfish",
    "minecraft:wither_skeleton" = "minecraft:wither_skeleton",
    wither_skeleton = "wither_skeleton",
    "minecraft:cod" = "minecraft:cod",
    cod = "cod",
    "minecraft:zombie_villager" = "minecraft:zombie_villager",
    zombie_villager = "zombie_villager",
    "minecraft:pufferfish" = "minecraft:pufferfish",
    pufferfish = "pufferfish",
    "minecraft:witch" = "minecraft:witch",
    witch = "witch",
    "minecraft:salmon" = "minecraft:salmon",
    salmon = "salmon",
    "minecraft:donkey" = "minecraft:donkey",
    donkey = "donkey",
    "minecraft:mule" = "minecraft:mule",
    mule = "mule",
    "minecraft:skeleton_horse" = "minecraft:skeleton_horse",
    skeleton_horse = "skeleton_horse",
    "minecraft:zombie_horse" = "minecraft:zombie_horse",
    zombie_horse = "zombie_horse",
    "minecraft:zombie" = "minecraft:zombie",
    zombie = "zombie",
    "minecraft:stray" = "minecraft:stray",
    stray = "stray",
    "minecraft:drowned" = "minecraft:drowned",
    drowned = "drowned",
    "minecraft:creeper" = "minecraft:creeper",
    creeper = "creeper",
    "minecraft:skeleton" = "minecraft:skeleton",
    skeleton = "skeleton",
    "minecraft:spider" = "minecraft:spider",
    spider = "spider",
    "minecraft:zombie_pigman" = "minecraft:zombie_pigman",
    zombie_pigman = "zombie_pigman",
    "minecraft:enderman" = "minecraft:enderman",
    enderman = "enderman",
    "minecraft:silverfish" = "minecraft:silverfish",
    silverfish = "silverfish",
    "minecraft:cave_spider" = "minecraft:cave_spider",
    cave_spider = "cave_spider",
    "minecraft:ghast" = "minecraft:ghast",
    ghast = "ghast",
    "minecraft:magma_cube" = "minecraft:magma_cube",
    magma_cube = "magma_cube",
    "minecraft:blaze" = "minecraft:blaze",
    blaze = "blaze",
    "minecraft:warden" = "minecraft:warden",
    warden = "warden",
    "minecraft:guardian" = "minecraft:guardian",
    guardian = "guardian",
    "minecraft:elder_guardian" = "minecraft:elder_guardian",
    elder_guardian = "elder_guardian",
    "minecraft:elder_guardian_ghost" = "minecraft:elder_guardian_ghost",
    elder_guardian_ghost = "elder_guardian_ghost",
    "minecraft:wither" = "minecraft:wither",
    wither = "wither",
    "minecraft:ender_dragon" = "minecraft:ender_dragon",
    ender_dragon = "ender_dragon",
    "minecraft:shulker" = "minecraft:shulker",
    shulker = "shulker",
    "minecraft:endermite" = "minecraft:endermite",
    endermite = "endermite",
    "minecraft:vindicator" = "minecraft:vindicator",
    vindicator = "vindicator",
    "minecraft:evocation_illager" = "minecraft:evocation_illager",
    evocation_illager = "evocation_illager",
    "minecraft:vex" = "minecraft:vex",
    vex = "vex",
    "minecraft:phantom" = "minecraft:phantom",
    phantom = "phantom",
    "minecraft:pillager" = "minecraft:pillager",
    pillager = "pillager",
    "minecraft:ravager" = "minecraft:ravager",
    ravager = "ravager",
    "minecraft:piglin_brute" = "minecraft:piglin_brute",
    piglin_brute = "piglin_brute",
    "minecraft:piglin" = "minecraft:piglin",
    piglin = "piglin",
    "minecraft:goat" = "minecraft:goat",
    goat = "goat",
    "minecraft:minecart" = "minecraft:minecart",
    minecart = "minecart",
    "minecraft:hopper_minecart" = "minecraft:hopper_minecart",
    hopper_minecart = "hopper_minecart",
    "minecraft:tnt_minecart" = "minecraft:tnt_minecart",
    tnt_minecart = "tnt_minecart",
    "minecraft:chest_minecart" = "minecraft:chest_minecart",
    chest_minecart = "chest_minecart",
    "minecraft:command_block_minecart" = "minecraft:command_block_minecart",
    command_block_minecart = "command_block_minecart",
    "minecraft:xp_bottle" = "minecraft:xp_bottle",
    xp_bottle = "xp_bottle",
    "minecraft:xp_orb" = "minecraft:xp_orb",
    xp_orb = "xp_orb",
    "minecraft:ender_crystal" = "minecraft:ender_crystal",
    ender_crystal = "ender_crystal",
    "minecraft:arrow" = "minecraft:arrow",
    arrow = "arrow",
    "minecraft:snowball" = "minecraft:snowball",
    snowball = "snowball",
    "minecraft:egg" = "minecraft:egg",
    egg = "egg",
    "minecraft:splash_potion" = "minecraft:splash_potion",
    splash_potion = "splash_potion",
    "minecraft:leash_knot" = "minecraft:leash_knot",
    leash_knot = "leash_knot",
    "minecraft:boat" = "minecraft:boat",
    boat = "boat",
    "minecraft:chest_boat" = "minecraft:chest_boat",
    chest_boat = "chest_boat",
    "minecraft:lightning_bolt" = "minecraft:lightning_bolt",
    lightning_bolt = "lightning_bolt",
    "minecraft:evocation_fang" = "minecraft:evocation_fang",
    evocation_fang = "evocation_fang",
    "minecraft:armor_stand" = "minecraft:armor_stand",
    armor_stand = "armor_stand",
    "minecraft:fireworks_rocket" = "minecraft:fireworks_rocket",
    fireworks_rocket = "fireworks_rocket",
    "minecraft:npc" = "minecraft:npc",
    npc = "npc"
}
export declare enum RideModeSummonRide {
    summon_ride = "summon_ride"
}
export declare enum RideRules {
    no_ride_change = "no_ride_change",
    reassign_rides = "reassign_rides",
    skip_riders = "skip_riders"
}
export declare enum SaveMode {
    query = "query",
    hold = "hold",
    resume = "resume"
}
export declare enum ScheduleActionOnAreaLoaded {
    on_area_loaded = "on_area_loaded"
}
export declare enum RequestAction {
    add = "add"
}
export declare enum CircleArea {
    circle = "circle"
}
export declare enum TickingArea {
    tickingarea = "tickingarea"
}
export declare enum ScoreboardObjectivesCategory {
    objectives = "objectives"
}
export declare enum ScoreboardAddAction {
    add = "add"
}
export declare enum ScoreboardCriteria {
    dummy = "dummy"
}
export declare enum ScoreboardRemoveAction {
    remove = "remove"
}
export declare enum ScoreboardListAction {
    list = "list"
}
export declare enum ScoreboardSetDisplayAction {
    setdisplay = "setdisplay"
}
export declare enum ScoreboardDisplaySlotSortable {
    list = "list",
    sidebar = "sidebar"
}
export declare enum ScoreboardSortOrder {
    ascending = "ascending",
    descending = "descending"
}
export declare enum ScoreboardDisplaySlotNonSortable {
    belowname = "belowname"
}
export declare enum ScoreboardPlayersCategory {
    players = "players"
}
export declare enum ScoreboardResetAction {
    reset = "reset"
}
export declare enum ScoreboardTestAction {
    test = "test"
}
export declare enum ScoreboardRandomAction {
    random = "random"
}
export declare enum ScoreboardPlayersNumAction {
    add = "add",
    remove = "remove",
    set = "set"
}
export declare enum ScoreboardOperationAction {
    operation = "operation"
}
export declare enum ScriptDebugModeProfiler {
    profiler = "profiler"
}
export declare enum ScriptProfilerStart {
    start = "start"
}
export declare enum ScriptProfilerStop {
    stop = "stop"
}
export declare enum ScriptDebugModeWatchdog {
    watchdog = "watchdog"
}
export declare enum ScriptWatchdogDumpMemory {
    exportstats = "exportstats"
}
export declare enum SetBlockMode {
    replace = "replace",
    destroy = "destroy",
    keep = "keep"
}
export declare enum StructureSaveAction {
    save = "save"
}
export declare enum StructureSaveMode {
    disk = "disk",
    memory = "memory"
}
export declare enum StructureDeleteAction {
    "delete" = "delete"
}
export declare enum StructureLoadAction {
    load = "load"
}
export declare enum Rotation {
    "0_degrees" = "0_degrees",
    "90_degrees" = "90_degrees",
    "180_degrees" = "180_degrees",
    "270_degrees" = "270_degrees"
}
export declare enum Mirror {
    x = "x",
    z = "z",
    none = "none",
    xz = "xz"
}
export declare enum StructureAnimationMode {
    block_by_block = "block_by_block",
    layer_by_layer = "layer_by_layer"
}
export declare enum TagChangeAction {
    add = "add",
    remove = "remove"
}
export declare enum TagValues {
}
export declare enum TagListAction {
    list = "list"
}
export declare enum TeleportFacing {
    facing = "facing"
}
export declare enum TestForBlocksMode {
    masked = "masked",
    all = "all"
}
export declare enum TickingAreaModeAdd {
    add = "add"
}
export declare enum AddTickingAreaType {
    circle = "circle"
}
export declare enum TickingAreaModeRemove {
    remove = "remove"
}
export declare enum TickingAreaModeRemoveAll {
    remove_all = "remove_all"
}
export declare enum TickingAreaModeList {
    list = "list"
}
export declare enum AllDimensions {
    "all-dimensions" = "all-dimensions"
}
export declare enum TickingAreaModePreload {
    preload = "preload"
}
export declare enum TimeModeAdd {
    add = "add"
}
export declare enum TimeModeSet {
    set = "set"
}
export declare enum TimeSpec {
    day = "day",
    sunrise = "sunrise",
    noon = "noon",
    sunset = "sunset",
    night = "night",
    midnight = "midnight"
}
export declare enum TimeModeQuery {
    query = "query"
}
export declare enum TimeQuery {
    daytime = "daytime",
    gametime = "gametime",
    day = "day"
}
export declare enum TitleClear {
    clear = "clear"
}
export declare enum TitleReset {
    reset = "reset"
}
export declare enum TitleSet {
    title = "title",
    subtitle = "subtitle",
    actionbar = "actionbar"
}
export declare enum TitleTimes {
    times = "times"
}
export declare enum TitleRawClear {
    clear = "clear"
}
export declare enum TitleRawReset {
    reset = "reset"
}
export declare enum TitleRawSet {
    title = "title",
    subtitle = "subtitle",
    actionbar = "actionbar"
}
export declare enum TitleRawTimes {
    times = "times"
}
export declare enum WeatherType {
    clear = "clear",
    rain = "rain",
    thunder = "thunder"
}
export declare enum WeatherQuery {
    query = "query"
}
