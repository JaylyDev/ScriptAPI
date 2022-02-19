

# MinecraftEffectTypes

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/MinecraftEffectTypes

## Code structure

```ts
export class MinecraftEffectTypes {
    static readonly "absorption": EffectType;
    static readonly "badOmen": EffectType;
    static readonly "blindness": EffectType;
    static readonly "conduitPower": EffectType;
    static readonly "empty": EffectType;
    static readonly "fatalPoison": EffectType;
    static readonly "fireResistance": EffectType;
    static readonly "haste": EffectType;
    static readonly "healthBoost": EffectType;
    static readonly "hunger": EffectType;
    static readonly "instantDamage": EffectType;
    static readonly "instantHealth": EffectType;
    static readonly "invisibility": EffectType;
    static readonly "jumpBoost": EffectType;
    static readonly "levitation": EffectType;
    static readonly "miningFatigue": EffectType;
    static readonly "nausea": EffectType;
    static readonly "nightVision": EffectType;
    static readonly "poison": EffectType;
    static readonly "regeneration": EffectType;
    static readonly "resistance": EffectType;
    static readonly "saturation": EffectType;
    static readonly "slowFalling": EffectType;
    static readonly "slowness": EffectType;
    static readonly "speed": EffectType;
    static readonly "strength": EffectType;
    static readonly "villageHero": EffectType;
    static readonly "waterBreathing": EffectType;
    static readonly "weakness": EffectType;
    static readonly "wither": EffectType;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

```js
import { BlockLocation } from "mojang-minecraft";
import { Test as test } from "mojang-gametest";

const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
const villagerLoc = new BlockLocation(1, 2, 1);
const villager = test.spawn(villagerId, villagerLoc);
const duration = 20;
villager.addEffect(MinecraftEffectTypes.poison, duration, 1);
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);
