/**
 * Minecraft Bedrock Anti Hacked Items
 * @license MIT
 * @author Smell of curry & JaylyMC
 * @version 1.1.0
 * --------------------------------------------------------------------------
 * This is a anti hacked items, meaning it checks a players inventory every
 * tick then it tests if they have any banned items, then checks if they have
 * items that have hacked enchants and clears the item from inventory
 * --------------------------------------------------------------------------
 */
import { MinecraftEnchantmentTypes, world, EntityInventoryComponent, system, ItemEnchantsComponent } from "@minecraft/server";

function onTick () {
  for (const player of world.getPlayers()) {
    /** @type {EntityInventoryComponent} */
    // @ts-ignore
    const inventory = player.getComponent("minecraft:inventory");
    const container = inventory.container;
    for (let i = 0; i < container.size; i++) {
      const item = container.getItem(i);
      if (!item) continue;
      /** @type {ItemEnchantsComponent} */
      // @ts-ignore
      const enchants = item.getComponent("enchantments");
      const enchantments = enchants.enchantments;
      let change = false;
      for (const Enchantment in MinecraftEnchantmentTypes) {
        const ItemEnchantment = enchantments.getEnchantment(MinecraftEnchantmentTypes[Enchantment]);
        if (!ItemEnchantment) continue;
        const remove = () => {
          enchantments.removeEnchantment(ItemEnchantment.type);
          change = true;
        };
        const changeLevel = () => {
          enchantments.removeEnchantment(ItemEnchantment.type);
          ItemEnchantment.level = ItemEnchantment.type.maxLevel;
          enchantments.addEnchantment(ItemEnchantment);
          change = true;
        };
        if (enchantments.slot === 0 && !enchantments.canAddEnchantment(MinecraftEnchantmentTypes[Enchantment])) remove();
        else if (ItemEnchantment.level > ItemEnchantment.type.maxLevel) changeLevel();
      }
      if (!change) continue;
      enchants.enchantments = enchantments;
      container.setItem(i, item);
    }
  }
};

system.runInterval(onTick);