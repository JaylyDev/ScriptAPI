// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { world } from "@minecraft/server";
import { setScore } from "./index";
import { getScore } from "get-score/get-score";

world.events.chat.subscribe((event) => {
  if (!event.sender.scoreboard) return;

  const score = getScore(event.sender, 'messages');
  setScore(event.sender, 'messages', score + 1);
})