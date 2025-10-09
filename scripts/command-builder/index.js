// Script example for ScriptAPI
// Author: undefined <https://github.com/undefined>
// Project: https://github.com/JaylyDev/ScriptAPI

/**
 * Minecraft Bedrock ScriptAPI Example
 * @license undefined
 * @author undefined
 * @version 1.0.0
 * ---------------------------------------------------------------------------
 * Easy use command system.
 *
 * commandBuild.register(
     {
         name: '',
         description: '',
         for_staff: false,
         usage: [
             '',
         ],
         aliases: [
            ''
         ],
         examples: [
             ''
         ]
     },
     (data, args) => { },
     (data, args) => { }
 *
 * ---------------------------------------------------------------------------
 */

/**
 * A class to manage server commands
 * 
 * Created on Saturday, 21 June 2025, 5:04 PM
 * Edited on Thursday, 2 October, 8:17 PM
 */
class commandBuilder {
    constructor() {
        /**
         * @type {command[]}
         * @typedef {Object} command - The commands info
         * @property {string} name - Name of the command
         * @property {string} description - Description of the command
         * @property {string} usage - Usage template of the command
         * @property {Array<string>} aliases - Like 2nd names of the command
         * @property {Array<string>} examples - Examples on how to use the command
         * @property {boolean} for_staff - Indicates weather the command is designed for staff only
         * @property {(data: import('@minecraft/server').ChatSendBeforeEvent, args: string[]) => void} callback - Function to be executed upon being called
         * @property {(data: import('@minecraft/server').ChatSendBeforeEvent, args: string[]) => void} callbackWM - Function to be executed after player movement
         */
        this.commands = [];
    };

    /**
     * register a new command to be registered
     * @param {Object} info - The commands info
     * @param {string} [info.name] - Name of the command
     * @param {string} [info.description] - Description of the command
     * @param {Array<string>} [info.usage] - Usage template of the command
     * @param {Array<string>} [info.aliases] - Like 2nd names of the command
     * @param {Array<string>} [info.examples] - Examples on how to use the command
     * @param {boolean} [info.for_staff=false] - Indicates if the command is designed for staff only
     * @param {(data: import('@minecraft/server').ChatSendBeforeEvent, args: string[]) => void} callback - The code that will be run immediately
     * @param {(data: import('@minecraft/server').ChatSendBeforeEvent, args: string[]) => void} callbackWM - The code that will be run after player movement
     */
    register(info, callback, callbackWM) {
        this.commands.push(
            {
                name: info.name.split(' ')[0],
                description: info.description || '',
                usage: info.usage || [],
                aliases: info.aliases || [],
                examples: info.examples || [],
                for_staff: info.for_staff || false,
                callback: callback || (() => { console.warn(`Command ${info.name} is missing it's callback function!`); }),
                callbackWM: callbackWM || (() => { })
            }
        );
    };

    /**
     * Get a list of commands registered
     * @param {Boolean} getStaff - Get staff or nonstaff commands, otherwise all commands
     */
    getAllCommands(getStaff) {
        if (getStaff === true) {
            return this.commands.filter((cmd) => cmd.for_staff === true);
        } else if (getStaff === false) {
            return this.commands.filter((cmd) => cmd.for_staff === false);
        } else {
            return this.commands;
        };
    };


    /**
     * Get a specific command object
     * @param {String} cmdName - Name of the command
     */
    getCommand(cmdName) {
        const cmds = this.commands.find((cmd) => (cmd.name === cmdName || cmd.aliases.some((aliase) => cmdName === aliase)));

        return cmds;
    };
};

/**
 * @example
 * commandBuild.register(
    {
        name: 'test',
        description: 'Example command',
        for_staff: false,
        usage: [
            'test',
        ],
        examples: [
            'test',
        ]
    },
    (data, args) => { },
    (data, args) => { }
);
 */

export const commandBuild = new commandBuilder();

world.beforeEvents.chatSend.subscribe((data) => {
    if (!data.message.startsWith('!') || data.message === '!') return; data.cancel = true;

    const args = data.message.slice('!'.length).trim().split(new RegExp(/\s+/g));
    const sender = data.sender;
    const cmd = args.shift();
    const command = commandBuild.getCommand(cmd);

    if (!command)
        return sender.sendMessage(`§cThe command §f${cmd}§c was not found`);

    if (command.for_staff === true && sender.hasTag('someTag') === false)
        return sender.sendMessage(`§cThe command §f${cmd}§c is for staff only`);

    system.run(() => {
        command.callback(data, args);
    });
});
