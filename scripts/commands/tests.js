var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Commands } from "./index.js";
var timerB = Date.now();
Commands.runAsync("say Hello World in async");
console.warn("Commands.runAsync time: ".concat(Date.now() - timerB, " ms"));
Commands.register("#", "sayhi", function (res) {
    res.player.runCommandAsync("say hi ".concat(__spreadArray([], res.argv, true).join(", ")));
});
console.log("End of test");
