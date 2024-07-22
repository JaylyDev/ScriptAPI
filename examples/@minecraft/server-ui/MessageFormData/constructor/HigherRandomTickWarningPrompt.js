import { world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
// Find player with admin tag
let player = world.getPlayers({ tags: ["admin"] })[0];
let form = new MessageFormData();
form.title("Higher Random Tick Warning");
form.body("Are you sure you want to run this command:\n/gamerule randomtickspeed 1000\nThis can cause lag to the world");
form.button1("Yes, do it!");
form.button2("No, leave it as default!");
form.show(player).then(response => {
    if (response.selection == 0) {
        player.runCommand("/gamerule randomtickspeed 1000");
    }
})