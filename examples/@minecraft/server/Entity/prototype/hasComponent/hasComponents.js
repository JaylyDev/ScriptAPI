import { world } from "@minecraft/server";

const entity = world.getDimension('overworld').getEntities({ type: 'minecraft:villager' })[0];
entity.hasComponent("tameable");
entity.hasComponent("inventory");
entity.hasComponent("addrider");
entity.hasComponent("is_tamed");