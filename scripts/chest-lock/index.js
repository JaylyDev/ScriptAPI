import { EntityInventoryComponent, Items, ItemStack, MinecraftBlockTypes, MinecraftItemTypes, Player, world } from '@minecraft/server';

const chestsType = [
  MinecraftBlockTypes.chest,
  MinecraftBlockTypes.trappedChest
];

const key = MinecraftItemTypes.recoveryCompass;

world.beforeEvents.itemUseOn.subscribe((event) => {
  const player = event.source;
  if (!(player instanceof Player)) return;
  const block = player.dimension.getBlock(event.getBlockLocation());
  /** @type {EntityInventoryComponent} */
  // @ts-ignore
  const inventory = player.getComponent('inventory');

  if (chestsType.includes(block.type)) {
    if (Items.get(inventory.container.getItem(player.selectedSlot)?.typeId ?? 'minecraft:air') === key) {
      event.cancel = false;
    }
    else {
      event.cancel = true;
      player.onScreenDisplay.setActionBar('Chest is locked!');
    };
  };
});