import { Dimension, world } from "@minecraft/server";

/**
 * Get entities that are in specific dimension
 * @param {Dimension} dimension 
 * @param {import("@minecraft/server").EntityQueryOptions} [getEntities] 
 */
export function getEntities(dimension, getEntities) {
  return [...dimension.getEntities(getEntities)].filter((entity) => entity.dimension === dimension);
};

/**
 * Get players that are in specific dimension
 * @param {Dimension} dimension 
 * @param {import("@minecraft/server").EntityQueryOptions} [options] 
 */
export function getPlayers(dimension, options) {
  return [...world.getPlayers(options)].filter((player) => player.dimension === dimension);
};