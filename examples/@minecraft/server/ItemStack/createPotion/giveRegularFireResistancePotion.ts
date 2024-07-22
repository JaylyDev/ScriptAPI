import { ItemStack, world } from "@minecraft/server";
import { MinecraftPotionEffectTypes, MinecraftPotionLiquidTypes, MinecraftPotionModifierTypes } from "@minecraft/vanilla-data";

const item = ItemStack.createPotion({
  effect: MinecraftPotionEffectTypes.FireResistance,
  liquid: MinecraftPotionLiquidTypes.Regular,
  modifier: MinecraftPotionModifierTypes.Strong
})

for (const player of world.getAllPlayers()) {
  player.getComponent("inventory").container.addItem(item);
}
