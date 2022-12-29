import { world } from "@minecraft/server";
import { setVelocity } from "./index.js";

world.events.chat.subscribe(({sender}) => {
  setVelocity(sender.viewDirection, sender);
});