import { EffectTypes } from "@minecraft/server";
/**
 * All possible MinecraftEffectTypes
 */
export class MinecraftEffectTypes {
    constructor() {
        throw new TypeError("Illegal constructor");
    }
    ;
    static get(typeName) {
        return EffectTypes.get(typeName);
    }
    ;
    static getAll() {
        return EffectTypes.getAll();
    }
    ;
}
MinecraftEffectTypes.Absorption = EffectTypes.get("absorption");
MinecraftEffectTypes.BadOmen = EffectTypes.get("bad_omen");
MinecraftEffectTypes.Blindness = EffectTypes.get("blindness");
MinecraftEffectTypes.ConduitPower = EffectTypes.get("conduit_power");
MinecraftEffectTypes.Darkness = EffectTypes.get("darkness");
MinecraftEffectTypes.Empty = EffectTypes.get("empty");
MinecraftEffectTypes.FatalPoison = EffectTypes.get("fatal_poison");
MinecraftEffectTypes.FireResistance = EffectTypes.get("fire_resistance");
MinecraftEffectTypes.Haste = EffectTypes.get("haste");
MinecraftEffectTypes.HealthBoost = EffectTypes.get("health_boost");
MinecraftEffectTypes.Hunger = EffectTypes.get("hunger");
MinecraftEffectTypes.InstantDamage = EffectTypes.get("instant_damage");
MinecraftEffectTypes.InstantHealth = EffectTypes.get("instant_health");
MinecraftEffectTypes.Invisibility = EffectTypes.get("invisibility");
MinecraftEffectTypes.JumpBoost = EffectTypes.get("jump_boost");
MinecraftEffectTypes.Levitation = EffectTypes.get("levitation");
MinecraftEffectTypes.MiningFatigue = EffectTypes.get("mining_fatigue");
MinecraftEffectTypes.Nausea = EffectTypes.get("nausea");
MinecraftEffectTypes.NightVision = EffectTypes.get("night_vision");
MinecraftEffectTypes.Poison = EffectTypes.get("poison");
MinecraftEffectTypes.Regeneration = EffectTypes.get("regeneration");
MinecraftEffectTypes.Resistance = EffectTypes.get("resistance");
MinecraftEffectTypes.Saturation = EffectTypes.get("saturation");
MinecraftEffectTypes.SlowFalling = EffectTypes.get("slow_falling");
MinecraftEffectTypes.Slowness = EffectTypes.get("slowness");
MinecraftEffectTypes.Speed = EffectTypes.get("speed");
MinecraftEffectTypes.Strength = EffectTypes.get("strength");
MinecraftEffectTypes.VillageHero = EffectTypes.get("village_hero");
MinecraftEffectTypes.WaterBreathing = EffectTypes.get("water_breathing");
MinecraftEffectTypes.Weakness = EffectTypes.get("weakness");
MinecraftEffectTypes.Wither = EffectTypes.get("wither");
