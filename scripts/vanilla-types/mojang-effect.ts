import { EffectTypes, EffectType } from "@minecraft/server";

/**
 * All possible MinecraftEffectTypes
 */
export class MinecraftEffectTypes implements EffectTypes {
    private constructor() {
        throw new TypeError("Illegal constructor");
    };
    static get(typeName: string): EffectType | undefined {
        return EffectTypes.get(typeName);
    };
    static getAll(): EffectType[] {
        return EffectTypes.getAll();
    };
    static get Absorption() { return EffectTypes.get("absorption"); };
    static get BadOmen() { return EffectTypes.get("bad_omen"); };
    static get Blindness() { return EffectTypes.get("blindness"); };
    static get ConduitPower() { return EffectTypes.get("conduit_power"); };
    static get Darkness() { return EffectTypes.get("darkness"); };
    static get Empty() { return EffectTypes.get("empty"); };
    static get FatalPoison() { return EffectTypes.get("fatal_poison"); };
    static get FireResistance() { return EffectTypes.get("fire_resistance"); };
    static get Haste() { return EffectTypes.get("haste"); };
    static get HealthBoost() { return EffectTypes.get("health_boost"); };
    static get Hunger() { return EffectTypes.get("hunger"); };
    static get InstantDamage() { return EffectTypes.get("instant_damage"); };
    static get InstantHealth() { return EffectTypes.get("instant_health"); };
    static get Invisibility() { return EffectTypes.get("invisibility"); };
    static get JumpBoost() { return EffectTypes.get("jump_boost"); };
    static get Levitation() { return EffectTypes.get("levitation"); };
    static get MiningFatigue() { return EffectTypes.get("mining_fatigue"); };
    static get Nausea() { return EffectTypes.get("nausea"); };
    static get NightVision() { return EffectTypes.get("night_vision"); };
    static get Poison() { return EffectTypes.get("poison"); };
    static get Regeneration() { return EffectTypes.get("regeneration"); };
    static get Resistance() { return EffectTypes.get("resistance"); };
    static get Saturation() { return EffectTypes.get("saturation"); };
    static get SlowFalling() { return EffectTypes.get("slow_falling"); };
    static get Slowness() { return EffectTypes.get("slowness"); };
    static get Speed() { return EffectTypes.get("speed"); };
    static get Strength() { return EffectTypes.get("strength"); };
    static get VillageHero() { return EffectTypes.get("village_hero"); };
    static get WaterBreathing() { return EffectTypes.get("water_breathing"); };
    static get Weakness() { return EffectTypes.get("weakness"); };
    static get Wither() { return EffectTypes.get("wither"); };
}
/**
 * Union type equivalent of the MinecraftEffectTypes enum.
 */
export type MinecraftEffectTypesUnion = keyof typeof MinecraftEffectTypes;
