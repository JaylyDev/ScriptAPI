import { world } from "@minecraft/server";

const pig = world.getDimension("nether").spawnEntity("minecraft:pig", { x: 0, y: 0, z: 0 });
const ageable = pig.getComponent("ageable");
const growUpEvent = ageable.growUp.eventName;
world.sendMessage(`Pig ageable duration: ${ageable.duration}`);
world.sendMessage(`Pig grow up event: ${growUpEvent}`);
world.sendMessage(`Pig drop items: ${ageable.getDropItems()}`);
world.sendMessage(`Pig feed items: ${ageable.getFeedItems()}`);
