import { world } from "mojang-minecraft"
import { ActionFormData } from "mojang-minecraft-ui"

const gui = new ActionFormData()
gui.title('§l§bServer Gui')
gui.body('§l§fHere are all functions you can use in this gui')
gui.button('§l§aShop')
gui.button('§l§cWarps')
gui.button('§l§8Teleport request')
gui.button('§l§bBank')
gui.button('§l§eMoney Transactions')

world.events.beforeItemUse.subscribe(data => {
    const source = data.source
    if (data.item.id === 'minecraft:compass') gui.show(source).then(result => {
        if (result.isCanceled) console.warn('GUI was canceled')
        if (result.selection === 0) source.runCommand('give @s diamond 1')
        if (result.selection === 1) source.runCommand('give @s diamond 1')
        if (result.selection === 2) source.runCommand('give @s diamond 1')
        if (result.selection === 3) source.runCommand('give @s diamond 1')
        if (result.selection === 2) source.runCommand('give @s diamond 1')
    })
});
