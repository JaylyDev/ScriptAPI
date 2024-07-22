import { world } from "@minecraft/server";

const player = world.getPlayers()[0];
const inventory = player.getComponent("inventory");
const slot = inventory.container.getSlot(player.selectedSlotIndex);