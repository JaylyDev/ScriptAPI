import { world } from "@minecraft/server";

const spawnLocation = world.getDefaultSpawnLocation();
world.sendMessage(`Spawn location: ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}`);