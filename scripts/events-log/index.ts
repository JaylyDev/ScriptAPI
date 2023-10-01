// Script example for ScriptAPI
// Author: bot174 <https://github.com/bot174>
// Project: https://github.com/JaylyDev/ScriptAPI
import { system, world } from "@minecraft/server";

// This is a callback function. It will be called when the event is triggered.
// This code is run in an engine with JSON stringify exposes native objects directly.
const callback = (event: object) => {
  console.log(JSON.stringify(event));
  world.sendMessage(system.currentTick + ' - ' + event.constructor.name);
};

system.afterEvents.scriptEventReceive.subscribe(callback);

