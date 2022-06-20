import { world } from "mojang-minecraft";
import { variables } from "mojang-minecraft-server-admin";

function say (message) {
  return world.getDimension("overworld").runCommand(`say §r${message}`);
};

// A list of available, configured server variables.
say(variables.names);

/**
 * @remarks
 * Returns the value of variable that has been configured in a
 * dedicated server configuration JSON file.
 * @param name
 */
say(variables.get("motd"));