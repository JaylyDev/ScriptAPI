import * as mc from "@minecraft/server";
import { getGamemode } from "get-gamemode/index";
export default function Player(player) {
    return Object.assign({
        getGameMode() {
            return getGamemode(player);
        },
        kick(reason) {
            player.runCommandAsync(`kick "${player.name}" ${reason}`);
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
