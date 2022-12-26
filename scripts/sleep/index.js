// Script examples for ScriptAPI
// Author: Aex66 <Bedrock Scripting API>

import { system } from "@minecraft/server";
import { setTimeout } from "timers/timers";

/**
 * sleep
 * @param {number} ms miliseconds
 */
export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
/**
 * sleep
 * @param {number} tick tick
 */
export function sleepTick(tick) {
  return new Promise((resolve) => {
    const id = system.runSchedule(() => {
      resolve();
      system.clearRunSchedule(id);
    }, tick);
  });
}