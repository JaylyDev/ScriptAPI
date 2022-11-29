import { system } from "@minecraft/server";

// Cancel termination of a script runtime due to a violation of the performance
// watchdog system.
system.events.beforeWatchdogTerminate.subscribe((eventData) => {
  eventData.cancel = true;
});