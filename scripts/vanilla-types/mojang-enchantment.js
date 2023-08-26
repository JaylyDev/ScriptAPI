import { EnchantmentTypes } from "@minecraft/server";
/**
 * All possible MinecraftEnchantmentTypes
 */
export class MinecraftEnchantmentTypes {
    constructor() {
        throw new TypeError("Illegal constructor");
    }
    ;
    static get(typeName) {
        return EnchantmentTypes.get(typeName);
    }
    ;
    // why don't they have a getAll
    static getAll() {
        return [
            MinecraftEnchantmentTypes.AquaAffinity,
            MinecraftEnchantmentTypes.BaneOfArthropods,
            MinecraftEnchantmentTypes.Binding,
            MinecraftEnchantmentTypes.BlastProtection,
            MinecraftEnchantmentTypes.Channeling,
            MinecraftEnchantmentTypes.DepthStrider,
            MinecraftEnchantmentTypes.Efficiency,
            MinecraftEnchantmentTypes.FeatherFalling,
            MinecraftEnchantmentTypes.FireAspect,
            MinecraftEnchantmentTypes.FireProtection,
            MinecraftEnchantmentTypes.Flame,
            MinecraftEnchantmentTypes.Fortune,
            MinecraftEnchantmentTypes.FrostWalker,
            MinecraftEnchantmentTypes.Impaling,
            MinecraftEnchantmentTypes.Infinity,
            MinecraftEnchantmentTypes.Knockback,
            MinecraftEnchantmentTypes.Looting,
            MinecraftEnchantmentTypes.Loyalty,
            MinecraftEnchantmentTypes.LuckOfTheSea,
            MinecraftEnchantmentTypes.Lure,
            MinecraftEnchantmentTypes.Mending,
            MinecraftEnchantmentTypes.Multishot,
            MinecraftEnchantmentTypes.Piercing,
            MinecraftEnchantmentTypes.Power,
            MinecraftEnchantmentTypes.ProjectileProtection,
            MinecraftEnchantmentTypes.Protection,
            MinecraftEnchantmentTypes.Punch,
            MinecraftEnchantmentTypes.QuickCharge,
            MinecraftEnchantmentTypes.Respiration,
            MinecraftEnchantmentTypes.Riptide,
            MinecraftEnchantmentTypes.Sharpness,
            MinecraftEnchantmentTypes.SilkTouch,
            MinecraftEnchantmentTypes.Smite,
            MinecraftEnchantmentTypes.SoulSpeed,
            MinecraftEnchantmentTypes.SwiftSneak,
            MinecraftEnchantmentTypes.Thorns,
            MinecraftEnchantmentTypes.Unbreaking,
            MinecraftEnchantmentTypes.Vanishing,
        ];
    }
    ;
}
MinecraftEnchantmentTypes.AquaAffinity = EnchantmentTypes.get("aqua_affinity");
MinecraftEnchantmentTypes.BaneOfArthropods = EnchantmentTypes.get("bane_of_arthropods");
MinecraftEnchantmentTypes.Binding = EnchantmentTypes.get("binding");
MinecraftEnchantmentTypes.BlastProtection = EnchantmentTypes.get("blast_protection");
MinecraftEnchantmentTypes.Channeling = EnchantmentTypes.get("channeling");
MinecraftEnchantmentTypes.DepthStrider = EnchantmentTypes.get("depth_strider");
MinecraftEnchantmentTypes.Efficiency = EnchantmentTypes.get("efficiency");
MinecraftEnchantmentTypes.FeatherFalling = EnchantmentTypes.get("feather_falling");
MinecraftEnchantmentTypes.FireAspect = EnchantmentTypes.get("fire_aspect");
MinecraftEnchantmentTypes.FireProtection = EnchantmentTypes.get("fire_protection");
MinecraftEnchantmentTypes.Flame = EnchantmentTypes.get("flame");
MinecraftEnchantmentTypes.Fortune = EnchantmentTypes.get("fortune");
MinecraftEnchantmentTypes.FrostWalker = EnchantmentTypes.get("frost_walker");
MinecraftEnchantmentTypes.Impaling = EnchantmentTypes.get("impaling");
MinecraftEnchantmentTypes.Infinity = EnchantmentTypes.get("infinity");
MinecraftEnchantmentTypes.Knockback = EnchantmentTypes.get("knockback");
MinecraftEnchantmentTypes.Looting = EnchantmentTypes.get("looting");
MinecraftEnchantmentTypes.Loyalty = EnchantmentTypes.get("loyalty");
MinecraftEnchantmentTypes.LuckOfTheSea = EnchantmentTypes.get("luck_of_the_sea");
MinecraftEnchantmentTypes.Lure = EnchantmentTypes.get("lure");
MinecraftEnchantmentTypes.Mending = EnchantmentTypes.get("mending");
MinecraftEnchantmentTypes.Multishot = EnchantmentTypes.get("multishot");
MinecraftEnchantmentTypes.Piercing = EnchantmentTypes.get("piercing");
MinecraftEnchantmentTypes.Power = EnchantmentTypes.get("power");
MinecraftEnchantmentTypes.ProjectileProtection = EnchantmentTypes.get("projectile_protection");
MinecraftEnchantmentTypes.Protection = EnchantmentTypes.get("protection");
MinecraftEnchantmentTypes.Punch = EnchantmentTypes.get("punch");
MinecraftEnchantmentTypes.QuickCharge = EnchantmentTypes.get("quick_charge");
MinecraftEnchantmentTypes.Respiration = EnchantmentTypes.get("respiration");
MinecraftEnchantmentTypes.Riptide = EnchantmentTypes.get("riptide");
MinecraftEnchantmentTypes.Sharpness = EnchantmentTypes.get("sharpness");
MinecraftEnchantmentTypes.SilkTouch = EnchantmentTypes.get("silk_touch");
MinecraftEnchantmentTypes.Smite = EnchantmentTypes.get("smite");
MinecraftEnchantmentTypes.SoulSpeed = EnchantmentTypes.get("soul_speed");
MinecraftEnchantmentTypes.SwiftSneak = EnchantmentTypes.get("swift_sneak");
MinecraftEnchantmentTypes.Thorns = EnchantmentTypes.get("thorns");
MinecraftEnchantmentTypes.Unbreaking = EnchantmentTypes.get("unbreaking");
MinecraftEnchantmentTypes.Vanishing = EnchantmentTypes.get("vanishing");
