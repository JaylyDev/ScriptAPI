import { world } from "@minecraft/server";

world.events.beforeChat.subscribe((data) => {
    data.sendToTargets = true
    data.setTargets([])
})

world.events.chat.subscribe((data) => {
  try {
      data.sender.runCommandAsync(`tellraw @a ${JSON.stringify({rawtext:[{text: "§l§8[§r" + ((data.sender.getTags().find(tag => tag.startsWith("rank:"))?.substring(5)?.replaceAll("--", "§r§l§8][§r")) ?? "§bMember") + `§l§8]§r §7${data.sender.nameTag}:§r ${data.message}`}]})}`)
  } catch (error) {
    return console.warn(`${error}, ${error.stack}`);
  }
}); 
