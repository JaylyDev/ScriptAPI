// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { world } from "@minecraft/server";
import { setScore } from "./index";

const objective = world.scoreboard.getObjective('messages');

world.events.chat.subscribe((event) => {
  if (!event.sender.scoreboard) return;

  const score = event.sender.scoreboard.getScore(objective);
  setScore(event.sender, objective, score + 1);
})