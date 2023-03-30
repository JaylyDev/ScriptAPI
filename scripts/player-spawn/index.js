// Script example for ScriptAPI
// Author: GlitchyTurtle32 <https://github.com/GlitchyTurtle>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world } from "@minecraft/server";

world.events.playerSpawn.subscribe((eventData) => {
    let { player, initialSpawn } = eventData;
    if(!initialSpawn) return;

    // This runs when the player joins the game for the first time!
})