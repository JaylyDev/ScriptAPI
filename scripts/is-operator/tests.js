import { world } from "@minecraft/server";
import { isOperator } from "./index";

isOperator([...world.getPlayers()][0]);