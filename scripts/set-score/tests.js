// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, system } from "@minecraft/server";
import { setScore } from "./index";
import { getScore } from "./getScore";

system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (!(event.initiator instanceof Player) || !event.initiator.scoreboardIdentity) return;

  const score = getScore(event.initiator, 'messages');
  setScore(event.initiator, 'messages', score + 1);
})