// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world } from "@minecraft/server"
import { ActionFormData } from "@minecraft/server-ui"

const gui = new ActionFormData()
gui.title('§l§bServer Gui')
gui.body('§l§fHere are all functions you can use in this gui')
gui.button('§l§aShop')
gui.button('§l§cWarps')
gui.button('§l§8Teleport request')
gui.button('§l§bBank')
gui.button('§l§eMoney Transactions')

world.beforeEvents.itemUse.subscribe(data => {
    const source = data.source
    if (!(source instanceof Player)) return;
    if (data.itemStack.typeId === 'minecraft:compass') gui.show(source).then(result => {
        if (result.canceled) console.warn('GUI was canceled')
        if (result.selection === 0) source.runCommandAsync('give @s diamond 1')
        if (result.selection === 1) source.runCommandAsync('give @s diamond 1')
        if (result.selection === 2) source.runCommandAsync('give @s diamond 1')
        if (result.selection === 3) source.runCommandAsync('give @s diamond 1')
        if (result.selection === 2) source.runCommandAsync('give @s diamond 1')
    })
});
