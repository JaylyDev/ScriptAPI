import { EntityQueryOptions, world } from "@minecraft/server";

const entityQueryOptions: EntityQueryOptions = {
  minLevel: 10,
  maxLevel: 30,
  tags: ["team_red"],
  excludeNames: ["Admin"],
};

const filteredPlayers = world.getPlayers(entityQueryOptions);
console.log("Filtered Players:", filteredPlayers.map(player => player.name));
