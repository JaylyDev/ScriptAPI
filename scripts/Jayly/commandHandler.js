import { world } from "mojang-minecraft";

function runCommand(command) {
    try {
        return world.getDimension('overworld').runCommand(command);
    } catch (e) {
        return JSON.parse(e)
    };
}
