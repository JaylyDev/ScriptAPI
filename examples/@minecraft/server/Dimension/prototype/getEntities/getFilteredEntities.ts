import { EntityQueryOptions, GameMode, world } from "@minecraft/server";

const options: EntityQueryOptions = {
  families: ["mob", "animal"],
  excludeTypes: ["cow"],
  maxDistance: 50,
  excludeGameModes: [GameMode.creative, GameMode.spectator],
};

const filteredEntities = world.getDimension("overworld").getEntities(options);
console.log("Filtered Entities:", filteredEntities.map(entity => entity.typeId));
