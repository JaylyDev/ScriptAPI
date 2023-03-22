// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import * as mc from "@minecraft/server";
import { getGamemode } from "get-gamemode/index";
export default function Player(player) {
    return Object.assign({
        getGameMode() {
            return getGamemode(player);
        },
        kick(reason) {
            player.runCommand(`kick "${player.name}" ${reason}`);
        },
        getScore(objectiveId) {
            return mc.world.scoreboard
                .getObjective(objectiveId)
                .getScore(player.scoreboard);
        },
        showForm(form, callback) {
            form.show(player).then(callback);
        },
    }, player);
}
