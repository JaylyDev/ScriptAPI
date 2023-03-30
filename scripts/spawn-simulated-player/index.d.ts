/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import * as MinecraftServer from "@minecraft/server";
import { SimulatedPlayer } from "../simulated-player/index";
/**
 * Spawns a simulated player
 * @param target The player the simulated player is going to spawn at
 * @param callback Implementation of the simulated player
 */
export declare function SpawnSimulatedPlayer(target: MinecraftServer.Player, callback: (player: SimulatedPlayer) => void): void;
