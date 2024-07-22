import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
  const navigationFloat = entity.getComponent("minecraft:navigation.float");
  navigationFloat.avoidDamageBlocks;
  navigationFloat.avoidPortals;
  navigationFloat.avoidSun;
  navigationFloat.avoidWater;
  navigationFloat.canBreach;
  navigationFloat.canBreakDoors;
  navigationFloat.canFloat;
  navigationFloat.canJump;
  navigationFloat.canOpenDoors;
  navigationFloat.canOpenIronDoors;
  navigationFloat.canPassDoors;
  navigationFloat.canPathFromAir;
  navigationFloat.canPathOverLava;
  navigationFloat.canPathOverWater;
  navigationFloat.canSink;
  navigationFloat.canSwim;
  navigationFloat.canWalk;
  navigationFloat.canWalkInLava;
  navigationFloat.isAmphibious;
  navigationFloat.isValid();
}
