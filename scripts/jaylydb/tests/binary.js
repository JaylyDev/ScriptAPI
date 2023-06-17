import { world } from "@minecraft/server";
import { JaylyDB } from "../index";
import LZString from "./lz-string";

const db = new JaylyDB("test");

world.afterEvents.chatSend.subscribe(event => {
  db.set(Date.now().toString(), LZString.compress(event.message));
});