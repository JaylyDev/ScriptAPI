import { system } from '@minecraft/server';

system.beforeEvents.watchdogTerminate.subscribe((event) => {
  event.cancel = true;
  console.warn(`[Watchdog] Canceled critical exception of type '${event.terminateReason}`);
});
