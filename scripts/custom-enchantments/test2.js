// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

// https://github.com/JaylyDev/ScriptAPI/issues/112

import { InventoryComponentContainer, world } from "@minecraft/server"
import { addEnchant, Enchant } from "./index"

const bleedEnchant = new Enchant({
    name: "bleed",
    display: "§cBleed"
})

bleedEnchant.onHurt(data => {
    data.hurtEntity.runCommandAsync(`say testeo`)
    world.sendMessage("hello world")
})

world.events.beforeChat.subscribe(data => {
    /**
     * @type {InventoryComponentContainer}
     */
    //@ts-ignore
    const inv = data.sender.getComponent("inventory").container
    const item = inv.getItem(data.sender.selectedSlot)
    addEnchant(item, 'bleed', 5)
    inv.setItem(data.sender.selectedSlot, item)
})
