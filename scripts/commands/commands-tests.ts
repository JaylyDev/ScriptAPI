import { Commands } from "./index.ts";

let timerA = Date.now();
Commands.run("say Hello World");
console.warn("Commands.run time: " + Date.now() - timerA + " ms");

let timerB = Date.now();
Commands.runAsync("say Hello World in async");
console.warn("Commands.run time: " + Date.now() - timerB + " ms");

console.log("End of test");
