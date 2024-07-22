import { Container, ItemStack, Player, world } from "@minecraft/server";

// Custom function to add an item to the inventory
function addItemToInventory(itemStack: ItemStack, container: Container) {
  return container.addItem(itemStack);
}

// Custom function to move an item within the inventory
function moveItemWithinInventory(
  fromSlot: number,
  toSlot: number,
  container: Container
) {
  container.moveItem(fromSlot, toSlot, container);
}

// Custom function to transfer an item from inventory to another container
function transferItemToContainer(
  fromSlot: number,
  fromContainer: Container,
  toContainer: Container
) {
  return fromContainer.transferItem(fromSlot, toContainer);
}

function moveItemBetweenPlayers(fromPlayer: Player, toPlayer: Player) {
  const inventory = fromPlayer.getComponent("inventory");
  const toInventory = toPlayer.getComponent("inventory");
  fromPlayer.sendMessage(
    `additionalSlotsPerStrength: ${inventory.additionalSlotsPerStrength}`
  );
  fromPlayer.sendMessage(`canBeSiphonedFrom: ${inventory.canBeSiphonedFrom}`);
  fromPlayer.sendMessage(`containerType: ${inventory.containerType}`);
  fromPlayer.sendMessage(`inventorySize: ${inventory.inventorySize}`);
  fromPlayer.sendMessage(`private: ${inventory.private}`);
  fromPlayer.sendMessage(`restrictToOwner: ${inventory.restrictToOwner}`);
  fromPlayer.sendMessage(`isValid: ${inventory.isValid()}`);
  const container = inventory.container;

  // Example usage of the custom functions
  const newItemStack = new ItemStack("apple", 10); // Assuming "apple" is a valid item
  const addedItem = addItemToInventory(newItemStack, container);
  if (addedItem) {
    console.log("Item added to inventory:", addedItem);
  }

  const sourceSlot = 2;
  const destinationSlot = 5;
  moveItemWithinInventory(sourceSlot, destinationSlot, container);

  const toContainer = toInventory.container; // Assuming 'someOtherContainer' is an instance of another container
  const transferredItem = transferItemToContainer(0, container, toContainer);
  if (transferredItem) {
    console.log("Item transferred to another container:", transferredItem);
  }
}
