import { world } from "@minecraft/server";
import { hasPermission } from "./index";

hasPermission([...world.getPlayers()][0]);