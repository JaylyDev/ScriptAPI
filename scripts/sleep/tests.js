// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { world } from "@minecraft/server";
import { sleep as sleepMS } from "./sleep";
import { sleep as sleepTick } from "./tick";

sleepMS(1000).then(() => {
  world.sendMessage("Delayed for 1 second.");
});

sleepTick(100).then(() => {
  world.sendMessage("Delayed for 100 ticks (5 seconds).");
});