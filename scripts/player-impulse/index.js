// Script example for ScriptAPI
// Author: Usernam#2058 <Jayly Discord>
//         Remember M9#8416 <Bedrock Add-Ons>
//         SI Silicon <https://github.com/SIsilicon>
// Project: https://github.com/JaylyDev/ScriptAPI
/**
 * Workaround to apply impulse vector to the current velocity of the player.
 * @param player Only Player class, not Entity.
 * @param vector
 */
export function applyImpulse(player, vector) {
    const { x, y, z } = vector;
    const horizontal = Math.sqrt(x * x + z * z) * 2.0;
    const vertical = y < 0.0 ? 0.5 * y : y;
    player.applyKnockback(x, z, horizontal, vertical);
}
