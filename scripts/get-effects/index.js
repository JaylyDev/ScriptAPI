// Script example for ScriptAPI
// Author: FrankyRayMS <https://github.com/FrankyRay>
// Project: https://github.com/JaylyDev/ScriptAPI

import {
  world,
  MinecraftEffectTypes,
  /* Typings only */
  Entity,
  Player,
  Effect,
  EffectType
} from "@minecraft/server";

/**
 * Get every effect from the entity
 *
 * @param {Entity|Player} entity
 * Entity or Player class
 *
 * @return {{ effectType: EffectType, effect: Effect }[]}
 */
export function getEffects(entity) {
  const effectList = [];
  for (const eff of Object.values(MinecraftEffectTypes)) {
    const effect = entity.getEffect(eff);
    if (!effect) continue;
    effectList.push({
      effectType: eff,
      effect: effect
    });
  };
  
  return effectList;
};
