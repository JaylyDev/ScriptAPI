// Script example for ScriptAPI
// Author: JaylyDev <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Events, SystemEvents } from "@minecraft/server";
declare type OnSystemEvent = <eventType extends keyof SystemEvents, listener extends Parameters<SystemEvents[eventType]['subscribe']>[0]>(eventType: eventType, listener: listener) => listener;
declare type OffSystemEvent = <eventType extends keyof SystemEvents>(eventType: eventType, listener: Parameters<SystemEvents[eventType]['subscribe']>[0]) => void;
declare const addSystemEventListener: OnSystemEvent;
declare const removeSystemEventListener: OffSystemEvent;
export { addSystemEventListener, removeSystemEventListener };
declare type OnEvent = <eventType extends keyof Events, listener extends Parameters<Events[eventType]['subscribe']>[0]>(eventType: eventType, listener: listener) => listener;
declare type OffEvent = <eventType extends keyof Events>(eventType: eventType, listener: Parameters<Events[eventType]['subscribe']>[0]) => void;
declare const addEventListener: OnEvent;
declare const removeEventListener: OffEvent;
export { addEventListener, removeEventListener };
