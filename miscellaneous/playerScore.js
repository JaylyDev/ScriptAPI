// mrpatches123

import { world } from "mojang-minecraft";

world.events.beforeChat.subscribe((eventData) => {
  const { sender, message } = eventData;

  if (message == "score")
    sender.runCommand(
      "say " +
        Number(
          sender
            .runCommand(`scoreboard players test @s Bool *`)
            .statusMessage.match(/-?\d+/)
        )
    );
});
