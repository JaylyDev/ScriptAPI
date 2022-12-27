// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
//         Worldwidebrine#9037 <Bedrock Add-Ons>

import { Player, system } from "@minecraft/server";
import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui";

/**
 * @template {ActionFormData | MessageFormData | ModalFormData} Form
 * @param {Player} player
 * @param {Form} form
 * @param {number} timeout
 * @returns {Promise<Awaited<ReturnType<Form["show"]>>>}
 */
export async function forceShow(player, form, timeout = Infinity) {
    const startTick = system.currentTick;
    while ((system.currentTick - startTick) < timeout) {
        const response = await /** @type {ReturnType<Form["show"]>} */(form.show(player));
        if (response.cancelationReason !== "userBusy") {
            return response;
        }
    };
    throw new Error(`Timed out after ${timeout} ticks`);
};