import { JsonDatabase } from "./index";

const a = new JsonDatabase("SUS").load();
a.set("sussy",(a.get("sussy")??0) + 1);

console.warn("Current sussy count is " + a.get("sussy"));