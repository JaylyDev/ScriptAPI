/**
 * @param {import("@minecraft/server").ItemStack} item
 */
const getItemName = (item) => {
    return item.nameTag ?? item.typeId.split(":")[1].split('_').map(v => v[0].toUpperCase() + v.slice(1).toLowerCase()).join(" ")
  }

export { getItemName }
