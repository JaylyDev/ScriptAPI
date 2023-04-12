// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
import { world } from "@minecraft/server";
import { getGamemode } from "get-gamemode/index";

world.beforeEvents.chatSend.subscribe((event) => {
  if (event.message !== 'gamemode') return;
  const gamemode = getGamemode(event.sender);
  event.sender.sendMessage('GameMode' + gamemode);
})