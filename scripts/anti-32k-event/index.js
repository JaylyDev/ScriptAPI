import { Enchantment, Entity, EntityInventoryComponent, ItemEnchantsComponent, ItemStack, system, TicksPerSecond, world } from '@minecraft/server';
const tickInterval = TicksPerSecond;
class IncompatibleEnchantmentAlertEvent {
    constructor(exceedMaxLevel, incompatibleEnchantmentType, enchantment, item, source) {
        /**
         * @type {boolean}
         */
        this.exceedMaxLevel = exceedMaxLevel;
        /**
         * @type {boolean}
         */
        this.incompatibleEnchantmentType = incompatibleEnchantmentType;
        /**
         * @type {Enchantment}
         */
        this.enchantment = enchantment;
        /**
         * @type {ItemStack}
         */
        this.item = item;
        /**
         * @type {Entity}
         */
        this.source = source;
    }
    ;
}
;
class IncompatibleEnchantmentAlertEventSignal {
    /**
   * @param {(arg0: IncompatibleEnchantmentAlertEvent) => void} callback
   */
    subscribe(callback) {
        return system.runInterval(function () {
            for (const player of world.getAllPlayers()) {
                /**
                 * @type {EntityInventoryComponent}
                 */
                // @ts-ignore
                const inventory = player.getComponent(EntityInventoryComponent.componentId);
                for (let index = 0; index < inventory.container.size; index++) {
                    const item = inventory.container.getItem(index);
                    /** @type {ItemEnchantsComponent} */
                    // @ts-ignore
                    const enchantments = item === null || item === void 0 ? void 0 : item.getComponent(ItemEnchantsComponent.componentId);
                    if (!item || !enchantments)
                        continue;
                    for (const enchantment of enchantments.enchantments) {
                        const enchantmentIsIncompatible = enchantments.enchantments.canAddEnchantment(new Enchantment(enchantment.type)) === false;
                        const enchantmentExcceedsMaxLevel = enchantment.level > enchantment.type.maxLevel;
                        if (!enchantmentIsIncompatible && !enchantmentExcceedsMaxLevel)
                            continue;
                        callback(new IncompatibleEnchantmentAlertEvent(enchantmentExcceedsMaxLevel, enchantmentIsIncompatible, enchantment, item, player));
                    }
                }
            }
        }, tickInterval);
    }
    ;
    unsubscribe(id) {
        system.clearRun(id);
    }
    ;
}
;
export const incompatibleEnchantment = new IncompatibleEnchantmentAlertEventSignal();
