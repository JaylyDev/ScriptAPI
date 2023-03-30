/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import { Vector3, Player } from "@minecraft/server";
/**
 * @remarks
 * Sets a velocity for the entity to move with.
 * Fixes GameTest native player.setVelocity
 * @param {Vector3} velocity
 * @param {Player} player
 * @throws This function can throw errors.
*/
export declare function setVelocity(velocity: Vector3, player: Player): void;
