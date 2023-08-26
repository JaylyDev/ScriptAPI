import { EffectType, EffectTypes } from "@minecraft/server";
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
    static readonly Absorption = EffectTypes.get("absorption");
    static readonly BadOmen = EffectTypes.get("bad_omen");
    static readonly Blindness = EffectTypes.get("blindness");
    static readonly ConduitPower = EffectTypes.get("conduit_power");
    static readonly Darkness = EffectTypes.get("darkness");
    static readonly Empty = EffectTypes.get("empty");
    static readonly FatalPoison = EffectTypes.get("fatal_poison");
    static readonly FireResistance = EffectTypes.get("fire_resistance");
    static readonly Haste = EffectTypes.get("haste");
    static readonly HealthBoost = EffectTypes.get("health_boost");
    static readonly Hunger = EffectTypes.get("hunger");
    static readonly InstantDamage = EffectTypes.get("instant_damage");
    static readonly InstantHealth = EffectTypes.get("instant_health");
    static readonly Invisibility = EffectTypes.get("invisibility");
    static readonly JumpBoost = EffectTypes.get("jump_boost");
    static readonly Levitation = EffectTypes.get("levitation");
    static readonly MiningFatigue = EffectTypes.get("mining_fatigue");
    static readonly Nausea = EffectTypes.get("nausea");
    static readonly NightVision = EffectTypes.get("night_vision");
    static readonly Poison = EffectTypes.get("poison");
    static readonly Regeneration = EffectTypes.get("regeneration");
    static readonly Resistance = EffectTypes.get("resistance");
    static readonly Saturation = EffectTypes.get("saturation");
    static readonly SlowFalling = EffectTypes.get("slow_falling");
    static readonly Slowness = EffectTypes.get("slowness");
    static readonly Speed = EffectTypes.get("speed");
    static readonly Strength = EffectTypes.get("strength");
    static readonly VillageHero = EffectTypes.get("village_hero");
    static readonly WaterBreathing = EffectTypes.get("water_breathing");
    static readonly Weakness = EffectTypes.get("weakness");
    static readonly Wither = EffectTypes.get("wither");
}
