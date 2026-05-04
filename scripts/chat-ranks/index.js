// Author: Smell of curry <https://github.com/smell-of-curry>
// Project: https://github.com/JaylyDev/ScriptAPI
// @ts-nocheck
import { system, CommandPermissionLevel } from "@minecraft/server";
import { world } from "@minecraft/server";
/**
 * The prefix that is added before a rank tag
 * @example `/tag @s add "RANK_PREFIX"member`
 */
const RANK_PREFIX = "rank:";
/**
 * The default Rank that the player has in chat with no ranks
 */
const DEFAULT_RANK = "§bMember";
/**
 * Gets chat ranks from a player
 * @param player
 * @returns ranks player has
 */
function getRanks(player) {
    const ranks = player
        .getTags()
        .map((v) => {
        if (!v.startsWith(RANK_PREFIX))
            return null;
        return v.substring(RANK_PREFIX.length);
    })
        .filter((x) => typeof x === "string" && x.length > 0);
    return ranks.length == 0 ? [DEFAULT_RANK] : ranks;
}
system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    customCommandRegistry.registerCommand({
        name: "jayly:chatranks",
        description: "test chat ranks command",
        permissionLevel: CommandPermissionLevel.Any
    }, (origin) => {
        if (!(origin.initiator ?? origin.sourceEntity))
            return;
        const ranks = getRanks((origin.initiator ?? origin.sourceEntity)).join("§r§l§8][§r");
        const message = "sample message";
        world.sendMessage(`§r§l§8[§r${ranks}§r§l§8]§r§7 ${(origin.initiator ?? origin.sourceEntity).name}:§r ${message}`);
    });
});
