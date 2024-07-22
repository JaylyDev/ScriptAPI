import {
  Vector3Utils,
  VECTOR3_NORTH,
  VECTOR3_WEST,
  VECTOR3_EAST,
  VECTOR3_SOUTH,
} from "@minecraft/math";
import { Entity } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

const VECTOR3_NORTHWEST = Vector3Utils.add(VECTOR3_NORTH, VECTOR3_WEST);
const VECTOR3_NORTHEAST = Vector3Utils.add(VECTOR3_NORTH, VECTOR3_EAST);
const VECTOR3_SOUTHWEST = Vector3Utils.add(VECTOR3_SOUTH, VECTOR3_WEST);
const VECTOR3_SOUTHEAST = Vector3Utils.add(VECTOR3_SOUTH, VECTOR3_EAST);

/**
 * Get the blocks from player surroundings and set to obsidian
 */
export function createWallAroundEntity(entity: Entity) {
  const location = entity.location;
  const block = entity.dimension.getBlock(location);
  if (!block) return;
  const blockNorth = block.north();
  const blockSouth = block.south();
  const blockEast = block.east();
  const blockWest = block.west();
  const blockNorthWest = block.offset(VECTOR3_NORTHWEST)
  const blockNorthEast = block.offset(VECTOR3_NORTHEAST)
  const blockSouthWest = block.offset(VECTOR3_SOUTHWEST)
  const blockSouthEast = block.offset(VECTOR3_SOUTHEAST)
  const blocks = [
    blockNorth,
    blockSouth,
    blockEast,
    blockWest,
    blockNorthWest,
    blockNorthEast,
    blockSouthWest,
    blockSouthEast,
  ];
  // Check if the player have contact with cactus or sweet berry bush
  for (const block of blocks) {
    if (!block) continue;
    block.setType(MinecraftBlockTypes.Obsidian);
  }
}