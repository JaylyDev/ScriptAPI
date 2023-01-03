// Script examples for ScriptAPI
// Author: ! MP09#1650 <Bedrock Add-Ons>

/**
 * @param {ItemStack} item
 */
export default function hasLore (item) {
  return item.getLore().length > 0
}