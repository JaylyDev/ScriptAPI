// Script example for ScriptAPI
// Author: stackoverflow <https://stackoverflow.com/a/41957152>
// Project: https://github.com/JaylyDev/ScriptAPI
import { system } from "@minecraft/server";

/**
 * sleep
 * @param {number} ticks Amount of time, in ticks, before the timeouts will be
 * called.
 */
export function sleep(ticks) {
  return new Promise((resolve) => {
    system.runTimeout(resolve, ticks);
  });
};