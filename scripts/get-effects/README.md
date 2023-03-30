# GetEffects

Return list of object contain `EffectType` class and `Effecf` class. This will allow us to get the effect identifier when `Effect` class doesn't have `typeId` property.

## How to use?

```js
import { system } from "@minecraft/server";
import getEffects from "./getEffects";

// Check if player has absorbtion effect
system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const absorbtion = getEffects(player)
      .find((eff) => eff.effectType.getName() === "minecraft:absorbtion");
    if (!absorbtion) continue;
    
    console.warn(`${player.name} has absorbtion`)
  }
}, 20)
```

## Properties

- `effectType: EffectType`  
  Get effect identifier  
  `return`: [EffectType](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effecttype)

- `effect: Effect`  
  Get effect amplifier and duration  
  `return`: [Effect](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effect)
