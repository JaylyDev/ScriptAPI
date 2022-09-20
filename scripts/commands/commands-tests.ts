import { Commands } from "./index.js";

let timerA = Date.now();
Commands.run("say Hello World");
console.warn(`Commands.run time: ${Date.now() - timerA} ms`);

let timerB = Date.now();
Commands.runAsync("say Hello World in async");
console.warn(`Commands.runAsync time: ${Date.now() - timerB} ms`);

Commands.register("#", "sayhi", function (res) {
  res.player.runCommand(`say hi ${[...res.argv].join(", ")}`);
});

console.log("End of test");