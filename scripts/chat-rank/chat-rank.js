import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((data) => {
  world.sendMessage({
    rawtext: [
      {
        text:
          "§l§8[§r" +
          (data.sender
            .getTags()
            .find((tag) => tag.startsWith("rank:"))
            ?.substring(5)
            ?.replaceAll("--", "§r§l§8][§r") ?? "§bMember") +
          `§l§8]§r §7${data.sender.nameTag}:§r ${data.message}`,
      },
    ],
  });
  data.cancel = true;
});
