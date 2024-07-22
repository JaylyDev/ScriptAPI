import { world } from "@minecraft/server"

const entity = world.getDimension('overworld').getEntities({ type: 'create:dummy' })[0];
entity.setProperty("create:rotation_offset", 1)
console.warn(entity.getProperty("create:rotation_offset"))