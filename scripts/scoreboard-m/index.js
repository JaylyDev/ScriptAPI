// Script example for ScriptAPI
// Author: GamerFile <https://github.com/GamerFile>
// Project: https://github.com/JaylyDev/ScriptAPI
import * as mc from '@minecraft/server'

//The Main ScoreboardM Object For Managing scoreboard
let objOptions = [],list;

export const ScoreboardM = {
    /**
     * This Is A Method For Setting An Objective Different displayName
     * @param {string} id - The Id Of Objective
     * @param {string} v - The Name To Be Displayed
     * @returns {ScoreboardM} - Returns The Main Object
     */
    setObj: function(id, v) {
        if (this.getObj(id)) {
            objOptions[0] = this.getDisplaySlot(mc.DisplaySlotId.Sidebar) ? this.getDisplaySlot(mc.DisplaySlotId.Sidebar) : undefined;

            objOptions[1] = this.getDisplaySlot(mc.DisplaySlotId.List) ? this.getDisplaySlot(mc.DisplaySlotId.List) : undefined;

            objOptions[2] = this.getDisplaySlot(mc.DisplaySlotId.BelowName) ? this.getDisplaySlot(mc.DisplaySlotId.BelowName) : undefined;

            list = this.getList(id)
            this.delObj(id);
            this.setObj(id, v)

        } else {
            mc.world.scoreboard.addObjective(id, v);
            for (let ind in objOptions) {
                let opts = objOptions[ind]
                if (opts?.objective.id == id) {
                    list?.forEach(obj => {
                        this.setScore(obj, id, obj.score)
                    })
                    switch (ind) {
                        case "0":
                            this.setDisplaySlot(mc.DisplaySlotId.Sidebar, opts);
                            break;
                        case "1":
                            this.setDisplaySlot(mc.DisplaySlotId.List, opts);
                            break;
                        case "2":
                            this.setDisplaySlot(mc.DisplaySlotId.BelowName, opts);
                            break;
                    }
                } else {
                    list?.forEach(obj => this.setScore(obj,id,obj.score))
                }
            }
        }
        return this;
    },
    /**
     * This method tells whether a objective exist or not
     * @param {string} id - The Id Of Objective
     * @returns {boolean} - Returns True Or False , If Objective Exists then
     */
    hasObj: function(id) {
        if (this.getObj(id)) {
            return true

        } else {
            return false
        }
    },
    /**
     * This Method For Getting Objective Object
     * @param {string} id - The Id Of Objective
     * @returns {mc.ScoreboardObjective} - Returns The Objective Object
     */
    getObj: function(id) {
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
    newObj: function(id, v) {
        if (this.getObj(id)) {
            throw new Error("Objective Already exist. Error At newObj()")
            return
        }
        return this.setObj(id, v)
    },
    /**
     * This Is A Method For Setting Target's Score
     * @param {{name: string}} target - The Target's Object To Set Score
     * @param {string} Objective - The Id Of Objective
     * @param {number} score - Score To Be Setted To Target
     * @returns {ScoreboardM} - Returns The Main Object
     * @throws {Error} - Throws Error When Objective Doesnt Exist
     */
    setScore: function(target, Objective, score) {
        if (this.getObj(Objective)) {
            mc.world.getDimension("overworld").runCommand(`scoreboard players set "${target.name}" "${Objective}" ${Number(score)}`)
            return this
        } else {
            throw new Error("Objective Doesnt exist . At setScore()")
        }
    },
    /**
     * This Is A Method For Getting Target's Score
     * @param {{name: string}} target - The Target's Object To Get Score
     * @param {string} Objective - The Id Of Objective
     * @returns {number} - Returns The Target's Score
     * @throws {Error} - Throws Error When Objective Doesnt Exist
     */
    getScore: function(target, Objective) {
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
     * @param {{name: string}} target - The Target's Object To Add Score
     * @param {string} Objective - The Id Of Objective
     * @returns {ScoreboardM} - Returns The Main ScoreboardM Object
     * @throws {Error} - Throws Error When Objective Doesnt Exist
     */
    addScore: function(target, Objective, score) {
        if (this.getObj(Objective)) {
            mc.world.getDimension("overworld").runCommand(`scoreboard players add "${target.name}" "${Objective}" ${score}`)
            return this
        } else {
            throw new Error("Objective Doesn't exist. at addScore()")
        }
    },
    /**
     * This Method Is For Removing a entity,fakeplayer or player name from given objective
     * @param {{name: string}} target - The Object Of The Player Or Fakeplayer
     * #param {string} Objective - Id Of The Objective
     * @returns {ScoreboardM} - Returns The Main ScoreboardM Object
     * @throws {Error} - Throws Error When Objective Doesnt Exist
     */
    removeName: function(target,Objective) {
        if (this.hasObj(Objective)) {
            mc.world.getDimension("overworld").runCommand(`scoreboard players reset "${target.name}" "${Objective}"`)
            return this;
        } else {
            throw new Error("Objective Doesn't exist. at removeName()")
        }
    },
    /**
     * This Method For Deleting Objective Object
     * @param {string} id - The Id Of Objective
     * @returns {ScoreboardM} - Returns The Main ScoreboardM Object
     */
    delObj: function(id) {
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
    getNameByScore: function(score, Objective) {
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
     * @returns {{name: any,score: any}[] | undefined} - Contains All Names And Scores and also undefined it there isnt any of that score
     */
    getList: function(obj) {

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
     * @param {mc.DisplaySlotId} id - Id Of Slot To Get Options
     * @returns {mc.ScoreboardObjectiveDisplayOptions} - This Returns Display Options
     * @example 
     * ScoreboardM.getDisplaySlot(DisplaySlotId.Sidebar)
     */
    getDisplaySlot: function(id) {

        return mc.world.scoreboard.getObjectiveAtDisplaySlot(id);
    },
    /**
     * This Clears The Displaying Objective At Given Slot
     * @param {mc.DisplaySlotId} id - The Display Slot Id To Clear
     * @returns {ScoreboardM} - The Main ScoreboardM Object
     * @example
     * ScoreboardM.clearDisplaySlot(DisplaySlotId.Sidebar)
     */
    clearDisplaySlot: function(id) {

        mc.world.scoreboard.clearObjectiveAtDisplaySlot(id);
        return this;
    },
    /**
     * This Sets/Displays Objective At Given Slots
     * @param {mc.DisplaySlotId} id - The Slot Id To Display Objective
     * @param {mc.ScoreboardObjectiveDisplayOptions} opt - The scoreboard Options to display the Objective
     * @returns {ScoreboardM} - The Main ScoreboardM Object
     * @example
     * ScoreboardM.setDisplaySlot(DisplaySlotId.Sidebar,{objective: ScoreboardM.getObj("money"),sortOrder: 0})
     */
    setDisplaySlot: function(id, opt) {
        mc.world.scoreboard.setObjectiveAtDisplaySlot(id, opt);
        return this;

    }
}
