// Script example for ScriptAPI
// Author: bot174 <https://github.com/bot174>
// Project: https://github.com/JaylyDev/ScriptAPI/
// @ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var handlers = new Map();
var Timer = /** @class */ (function () {
  function Timer(handler, repeat, id, timeout) {
      if (timeout === void 0) { timeout = 0; }
      // validate checks
      if (typeof handler !== 'function')
          throw new TypeError('Handler must be a function');
      if (typeof timeout !== 'number' || timeout < 0)
          throw new TypeError('Timeout must be a non-negative number');
      if (typeof repeat !== 'boolean')
          throw new TypeError('Repeat must be a boolean');
      this.handler = handler;
      this.timeout = timeout;
      this.repeat = repeat;
      this.next = Date.now() + timeout;
      this.isForgotten = false;
      this.id = id;
      this.trigger();
  }
  ;
  Timer.prototype.trigger = function () {
      return __awaiter(this, void 0, void 0, function () {
          var error_1;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      if (!!this.isForgotten) return [3 /*break*/, 8];
                      if (!(Date.now() >= this.next)) return [3 /*break*/, 5];
                      _a.label = 1;
                  case 1:
                      _a.trys.push([1, 3, , 4]);
                      return [4 /*yield*/, this.handler()];
                  case 2:
                      _a.sent();
                      return [3 /*break*/, 4];
                  case 3:
                      error_1 = _a.sent();
                      console.error(error_1 instanceof Error ? error_1 : 'Error: ' + error_1);
                      return [3 /*break*/, 4];
                  case 4:
                      ;
                      if (this.repeat)
                          this.next += this.timeout;
                      else
                          this.forget();
                      return [3 /*break*/, 7];
                  case 5: return [4 /*yield*/, Promise.resolve()];
                  case 6:
                      _a.sent();
                      _a.label = 7;
                  case 7: return [3 /*break*/, 0];
                  case 8: return [2 /*return*/];
              }
          });
      });
  };
  Timer.prototype.forget = function () {
      this.isForgotten = true;
      handlers.set(this.id, null);
  };
  return Timer;
}());
/**
* The `setInterval()` method, repeatedly calls a function, with a fixed time delay between each call.
* This method returns an ID which uniquely identifies the interval, so you can remove it later by calling `clearInterval()`.
*/
function setInterval(handler, timeout) {
  var id = handlers.size;
  handlers.set(id, new Timer(handler, true, id, timeout));
  return id;
}
;
/**
* The `setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.
*/
function setTimeout(handler, timeout) {
  var id = handlers.size;
  handlers.set(id, new Timer(handler, false, id, timeout));
  return id;
}
;
/**
* The `clearInterval()` method cancels a timed, repeating action which was previously established by a call to `setInterval()`.
*/
function clearInterval(id) {
  var handler = handlers.get(id);
  if ((handler === null || handler === void 0 ? void 0 : handler.repeat) === true)
      handler.forget();
}
;
/**
* The `clearTimeout()` method cancels a timeout previously established by calling `setTimeout()`.
*/
function clearTimeout(id) {
  var handler = handlers.get(id);
  if ((handler === null || handler === void 0 ? void 0 : handler.repeat) === false)
      handler.forget();
}
;
export { setInterval, setTimeout, clearInterval, clearTimeout };
