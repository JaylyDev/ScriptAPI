// Script example for ScriptAPI
// Author: Aex66 <Bedrock Scripting API>
// Project: https://github.com/JaylyDev/ScriptAPI
import { system } from "@minecraft/server";

/**
 * sleep
 * @param {number} tick ticks
 */
export function sleep(tick) {
  return new Promise((resolve) => {
    const id = system.runInterval(() => {
      resolve();
      system.clearRun(id);
    }, tick);
  });
}
