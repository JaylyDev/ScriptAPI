import { world } from "@minecraft/server";
import { getPlayerCPS } from "./index";

world.events.beforeChat.subscribe((evd) => {
  evd.sender.runCommandAsync(`say CPS: ${getPlayerCPS(evd.sender)}`);
});