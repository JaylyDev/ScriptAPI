import { world } from "@minecraft/server";

const gametime = world.getAbsoluteTime();
world.sendMessage("Current gametime: " + gametime);