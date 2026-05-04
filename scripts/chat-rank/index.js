// Script examples for ScriptAPI
// Author: WavePlayz <Bedrock Add-Ons>

// command: /tag @s add rank:Owner
import {
  world,
  system,
  CommandPermissionLevel,
  Player,
  CustomCommandParamType,
} from "@minecraft/server";

system.beforeEvents.startup.subscribe((_event) => {
  _event.customCommandRegistry.registerCommand(
    {
      name: "jayly:chatrank",
      description: "Custom command for chatrank",
      mandatoryParameters: [{ name: "message", type: CustomCommandParamType.String }],
      permissionLevel: CommandPermissionLevel.Any,
    },
    (origin, message) => {
      const { sourceEntity } = origin;

      const sender = sourceEntity;
      if (!(sender && sender instanceof Player)) return;

      let rank = sender
        .getTags()
        .find((tag) => tag.startsWith("rank:"))
        ?.split(":")[1];

      if (!rank) return;

      world.sendMessage(rank + " " + sender.name + ": " + message);
    }
  );
});
