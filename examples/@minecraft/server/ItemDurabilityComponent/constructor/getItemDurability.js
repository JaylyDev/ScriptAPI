import { world } from "@minecraft/server";

const player = world.getPlayers()[0];
const inventory = player.getComponent("inventory");
const slot = inventory.container.getSlot(player.selectedSlotIndex);
let durabilityComp = slot.getItem().getComponent("durability");
player.sendMessage('Item Durability: ' + (durabilityComp.maxDurability - durabilityComp.damage) + '/' + durabilityComp.maxDurability);
