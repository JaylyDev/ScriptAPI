import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
const form = new ActionFormData();
form.title("Minigames");
form.body("Choose the games");
form.button("Spleef", "textures/items/diamond_shovel");
form.button("Murder Mystery", "textures/items/iron_sword");
form.button("Bedwars", "textures/minigames/bedwars.png");
for (const player of world.getAllPlayers()) {
  form.show(player).then((response) => {
    if (response.canceled) {
      player.sendMessage("Canceled due to " + response.cancelationReason);
    }
    if (response.selection == 0) {
      player.sendMessage("You have selected Spleef");
    }
    if (response.selection == 1) {
      player.sendMessage("You have selected Murder Mystery");
    }
    if (response.selection == 2) {
      player.sendMessage("You have selected Bedwars");
    }
    return;
  }); // show player the form
}
