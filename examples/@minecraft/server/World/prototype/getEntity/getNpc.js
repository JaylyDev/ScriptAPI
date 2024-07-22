import { world } from "@minecraft/server";

// Entity::id - format: '-451021564564561'
const entityId = world.getDimension('overworld').spawnEntity('minecraft:npc', { x: 0, y: 70, z: 0 }, { initialPersistence: true }).id;
world.getEntity(entityId).typeId // minecraft:npc