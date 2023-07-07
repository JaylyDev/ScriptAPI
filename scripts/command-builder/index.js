// Script example for ScriptAPI
// Author: defowler2005 <https://github.com/defowler2005>
// Project: https://github.com/JaylyDev/ScriptAPI
/**
 * Minecraft Bedrock ScriptAPI Example
 * @license Do what ever you want
 * @author defowler2005
 * @version 1.0.0
 * ---------------------------------------------------------------------------
 * A class that provides custom command creating and registration.
 * @class
 * @namespace commandBuilder.
 * ---------------------------------------------------------------------------
 */

import { world, system } from "@minecraft/server";

/**
 * A class that provides custom command creating and registration.
 * @class
 * @namespace commandBuilder.
 * @example
 * 
 * commandBuild.create({
 *     name: 'test',
 *     description: 'A test command',
 *     is_staff: false,
 * }, (sender, args) => {
 *     sender.sendMessage(`Test command executed by ${sender.name} with args: ${args.join(', ')}`);
 * });
 */

class commandBuilder {
    /**
     * Constructs a new instance of the commandBuilder class.
     * @constructor
     */
    constructor() {
        this.registeredCommands = [];
    }
    /**
     * Creates a custom command.
     * @param {Object} info - Information for the command.
     * @param {Function} callback - The callback function to execute when the command is run.
     */
    create(info, callback) {
        /**
         * A custom command.
         * @typedef {Object} Command
         * @property {string} name - The name of the command.
         * @property {string} description - The description of the command.
         * @property {boolean} is_staff - Indicates if the command is for staff members only.
         * @property {Function} callback - The callback function to execute when the command is run.
         */
        /** @type {Command} */
        const command = {
            name: info.name.toLowerCase().split(' ')[0],
            description: info.description || '"No description provided"',
            is_staff: info.is_staff || false,
            callback,
        };
        this.registeredCommands.push(command);
    }
};

const commandBuild = new commandBuilder();

world.beforeEvents.chatSend.subscribe((data) => {
    const sender = data.sender;
    const message = data.message;
    const prefix = 'CB.';
    const args = message.trim().slice(prefix.length).split(/\s+/g);
    const cmd = args.shift().toLowerCase();
    const cmdObj = commandBuild.registeredCommands;
    const command = cmdObj.find((c) => c.name.includes(cmd));
    if (!message.startsWith(prefix)) return;
    data.cancel = true;
    if (!command) return sender.sendMessage(`Command ${cmd} not found!`);
  /**
    Change `hosen24576jg` to your prefered permission tag.
  */
    if (command.is_staff && !sender.hasTag('hosen24576jg')) return sender.sendMessage(`Invalid permission!`);
    system.run(() => command.callback(sender, args));
});
