// Script examples for ScriptAPI
// Author: WavePlayz <Bedrock Addons>
// command: /tag @s add rank:Owner
import { world } from "@minecraft/server";

world.events.beforeChat.subscribe((eventData) => {
  const { message, sender } = eventData;

  let rank = sender
    .getTags()
    .find((tag) => tag.startsWith("rank:"))
    ?.split(":")[1];

  if (!rank) return;

  eventData.cancel = true;

  world.say(rank + " " + sender.name + ": " + message);
});