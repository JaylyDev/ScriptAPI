import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
  const navigationFly = entity.getComponent("minecraft:navigation.fly");
  if (!navigationFly) continue;
  
  navigationFly.avoidDamageBlocks;
  navigationFly.avoidPortals;
  navigationFly.avoidSun;
  navigationFly.avoidWater;
  navigationFly.canBreach;
  navigationFly.canBreakDoors;
  navigationFly.canFloat;
  navigationFly.canJump;
  navigationFly.canOpenDoors;
  navigationFly.canOpenIronDoors;
  navigationFly.canPassDoors;
  navigationFly.canPathFromAir;
  navigationFly.canPathOverLava;
  navigationFly.canPathOverWater;
  navigationFly.canSink;
  navigationFly.canSwim;
  navigationFly.canWalk;
  navigationFly.canWalkInLava;
  navigationFly.isAmphibious;
  navigationFly.isValid();
}
