// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { BlockType, Dimension, Entity, GameMode, Player, Vector3, world } from "@minecraft/server";
import { CameraShakeType, CloneMode, Difficulty, MaskMode } from "command-types/enums";
import { BlockProperties } from "./blockProperties";

export type Target = Entity | Dimension;
export type BlockState = `${string}=${string}`;

export function displayHelp (target: Target, page = 0, command?: string) {
  if (!!command) return target.runCommand('help ' + command);
  else return target.runCommand('help ' + page);
};

export class CameraShake {
  /**
   * Applies shaking to the players' camera with a specified intensity and duration.
   * @param player 
   * @param intensity 
   * @param seconds 
   * @param shakeType 
   * @returns 
   */
  applyShake (player: Player, intensity: number, seconds: number, shakeType: CameraShakeType) {
    return player.runCommand(`camerashake add @s ${intensity} ${seconds} ${shakeType}`);
  };
  stop (player: Player) {
    return player.runCommand(`camerashake stop @s`);
  };
};

/**
 * Clones blocks from one region to another.
 */
export class Clone {
  basic(begin: Vector3, end: Vector3, destination: Vector3, dimension: Dimension) {
    return dimension.runCommand(`clone ${begin.x} ${begin.y} ${begin.z} ${end.x} ${end.y} ${end.z} ${destination.x} ${destination.y} ${destination.z}`);
  };
  masked(begin: Vector3, end: Vector3, destination: Vector3, dimension: Dimension, maskMode: MaskMode, cloneMode: CloneMode) {
    return dimension.runCommand(`clone ${begin.x} ${begin.y} ${begin.z} ${end.x} ${end.y} ${end.z} ${destination.x} ${destination.y} ${destination.z} ${maskMode} ${cloneMode}`);
  };
  filtered(begin: Vector3, end: Vector3, destination: Vector3, dimension: Dimension, cloneMode: CloneMode, blockType: BlockType, properties: BlockProperties) {
    const blockStates: BlockState[] = Object.keys(properties).map(key => `${key}=${properties[key]}` as BlockState);
    return dimension.runCommand(`clone ${begin.x} ${begin.y} ${begin.z} ${end.x} ${end.y} ${end.z} ${destination.x} ${destination.y} ${destination.z} filtered ${cloneMode} ${blockType.id}[${blockStates.toString()}]`);
  };
};

/**
 * Locks and unlocks the day-night cycle.
 */
export function dayLock (lock: boolean) {
  return world.getDimension('overworld').runCommand('daylock ' + lock);
};

/**
 * Opens NPC dialogue for a player.
 */
export class Dialogue {
  open(npc: Entity, player: Player, sceneName: string) {
    return npc.runCommand(`dialogue open @s "${player.name}" ${sceneName}`)
  };
  change(npc: Entity, player: Player, sceneName: string) {
    return npc.runCommand(`dialogue change @s "${player.name}" ${sceneName}`)
  };
};

export function setDifficulty (difficulty: Difficulty) {
  return world.getDimension('overworld').runCommand('difficulty ' + difficulty);
}

/**
 * Add or remove fog settings file.
 */
export class Fog {
  add(player: Player, fogId: string) {
    player.runCommand(`fog @s add ${fogId}`);
  };
  remove(player: Player, fogId: string) {
    player.runCommand(`fog @s delete ${fogId}`);
  };
};

/**
 * Runs commands found in the corresponding function file.
 * @param path 
 */
export function runMCFunction(path: string, target: Target) {
  target.runCommand('function ' + path);
};

/**
 * Sets a player's game mode.
 * @param player 
 */
export function setGameMode(player: Player, gameMode: GameMode) {
  player.runCommand("gamemode " + gameMode)
}

/**
 * Sets or queries a game rule value.
 * @param gameRule 
 * @param value 
 */
export function setGameRule(gameRule: string, value: number | boolean) {
  world.getDimension("overworld").runCommand(`gamerule ${gameRule} ${value}`)
};
