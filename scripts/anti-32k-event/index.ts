// Script example for ScriptAPI
// Author: JaylyMC <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI

import { Entity, EntityInventoryComponent, ItemStack, system, TicksPerSecond, world } from '@minecraft/server';

/**
 * Represents an event indicating incompatible enchantments on an item.
 */
class IncompatibleEnchantmentAlertEvent {
    exceedMaxLevel: boolean;
    incompatibleEnchantmentType: boolean;
    enchantment: Enchantment;
    item: ItemStack;
    source: Entity;
    /**
     * Creates a new instance of IncompatibleEnchantmentAlertEvent.
     * @param {boolean} exceedMaxLevel - Indicates whether the enchantment exceeds its maximum level.
     * @param {boolean} incompatibleEnchantmentType - Indicates whether the enchantment type is incompatible.
     * @param {Enchantment} enchantment - The enchantment causing the alert.
     * @param {ItemStack} item - The item with the incompatible enchantment.
     * @param {Entity} source - The entity triggering the alert.
     */
    constructor(exceedMaxLevel: boolean, incompatibleEnchantmentType: boolean, enchantment: Enchantment, item: ItemStack, source: Entity) {
        this.exceedMaxLevel = exceedMaxLevel;
        this.incompatibleEnchantmentType = incompatibleEnchantmentType;
        this.enchantment = enchantment;
        this.item = item;
        this.source = source;
    };
};

/**
 * Signal class for subscribing to events related to incompatible enchantments.
 */
class IncompatibleEnchantmentAlertEventSignal {
    /**
     * Subscribes to the incompatible enchantment alert event and specifies a callback function.
     * @param {(arg0: IncompatibleEnchantmentAlertEvent) => void} callback - The callback function to be invoked when an alert occurs.
     *   Accepts a single parameter of type IncompatibleEnchantmentAlertEvent.
     * @returns {number} - An identifier for the subscription, which can be used for unsubscribing.
     */
    subscribe(callback: (arg0: IncompatibleEnchantmentAlertEvent) => void): number {
        return system.runInterval(function () {
            for (const player of world.getAllPlayers()) {
                const inventory = player.getComponent(EntityInventoryComponent.componentId);
                for (let index = 0; index < inventory.container.size; index++) {
                    const item = inventory.container.getItem(index);
                    if (!item) continue;

                    const enchantable = item.getComponent(ItemEnchantableComponent.componentId);

                    for (const enchantment of enchantable.getEnchantments()) {
                        const enchantmentIsIncompatible = enchantable.canAddEnchantment(enchantment) === false;
                        if (typeof enchantment.type !== 'object') continue;
                        const enchantmentExcceedsMaxLevel = enchantment.level > enchantment.type.maxLevel;
                        if (!enchantmentIsIncompatible && !enchantmentExcceedsMaxLevel)
                            continue;
                        callback(new IncompatibleEnchantmentAlertEvent(enchantmentExcceedsMaxLevel, enchantmentIsIncompatible, enchantment, item, player));
                    }
                }
            }
        }, TicksPerSecond);
    };

    /**
     * Unsubscribes from the incompatible enchantment alert event using the provided subscription identifier.
     * @param {number} id - The identifier of the subscription to be removed.
     */
    unsubscribe(id: number) {
        system.clearRun(id);
    };
};

/**
 * Global instance of IncompatibleEnchantmentAlertEventSignal for easy access and usage.
 * @type {IncompatibleEnchantmentAlertEventSignal}
 */
export const incompatibleEnchantment: IncompatibleEnchantmentAlertEventSignal = new IncompatibleEnchantmentAlertEventSignal();