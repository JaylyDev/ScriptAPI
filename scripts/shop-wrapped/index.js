import { world, system, World, Player, Scoreboard, ItemTypes, ItemStack } from '@minecraft/server';
import { ActionFormData, ModalFormData, MessageFormData, FormCancelationReason } from '@minecraft/server-ui';

const { setDynamicProperty: SDP, getDynamicProperty: GDP, getDynamicPropertyIds: IDS } = World.prototype,
  scb = world.scoreboard;

/** @param {Player} player @param {ActionFormData | ModalFormData} form */
async function FORCE_OPEN(player, form) {
  while (true) {
    let v = await form.show(player);
    if (!v || v.cancelationReason !== FormCancelationReason.UserBusy) return v;
  }
}
/** @param {Player} player @returns {number} */
function gM(player) {
  const ob = scb.getObjective('money') ? scb.getObjective('money') : scb.addObjective('money');
  return ob.getScore(player) || 0;
}

/** @param {Player} player @param {number} amount */
function aM(player, amount) {
  system.run(() => {
    const ob = scb.getObjective('money') ? scb.getObjective('money') : scb.addObjective('money');
    ob.setScore(player, gM(player) + amount);
  });
}

export class ShopUI {
  SHOP;
  SHOP_TITLE;
  SENDERS;
  STRUCTURE;

  /** @param {string} title - shop title @param {Array} structure - the shop structure @param {Player | Player[]} ShowFormTo - player's will show this shop form */
  constructor(title = 'Shop - UI', structure = [], ShowFormTo = undefined) {
    if (!Array.isArray(structure)) throw new TypeError('Structure must be an array!');
    this.SENDERS = ShowFormTo;
    this.STRUCTURE = structure;
    this.SHOP_TITLE = title;
    this.SHOP = new ActionFormData().title(title.toString());
    this.#defined();
  }

  /** @private */
  #defined() {
    if (!this.SENDERS) return;

    if (this.SENDERS instanceof Player) {
      this.#showCategoryForm(this.SENDERS, this.STRUCTURE, this.SHOP_TITLE);
    } else if (Array.isArray(this.SENDERS)) {
      for (const sender of this.SENDERS) this.#showCategoryForm(sender, this.STRUCTURE, this.SHOP_TITLE);
    }
  }

  /** @private */
  async #showCategoryForm(player, categories, path) {
    const FORM = new ActionFormData().title(path);
    for (const [CATEGORY_NAME, _, CATEGORY_TEXTURE = ''] of categories) FORM.button(CATEGORY_NAME, CATEGORY_TEXTURE);

    const FORM_SELECTION = await FORCE_OPEN(player, FORM);
    if (FORM_SELECTION.canceled) return;

    const selected = categories[FORM_SELECTION.selection];
    if (!Array.isArray(selected)) return;

    const [CATEGORY_NAME, ITEMS] = selected;
    const PATH = `${path}::${CATEGORY_NAME}`.replace(' ', '_');

    if (Array.isArray(ITEMS[0])) this.#showCategoryForm(player, ITEMS, PATH);
    else this.#showItemForm(player, ITEMS, PATH, CATEGORY_NAME);
  }

  /** @private */
  async #showItemForm(player, items, categoryPath, categoryName) {
    player.sendMessage(JSON.stringify({ ...arguments }, null, 4));
    const item_data = items;
    if (typeof item_data === 'object' && !Array.isArray(item_data)) {
      const STOCKED_ID = `${categoryPath}::${categoryName}`;
      if (!IDS.call(world).find((id) => id === STOCKED_ID)) SDP.call(world, STOCKED_ID, item_data?.stock || 64);

      const currentStock = GDP.call(world, STOCKED_ID);
      if (currentStock <= 0) return new MessageFormData().title(categoryName).body(`§cStock is empty, please wait for restock.`).button2('Close').show(player);
      new ModalFormData()
        .title(categoryName)
        .slider(`§7${categoryPath.replace(/::/g, '/')}\n§e» Money: §a$${gM(player)}\n§e» Item ID: ${item_data?.item}\n§e» Price per item: §2$${item_data?.price}\n§e» §7Stock: (${currentStock})`, 1, Math.min(item_data?.max, currentStock) || 1, 1)
        .show(player)
        .then((p) => {
          h;
          if (p.canceled) return;

          const amount = p.formValues[0];
          const totalCost = amount * item_data?.price;

          if (gM(player) < totalCost)
            return new MessageFormData()
              .title(categoryName)
              .body(`§cYou don't have enough money!\n§eYou need §a$${totalCost - gM(player)}`)
              .button2('Close')
              .show(player);

          aM(player, -totalCost);
          SDP.call(world, STOCKED_ID, currentStock - amount);
          player.getComponent('inventory').container.addItem(new ItemStack(item_data?.item, amount));
          player.sendMessage(`§aSuccessfully bought ${amount}x ${item_data?.item}`);
        });
    }
  }
}
