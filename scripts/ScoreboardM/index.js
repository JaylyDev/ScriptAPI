// Script example for ScriptAPI
// Author: GamerFile <https://github.com/GamerFile>
// Project: https://github.com/JaylyDev/ScriptAPI

import * as mc from '@minecraft/server'

//The Main ScoreboardM Object For Managing scoreboard
 export const ScoreboardM = {
     /**
      * This Is A Method For Setting An Objective Different displayName
      * @param {string} id - The Id Of Objective
      * @param {string} v - The Name To Be Displayed
      * @returns {ScoreboardM} - Returns The Main Object
      */
    setObj : function(id, v) {
        if (this.getObj(id)) {
            this.delObj(id)
            this.setObj(id, v)
        } else {
            mc.world.scoreboard.addObjective(id, v)
        }
        return this;
    },
         /**
      * This method tells whether a objective exist or not
      * @param {string} id - The Id Of Objective
      * @returns {boolean} - Returns True Or False , If Objective Exists then
      */
    hasObj : function(id) {
        if (this.getObj(id)) {
            return true

        } else {
            return false
        }
    },
         /**
      * This Method For Getting Objective Object
      * @param {string} id - The Id Of Objective
      * @returns {Object} - Returns The Objective Object
      */
    getObj : function(id) {
        if (mc.world.scoreboard.getObjective(id)) {
            return mc.world.scoreboard.getObjective(id)
        }
    },
         /**
      * This Is A Method For Creating  An Objective With The Display Name
      * @param {string} id - The Id Of Objective
      * @param {string} v - The Name To Be Displayed
      * @returns {ScoreboardM} - Returns The Main Object
      */
    newObj : function(id, v) {
        if (this.getObj(id)) {
            throw new Error("Objective Already exist. Error At newObj()")
            return
        }
        return this.setObj(id, v)
    },
         /**
      * This Is A Method For Setting Target's Score
      * @param {Object} target - The Target's Object To Set Score
      * @param {string} Objective - The Id Of Objective
      * @param {number} score - Score To Be Setted To Target
      * @returns {ScoreboardM} - Returns The Main Object
      * @throws {Error} - Throws Error When Objective Doesnt Exist
      */
    setScore : function(target, Objective, score) {
        if (this.getObj(Objective)) {
            mc.world.getDimension("overworld").runCommandAsync(`scoreboard players set ${target.name} "${Objective}" ${Number(score)}`)
            return this
        } else {
            throw new Error("Objective Doesnt exist . At setScore()")
        }
    },
             /**
      * This Is A Method For Getting Target's Score
      * @param {Object} target - The Target's Object To Get Score
      * @param {string} Objective - The Id Of Objective
      * @returns {number} - Returns The Target's Score
      * @throws {Error} - Throws Error When Objective Doesnt Exist
      */
    getScore : function(target, Objective) {
        if (this.getObj(Objective)) {
            var obj = mc.world.scoreboard.getObjective(Objective)
            var players = obj.getParticipants()
            for (var i = 0; i < players.length; i++) {
                var plr = players[i]
                var dname = plr.displayName
                if (dname == target.name) {
                    return obj.getScore(plr)
                }
            }
            return 0
        } else {
            throw new Error("Objective Doesn't exist. at getScore()")
        }
    },
                 /**
      * This Is A Method For Adding Score To Target
      * @param {Object} target - The Target's Object To Add Score
      * @param {string} Objective - The Id Of Objective
      * @returns {ScoreboardM} - Returns The Main ScoreboardM Object
      * @throws {Error} - Throws Error When Objective Doesnt Exist
      */
    addScore : function(target, Objective, score) {
        if (this.getObj(Objective)) {
            mc.world.getDimension("overworld").runCommandAsync(`scoreboard players add ${target.name} "${Objective}" ${score}`)
            return this
        } else {
            throw new Error("Objective Doesn't exist. at addScore()")
        }
    },
             /**
      * This Method For Deleting Objective Object
      * @param {string} id - The Id Of Objective
      * @returns {Object} - Returns The Main ScoreboardM Object
      */
    delObj : function(id) {
        if (this.hasObj(id)) {
            mc.world.scoreboard.removeObjective(id)
            return this;
        }
    },
    /**
     * This Method Is To Get An Array Of Names Having Given Score. Could Work On Fakeplayers , Players And Entities
     * @param {number} score - Score To Get Names
     * @param {string} Objective - Id Of Objective To Get Names
     * @returns {String[] | undefined} - Contains All Names and also undefined it there isnt any of that score
     */
    getNameByScore : function(score, Objective) {
        if (this.hasObj(Objective)) {

            let obj = this.getObj(Objective)

            let list = [];

            for (let plr of obj.getParticipants()) {

                let score1 = obj.getScore(plr);

                if (score == score1) {

                    list.push(plr.displayName);

                }

            }

            return list.length == 0 ? undefined : list

        } else {

            return undefined;

        }

    },
        /**
     * This Method Is To Get An Array Of Names And Scores Having. Could Work On Fakeplayers
     * @param {string} obj - Id Of Objective To Get Names And Scores
     * @returns {Object[] | undefined} - Contains All Names And Scores and also undefined it there isnt any of that score
     */
    getList : function(obj) {

        if (this.hasObj(obj)) {

            let Obj = this.getObj(obj)

            let list = [];

            for (let plr of Obj.getParticipants()) {

                let score = Obj.getScore(plr);

                let name = plr.displayName;

                list.push({
                    name: name,
                    score: score
                })

            }

            return list.length == 0 ? undefined : list;

        } else return undefined;

    },
    /**
     * This Method Is To Getting Display Slot Options That Is Currently Displaying
     * @param {string} id - Id Of Slot To Get Options
     * @returns {Object} - This Returns Display Options
     * @example 
     * ScoreboardM.getDisplaySlot("sidebar")
     */
    getDisplaySlot: function(id) {
        
            return mc.world.scoreboard.getObjectiveAtDisplaySlot(id);
    },
    /**
     * This Clears The Displaying Objective At Given Slot
     * @param {string} id - The Display Slot Id To Clear
     * @returns {ScoreboardM} - The Main ScoreboardM Object
     * @example
     * ScoreboardM.clearDisplaySlot("sidebar")
     */
    clearDisplaySlot: function(id) {
                
             mc.world.scoreboard.clearObjectiveAtDisplaySlot(id);
             return this;
    },
    /**
     * This Sets/Displays Objective At Given Slots
     * @param {string} id - The Slot Id To Display Objective
     * @param {Object} opt - The scoreboard Options to display the Objective
     * @returns {ScoreboardM} - The Main ScoreboardM Object
     * @example
     * ScoreboardM.setDisplaySlot("sidebar",{objective: ScoreboardM.getObj("money"),sortOrder: 0})
     */
    setDisplaySlot: function(id,opt) {
             mc.world.scoreboard.setObjectiveAtDisplaySlot(id,opt);
             return this;

    }
}
