/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import { SimulatedPlayer } from "./index";
import * as GameTest from "@minecraft/server-gametest";
import { ItemStack, MinecraftEffectTypes, MinecraftItemTypes } from "@minecraft/server";
GameTest.register("JaylySimulatedPlayerTests", "SimulatedPlayer", (test) => {
    const player = test.spawnSimulatedPlayer({
        x: 1,
        y: 2,
        z: 0
    });
    const simulatedPlayer = new SimulatedPlayer(player, test);
    simulatedPlayer.addEffect(MinecraftEffectTypes.absorption, 1);
    simulatedPlayer.attack();
    simulatedPlayer.dimension.createExplosion(simulatedPlayer.location, 5, {});
    simulatedPlayer.giveItem(new ItemStack(MinecraftItemTypes.acaciaBoat));
    simulatedPlayer.runCommandAsync("scoreboard players add @s money 1");
    simulatedPlayer.kick("All tasks completed.");
    test.succeed();
}).tag(GameTest.Tags.suiteDefault);
