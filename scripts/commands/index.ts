// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI

import { CommandResult, Dimension, Entity, world, Player } from "@minecraft/server";

/**
 * Main class for custom command functions, with the player that execute
 * this command with additional arguments split in an iterable iterator
 * string array.
 */
export class Command {
  private __player: Player;
  public argv: IterableIterator<string>;
  public get player(): Player { return this.__player; }
  public get argv0 (): string { return this.argv.next().value; };
  constructor (argv: string[], player: Player) {
    this.argv = (function* () { for (let arg of argv) yield arg; })();
    this.__player = player;
  };
};

/**
 * Contains a method that lets you run console commands within
 * Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class Commands {
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
  static run(commandString: string, target: Dimension | Entity = world.getDimension("overworld")): CommandResult {
    if (target instanceof Dimension || Entity) return target.runCommand(commandString);
    else throw TypeError("Native type conversion failed");
  };
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
  static async runAsync(commandString: string, target: Dimension | Entity = world.getDimension("overworld")): Promise<CommandResult> {
    if (target instanceof Dimension || Entity) return await target.runCommandAsync(commandString);
    else throw TypeError("Native type conversion failed");
  };

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
  public static register (prefix: string, command: string, commandFunction: (arg: Command) => void): void {
    if (prefix.startsWith("/")) throw Error ("Unable to register slash commands.");
    world.events.beforeChat.subscribe((arg) => {
      var argv = arg.message.split(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g).filter( e => e.trim().length > 0);
      if (argv[0] === `${prefix}${command}`) {
        arg.cancel = true;
        try {
          commandFunction(new Command(argv, arg.sender));
        } catch (err) {
          let { statusMessage } = JSON.parse(err);
          console.error(err);
          arg.sender.sendMessage(`§c${statusMessage}`);
        };
      };
    });
  };
};
