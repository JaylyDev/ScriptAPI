// generate test file for ./index.ts
import { JaylyDB } from "./index";

const db = new JaylyDB("test");

db.set("testkey", "testvalue");

console.warn(db.get("testkey"));
