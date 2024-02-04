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
};
