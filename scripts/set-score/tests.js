// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import {
  world,
  system,
  CommandPermissionLevel,
  Player,
} from "@minecraft/server";
import { setScore } from "./index";
import { getScore } from "./getScore";

system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "jayly:setscore",
      description: "Custom command for setscore",
      permissionLevel: CommandPermissionLevel.Any,
    },
    (origin) => {
      const player = origin.sourceEntity;
      if (player instanceof Player) {
        setScore(player, "testObjective", 10);
        const score = getScore(player, "testObjective");
        player.sendMessage(`Score for testObjective: ${score}`);
      }
    }
  );
});
