import { world } from "mojang-minecraft";
import { setVelocity } from "./index.js";

world.events.chat.subscribe(({sender}) => {
  setVelocity(sender.viewVector, sender);
});