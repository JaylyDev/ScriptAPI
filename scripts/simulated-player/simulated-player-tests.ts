/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import { SimulatedPlayer } from "./SimulatedPlayer.js";
import * as GameTest from "@minecraft/server-gametest";
import { BlockLocation, ItemStack, Location, MinecraftEffectTypes, MinecraftItemTypes } from "@minecraft/server";

GameTest.register("JaylySimulatedPlayerTests", "SimulatedPlayer", (test) => {
  const player = test.spawnSimulatedPlayer(new BlockLocation(1, 2, 0));
  const simulatedPlayer = new SimulatedPlayer(player, test);

  simulatedPlayer.addEffect(MinecraftEffectTypes.absorption, 1);
  simulatedPlayer.attack();
  simulatedPlayer.dimension.createExplosion(new Location(simulatedPlayer.location.x, simulatedPlayer.location.y, simulatedPlayer.location.z), 5, {});
  simulatedPlayer.giveItem(new ItemStack(MinecraftItemTypes.acaciaBoat));
  simulatedPlayer.runCommandAsync("scoreboard players add @s money 1");
  simulatedPlayer.kick("All tasks completed.");

  test.succeed();
}).tag(GameTest.Tags.suiteDefault);