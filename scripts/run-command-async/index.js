import { Dimension, Player, Entity } from "mojang-minecraft";

Dimension.prototype.runCommandAsync = async (commandString) => this.runCommand(await commandString);

Player.prototype.runCommandAsync = async (commandString) => this.runCommand(await commandString);

Entity.prototype.runCommandAsync = async (commandString) => this.runCommand(await commandString);