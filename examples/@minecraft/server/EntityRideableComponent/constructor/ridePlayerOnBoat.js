import { world } from "@minecraft/server";

const boat = world.getDimension('overworld').spawnEntity('minecraft:boat', { x: 0, y: 5, z: 0 });
const riderEntity = world.getAllPlayers()[0];  // Assuming you have an 'riderEntity' instance
const rideable = boat.getComponent("rideable");
rideable.controllingSeat;
rideable.crouchingSkipInteract;
rideable.interactText;
rideable.pullInEntities;
rideable.riderCanInteract;
rideable.seatCount;
rideable.addRider(riderEntity);
rideable.ejectRider(riderEntity);
rideable.ejectRiders();
rideable.getFamilyTypes();
rideable.getRiders();
rideable.getSeats();
rideable.isValid();
