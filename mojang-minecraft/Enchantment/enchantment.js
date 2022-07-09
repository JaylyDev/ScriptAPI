import { Enchantment, EnchantmentList, EntityInventoryComponent, ItemEnchantsComponent, MinecraftEnchantmentTypes, Player, world } from "mojang-minecraft";

(
  /**
   * @param {Player} player 
   * @param {Enchantment} enchantment
   */
  function (player, enchantment) {
    /**
     * @type {EntityInventoryComponent}
     */
    // @ts-ignore
    const InventoryComponent = player.getComponent("inventory");

    if (!InventoryComponent) throw new Error("Inventory component not found");

    const item = InventoryComponent.container.getItem(player.selectedSlot);

    if (!item) return;

    /**
     * @type {ItemEnchantsComponent}
     */
    const Enchantments = item.getComponent("enchantments");

    if (!Enchantments) {
      console.warn("Enchantments component not found");
      return;
    };

    const { enchantments } = Enchantments;

    if (enchantments.hasEnchantment(enchantment.type)) {
      enchantments.removeEnchantment(enchantment.type); // remove enchantments
    };

    enchantments.addEnchantment(enchantment); // add enchantment
  }
)(
  [...world.getPlayers()][0], // player
  new Enchantment(MinecraftEnchantmentTypes.unbreaking, 3) // enchantment
);