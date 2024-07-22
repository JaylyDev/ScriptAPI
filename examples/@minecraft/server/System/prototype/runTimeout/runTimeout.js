import { TicksPerSecond, system } from "@minecraft/server";

system.runTimeout(() => {
  console.log("Running callback function after delay...");
}, TicksPerSecond * 5); // Tick delay of 5 seconds
