var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
var timerA = Date.now();
Commands.run("say Hello World");
console.warn("Commands.run time: ".concat(Date.now() - timerA, " ms"));
var timerB = Date.now();
Commands.runAsync("say Hello World in async");
console.warn("Commands.runAsync time: ".concat(Date.now() - timerB, " ms"));
Commands.register("#", "sayhi", function (res) {
    res.player.runCommandAsync("say hi ".concat(__spreadArray([], __read(res.argv), false).join(", ")));
});
console.log("End of test");
