import { world } from "@minecraft/server";
import { setVelocity } from "./index.js";

world.afterEvents.chatSend.subscribe(({sender}) => {
  setVelocity(sender.getViewDirection(), sender);
});