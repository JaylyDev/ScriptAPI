// Script example for ScriptAPI
// Author: JaylyDev <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { WorldAfterEvents, SystemAfterEvents } from "@minecraft/server";
declare type OnSystemEvent = <eventType extends keyof SystemAfterEvents, listener extends Parameters<SystemAfterEvents[eventType]['subscribe']>[0]>(eventType: eventType, listener: listener) => listener;
declare type OffSystemEvent = <eventType extends keyof SystemAfterEvents>(eventType: eventType, listener: Parameters<SystemAfterEvents[eventType]['subscribe']>[0]) => void;
declare const addSystemEventListener: OnSystemEvent;
declare const removeSystemEventListener: OffSystemEvent;
export { addSystemEventListener, removeSystemEventListener };
declare type OnEvent = <eventType extends keyof WorldAfterEvents, listener extends Parameters<WorldAfterEvents[eventType]['subscribe']>[0]>(eventType: eventType, listener: listener) => listener;
declare type OffEvent = <eventType extends keyof WorldAfterEvents>(eventType: eventType, listener: Parameters<WorldAfterEvents[eventType]['subscribe']>[0]) => void;
declare const addEventListener: OnEvent;
declare const removeEventListener: OffEvent;
export { addEventListener, removeEventListener };
