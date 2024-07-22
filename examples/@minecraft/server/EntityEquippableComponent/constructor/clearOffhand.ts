import { EquipmentSlot, Player } from "@minecraft/server";

function clearOffhand(player: Player) {
  const equippable = player.getComponent("minecraft:equippable");
  equippable.setEquipment(EquipmentSlot.Offhand); // Assuming undefined (empty slot) as an example
}