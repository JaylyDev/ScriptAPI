// https://discord.com/channels/523663022053392405/854033525546942464/988466192383615066
import { world } from "mojang-minecraft";
import { ActionFormData } from "mojang-minecraft-ui"

const player = [...world.getPlayers()][0];
new ActionFormData()
  .title("First form")
  .body("This is first form")
  .button("Button to another form")
  .show(player).then(r => {
    if (r.selection == 0) anotherUI(player)
  });

/**
 * @param {import("mojang-minecraft").Player} player
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