import { world, EquipmentSlot } from "@minecraft/server";

const player = world.getPlayers()[0];
const equippable = player.getComponent("equippable");
const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);