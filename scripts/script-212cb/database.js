// Script example for ScriptAPI
// Author: GamerFile <Bedrock Add-ons>
// Project: https://github.com/JaylyDev/ScriptAPI

// Import necessary Minecraft server modules
import { world } from "@minecraft/server";

/**
 * This is a constructor function that creates a new Database object for managing Minecraft scoreboard objectives.
 * @param {string} name - The name of the database.
 */
export const Database = function(name) {

  /**
   * This function sets the value of a Minecraft scoreboard objective.
   * If the objective already exists, its value is updated.
   * @param {string} objName - The name of the objective.
   * @param {string} objValue - The value to set for the objective.
   */
  this.set = function(objName, objValue) {
    // Construct the scoreboard objective name using the database name and objective name
    let scoreboardObjName = `${name}:${objName}`;
    // If the objective already exists, delete it first and then create a new one
    if (this.get(objName)) {
      this.del(objName);
      this.set(objName, objValue);
    } else {
      world.scoreboard.addObjective(scoreboardObjName, objValue);
    }
    return this;
  };

  /**
   * This function checks whether a Minecraft scoreboard objective exists.
   * @param {string} objName - The name of the objective.
   * @returns {boolean} - Whether the objective exists.
   */
  this.has = function(objName) {
    return Boolean(this.get(objName));
  };

  /**
   * This function gets the value of a Minecraft scoreboard objective.
   * @param {string} objName - The name of the objective.
   * @returns {string} - The value of the objective, or undefined if it doesn't exist.
   */
  this.get = function(objName) {
    let scoreboardObjName = `${name}:${objName}`;
    let scoreboardObj = world.scoreboard.getObjective(scoreboardObjName);
    return scoreboardObj ? scoreboardObj.displayName : undefined;
  };

  /**
   * This function creates a new Minecraft scoreboard objective with the given name and value.
   * If an objective with the same name already exists, an error is thrown.
   * @param {string} objName - The name of the objective.
   * @param {string} objValue - The value to set for the objective.
   */
  this.new = function(objName, objValue) {
    let scoreboardObjName = `${name}:${objName}`;
    if (this.get(objName)) {
      throw new Error(`Objective Already Exist. Error At new()`);
      return;
    }
    return this.set(objName, objValue);
  };

  /**
   * This function gets the names of all objectives in the database.
   * @returns {string[]} - An array of objective names.
   */
   
  this.getAll = function() {
    return world.scoreboard.getObjectives().filter(sb => {
      return sb.id.startsWith(`${name}:`);
    }).map(sb => sb.id.replace(`${name}:`, ""));
  };
    /**
   * This function deletes Minecraft scoreboard objective with the given name and value.
   * @param {string} objName - The value to delete the objective.
   */
   this.del = (objName) => {
       if (this.has(objName)) {
           world.scoreboard.removeObjective(`${name}:${objName}`)
       }
       return this;
   }
}
