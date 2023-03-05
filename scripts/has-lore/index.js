// Script example for ScriptAPI
// Author: Andrew2005#8409 <Bedrock Add-Ons>
//         Remember M9#8416 <Bedrock Add-Ons>
//         ! MP09#1650 <Bedrock Add-Ons>
// Project: https://github.com/JaylyDev/ScriptAPI

import { ItemStack } from '@minecraft/server';
/**
 * @param {ItemStack} item
 */
export function hasLore (item) {
  return item.getLore().length > 0
}
