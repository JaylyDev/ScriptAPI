// Script examples for ScriptAPI
// Author: Aex66 <Bedrock Scripting API>

import { system } from "@minecraft/server";

/**
 * sleep
 * @param {number} tick ticks
 */
export function sleep(tick) {
  return new Promise((resolve) => {
    const id = system.runSchedule(() => {
      resolve();
      system.clearRunSchedule(id);
    }, tick);
  });
}
