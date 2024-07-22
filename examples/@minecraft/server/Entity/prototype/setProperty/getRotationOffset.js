import { world } from "@minecraft/server";

const tileEntity = world.getDimension('overworld').getEntities({ type: 'create:dummy' })[0];
tileEntity.setProperty("create:rotation_offset", 1)
console.warn(tileEntity.getProperty("create:rotation_offset"))