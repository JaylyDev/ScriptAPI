// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { GameMode, world } from "@minecraft/server";
/**
 * Gets the Gamemode of a player
 * @author Smell of Curry
 * @param {Player} player player to get
 * @returns {keyof typeof GameMode}
 * @example if (getGamemode(player) == "creative") return;
 */
export function getGamemode(player) {
    return Object.values(GameMode).find(function (g) { return __spreadArray([], world.getPlayers({ name: player.name, gameMode: g }), true).length; });
}
