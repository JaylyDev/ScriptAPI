import { Container, world } from "@minecraft/server"
import { addEnchant, Enchant } from "./index"

const bleedEnchant = new Enchant({
    name: "bleed",
    display: "§cBleed"
})

bleedEnchant.onHurt(data => {
    data.hurtEntity.runCommandAsync(`damage @s 2`)
})

world.beforeEvents.chatSend.subscribe(data => {
    /**
     * @type {Container}
     */
    //@ts-ignore
    const inv = data.sender.getComponent("inventory").container
    const item = inv.getItem(data.sender.selectedSlotIndex)
    addEnchant(item, 'bleed', 5)
    inv.setItem(data.sender.selectedSlotIndex, item)
})
