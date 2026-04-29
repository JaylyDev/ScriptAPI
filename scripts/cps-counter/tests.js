import { world } from "@minecraft/server";
import { getPlayerCPS } from "./index";

world.beforeEvents.chatSend.subscribe((evd) => {
  evd.sender.runCommand(`say CPS: ${getPlayerCPS(evd.sender)}`);
});