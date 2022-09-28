import { world } from "mojang-minecraft";

world.events.beforeChat.subscribe((data) => {
    data.sendToTargets = true
    data.targets = []
})

world.events.chat.subscribe((data) => {
  try {
      data.sender.runCommand(`tellraw @a ${JSON.stringify({rawtext:[{text: "§l§8[§r" + ((data.sender.getTags().find(tag => tag.startsWith("rank:"))?.substring(5)?.replaceAll("--", "§r§l§8][§r")) ?? "§bMember") + `§l§8]§r §7${data.sender.nameTag}:§r ${data.message}`}]})}`)
  } catch (error) {
    return (data.cancel = false), console.warn(`${error}, ${error.stack}`);
  }
}); 
