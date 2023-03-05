import { Dimension, Player, Entity } from "@minecraft/server";

export class CommandResult {
  'successCount' = 1;
  constructor() {};
};

Dimension.prototype.runCommandAsync = async function (commandString) {
  this.runCommandAsync(await commandString);
  return new CommandResult();
};

Player.prototype.runCommandAsync = async function (commandString) {
  this.runCommandAsync(await commandString);
  return new CommandResult();
};

Entity.prototype.runCommandAsync = async function (commandString) {
  this.runCommandAsync(await commandString);
  return new CommandResult();
};
