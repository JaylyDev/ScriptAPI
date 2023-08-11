import {
  world,
  ItemStack,
} from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import { SpawnSimulatedPlayer } from "./index.js";

let host = [...world.getPlayers()][0];

const money = world.scoreboard.getObjective("money") ?? world.scoreboard.addObjective("money", "money");

SpawnSimulatedPlayer(host, function (simulatedPlayer) {
  simulatedPlayer.addEffect(MinecraftEffectTypes.Absorption, 1);
  simulatedPlayer.attack();
  simulatedPlayer.dimension.createExplosion(simulatedPlayer.location, 5);
  simulatedPlayer.giveItem(new ItemStack("minecraft:acacia_boat"));
  money.addScore(simulatedPlayer, 1);
  simulatedPlayer.teleport({ x: 0, y: 0, z: 0 }, { dimension: simulatedPlayer.dimension, rotation: { x: 0, y: 0 }});
  simulatedPlayer.despawn();
});
