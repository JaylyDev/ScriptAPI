# ScoreboardM
***A enhanced tool for managing scoreboards***
## Description


**How to use?**

*This example will explain it.*

```js
import { ScoreboardM } from "ScoreboardM.js";

ScoreboardM.newObj("id","val") //This is for assigning new objective to the world.

ScoreboardM.setObj("id","val2") // this changes 

ScoreboardM.getObj("id") //This returns the Objective with given identifier.

ScoreboardM.hasObj("id") // This Returns True Or False Telling whether the objective exist or not.

ScoreboardM.delObj("id") //This deletes the given objective with identifier.

ScoreboardM.getScore(player,"id") //this returns the score if there and if not then returns 0

ScoreboardM.setScore(player,"objectiveId",10) //  This Sets the given target score that is provided

ScoreboardM.addScore(player,"objectiveid",100) //This Adds The given score to target's score 

ScoreboardM.getNameByScore(10,"ObjectiveId")// This returns array of name that has given score in given Objective 

ScoreboardM.removeName({name: "name"},"objectiveId") //This removes the given name from given objective if exists.

ScoreboardM.getList("objectiveId") // This returns an array of objects containing name and score 

ScoreboardM.getDisplaySlot("sidebar") // returns display Options of objective that is currently Displaying on the given slot.

ScoreboardM.setDisplaySlot("sidebar",{ objective : ScoreboardM.getObj("id"), sortOrder: 0}) // this sets Objective to display on the given slot with given displayOptions 

ScoreboardM.clearDisplaySlot("sidebar") // this clears the given slot
```

**Can we assign fakeplayers?**

*Yes we can*

**How?**

*this example explains how.*

```js
import { ScoreboardM } from "ScoreboardM.js";

let fp = { name: "Our Fake player"}; //we assigned fake player on a object

ScoreboardM.newObj("fp","Fake players")// we created a new objective with id fp and displayName "Fake players"

ScoreboardM.setScore(fp,"fp",100) // we have given fakeplayer an score of 10 In objective id named "fp";

ScoreboardM.getScore(fp,"fp") //should return 100

ScoreboardM.setDisplaySlot ("sidebar",{ objective: ScoreboardM.getObj("fp"), sortOrder: 0}) // Displays the objective in sidebar
```

Thats it.

> It Is recommended that , these methods should be used in worldIntialize event
