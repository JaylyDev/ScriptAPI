// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world } from "@minecraft/server";
import { sleep as sleepMS } from "./index";
import { sleep as sleepTick } from "./tick";

sleepMS(1000).then(() => {
  world.sendMessage("Delayed for 1 second.");
});

sleepTick(100).then(() => {
  world.sendMessage("Delayed for 100 ticks (5 seconds).");
});