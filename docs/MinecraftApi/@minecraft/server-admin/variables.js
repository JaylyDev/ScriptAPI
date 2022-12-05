import { world } from "@minecraft/server";
import { variables } from "@minecraft/server-admin";

/**
 * Broadcasts a message that is displayed on all connected clients.
 * @param {string} message 
 * @returns 
 */
function say (message) {
  return world.say(message);
};

// A list of available, configured server variables.
say(JSON.stringify(variables.names));

/**
 * @remarks
 * Returns the value of variable that has been configured in a
 * dedicated server configuration JSON file.
 * @param name
 */
say(variables.get("motd"));