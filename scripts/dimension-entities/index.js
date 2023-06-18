// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Dimension, world } from "@minecraft/server";

/**
 * Get entities that are in specific dimension
 * @param {Dimension} dimension 
 * @param {import("@minecraft/server").EntityQueryOptions} [options] 
 */
export function getEntities(dimension, options) {
  const mergedOptions = {
    minDistance: 0,
    ...(typeof options.minDistance !== 'undefined' ? { minDistance: options.minDistance } : {})
  };
  return dimension.getEntities(mergedOptions);
};

/**
 * Get players that are in specific dimension
 * @param {Dimension} dimension 
 * @param {import("@minecraft/server").EntityQueryOptions} [options] 
 */
export function getPlayers(dimension, options) {
  const mergedOptions = {
    minDistance: 0,
    ...(typeof options.minDistance !== 'undefined' ? { minDistance: options.minDistance } : {})
  };
  return dimension.getPlayers(mergedOptions);
};