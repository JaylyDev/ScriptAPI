/**
 * @template {import("@minecraft/server-ui").ActionFormData | import("@minecraft/server-ui").MessageFormData | import("@minecraft/server-ui").ModalFormData} Form
 * @param {Form} form
 * @param {import("@minecraft/server").Player} player
 * @returns {Promise<Awaited<ReturnType<Form["show"]>>>}
 */
export async function forceShow(player, form) {
    while (true) {
        const response = await /** @type {ReturnType<Form["show"]>} */(form.show(player));
        if (response.cancelationReason !== "userBusy") {
            return response;
        }
    }
};
