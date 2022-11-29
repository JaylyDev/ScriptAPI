import { world } from "mojang-minecraft"
import { addEnchant, Enchant } from "./index"

const bleedEnchant = new Enchant({
    name: "bleed",
    display: "§cBleed"
})

bleedEnchant.onHurt(data => {
    data.hurtEntity.runCommand(`damage @s 2`)
})

world.events.beforeChat.subscribe(data => {
    const inv = data.sender.getComponent("inventory").container
    const item = inv.getItem(data.sender.selectedSlot)
    addEnchant(item, 'bleed', 5)
    inv.setItem(data.sender.selectedSlot, item)
})
