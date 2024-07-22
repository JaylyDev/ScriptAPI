import { world } from "@minecraft/server";

const id = '-0123456789101'; // entity.id
const entity = world.getEntity(id);
entity.runCommandAsync('say hello');