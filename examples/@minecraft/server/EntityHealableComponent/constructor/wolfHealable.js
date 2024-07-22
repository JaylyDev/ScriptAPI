import { world } from "@minecraft/server";

const entity = world.getDimension('overworld').getEntities({ type: 'minecraft:wolf' })[0];
const healable = entity.getComponent("healable");
healable.forceUse;
healable.getFeedItems();
healable.isValid();
