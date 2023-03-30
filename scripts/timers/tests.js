import { setTimeout, setImmediate, setInterval, clearImmediate, clearInterval, clearTimeout } from "./index.js";
import { world } from "@minecraft/server";
function stdout(...data) {
    return world.getDimension("overworld").runCommandAsync(`say §r` + data.join(" "));
}
;
function stderr(...data) {
    return world.getDimension("overworld").runCommandAsync(`say §c` + data.join(" "));
}
;
// timeout test
setTimeout(function (arg, arg1) {
    stdout("arg", arg, "arg1", arg1);
}, 1000, "hello", "world", 1);
stdout("setTimeout passed");
// cleartimeout test
let timeout2 = setTimeout(function () {
    stderr("clearTimeout failed");
}, 1000);
clearTimeout(timeout2);
stdout("clearTimeout passed");
// setinterval test
let interval = setInterval(function (arg, arg1) {
    stdout("arg", arg, "arg1", arg1);
}, 1000, "set", "interval", 1);
stdout("setTimeout passed");
// clearinterval test
interval._onTimeout = () => {
    stderr("clearInterval failed");
};
clearInterval(interval);
stdout("clearInterval passed");
// setimmediate test
setImmediate(function () {
    stdout("setImmediate passed");
});
// clearimmediate test
let immediate = setImmediate(function () {
    stderr("setImmediate failed");
});
clearImmediate(immediate);
stdout("clearImmediate passed");
