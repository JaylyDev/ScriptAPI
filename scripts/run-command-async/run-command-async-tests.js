import { world } from "mojang-minecraft";

let commands = [
  () => world.getDimension("overworld").runCommandAsync("say Dimension native runCommandAsync"),
  () => [...world.getPlayers()][0].runCommandAsync("say Player native runCommandAsync"),
  () => [...world.getDimension("overworld").getEntities()][0].runCommandAsync("say Entity native runCommandAsync")
];

// native runCommandAsync
for (let command of commands) {
  let time = new Date().getTime();
  command();
  world.getDimension("overworld").runCommand(`say ${new Date().getTime() - time}`);
};

//custom runCommandAsync
import "./index.js";
for (let command of commands) {
  let time = new Date().getTime();
  command();
  world.getDimension("overworld").runCommand(`say ${new Date().getTime() - time}`);
};