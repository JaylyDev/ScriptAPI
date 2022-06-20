// JaylyDev

import { world } from "mojang-minecraft";

world.events.beforeChat.subscribe((eventData) => {
  let { message } = eventData;

  if (message == "!list") {
    for (let player of world.getPlayers()) {
      player.runCommand(`say ${player.dimension.id}`);

      // returns "[Player] minecraft:overworld"
    }
  }
});
