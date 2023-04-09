// Script example for ScriptAPI
// Author: Unknown <Bedrock Add-Ons>
// Project: https://discord.gg/bedrock-addons
/**
 * @param {import("@minecraft/server").ItemStack} item
 */
const getItemName = (item) => {
    return item.nameTag ?? item.typeId.split(":")[1].split('_').map(v => v[0].toUpperCase() + v.slice(1).toLowerCase()).join(" ")
  }

export { getItemName }
