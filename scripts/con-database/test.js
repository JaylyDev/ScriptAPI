import { JsonDatabase } from "./index";

const a = new JsonDatabase("Josh").load();
a.set("trololo",(a.get("bob")??0) + 1);

console.warn("Current trololo count is " + a.get("trololo"));