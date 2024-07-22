import { system } from "@minecraft/server";

const runId = system.run(() => {
  console.log("Running callback function...");
});
