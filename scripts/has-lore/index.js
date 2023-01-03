// Script examples for ScriptAPI
// Author: Remember M9#8416 <Bedrock Add-Ons>
//         ! MP09#1650 <Bedrock Add-Ons>

/**
 * @param {ItemStack} item
 */
export default function hasLore (item) {
  return item.getLore().length > 0
}