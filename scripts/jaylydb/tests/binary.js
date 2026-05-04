import { world , system, CommandPermissionLevel, Player, CustomCommandStatus } from "@minecraft/server";
import { JaylyDB } from "../index";
import LZString from "./lz-string";

const db = new JaylyDB("test");

system.beforeEvents.startup.subscribe((event) => {
  event.customCommandRegistry.registerCommand(
    {
      name: "jayly:binary",
      description: "Test command for binary data",
      permissionLevel: CommandPermissionLevel.Any,
    },
    (origin) => {
      const data = "Hello, World!";
      const player = origin.sourceEntity;
      if (!(player) || !(player instanceof Player)) {
        return {
          message: "This command can only be used by a player.",
          status: CustomCommandStatus.Failure
        };
      }
      const compressed = LZString.compressToBase64(data);
      db.set("binaryData", compressed);
      const retrievedCompressed = db.get("binaryData");
      if (typeof retrievedCompressed !== "string") {
        return {
          message: "Failed to retrieve compressed data from the database.",
          status: CustomCommandStatus.Failure
        };
      }
      const decompressed = LZString.decompressFromBase64(retrievedCompressed);
      player.sendMessage(`Original: ${data}`);
      player.sendMessage(`Compressed: ${compressed}`);
      player.sendMessage(`Decompressed: ${decompressed}`);

      return {
        message: "Binary data test completed. Check your messages for results.",
        status: CustomCommandStatus.Success
      }
    }
  );
});