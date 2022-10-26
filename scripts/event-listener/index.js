import { system, world } from "@minecraft/server";
const addSystemEventListener = (eventType, listener) => {
    return system.events[eventType].subscribe(listener);
};
const removeSystemEventListener = (eventType, listener) => {
    return system.events[eventType].unsubscribe(listener);
};
export { addSystemEventListener, removeSystemEventListener };
const addEventListener = (eventType, listener) => {
    return world.events[eventType].subscribe(listener);
};
const removeEventListener = (eventType, listener) => {
    return world.events[eventType].unsubscribe(listener);
};
export { addEventListener, removeEventListener };
