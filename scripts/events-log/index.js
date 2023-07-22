// Script example for ScriptAPI
// Author: bot174 <https://github.com/bot174>
// Project: https://github.com/JaylyDev/ScriptAPI
import { system, world } from "@minecraft/server";
// This is a callback function. It will be called when the event is triggered.
// This code is run in an engine with JSON stringify exposes native objects directly.
const callback = (event) => {
    console.log(JSON.stringify(event));
    world.sendMessage(system.currentTick + ' - ' + event.constructor.name);
};
system.beforeEvents.watchdogTerminate.subscribe(callback);
system.afterEvents.scriptEventReceive.subscribe(callback);
world.beforeEvents.chatSend.subscribe(callback);
world.beforeEvents.dataDrivenEntityTriggerEvent.subscribe(callback);
world.beforeEvents.explosion.subscribe(callback);
world.beforeEvents.itemDefinitionEvent.subscribe(callback);
world.beforeEvents.itemUse.subscribe(callback);
world.beforeEvents.itemUseOn.subscribe(callback);
world.beforeEvents.pistonActivate.subscribe(callback);
world.afterEvents.blockBreak.subscribe(callback);
world.afterEvents.blockExplode.subscribe(callback);
world.afterEvents.blockPlace.subscribe(callback);
world.afterEvents.buttonPush.subscribe(callback);
world.afterEvents.chatSend.subscribe(callback);
world.afterEvents.dataDrivenEntityTriggerEvent.subscribe(callback);
world.afterEvents.effectAdd.subscribe(callback);
world.afterEvents.entityDie.subscribe(callback);
world.afterEvents.entityHealthChanged.subscribe(callback);
world.afterEvents.entityHitBlock.subscribe(callback);
world.afterEvents.entityHitEntity.subscribe(callback);
world.afterEvents.entityHurt.subscribe(callback);
world.afterEvents.entityRemoved.subscribe(callback);
world.afterEvents.entitySpawn.subscribe(callback);
world.afterEvents.explosion.subscribe(callback);
world.afterEvents.itemCompleteUse.subscribe(callback);
world.afterEvents.itemDefinitionEvent.subscribe(callback);
world.afterEvents.itemReleaseUse.subscribe(callback);
world.afterEvents.itemStartUse.subscribe(callback);
world.afterEvents.itemStartUseOn.subscribe(callback);
world.afterEvents.itemStopUse.subscribe(callback);
world.afterEvents.itemStopUseOn.subscribe(callback);
world.afterEvents.itemUse.subscribe(callback);
world.afterEvents.itemUseOn.subscribe(callback);
world.afterEvents.leverAction.subscribe(callback);
world.afterEvents.messageReceive.subscribe(callback);
world.afterEvents.pistonActivate.subscribe(callback);
world.afterEvents.playerJoin.subscribe(callback);
world.afterEvents.playerLeave.subscribe(callback);
world.afterEvents.playerSpawn.subscribe(callback);
world.afterEvents.pressurePlatePop.subscribe(callback);
world.afterEvents.pressurePlatePush.subscribe(callback);
world.afterEvents.projectileHitBlock.subscribe(callback);
world.afterEvents.projectileHitEntity.subscribe(callback);
world.afterEvents.targetBlockHit.subscribe(callback);
world.afterEvents.tripWireTrip.subscribe(callback);
world.afterEvents.weatherChange.subscribe(callback);
world.afterEvents.worldInitialize.subscribe(callback);
