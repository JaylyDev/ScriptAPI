import { world } from "@minecraft/server";
export function runCommandAsync(commandString) {
    return world.getDimension("overworld").runCommandAsync(commandString);
}
;
runCommandAsync("setblock 0 100 0 air");
