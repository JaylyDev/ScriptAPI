import { world } from "mojang-minecraft";
import { getPlayerCPS } from "./index";

world.events.beforeChat.subscribe((evd) => {
  evd.sender.runCommand(`say CPS: ${getPlayerCPS(evd.sender)}`);
});