import QuickDB from "./index.js";
import { world } from "@minecraft/server";

const db = new QuickDB("twst");

db.set("anjay", ["alok","ruok"]);


console.log(db.get("anjay")); //log: ["alok","ruok"]

db.set("anjay", db.get("anjay").filter(value=>value!=="alok")); //value: ["alok"]

db.set("anjay", "nandalopadit") //value: nandalopadit

db.delete("anjay");

world.afterEvents.playerSpawn.subscribe((event)=>{
  if(event.initialSpawn) {
    if(!db.has(player.id){

      db.set(player.id,{
        name: player.name,
        joinDate: Date.now()
      });
      world.sendMessage("§aregister new player with name " + player.name);
      return;
    }

   world.sendMessage(`§a${player.name} join date: ${new Date(db.get(player.id)).toLocaleDateString()?.replace(new RegExp("/","g"),"-")}`);
  }
})
