import { Player } from "@minecraft/server";
import {
  ModalFormData,
  MessageFormData,
  ActionFormData,
} from "@minecraft/server-ui";

/**
 * @param {Player} player
 * @param {ModalFormData | MessageFormData | ActionFormData} form
 */
export async function forceShow(player, form) {
  while (true) {
    const response = await form.show(player);
    if (response.cancelationReason !== "userBusy") {
      return response;
    }
  }
}
