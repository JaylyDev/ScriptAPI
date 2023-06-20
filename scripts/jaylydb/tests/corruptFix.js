import { JaylyDB } from "../index";
import { assert } from "assert/index";
import { world } from "@minecraft/server";

export function Main () {
  const db = new JaylyDB("yes");
  db.set("hello", "world");

  world.scoreboard.removeObjective("jaylydb:yes");
  world.scoreboard.addObjective("jaylydb:yes", "yes");

  assert(db.get("hello") === "world");
};