# Enchantments

Description:

- Enchantment: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Enchantment
- EnchantmentList: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/EnchantmentList
- EnchantmentSlot: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/EnchantmentSlot
- EnchantmentType: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/EnchantmentType

Versions available: 1.18.20+

## Code structure

### Class Enchantments

```ts
/**
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
export class Enchantment {
  "level": number;

  readonly "type": EnchantmentType;

  constructor(enchantmentType: EnchantmentType, level?: number);
}
```

### Class EnchantmentList

```ts
/**
 * This class represents a collection of enchantments that can
 * be applied to an item.
 */
export class EnchantmentList implements Iterable<Enchantment> {
  readonly "slot": number;

  [Symbol.iterator](): Iterator<Enchantment>;

  addEnchantment(enchantment: Enchantment): boolean;

  canAddEnchantment(enchantment: Enchantment): boolean;

  constructor(enchantmentSlot: number);

  getEnchantment(enchantmentType: EnchantmentType): Enchantment;

  hasEnchantment(enchantmentType: EnchantmentType): number;

  next(): IteratorResult<Enchantment>;

  removeEnchantment(enchantmentType: EnchantmentType): void;
}
```

### EnchantmentSlot

```ts
/**
 * This enum represents the item slot or type that an
 * enchantment can be applied to.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EnchantmentSlot {
  static readonly "all" = -1;
  static readonly "armorFeet" = 4;
  static readonly "armorHead" = 1;
  static readonly "armorLegs" = 8;
  static readonly "armorTorso" = 2;
  static readonly "axe" = 512;
  static readonly "bow" = 32;
  static readonly "carrotStick" = 8192;
  static readonly "cosmeticHead" = 262144;
  static readonly "crossbow" = 65536;
  static readonly "elytra" = 16384;
  static readonly "fishingRod" = 4096;
  static readonly "flintsteel" = 256;
  static readonly "gArmor" = 15;
  static readonly "gDigging" = 3648;
  static readonly "gTool" = 131520;
  static readonly "hoe" = 64;
  static readonly "none" = 0;
  static readonly "pickaxe" = 1024;
  static readonly "shears" = 128;
  static readonly "shield" = 131072;
  static readonly "shovel" = 2048;
  static readonly "spear" = 32768;
  static readonly "sword" = 16;
}
```

### EnchantmentType

```ts
/**
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
  readonly "id": string;

  readonly "maxLevel": number;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

### Anti-32k.js

Created by Discord user [`Tendou`](https://www.tendou.xyz/)

```js
import { world } from "mojang-minecraft";

function anti32K(player) {
  for (let x = 1; x <= 8; x++) {
    const inv = player.getComponent("inventory");
    const invc = inv.container;
    const invslot = invc.getItem(x);
    const item = invslot.getComponent("enchants");
    var enchs = [
      "aqua_affinity",
      "bane_of_arthropods",
      "blast_protection",
      "binding",
      "vanishing",
      "depth_strider",
      "efficiency",
      "feather_falling",
      "fire_aspect",
      "fire_protection",
      "flame",
      "fortune",
      "frost_walker",
      "impaling",
      "infinity",
      "knockback",
      "loyalty",
      "luck_of_the_sea",
      "lure",
      "mending",
      "multishot",
      "piercing",
      "power",
      "projectile_protection",
      "protection",
      "punch",
      "quick_charge",
      "respiration",
      "riptide",
      "sharpness",
      "silk_touch",
      "smite",
      "soul_speed",
      "thorns",
      "unbreaking",
    ];
    for (let i = 0; enchs.length > i; i++) {
      if (item.enchantments.hasEnchantment(enchs[i])) {
        const ieg = item.enchantments.getEnchantment(enchs[i]);
        if (ieg.level >= 6) {
          player.runCommand(`tag @s add banned`);
          player.runComamnd(`clear @s`);
        } else console.log("not 32k");
      } else console.log("not ench");
    }
  }
}

world.events.tick.subscribe(() => {
  // loop every tick
  for (let player of world.getPlayers()) {
    anti32K(player);
  }
});
```
