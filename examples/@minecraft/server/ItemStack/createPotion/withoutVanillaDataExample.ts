import { ItemStack, world } from "@minecraft/server"

const item = ItemStack.createPotion({ effect: 'WaterBreath', liquid: 'Regular', modifier: 'Long' })
for (const player of world.getAllPlayers()) {
  player.getComponent("inventory").container.addItem(item)
}