// Script example for ScriptAPI
// Author: stackoverflow <https://stackoverflow.com/a/41957152>
// Project: https://github.com/JaylyDev/ScriptAPI
import { setTimeout } from "timers/index";

/**
 * sleep
 * @param {number} ms miliseconds
 */
export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};