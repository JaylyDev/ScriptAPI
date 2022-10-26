import { GameMode, MinecraftEffectTypes, world } from "@minecraft/server";
import { getEntities, getPlayers } from "dimension-entities/index";

const overworldEntities = getEntities(world.getDimension('overworld'));

for (const entity of overworldEntities) {
  entity.addEffect(MinecraftEffectTypes.absorption, 10);
};

const netherCreativePlayers = getPlayers(world.getDimension('nether'), {
  'gameMode': GameMode.creative
});

for (const player of netherCreativePlayers) {
  player.tell('Hello nether!');
}