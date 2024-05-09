// Script example for ScriptAPI
// Author: Smell of curry <https://github.com/smell-of-curry>
//         JaylyMC <https://github.com/JaylyDev>
//         Remember M9 <https://github.com/Remember-M9>
// Project: https://github.com/JaylyDev/ScriptAPI

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
import * as mc from "@minecraft/server";

const { world, system } = mc;

function onTick() {
  for (const player of world.getPlayers()) {
    const inventory = player.getComponent("minecraft:inventory") as mc.EntityInventoryComponent;
    const { container, inventorySize } = inventory;
    if (container.emptySlotsCount == inventorySize) continue;
    for (let slot = 0; slot < inventorySize; slot++) {
      const item = container.getItem(slot);
      if (!item) continue;
      const enchantable = item.getComponent("minecraft:enchantable") as mc.ItemEnchantableComponent;
      if (!enchantable) continue;
      for (const enchantment of enchantable.getEnchantments()) {
        if (enchantable.canAddEnchantment(enchantment)) continue;
        enchantable.removeEnchantment(enchantment.type);
      }
    }
  }
};


system.runInterval(onTick);
