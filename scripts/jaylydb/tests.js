import { world } from "@minecraft/server";
import * as perf from "./tests/perf";
import * as exists from "./tests/exists";
import * as sync from "./tests/sync";
import * as corruptFix from "./tests/corruptFix";

world.afterEvents.worldInitialize.subscribe(() => {
    console.log("Starting benchmark");
    exists.Main();
    perf.Main();
    sync.Main();
    corruptFix.Main();
    console.log("Benchmark complete");
});
