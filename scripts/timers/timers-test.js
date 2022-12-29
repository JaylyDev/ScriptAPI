import { setTimeout, setImmediate, setInterval, clearImmediate, clearInterval, clearTimeout } from "./timers.js";
import { world } from "@minecraft/server";
function stdout() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    return world.getDimension("overworld").runCommandAsync("say \u00A7r" + data.join(" "));
}
;
function stderr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    return world.getDimension("overworld").runCommandAsync("say \u00A7c" + data.join(" "));
}
;
// timeout test
setTimeout(function (arg, arg1) {
    stdout("arg", arg, "arg1", arg1);
}, 1000, "hello", "world", 1);
stdout("setTimeout passed");
// cleartimeout test
var timeout2 = setTimeout(function () {
    stderr("clearTimeout failed");
}, 1000);
clearTimeout(timeout2);
stdout("clearTimeout passed");
// setinterval test
var interval = setInterval(function (arg, arg1) {
    stdout("arg", arg, "arg1", arg1);
}, 1000, "set", "interval", 1);
stdout("setTimeout passed");
// clearinterval test
interval._onTimeout = function () {
    stderr("clearInterval failed");
};
clearInterval(interval);
stdout("clearInterval passed");
// setimmediate test
setImmediate(function () {
    stdout("setImmediate passed");
});
// clearimmediate test
var immediate = setImmediate(function () {
    stderr("setImmediate failed");
});
clearImmediate(immediate);
stdout("clearImmediate passed");
