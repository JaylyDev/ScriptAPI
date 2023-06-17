// @ts-check
import { JaylyDB } from "../index";
import { AssertionError, assert } from "../assert/index";

export function Main () {
  const datab = new JaylyDB("hello world");
  const expected = "test41";
  datab.set("test1", expected);
  assert(datab.get("test1") === expected, new AssertionError({ actual: datab.get("test1"), operator: "!=", expected }));
  datab.clear();
}