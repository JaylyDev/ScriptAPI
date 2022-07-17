import { CommandResult, Dimension, Entity } from "mojang-minecraft";

/**
 * Contains a method that lets you run console commands within
 * Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class Commands {
  /**
   * @remarks
   * Runs a particular command from the context.
   * @param commandString
   * Command to run. Note that command strings should not start
   * with slash.
   * @param target
   * Target to be used as context for the command to run
   * within.
   * @returns For commands that return data, returns a JSON structure with command response values.
   * @throws This function can throw errors.
   * @example commands.js
   * ```typescript
   *        Commands.run("say You got a new high score!", World.getDimension("overworld"));
   *        Commands.run("scoreboard players set @p score 10", World.getDimension("overworld"));
   * ```
   */
  static run(commandString: string, target: Dimension | Entity): any {
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
  static async runAsync(commandString: string, target: Dimension | Entity): Promise<CommandResult> {
    if (target instanceof Dimension || Entity) return target.runCommandAsync(commandString);
    else throw TypeError("Native type conversion failed");
  };
};