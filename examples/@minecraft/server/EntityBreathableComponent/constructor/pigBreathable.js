import { world } from "@minecraft/server";

const pig = world.getDimension('overworld').getEntities({ type: 'minecraft:pig' })[0];
const breathable = pig.getComponent("breathable");
breathable.breathesAir;
breathable.breathesLava;
breathable.breathesSolids;
breathable.breathesWater;
breathable.generatesBubbles;
breathable.inhaleTime;
breathable.suffocateTime;
breathable.totalSupply;
breathable.getBreatheBlocks();
breathable.getNonBreatheBlocks();
breathable.setAirSupply(100); // Assuming 100 as an example value
