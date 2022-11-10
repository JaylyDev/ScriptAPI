import { world } from "@minecraft/server";
import { isNotOp } from "./index";

isNotOp([...world.getPlayers()][0]);