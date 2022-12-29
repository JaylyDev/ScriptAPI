import { world } from "@minecraft/server";

export default function () {
  let response = "";  
  let prev = "";
  for (let index = 1; index <= 26; index++) {
    let help = world.getDimension("overworld").runCommandAsync(`help ${index}`);
    let messages = help.statusMessage.split("\n").filter(msg => msg.startsWith("/"));

    for (const iterator of messages) {
      const command = iterator.split(" ")[0].replace('/', '');
      if (command === prev) continue;
      let message = world.getDimension("overworld").runCommandAsync("help " + command).statusMessage;
      response += message + "\n\n";
      prev = command;
    }
  };

  console.warn(response.replace(/§[abcdefgkl0123456789]/g, ''));
  return response;
};