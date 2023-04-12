// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world } from "@minecraft/server";
import { setScore } from "./index";
import { getScore } from "./getScore";

world.events.chatSend.subscribe((event) => {
  if (!event.sender.scoreboardIdentity) return;

  const score = getScore(event.sender, 'messages');
  setScore(event.sender, 'messages', score + 1);
})