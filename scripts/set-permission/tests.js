import { world } from "@minecraft/server";
import { setPermission } from "./index";

setPermission([...world.getPlayers()][0]);