// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { world } from "@minecraft/server";
import { sleep as sleepMS } from "./index";
import { sleep as sleepTick } from "./tick";

sleepMS(1000).then(() => {
  world.say("Delayed for 1 second.");
});

sleepTick(100).then(() => {
  world.say("Delayed for 100 ticks (5 seconds).");
});