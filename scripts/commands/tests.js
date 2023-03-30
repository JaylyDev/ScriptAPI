import { Commands } from "./index.js";
let timerB = Date.now();
Commands.runAsync("say Hello World in async");
console.warn(`Commands.runAsync time: ${Date.now() - timerB} ms`);
Commands.register("#", "sayhi", function (res) {
    res.player.runCommandAsync(`say hi ${[...res.argv].join(", ")}`);
});
console.log("End of test");
