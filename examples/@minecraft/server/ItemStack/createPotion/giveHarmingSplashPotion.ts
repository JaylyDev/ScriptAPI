import { ItemStack, world } from "@minecraft/server";
import { MinecraftPotionEffectTypes, MinecraftPotionLiquidTypes, MinecraftPotionModifierTypes } from "@minecraft/vanilla-data";

const item = ItemStack.createPotion({
  effect: MinecraftPotionEffectTypes.Harming,
  liquid: MinecraftPotionLiquidTypes.Splash,
  modifier: MinecraftPotionModifierTypes.Long
})

for (const player of world.getAllPlayers()) {
  player.getComponent("inventory").container.addItem(item);
}
