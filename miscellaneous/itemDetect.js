// By WavePlayz

import { world } from "mojang-minecraft";

world.events.tick.subscribe(() => {
  for (let player of world.getPlayers()) {
    let con = player.getComponent("inventory").container;
    let items = [];
    for (let i = 0; i < con.size; i++) items.push(con.getItem(i.id));

    items.includes("minecraft:stick");
  }
});
