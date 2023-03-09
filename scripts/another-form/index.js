// Script example for ScriptAPI
// Author: FrankyRayMS <https://github.com/FrankyRay>
// Project: https://github.com/JaylyDev/ScriptAPI

import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui"

const player = [...world.getPlayers()][0];
new ActionFormData()
  .title("First form")
  .body("This is first form")
  .button("Button to another form")
  .show(player).then(r => {
    if (r.selection == 0) anotherUI(player)
  });

/**
 * @param {import("@minecraft/server").Player} player
 */
function anotherUI(player) {
  // This function ONLY hold one form
  // Not accessing another form
  // outside function
  const anotherForm = new ActionFormData()
    .title("Another Form")
    .body("This is another form")
    .button("Useless button")

  anotherForm.show(player).then()
};