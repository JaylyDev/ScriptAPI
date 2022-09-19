import * as mojangMinecraft from "mojang-minecraft";
;
export class SystemEvent {
}
SystemEvent.on = (eventName, callback) => {
    return mojangMinecraft.system.events[eventName].subscribe(callback);
};
SystemEvent.off = (eventName, callback) => {
    mojangMinecraft.system.events[eventName].unsubscribe(callback);
};
;
;
export class WorldEvent {
}
WorldEvent.on = (eventName, callback) => {
    return mojangMinecraft.world.events[eventName].subscribe(callback);
};
WorldEvent.off = (eventName, callback) => {
    mojangMinecraft.world.events[eventName].unsubscribe(callback);
};
;
