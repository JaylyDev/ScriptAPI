import { world, system, CommandPermissionLevel, Player } from "@minecraft/server";
import { getPlayerCPS } from "./index";

system.beforeEvents.startup.subscribe((_event) => {
  _event.customCommandRegistry.registerCommand(
    {
      name: "jayly:cpscounter",
      description: "Custom command for cpscounter",
      permissionLevel: CommandPermissionLevel.Any,
    },
    (origin) => {
      const sender = origin.sourceEntity;
      if (!sender || !(sender instanceof Player)) return;
      sender.runCommand(`say CPS: ${getPlayerCPS(sender)}`);
    }
  );
});
