import * as mc from "mojang-minecraft";
import * as gt from "mojang-gametest";
import * as mcui from "mojang-minecraft-ui";

import("mojang-net").then(mcnet => {}).catch(err => {
  console.log(err);
});

import("mojang-minecraft-server-admin").then(mcsa => {}).catch(err => {
  console.log(err);
});