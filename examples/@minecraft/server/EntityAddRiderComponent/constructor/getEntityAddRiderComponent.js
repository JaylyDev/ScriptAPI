import { world } from "@minecraft/server";

const caveSpider = world.getDimension('overworld').getEntities({ type: 'minecraft:cave_spider' })[0];
const addRider = caveSpider.getComponent("addrider");
addRider.entityType;
addRider.spawnEvent;