import { world } from "@minecraft/server";

// How to create emojis? https://wiki.bedrock.dev/concepts/emojis.html
const replacements = {
    "armor": "",
    "minecoin": "",
    "food": ""
};

function beforeChat(msg) {
    const player = msg.sender;
    if (!getScore("chatRankSet", player)) {
        let message = msg.message;
        let regex = new RegExp(":" + Object.keys(replacements).join(":|:") + ":", "g");

	 // Replaces the word with emoji if it has :: around it. :armor: -> 
        message = message.replace(regex, (match) => { return replacements[match.replaceAll(":", "")] + "§r" });

        world.sendMessage(`<${player.name}> ${message.replace(/\\"/g, '"')}`);
        msg.cancel = true;
    }
}

world.events.beforeChat.subscribe(msg => beforeChat(msg));