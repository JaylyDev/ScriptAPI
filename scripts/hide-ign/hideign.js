// Script examples for ScriptAPI
// Author: Jayly#1397 <undefined>
import { world } from "mojang-minecraft";

function hideign() {
  for (let entity of world.getDimension("overworld").getEntities()) {
    if (entity.nameTag !== "") {
      entity.jayly = {
        nameTag: entity.nameTag,
      };
      entity.nameTag = "";
    }
  }
}

world.events.beforeChat.subscribe(callback => {
  const { message, sender } = callback;
  const commandmsg = (bool) => `tellraw @s {"rawtext":[{"translate":"commands.gamerule.success","with":["showign", "${bool}"]}]}`;

  if (message.startsWith("!showign true")) {
    world.events.tick.unsubscribe(hideign);
    callback.cancel = true;
    for (let entity of world.getDimension("overworld").getEntities()) {
      if (entity.jayly) {
        entity.nameTag = entity.jayly.nameTag;
        delete entity.jayly;
      }
    };
    sender.runCommand(commandmsg(true));
  } else if (message.startsWith("!showign false")) {
    world.events.tick.subscribe(hideign);
    callback.cancel = true;
    sender.runCommand(commandmsg(false));
  };
});