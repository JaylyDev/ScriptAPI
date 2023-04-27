// Script example for ScriptAPI
// Author: JaylyDev <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { system, world } from "@minecraft/server";
const addSystemEventListener = (eventType, listener) => {
    return system.events[eventType].subscribe(listener);
};
const removeSystemEventListener = (eventType, listener) => {
    return system.events[eventType].unsubscribe(listener);
};
export { addSystemEventListener, removeSystemEventListener };
const addEventListener = (eventType, listener) => {
    return world.afterEvents[eventType].subscribe(listener);
};
const removeEventListener = (eventType, listener) => {
    return world.afterEvents[eventType].unsubscribe(listener);
};
export { addEventListener, removeEventListener };
