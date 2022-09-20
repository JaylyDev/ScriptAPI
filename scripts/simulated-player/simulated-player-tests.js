/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import { SimulatedPlayer } from "./SimulatedPlayer.js";
import * as GameTest from "mojang-gametest";
import { BlockLocation, ExplosionOptions, ItemStack, MinecraftEffectTypes, MinecraftItemTypes } from "mojang-minecraft";
GameTest.register("JaylySimulatedPlayerTests", "SimulatedPlayer", function (test) {
    var player = test.spawnSimulatedPlayer(new BlockLocation(1, 2, 0));
    var simulatedPlayer = new SimulatedPlayer(player, test);
    simulatedPlayer.addEffect(MinecraftEffectTypes.absorption, 1);
    simulatedPlayer.attack();
    simulatedPlayer.dimension.createExplosion(simulatedPlayer.location, 5, new ExplosionOptions());
    simulatedPlayer.giveItem(new ItemStack(MinecraftItemTypes.acaciaBoat));
    simulatedPlayer.runCommandAsync("scoreboard players add @s money 1");
    simulatedPlayer.kick("All tasks completed.");
    test.succeed();
}).tag(GameTest.Tags.suiteDefault);
