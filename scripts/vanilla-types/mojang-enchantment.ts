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
        const enchantments: EnchantmentType[] = [];
        for (const key in this) {
            const element = this[key];
            if (element instanceof EnchantmentType) enchantments.push(element);
        };
        return enchantments;
    };
    static get AquaAffinity() { return EnchantmentTypes.get("aqua_affinity"); };
    static get BaneOfArthropods() { return EnchantmentTypes.get("bane_of_arthropods"); };
    static get Binding() { return EnchantmentTypes.get("binding"); };
    static get BlastProtection() { return EnchantmentTypes.get("blast_protection"); };
    static get Channeling() { return EnchantmentTypes.get("channeling"); };
    static get DepthStrider() { return EnchantmentTypes.get("depth_strider"); };
    static get Efficiency() { return EnchantmentTypes.get("efficiency"); };
    static get FeatherFalling() { return EnchantmentTypes.get("feather_falling"); };
    static get FireAspect() { return EnchantmentTypes.get("fire_aspect"); };
    static get FireProtection() { return EnchantmentTypes.get("fire_protection"); };
    static get Flame() { return EnchantmentTypes.get("flame"); };
    static get Fortune() { return EnchantmentTypes.get("fortune"); };
    static get FrostWalker() { return EnchantmentTypes.get("frost_walker"); };
    static get Impaling() { return EnchantmentTypes.get("impaling"); };
    static get Infinity() { return EnchantmentTypes.get("infinity"); };
    static get Knockback() { return EnchantmentTypes.get("knockback"); };
    static get Looting() { return EnchantmentTypes.get("looting"); };
    static get Loyalty() { return EnchantmentTypes.get("loyalty"); };
    static get LuckOfTheSea() { return EnchantmentTypes.get("luck_of_the_sea"); };
    static get Lure() { return EnchantmentTypes.get("lure"); };
    static get Mending() { return EnchantmentTypes.get("mending"); };
    static get Multishot() { return EnchantmentTypes.get("multishot"); };
    static get Piercing() { return EnchantmentTypes.get("piercing"); };
    static get Power() { return EnchantmentTypes.get("power"); };
    static get ProjectileProtection() { return EnchantmentTypes.get("projectile_protection"); };
    static get Protection() { return EnchantmentTypes.get("protection"); };
    static get Punch() { return EnchantmentTypes.get("punch"); };
    static get QuickCharge() { return EnchantmentTypes.get("quick_charge"); };
    static get Respiration() { return EnchantmentTypes.get("respiration"); };
    static get Riptide() { return EnchantmentTypes.get("riptide"); };
    static get Sharpness() { return EnchantmentTypes.get("sharpness"); };
    static get SilkTouch() { return EnchantmentTypes.get("silk_touch"); };
    static get Smite() { return EnchantmentTypes.get("smite"); };
    static get SoulSpeed() { return EnchantmentTypes.get("soul_speed"); };
    static get SwiftSneak() { return EnchantmentTypes.get("swift_sneak"); };
    static get Thorns() { return EnchantmentTypes.get("thorns"); };
    static get Unbreaking() { return EnchantmentTypes.get("unbreaking"); };
    static get Vanishing() { return EnchantmentTypes.get("vanishing"); };
}
/**
 * Union type equivalent of the MinecraftEnchantmentTypes enum.
 */
export type MinecraftEnchantmentTypesUnion = keyof typeof MinecraftEnchantmentTypes;
