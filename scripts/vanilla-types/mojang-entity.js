import { EntityTypes } from "@minecraft/server";
/**
 * All possible MinecraftEntityTypes
 */
export class MinecraftEntityTypes {
    constructor() {
        throw new TypeError("Illegal constructor");
    }
    ;
    static get(typeName) {
        return EntityTypes.get(typeName);
    }
    ;
    static getAll() {
        return Array.from(EntityTypes.getAll());
    }
    ;
    static get Agent() { return EntityTypes.get("agent"); }
    static get Allay() { return EntityTypes.get("allay"); }
    static get AreaEffectCloud() { return EntityTypes.get("area_effect_cloud"); }
    static get ArmorStand() { return EntityTypes.get("armor_stand"); }
    static get Arrow() { return EntityTypes.get("arrow"); }
    static get Axolotl() { return EntityTypes.get("axolotl"); }
    static get Bat() { return EntityTypes.get("bat"); }
    static get Bee() { return EntityTypes.get("bee"); }
    static get Blaze() { return EntityTypes.get("blaze"); }
    static get Boat() { return EntityTypes.get("boat"); }
    static get Camel() { return EntityTypes.get("camel"); }
    static get Cat() { return EntityTypes.get("cat"); }
    static get CaveSpider() { return EntityTypes.get("cave_spider"); }
    static get ChestBoat() { return EntityTypes.get("chest_boat"); }
    static get ChestMinecart() { return EntityTypes.get("chest_minecart"); }
    static get Chicken() { return EntityTypes.get("chicken"); }
    static get Cod() { return EntityTypes.get("cod"); }
    static get CommandBlockMinecart() { return EntityTypes.get("command_block_minecart"); }
    static get Cow() { return EntityTypes.get("cow"); }
    static get Creeper() { return EntityTypes.get("creeper"); }
    static get Dolphin() { return EntityTypes.get("dolphin"); }
    static get Donkey() { return EntityTypes.get("donkey"); }
    static get DragonFireball() { return EntityTypes.get("dragon_fireball"); }
    static get Drowned() { return EntityTypes.get("drowned"); }
    static get Egg() { return EntityTypes.get("egg"); }
    static get ElderGuardian() { return EntityTypes.get("elder_guardian"); }
    static get EnderCrystal() { return EntityTypes.get("ender_crystal"); }
    static get EnderDragon() { return EntityTypes.get("ender_dragon"); }
    static get EnderPearl() { return EntityTypes.get("ender_pearl"); }
    static get Enderman() { return EntityTypes.get("enderman"); }
    static get Endermite() { return EntityTypes.get("endermite"); }
    static get EvocationIllager() { return EntityTypes.get("evocation_illager"); }
    static get EyeOfEnderSignal() { return EntityTypes.get("eye_of_ender_signal"); }
    static get Fireball() { return EntityTypes.get("fireball"); }
    static get FireworksRocket() { return EntityTypes.get("fireworks_rocket"); }
    static get FishingHook() { return EntityTypes.get("fishing_hook"); }
    static get Fox() { return EntityTypes.get("fox"); }
    static get Frog() { return EntityTypes.get("frog"); }
    static get Ghast() { return EntityTypes.get("ghast"); }
    static get GlowSquid() { return EntityTypes.get("glow_squid"); }
    static get Goat() { return EntityTypes.get("goat"); }
    static get Guardian() { return EntityTypes.get("guardian"); }
    static get Hoglin() { return EntityTypes.get("hoglin"); }
    static get HopperMinecart() { return EntityTypes.get("hopper_minecart"); }
    static get Horse() { return EntityTypes.get("horse"); }
    static get Husk() { return EntityTypes.get("husk"); }
    static get IronGolem() { return EntityTypes.get("iron_golem"); }
    static get LightningBolt() { return EntityTypes.get("lightning_bolt"); }
    static get LingeringPotion() { return EntityTypes.get("lingering_potion"); }
    static get Llama() { return EntityTypes.get("llama"); }
    static get LlamaSpit() { return EntityTypes.get("llama_spit"); }
    static get MagmaCube() { return EntityTypes.get("magma_cube"); }
    static get Minecart() { return EntityTypes.get("minecart"); }
    static get Mooshroom() { return EntityTypes.get("mooshroom"); }
    static get Mule() { return EntityTypes.get("mule"); }
    static get Npc() { return EntityTypes.get("npc"); }
    static get Ocelot() { return EntityTypes.get("ocelot"); }
    static get Panda() { return EntityTypes.get("panda"); }
    static get Parrot() { return EntityTypes.get("parrot"); }
    static get Phantom() { return EntityTypes.get("phantom"); }
    static get Pig() { return EntityTypes.get("pig"); }
    static get Piglin() { return EntityTypes.get("piglin"); }
    static get PiglinBrute() { return EntityTypes.get("piglin_brute"); }
    static get Pillager() { return EntityTypes.get("pillager"); }
    static get Player() { return EntityTypes.get("player"); }
    static get PolarBear() { return EntityTypes.get("polar_bear"); }
    static get Pufferfish() { return EntityTypes.get("pufferfish"); }
    static get Rabbit() { return EntityTypes.get("rabbit"); }
    static get Ravager() { return EntityTypes.get("ravager"); }
    static get Salmon() { return EntityTypes.get("salmon"); }
    static get Sheep() { return EntityTypes.get("sheep"); }
    static get Shulker() { return EntityTypes.get("shulker"); }
    static get ShulkerBullet() { return EntityTypes.get("shulker_bullet"); }
    static get Silverfish() { return EntityTypes.get("silverfish"); }
    static get Skeleton() { return EntityTypes.get("skeleton"); }
    static get SkeletonHorse() { return EntityTypes.get("skeleton_horse"); }
    static get Slime() { return EntityTypes.get("slime"); }
    static get SmallFireball() { return EntityTypes.get("small_fireball"); }
    static get Sniffer() { return EntityTypes.get("sniffer"); }
    static get SnowGolem() { return EntityTypes.get("snow_golem"); }
    static get Snowball() { return EntityTypes.get("snowball"); }
    static get Spider() { return EntityTypes.get("spider"); }
    static get SplashPotion() { return EntityTypes.get("splash_potion"); }
    static get Squid() { return EntityTypes.get("squid"); }
    static get Stray() { return EntityTypes.get("stray"); }
    static get Strider() { return EntityTypes.get("strider"); }
    static get Tadpole() { return EntityTypes.get("tadpole"); }
    static get ThrownTrident() { return EntityTypes.get("thrown_trident"); }
    static get Tnt() { return EntityTypes.get("tnt"); }
    static get TntMinecart() { return EntityTypes.get("tnt_minecart"); }
    static get TraderLlama() { return EntityTypes.get("trader_llama"); }
    static get TripodCamera() { return EntityTypes.get("tripod_camera"); }
    static get Tropicalfish() { return EntityTypes.get("tropicalfish"); }
    static get Turtle() { return EntityTypes.get("turtle"); }
    static get Vex() { return EntityTypes.get("vex"); }
    static get Villager() { return EntityTypes.get("villager"); }
    static get VillagerV2() { return EntityTypes.get("villager_v2"); }
    static get Vindicator() { return EntityTypes.get("vindicator"); }
    static get WanderingTrader() { return EntityTypes.get("wandering_trader"); }
    static get Warden() { return EntityTypes.get("warden"); }
    static get Witch() { return EntityTypes.get("witch"); }
    static get Wither() { return EntityTypes.get("wither"); }
    static get WitherSkeleton() { return EntityTypes.get("wither_skeleton"); }
    static get WitherSkull() { return EntityTypes.get("wither_skull"); }
    static get WitherSkullDangerous() { return EntityTypes.get("wither_skull_dangerous"); }
    static get Wolf() { return EntityTypes.get("wolf"); }
    static get XpBottle() { return EntityTypes.get("xp_bottle"); }
    static get XpOrb() { return EntityTypes.get("xp_orb"); }
    static get Zoglin() { return EntityTypes.get("zoglin"); }
    static get Zombie() { return EntityTypes.get("zombie"); }
    static get ZombieHorse() { return EntityTypes.get("zombie_horse"); }
    static get ZombiePigman() { return EntityTypes.get("zombie_pigman"); }
    static get ZombieVillager() { return EntityTypes.get("zombie_villager"); }
    static get ZombieVillagerV2() { return EntityTypes.get("zombie_villager_v2"); }
}
