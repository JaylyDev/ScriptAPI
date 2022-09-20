import { world, MinecraftEffectTypes, MinecraftItemTypes, ItemStack, ExplosionOptions, Location } from "mojang-minecraft";
import { SpawnSimulatedPlayer } from "./index.js";

let host = [...world.getPlayers()][0];

SpawnSimulatedPlayer(host, function (simulatedPlayer) {
  simulatedPlayer.addEffect(MinecraftEffectTypes.absorption, 1);
  simulatedPlayer.attack();
  simulatedPlayer.dimension.createExplosion(simulatedPlayer.location, 5, new ExplosionOptions());
  simulatedPlayer.giveItem(new ItemStack(MinecraftItemTypes.acaciaBoat));
  simulatedPlayer.runCommandAsync("scoreboard players add @s money 1");
  simulatedPlayer.teleport(new Location(0, 0, 0), world.getDimension("nether"), 0, 0);
  simulatedPlayer.kick("All tasks completed.");
});