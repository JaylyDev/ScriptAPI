// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world } from "@minecraft/server";
export function displayHelp(target, page = 0, command) {
    if (!!command)
        return target.runCommand('help ' + command);
    else
        return target.runCommand('help ' + page);
}
;
export class CameraShake {
    /**
     * Applies shaking to the players' camera with a specified intensity and duration.
     * @param player
     * @param intensity
     * @param seconds
     * @param shakeType
     * @returns
     */
    applyShake(player, intensity, seconds, shakeType) {
        return player.runCommand(`camerashake add @s ${intensity} ${seconds} ${shakeType}`);
    }
    ;
    stop(player) {
        return player.runCommand(`camerashake stop @s`);
    }
    ;
}
;
/**
 * Clones blocks from one region to another.
 */
export class Clone {
    basic(begin, end, destination, dimension) {
        return dimension.runCommand(`clone ${begin.x} ${begin.y} ${begin.z} ${end.x} ${end.y} ${end.z} ${destination.x} ${destination.y} ${destination.z}`);
    }
    ;
    masked(begin, end, destination, dimension, maskMode, cloneMode) {
        return dimension.runCommand(`clone ${begin.x} ${begin.y} ${begin.z} ${end.x} ${end.y} ${end.z} ${destination.x} ${destination.y} ${destination.z} ${maskMode} ${cloneMode}`);
    }
    ;
    filtered(begin, end, destination, dimension, cloneMode, blockType, properties) {
        const blockStates = Object.keys(properties).map(key => `${key}=${properties[key]}`);
        return dimension.runCommand(`clone ${begin.x} ${begin.y} ${begin.z} ${end.x} ${end.y} ${end.z} ${destination.x} ${destination.y} ${destination.z} filtered ${cloneMode} ${blockType.id}[${blockStates.toString()}]`);
    }
    ;
}
;
/**
 * Locks and unlocks the day-night cycle.
 */
export function dayLock(lock) {
    return world.getDimension('overworld').runCommand('daylock ' + lock);
}
;
/**
 * Opens NPC dialogue for a player.
 */
export class Dialogue {
    open(npc, player, sceneName) {
        return npc.runCommand(`dialogue open @s "${player.name}" ${sceneName}`);
    }
    ;
    change(npc, player, sceneName) {
        return npc.runCommand(`dialogue change @s "${player.name}" ${sceneName}`);
    }
    ;
}
;
export function setDifficulty(difficulty) {
    return world.getDimension('overworld').runCommand('difficulty ' + difficulty);
}
/**
 * Add or remove fog settings file.
 */
export class Fog {
    add(player, fogId) {
        player.runCommand(`fog @s add ${fogId}`);
    }
    ;
    remove(player, fogId) {
        player.runCommand(`fog @s delete ${fogId}`);
    }
    ;
}
;
/**
 * Runs commands found in the corresponding function file.
 * @param path
 */
export function runMCFunction(path, target) {
    target.runCommand('function ' + path);
}
;
/**
 * Sets a player's game mode.
 * @param player
 */
export function setGameMode(player, gameMode) {
    player.runCommand("gamemode " + gameMode);
}
/**
 * Sets or queries a game rule value.
 * @param gameRule
 * @param value
 */
export function setGameRule(gameRule, value) {
    world.getDimension("overworld").runCommand(`gamerule ${gameRule} ${value}`);
}
;
