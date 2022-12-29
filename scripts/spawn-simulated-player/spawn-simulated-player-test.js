var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { world, MinecraftEffectTypes, MinecraftItemTypes, ItemStack, ExplosionOptions, Location } from "@minecraft/server";
import { SpawnSimulatedPlayer } from "./index.js";
var host = __spreadArray([], world.getPlayers(), true)[0];
SpawnSimulatedPlayer(host, function (simulatedPlayer) {
    simulatedPlayer.addEffect(MinecraftEffectTypes.absorption, 1);
    simulatedPlayer.attack();
    simulatedPlayer.dimension.createExplosion(simulatedPlayer.location, 5, new ExplosionOptions());
    simulatedPlayer.giveItem(new ItemStack(MinecraftItemTypes.acaciaBoat));
    simulatedPlayer.runCommandAsync("scoreboard players add @s money 1");
    simulatedPlayer.teleport(new Location(0, 0, 0), world.getDimension("nether"), 0, 0);
    simulatedPlayer.kick("All tasks completed.");
});
