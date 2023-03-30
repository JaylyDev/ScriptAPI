import { CommandResult, Dimension, Entity, Player } from "@minecraft/server";
/**
 * Main class for custom command functions, with the player that execute
 * this command with additional arguments split in an iterable iterator
 * string array.
 */
export declare class Command {
    private __player;
    argv: IterableIterator<string>;
    get player(): Player;
    get argv0(): string;
    constructor(argv: string[], player: Player);
}
/**
 * Contains a method that lets you run console commands within
 * Minecraft.
 */
export declare class Commands {
    /**
     * @remarks
     * Runs a particular command synchronously from the context.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @param target
     * Target to be used as context for the command to run
     * within.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws This function can throw errors.
     */
    static run(commandString: string, target?: Dimension | Entity): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context.
     * Where possible - and especially for
     * long-running operations - you should use runCommandAsync
     * over runCommand.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @param target
     * Target to be used as context for the command to run
     * within.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws This function can throw errors.
     */
    static runAsync(commandString: string, target?: Dimension | Entity): Promise<CommandResult>;
    /**
     * @remarks
     * Registers a new custom command. This command will become
     * available in Minecraft via [prefix][command].
     * @param prefix
     * The prefix of this specific command. (Case sensitive)
     * @param command
     * Name of this specific command. (Case sensitive)
     * @param commandFunction
     * Implementation of the command function.
     * @throws
     * This function can throw error: You are not allow to register a new slash command.
     * @example example1.js
     * ```typescript
     *          Commands.register("!", "test", function (arg) {
     *              arg.player.runCommandAsync(`say ${arg.argv0} ${JSON.stringify([...arg.argv])}`);
     *          });
     * ```
     */
    static register(prefix: string, command: string, commandFunction: (arg: Command) => void): void;
}
