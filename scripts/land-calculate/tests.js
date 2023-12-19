import * as mc from "@minecraft/server";
import { MATH } from "./index.js";

const AreaLobby = { start: [200, -200], end: [-200, 200] }; // Center 0,0

let playerLog = {};

mc.system.runInterval(async () => {
  mc.world.getPlayers().forEach((ply) => {
    if (!playerLog[ply.name]) {
      playerLog[ply.name] = {
        status: "out land",
      };
    }

    const playerLocation = new MATH([ply.location.x, ply.location.z]);

    if (playerLocation.testInbox(AreaLobby) && playerLog[ply.name].status === "out land") {
      ply.sendMessage("§7You are inside this Area Lobby");
      playerLog[ply.name].status = "in land";
    } else if (!playerLocation.testInbox(AreaLobby) && playerLog[ply.name].status === "in land") {
      ply.sendMessage("§7You are out of this Area Lobby!!");
      playerLog[ply.name].status = "out land";
    }
  });
});
