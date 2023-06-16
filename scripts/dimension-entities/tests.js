import { GameMode, world } from "@minecraft/server";
import { getEntities, getPlayers } from "dimension-entities/index";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";

const overworldEntities = getEntities(world.getDimension('overworld'));

for (const entity of overworldEntities) {
  entity.addEffect(MinecraftEffectTypes.Absorption, 10);
};

const netherCreativePlayers = getPlayers(world.getDimension('nether'), {
  'gameMode': GameMode.creative
});

for (const player of netherCreativePlayers) {
  player.sendMessage('Hello nether!');
}