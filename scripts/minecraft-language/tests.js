import { world } from "@minecraft/server";
import { MinecraftLanguageKeys } from "./index";

world.beforeEvents.chatSend.subscribe((event) => {
  event.setTargets([]);
  event.sendToTargets = true;
});

world.afterEvents.chatSend.subscribe((event) => {
  /**
   * @type {import("@minecraft/server").RawMessage}
   */
  // @ts-ignore
  const rawtext = MinecraftLanguageKeys["chat.type.text"];
  rawtext.with = [event.sender.name, event.message];
  world.sendMessage(rawtext);
});