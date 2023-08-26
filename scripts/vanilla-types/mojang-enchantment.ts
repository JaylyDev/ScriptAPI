import { EnchantmentType, EnchantmentTypes } from "@minecraft/server";

/**
 * All possible MinecraftEnchantmentTypes
 */
export class MinecraftEnchantmentTypes implements EnchantmentTypes {
    private constructor() {
        throw new TypeError("Illegal constructor");
    };
    static get(typeName: string): EnchantmentType | undefined {
        return EnchantmentTypes.get(typeName);
    };
    // why don't they have a getAll
    static getAll(): EnchantmentType[] {
        return [
            MinecraftEnchantmentTypes.AquaAffinity!,
            MinecraftEnchantmentTypes.BaneOfArthropods!,
            MinecraftEnchantmentTypes.Binding!,
            MinecraftEnchantmentTypes.BlastProtection!,
            MinecraftEnchantmentTypes.Channeling!,
            MinecraftEnchantmentTypes.DepthStrider!,
            MinecraftEnchantmentTypes.Efficiency!,
            MinecraftEnchantmentTypes.FeatherFalling!,
            MinecraftEnchantmentTypes.FireAspect!,
            MinecraftEnchantmentTypes.FireProtection!,
            MinecraftEnchantmentTypes.Flame!,
            MinecraftEnchantmentTypes.Fortune!,
            MinecraftEnchantmentTypes.FrostWalker!,
            MinecraftEnchantmentTypes.Impaling!,
            MinecraftEnchantmentTypes.Infinity!,
            MinecraftEnchantmentTypes.Knockback!,
            MinecraftEnchantmentTypes.Looting!,
            MinecraftEnchantmentTypes.Loyalty!,
            MinecraftEnchantmentTypes.LuckOfTheSea!,
            MinecraftEnchantmentTypes.Lure!,
            MinecraftEnchantmentTypes.Mending!,
            MinecraftEnchantmentTypes.Multishot!,
            MinecraftEnchantmentTypes.Piercing!,
            MinecraftEnchantmentTypes.Power!,
            MinecraftEnchantmentTypes.ProjectileProtection!,
            MinecraftEnchantmentTypes.Protection!,
            MinecraftEnchantmentTypes.Punch!,
            MinecraftEnchantmentTypes.QuickCharge!,
            MinecraftEnchantmentTypes.Respiration!,
            MinecraftEnchantmentTypes.Riptide!,
            MinecraftEnchantmentTypes.Sharpness!,
            MinecraftEnchantmentTypes.SilkTouch!,
            MinecraftEnchantmentTypes.Smite!,
            MinecraftEnchantmentTypes.SoulSpeed!,
            MinecraftEnchantmentTypes.SwiftSneak!,
            MinecraftEnchantmentTypes.Thorns!,
            MinecraftEnchantmentTypes.Unbreaking!,
            MinecraftEnchantmentTypes.Vanishing!,
        ];
    };
    static readonly AquaAffinity = EnchantmentTypes.get("aqua_affinity");
    static readonly BaneOfArthropods = EnchantmentTypes.get("bane_of_arthropods");
    static readonly Binding = EnchantmentTypes.get("binding");
    static readonly BlastProtection = EnchantmentTypes.get("blast_protection");
    static readonly Channeling = EnchantmentTypes.get("channeling");
    static readonly DepthStrider = EnchantmentTypes.get("depth_strider");
    static readonly Efficiency = EnchantmentTypes.get("efficiency");
    static readonly FeatherFalling = EnchantmentTypes.get("feather_falling");
    static readonly FireAspect = EnchantmentTypes.get("fire_aspect");
    static readonly FireProtection = EnchantmentTypes.get("fire_protection");
    static readonly Flame = EnchantmentTypes.get("flame");
    static readonly Fortune = EnchantmentTypes.get("fortune");
    static readonly FrostWalker = EnchantmentTypes.get("frost_walker");
    static readonly Impaling = EnchantmentTypes.get("impaling");
    static readonly Infinity = EnchantmentTypes.get("infinity");
    static readonly Knockback = EnchantmentTypes.get("knockback");
    static readonly Looting = EnchantmentTypes.get("looting");
    static readonly Loyalty = EnchantmentTypes.get("loyalty");
    static readonly LuckOfTheSea = EnchantmentTypes.get("luck_of_the_sea");
    static readonly Lure = EnchantmentTypes.get("lure");
    static readonly Mending = EnchantmentTypes.get("mending");
    static readonly Multishot = EnchantmentTypes.get("multishot");
    static readonly Piercing = EnchantmentTypes.get("piercing");
    static readonly Power = EnchantmentTypes.get("power");
    static readonly ProjectileProtection = EnchantmentTypes.get("projectile_protection");
    static readonly Protection = EnchantmentTypes.get("protection");
    static readonly Punch = EnchantmentTypes.get("punch");
    static readonly QuickCharge = EnchantmentTypes.get("quick_charge");
    static readonly Respiration = EnchantmentTypes.get("respiration");
    static readonly Riptide = EnchantmentTypes.get("riptide");
    static readonly Sharpness = EnchantmentTypes.get("sharpness");
    static readonly SilkTouch = EnchantmentTypes.get("silk_touch");
    static readonly Smite = EnchantmentTypes.get("smite");
    static readonly SoulSpeed = EnchantmentTypes.get("soul_speed");
    static readonly SwiftSneak = EnchantmentTypes.get("swift_sneak");
    static readonly Thorns = EnchantmentTypes.get("thorns");
    static readonly Unbreaking = EnchantmentTypes.get("unbreaking");
    static readonly Vanishing = EnchantmentTypes.get("vanishing");
}
