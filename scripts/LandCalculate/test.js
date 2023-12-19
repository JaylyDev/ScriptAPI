import * as mc from "@minecraft/server";
import { MATH } from "./math.js";

const AreaLobby = { start: [200, -200], end: [-200, 200] } //center 0,0


let playerLog = {};
mc.system.runInterval(async () => {
  mc.world.getPlayers().forEach(ply => {
    if (!playerLog[ply.name]) {
      playerLog[ply.name] = {
        status: "out land",
      };
    }
    const playerLocation = new MATH([ply.location.x, ply.location.z]));
    if (playerLocation.testInBox(areaLobby) && playerLog[ply.name].status == "out land") {
      ply.sendMessage("§7You Are inside in this area Lobby");
      playerLog[ply.name].status = "in land";
    } else if (!playerLocation.testInBox(areaLobby) && playerLog[ply.name].status == "in land") {
      ply.sendMessage("§7You are out this Area Lobby!!");
      playerLog[ply.name].status = "out land";
    };
  });
});
