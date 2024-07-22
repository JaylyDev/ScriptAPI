import { world } from "@minecraft/server";

const entity = world.getEntity('-10000000000');
const leashHolderEntity = world.getEntity('-10000000000');
const leashable = entity.getComponent("leashable");
leashable.softDistance;
leashable.leashTo(leashHolderEntity); // Assuming you have an 'leashHolderEntity' instance
leashable.unleash();
leashable.isValid();
