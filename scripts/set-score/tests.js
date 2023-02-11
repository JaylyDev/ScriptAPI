// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { world } from "@minecraft/server";
import { setScore } from "./index";

world.events.chat.subscribe((event) => {
  if (!event.sender.scoreboard) return;

  const score = event.sender.scoreboard.getScore('messages');
  setScore(event.sender, 'messages', score + 1);
})