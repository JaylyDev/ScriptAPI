import { system } from "mojang-minecraft";

system.events.beforeWatchdogTerminate.subscribe((eventData) => {
  eventData.cancel = true;
});