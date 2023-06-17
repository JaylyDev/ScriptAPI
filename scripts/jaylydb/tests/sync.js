// @ts-check
import { assert } from "../assert/index.js";
import { JaylyDB } from "../index.js";

export function Main () {
  const db = new JaylyDB("hello");
  const db2 = new JaylyDB("hello");
  db.set("hello", "world");
  db2.set("hello2", "world2");

  assert(db.get("hello2") === "world2");
};