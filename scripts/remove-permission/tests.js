import { world } from "@minecraft/server";
import { removePermission } from "./index";

removePermission([...world.getPlayers()][0]);