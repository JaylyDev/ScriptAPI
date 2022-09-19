import * as mojangMinecraft from "mojang-minecraft";
interface OnSystemEvent {
    (eventName: 'beforeWatchdogTerminate', callback: (arg: mojangMinecraft.BeforeWatchdogTerminateEvent) => void): (arg: mojangMinecraft.BeforeWatchdogTerminateEvent) => void;
}
interface OffSystemEvent {
    (eventName: 'beforeWatchdogTerminate', callback: (arg: mojangMinecraft.BeforeWatchdogTerminateEvent) => void): void;
}
export declare class SystemEvent {
    static on: OnSystemEvent;
    static off: OffSystemEvent;
}
interface OnWorldEvent {
    (eventName: 'beforeChat', callback: (arg: mojangMinecraft.BeforeChatEvent) => void): (arg: mojangMinecraft.BeforeChatEvent) => void;
    (eventName: 'beforeDataDrivenEntityTriggerEvent', callback: (arg: mojangMinecraft.BeforeDataDrivenEntityTriggerEvent) => void): (arg: mojangMinecraft.BeforeDataDrivenEntityTriggerEvent) => void;
    (eventName: 'beforeExplosion', callback: (arg: mojangMinecraft.BeforeExplosionEvent) => void): (arg: mojangMinecraft.BeforeExplosionEvent) => void;
    (eventName: 'beforeItemDefinitionEvent', callback: (arg: mojangMinecraft.BeforeItemDefinitionTriggeredEvent) => void): (arg: mojangMinecraft.BeforeItemDefinitionTriggeredEvent) => void;
    (eventName: 'beforeItemUse', callback: (arg: mojangMinecraft.BeforeItemUseEvent) => void): (arg: mojangMinecraft.BeforeItemUseEvent) => void;
    (eventName: 'beforeItemUseOn', callback: (arg: mojangMinecraft.BeforeItemUseOnEvent) => void): (arg: mojangMinecraft.BeforeItemUseOnEvent) => void;
    (eventName: 'beforePistonActivate', callback: (arg: mojangMinecraft.BeforePistonActivateEvent) => void): (arg: mojangMinecraft.BeforePistonActivateEvent) => void;
    (eventName: 'blockBreak', callback: (arg: mojangMinecraft.BlockBreakEvent) => void): (arg: mojangMinecraft.BlockBreakEvent) => void;
    (eventName: 'blockExplode', callback: (arg: mojangMinecraft.BlockExplodeEvent) => void): (arg: mojangMinecraft.BlockExplodeEvent) => void;
    (eventName: 'blockPlace', callback: (arg: mojangMinecraft.BlockPlaceEvent) => void): (arg: mojangMinecraft.BlockPlaceEvent) => void;
    (eventName: 'buttonPush', callback: (arg: mojangMinecraft.ButtonPushEvent) => void): (arg: mojangMinecraft.ButtonPushEvent) => void;
    (eventName: 'chat', callback: (arg: mojangMinecraft.ChatEvent) => void): (arg: mojangMinecraft.ChatEvent) => void;
    (eventName: 'dataDrivenEntityTriggerEvent', callback: (arg: mojangMinecraft.DataDrivenEntityTriggerEvent) => void): (arg: mojangMinecraft.DataDrivenEntityTriggerEvent) => void;
    (eventName: 'effectAdd', callback: (arg: mojangMinecraft.EffectAddEvent) => void): (arg: mojangMinecraft.EffectAddEvent) => void;
    (eventName: 'entityCreate', callback: (arg: mojangMinecraft.EntityCreateEvent) => void): (arg: mojangMinecraft.EntityCreateEvent) => void;
    (eventName: 'entityHit', callback: (arg: mojangMinecraft.EntityHitEvent) => void): (arg: mojangMinecraft.EntityHitEvent) => void;
    (eventName: 'entityHurt', callback: (arg: mojangMinecraft.EntityHurtEvent) => void): (arg: mojangMinecraft.EntityHurtEvent) => void;
    (eventName: 'explosion', callback: (arg: mojangMinecraft.ExplosionEvent) => void): (arg: mojangMinecraft.ExplosionEvent) => void;
    (eventName: 'itemCompleteCharge', callback: (arg: mojangMinecraft.ItemCompleteChargeEvent) => void): (arg: mojangMinecraft.ItemCompleteChargeEvent) => void;
    (eventName: 'itemDefinitionEvent', callback: (arg: mojangMinecraft.ItemDefinitionTriggeredEvent) => void): (arg: mojangMinecraft.ItemDefinitionTriggeredEvent) => void;
    (eventName: 'itemReleaseCharge', callback: (arg: mojangMinecraft.ItemReleaseChargeEvent) => void): (arg: mojangMinecraft.ItemReleaseChargeEvent) => void;
    (eventName: 'itemStartCharge', callback: (arg: mojangMinecraft.ItemStartChargeEvent) => void): (arg: mojangMinecraft.ItemStartChargeEvent) => void;
    (eventName: 'itemStartUseOn', callback: (arg: mojangMinecraft.ItemStartUseOnEvent) => void): (arg: mojangMinecraft.ItemStartUseOnEvent) => void;
    (eventName: 'itemStopCharge', callback: (arg: mojangMinecraft.ItemStopChargeEvent) => void): (arg: mojangMinecraft.ItemStopChargeEvent) => void;
    (eventName: 'itemStopUseOn', callback: (arg: mojangMinecraft.ItemStopUseOnEvent) => void): (arg: mojangMinecraft.ItemStopUseOnEvent) => void;
    (eventName: 'itemUse', callback: (arg: mojangMinecraft.ItemUseEvent) => void): (arg: mojangMinecraft.ItemUseEvent) => void;
    (eventName: 'itemUseOn', callback: (arg: mojangMinecraft.ItemUseOnEvent) => void): (arg: mojangMinecraft.ItemUseOnEvent) => void;
    (eventName: 'leverActivate', callback: (arg: mojangMinecraft.LeverActionEvent) => void): (arg: mojangMinecraft.LeverActionEvent) => void;
    (eventName: 'pistonActivate', callback: (arg: mojangMinecraft.PistonActivateEvent) => void): (arg: mojangMinecraft.PistonActivateEvent) => void;
    (eventName: 'playerJoin', callback: (arg: mojangMinecraft.PlayerJoinEvent) => void): (arg: mojangMinecraft.PlayerJoinEvent) => void;
    (eventName: 'playerLeave', callback: (arg: mojangMinecraft.PlayerLeaveEvent) => void): (arg: mojangMinecraft.PlayerLeaveEvent) => void;
    (eventName: 'tick', callback: (arg: mojangMinecraft.TickEvent) => void): (arg: mojangMinecraft.TickEvent) => void;
    (eventName: 'weatherChange', callback: (arg: mojangMinecraft.WeatherChangeEvent) => void): (arg: mojangMinecraft.WeatherChangeEvent) => void;
    (eventName: 'worldInitialize', callback: (arg: mojangMinecraft.WorldInitializeEvent) => void): (arg: mojangMinecraft.WorldInitializeEvent) => void;
}
interface OffWorldEvent {
    (eventName: 'beforeChat', callback: (arg: mojangMinecraft.BeforeChatEvent) => void): void;
    (eventName: 'beforeDataDrivenEntityTriggerEvent', callback: (arg: mojangMinecraft.BeforeDataDrivenEntityTriggerEvent) => void): void;
    (eventName: 'beforeExplosion', callback: (arg: mojangMinecraft.BeforeExplosionEvent) => void): void;
    (eventName: 'beforeItemDefinitionEvent', callback: (arg: mojangMinecraft.BeforeItemDefinitionTriggeredEvent) => void): void;
    (eventName: 'beforeItemUse', callback: (arg: mojangMinecraft.BeforeItemUseEvent) => void): void;
    (eventName: 'beforeItemUseOn', callback: (arg: mojangMinecraft.BeforeItemUseOnEvent) => void): void;
    (eventName: 'beforePistonActivate', callback: (arg: mojangMinecraft.BeforePistonActivateEvent) => void): void;
    (eventName: 'blockBreak', callback: (arg: mojangMinecraft.BlockBreakEvent) => void): void;
    (eventName: 'blockExplode', callback: (arg: mojangMinecraft.BlockExplodeEvent) => void): void;
    (eventName: 'blockPlace', callback: (arg: mojangMinecraft.BlockPlaceEvent) => void): void;
    (eventName: 'buttonPush', callback: (arg: mojangMinecraft.ButtonPushEvent) => void): void;
    (eventName: 'chat', callback: (arg: mojangMinecraft.ChatEvent) => void): void;
    (eventName: 'dataDrivenEntityTriggerEvent', callback: (arg: mojangMinecraft.DataDrivenEntityTriggerEvent) => void): void;
    (eventName: 'effectAdd', callback: (arg: mojangMinecraft.EffectAddEvent) => void): void;
    (eventName: 'entityCreate', callback: (arg: mojangMinecraft.EntityCreateEvent) => void): void;
    (eventName: 'entityHit', callback: (arg: mojangMinecraft.EntityHitEvent) => void): void;
    (eventName: 'entityHurt', callback: (arg: mojangMinecraft.EntityHurtEvent) => void): void;
    (eventName: 'explosion', callback: (arg: mojangMinecraft.ExplosionEvent) => void): void;
    (eventName: 'itemCompleteCharge', callback: (arg: mojangMinecraft.ItemCompleteChargeEvent) => void): void;
    (eventName: 'itemDefinitionEvent', callback: (arg: mojangMinecraft.ItemDefinitionTriggeredEvent) => void): void;
    (eventName: 'itemReleaseCharge', callback: (arg: mojangMinecraft.ItemReleaseChargeEvent) => void): void;
    (eventName: 'itemStartCharge', callback: (arg: mojangMinecraft.ItemStartChargeEvent) => void): void;
    (eventName: 'itemStartUseOn', callback: (arg: mojangMinecraft.ItemStartUseOnEvent) => void): void;
    (eventName: 'itemStopCharge', callback: (arg: mojangMinecraft.ItemStopChargeEvent) => void): void;
    (eventName: 'itemStopUseOn', callback: (arg: mojangMinecraft.ItemStopUseOnEvent) => void): void;
    (eventName: 'itemUse', callback: (arg: mojangMinecraft.ItemUseEvent) => void): void;
    (eventName: 'itemUseOn', callback: (arg: mojangMinecraft.ItemUseOnEvent) => void): void;
    (eventName: 'leverActivate', callback: (arg: mojangMinecraft.LeverActionEvent) => void): void;
    (eventName: 'pistonActivate', callback: (arg: mojangMinecraft.PistonActivateEvent) => void): void;
    (eventName: 'playerJoin', callback: (arg: mojangMinecraft.PlayerJoinEvent) => void): void;
    (eventName: 'playerLeave', callback: (arg: mojangMinecraft.PlayerLeaveEvent) => void): void;
    (eventName: 'tick', callback: (arg: mojangMinecraft.TickEvent) => void): void;
    (eventName: 'weatherChange', callback: (arg: mojangMinecraft.WeatherChangeEvent) => void): void;
    (eventName: 'worldInitialize', callback: (arg: mojangMinecraft.WorldInitializeEvent) => void): void;
}
export declare class WorldEvent {
    static on: OnWorldEvent;
    static off: OffWorldEvent;
}
export {};
