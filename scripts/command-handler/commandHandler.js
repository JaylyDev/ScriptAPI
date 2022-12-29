import { world } from "@minecraft/server";

function runCommand(command) {
    try {
        return world.getDimension('overworld').runCommandAsync(command);
    } catch (e) {
        return JSON.parse(e)
    };
}
