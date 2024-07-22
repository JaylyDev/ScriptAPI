import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event) => {
    world.sendMessage("Welcome to the server, " + event.player.name + '!');
});