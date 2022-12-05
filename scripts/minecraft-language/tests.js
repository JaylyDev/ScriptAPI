import { world } from "@minecraft/server";
import { MinecraftLanguageKeys } from "./index";

world.events.beforeChat.subscribe((event) => {
  event.targets = [];
  event.sendToTargets = true;
});

world.events.chat.subscribe((event) => {
  /**
   * @type {import("@minecraft/server").RawMessage}
   */
  // @ts-ignore
  const rawtext = MinecraftLanguageKeys["chat.type.text"];
  rawtext.with = [event.sender.name, event.message];
  world.say(rawtext);
});