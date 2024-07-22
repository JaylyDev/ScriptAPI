import { EntityQueryOptions, world } from "@minecraft/server";

const entityQueryOptions: EntityQueryOptions = {
  maxDistance: 100,
  scoreOptions: [
    { objective: "kills", minScore: 10 },
    { objective: "deaths", maxScore: 5 },
  ],
};

const filteredPlayers = world.getDimension("overworld").getPlayers(entityQueryOptions);
console.log("Filtered Players in Overworld:", filteredPlayers.map(player => player.name));
