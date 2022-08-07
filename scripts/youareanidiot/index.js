import { setInterval } from "../timers/timers.js";
import { world } from "mojang-minecraft";

export function YouAreAnIdiot () {
  setInterval(() => {
    world.getDimension("overworld").runCommandAsync("say You are an idiot hahahhahahhaha")
  }, 1000)
};
