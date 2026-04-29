import { incompatibleEnchantment } from "../anti-32k-event/index.js";

incompatibleEnchantment.subscribe((event) => {
  event.enchantment;
  event.exceedMaxLevel;
  event.incompatibleEnchantmentType;
  event.item;
  event.source;
});