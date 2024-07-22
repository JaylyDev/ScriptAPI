import { system } from "@minecraft/server";

const runId = system.run(() => {
  console.log("Running callback function...");
});

// Clear the run, so it will not run again.
system.clearRun(runId);
