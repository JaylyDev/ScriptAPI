import { world } from "@minecraft/server";

for (const player of world.getPlayers()) {
  const inventory = player.getComponent("inventory");
  const selectedItem = inventory.container.getItem(player.selectedSlotIndex);
  player.sendMessage("Selected Item: " + selectedItem.typeId);
}