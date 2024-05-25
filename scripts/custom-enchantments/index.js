// Script example for ScriptAPI
// Author: iBlqzed <https://github.com/iBlqzed>
// Project: https://github.com/JaylyDev/ScriptAPI
const itemTypes = {
  sword: [
      "minecraft:wooden_sword",
      "minecraft:stone_sword",
      "minecraft:iron_sword",
      "minecraft:gold_sword",
      "minecraft:diamond_sword",
      "minecraft:netherrite_sword"
  ],
  bow: [
      "minecraft:bow"
  ],
  pickaxe: [
      "minecraft:wooden_pickaxe",
      "minecraft:stone_pickaxe",
      "minecraft:iron_pickaxe",
      "minecraft:gold_pickaxe",
      "minecraft:diamond_pickaxe",
      "minecraft:netherrite_pickaxe"
  ],
  axe: [
      "minecraft:wooden_axe",
      "minecraft:stone_axe",
      "minecraft:iron_axe",
      "minecraft:gold_axe",
      "minecraft:diamond_axe",
      "minecraft:netherrite_axe"
  ],
  shovel: [
      "minecraft:wooden_shovel",
      "minecraft:stone_shovel",
      "minecraft:iron_shovel",
      "minecraft:gold_shovel",
      "minecraft:diamond_shovel",
      "minecraft:netherrite_shovel"
  ],
  hoe: [
      "minecraft:wooden_hoe",
      "minecraft:stone_hoe",
      "minecraft:iron_hoe",
      "minecraft:gold_hoe",
      "minecraft:diamond_hoe",
      "minecraft:netherrite_hoe"
  ]
};
import { Container } from "@minecraft/server";
import { world, Player } from "@minecraft/server";
const enchants = {};
const names = {};
export class Enchant {
  constructor(info) {
      enchants[info.name] = {
          name: info.name,
          display: "§r§7" + (info.display ?? info.name),
          maxLevel: info.maxLevel ?? 32767,
          itemCatagory: info.itemCatagory ?? "any"
      };
      names["§r§7" + (info.display ?? info.name)] = info.name;
      this.id = info.name;
  }
  onHit(callback) {
      enchants[this.id].hit = callback;
  }
  onHurt(callback) {
      enchants[this.id].hurt = callback;
  }
  onRightClick(callback) {
      enchants[this.id].rightClick = callback;
  }
  onRightClickOn(callback) {
      enchants[this.id].rightClickBlock = callback;
  }
  onBlockBreak(callback) {
      enchants[this.id].blockBreak = callback;
  }
}
export function addEnchant(item, ench, level = 1) {
  if (!(ench in enchants))
      return;
  //@ts-ignore
  if (enchants[ench].itemCatagory !== "any" && (!itemTypes[enchants[ench].itemCatagory].includes(item.typeId)))
      throw new Error(`The enchant ${enchants[ench].name} isn't allowed on item ${item.typeId}!`);
  //@ts-ignore
  const lore = item.getLore();
  const index = lore.findIndex(e => names[e.split(" ")[0]] === ench);
  if (index === -1)
      lore.push(`${enchants[ench].display} ${toRomanNumeral(level)}`);
  else
      lore[index] = `${enchants[ench].display} ${toRomanNumeral(level)}`;
  item.setLore(lore);
}
export function removeEnchant(item, ench) {
  if (!(ench in enchants))
      return;
  const lore = item.getLore();
  item.setLore(lore.filter(e => !e.startsWith(enchants[ench].display)));
}
export function getEnchants(item) {
  return item.getLore().filter(lore => names[lore.split(" ")[0]]).map(lore => { return { name: names[lore.split(" ")[0]], level: romanToInt(lore.split(" ")[1]) }; });
}
world.afterEvents.entityHitBlock.subscribe(({ damagingEntity, hitBlock }) => {
  if (damagingEntity instanceof Player) {
    /**
     * @type {Container}
     */
    //@ts-ignore
      const inv = entity.getComponent("inventory").container;
      const item = inv.getItem(damagingEntity.selectedSlotIndex);
      if (!item)
          return;
      const itemEnchants = item.getLore().map(lore => { return { data: enchants[names[lore.split(" ")[0]]], lore }; });
      itemEnchants.forEach((e) => {
          if (e.data?.hit) {
              e.data.hit({ player: damagingEntity, level: romanToInt(e.lore.slice(e.data.display.length + 1)), hitBlock, item });
          }
      });
  }
});
world.afterEvents.entityHitEntity.subscribe(({ damagingEntity, hitEntity }) => {
  if (damagingEntity instanceof Player) {
    /**
     * @type {Container}
     */
    //@ts-ignore
      const inv = entity.getComponent("inventory").container;
      const item = inv.getItem(damagingEntity.selectedSlotIndex);
      if (!item)
          return;
      const itemEnchants = item.getLore().map(lore => { return { data: enchants[names[lore.split(" ")[0]]], lore }; });
      itemEnchants.forEach((e) => {
          if (e.data?.hit) {
              e.data.hit({ player: damagingEntity, level: romanToInt(e.lore.slice(e.data.display.length + 1)), hitEntity, item });
          }
      });
  }
});
world.afterEvents.entityHurt.subscribe(({ hurtEntity, damageSource, damage }) => {
  if (!damageSource) return;
  if (damageSource.damagingEntity instanceof Player) {
    /**
     * @type {Container}
     */
    //@ts-ignore
      const inv = damagingEntity.getComponent("inventory").container;
      const item = inv.getItem(damageSource.damagingEntity.selectedSlotIndex);
      if (!item)
          return;
      const itemEnchants = item.getLore().map(lore => { return { data: enchants[names[lore.split(" ")[0]]], lore }; });
      itemEnchants.forEach((e) => {
          if (e.data?.hurt) {
              e.data.hurt({ player: damageSource.damagingEntity, level: romanToInt(e.lore.slice(e.data.display.length + 1)), hurtEntity, damage, item });
          }
      });
  }
});
world.beforeEvents.itemUse.subscribe(({ source, itemStack }) => {
  if (source instanceof Player) {
      const itemEnchants = itemStack.getLore().map(lore => { return { data: enchants[names[lore.split(" ")[0]]], lore }; });
      itemEnchants.forEach((e) => {
          if (e.data?.rightClick) {
              e.data.rightClick({ player: source, level: romanToInt(e.lore.slice(e.data.display.length + 1)), itemStack });
          }
      });
  }
});
world.beforeEvents.itemUseOn.subscribe((event) => {
  if (event.source instanceof Player) {
      const itemEnchants = event.itemStack.getLore().map(lore => { return { data: enchants[names[lore.split(" ")[0]]], lore }; });
      itemEnchants.forEach((e) => {
          if (e.data?.rightClickBlock)
              e.data.rightClickBlock({ player: event.source, level: romanToInt(e.lore.slice(e.data.display.length + 1)), item: event.itemStack, block: event.source.dimension.getBlock(event.faceLocation) });
      });
  }
});
world.afterEvents.playerBreakBlock.subscribe(({ player, block, brokenBlockPermutation }) => {
    
    /**
     * @type {Container}
     */
    //@ts-ignore
  const inv = player.getComponent("inventory").container;
  const item = inv.getItem(player.selectedSlotIndex);
  if (!item)
      return;
  const itemEnchants = item.getLore().map(lore => { return { data: enchants[names[lore.split(" ")[0]]], lore }; });
  itemEnchants.forEach((e) => {
      if (e.data?.blockBreak)
          e.data.blockBreak({ player, level: romanToInt(e.lore.slice(e.data.display.length + 1)), item, block, brokenBlockPermutation });
  });
});
function toRomanNumeral(num) {
  if (isNaN(num))
      return NaN;
  var digits = String(+num).split(""), key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
      "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
      "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], roman = "", i = 3;
  while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
function romanToInt(s) {
  let accumulator = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "I" && s[i + 1] === "V") {
          accumulator += 4;
          i++;
      }
      else if (s[i] === "I" && s[i + 1] === "X") {
          accumulator += 9;
          i++;
      }
      else if (s[i] === "X" && s[i + 1] === "L") {
          accumulator += 40;
          i++;
      }
      else if (s[i] === "X" && s[i + 1] === "C") {
          accumulator += 90;
          i++;
      }
      else if (s[i] === "C" && s[i + 1] === "D") {
          accumulator += 400;
          i++;
      }
      else if (s[i] === "C" && s[i + 1] === "M") {
          accumulator += 900;
          i++;
      }
      else {
          //@ts-ignore
          accumulator += romanHash[s[i]];
      }
  }
  return accumulator;
}
