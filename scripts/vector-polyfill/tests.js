'use strict';
import { Vector } from "vector-polyfill";
import 'json-stringify';
import * as mc from '@minecraft/server';

function polyfill() {
  const startTime = Date.now();

  const back = Vector.back;
  const down = Vector.down;
  const forward = Vector.forward;
  const left = Vector.left;
  const one = Vector.one;
  const right = Vector.right;
  const up = Vector.up;
  const zero = Vector.zero;
  const add = Vector.add(Vector.left, Vector.right);
  const cross = Vector.cross(new Vector(6, 4, 8), new Vector(7, 5, -3));
  const distance = Vector.distance(new Vector(3, 4, 5), new Vector(6, 7, 8));
  const divide = Vector.divide(new Vector(5, 5, 5), new Vector(2, 3, 4));
  const divide2 = Vector.divide(new Vector(5, 5, 5), 4);
  const lerp = Vector.lerp(new Vector(5, 5, 5), new Vector(5, 5, 15), 1);
  const max = Vector.max(new Vector(5, 5, 5), new Vector(4, 5, 5));
  const min = Vector.min(new Vector(4, 5, 5), new Vector(5, 5, 5));
  const multiply = Vector.multiply(new Vector(5, 5, 5), new Vector(2, 3, 4));
  const multiply2 = Vector.multiply(new Vector(5, 5, 5), 5);
  const slerp = Vector.slerp(new Vector(1, 0, 0), new Vector(0, 1, 1), 0.5);
  const subtract = Vector.subtract(new Vector(5, 5, 5), new Vector(5, 5, 5));
  const vector = new Vector(10, 10, 10);

  const endTime = Date.now();
  const time = endTime - startTime;

  console.warn(`Vector3 Test Results (javascript):
back - ${JSON.stringify(back)}
down - ${JSON.stringify(down)}
forward - ${JSON.stringify(forward)}
left - ${JSON.stringify(left)}
one - ${JSON.stringify(one)}
right - ${JSON.stringify(right)}
up - ${JSON.stringify(up)}
zero - ${JSON.stringify(zero)}
add - ${JSON.stringify(add)}
cross - ${JSON.stringify(cross)}
distance - ${JSON.stringify(distance)}
divide - ${JSON.stringify(divide)}
divide2 - ${JSON.stringify(divide2)}
lerp - ${JSON.stringify(lerp)}
max - ${JSON.stringify(max)}
min - ${JSON.stringify(min)}
multiply - ${JSON.stringify(multiply)}
multiply2 - ${JSON.stringify(multiply2)}
slerp - ${JSON.stringify(slerp)}
subtract - ${JSON.stringify(subtract)}
vector.length() - ${JSON.stringify(vector.length())}
vector.lengthSquared() - ${JSON.stringify(vector.lengthSquared())}
vector.normalized() - ${JSON.stringify(vector.normalized())}`);

  return time;
}

function native() {
  const startTime = Date.now();

  const back = mc.Vector.back;
  const down = mc.Vector.down;
  const forward = mc.Vector.forward;
  const left = mc.Vector.left;
  const one = mc.Vector.one;
  const right = mc.Vector.right;
  const up = mc.Vector.up;
  const zero = mc.Vector.zero;
  const add = mc.Vector.add(mc.Vector.left, mc.Vector.right);
  const cross = mc.Vector.cross(new mc.Vector(6, 4, 8), new mc.Vector(7, 5, -3));
  const distance = mc.Vector.distance(new mc.Vector(3, 4, 5), new mc.Vector(6, 7, 8));
  const divide = mc.Vector.divide(new mc.Vector(5, 5, 5), new mc.Vector(2, 3, 4));
  const divide2 = mc.Vector.divide(new mc.Vector(5, 5, 5), 4);
  const lerp = mc.Vector.lerp(new mc.Vector(5, 5, 5), new mc.Vector(5, 5, 15), 1);
  const max = mc.Vector.max(new mc.Vector(5, 5, 5), new mc.Vector(4, 5, 5));
  const min = mc.Vector.min(new mc.Vector(4, 5, 5), new mc.Vector(5, 5, 5));
  const multiply = mc.Vector.multiply(new mc.Vector(5, 5, 5), new mc.Vector(2, 3, 4));
  const multiply2 = mc.Vector.multiply(new mc.Vector(5, 5, 5), 5);
  const slerp = mc.Vector.slerp(new mc.Vector(1, 0, 0), new mc.Vector(0, 1, 1), 0.5);
  const subtract = mc.Vector.subtract(new mc.Vector(5, 5, 5), new mc.Vector(5, 5, 5));
  const vector = new mc.Vector(10, 10, 10);

  const endTime = Date.now();
  const time = endTime - startTime;

  console.warn(`Vector3 Test Results (native):
  back - ${JSON.stringify(back)}
  down - ${JSON.stringify(down)}
  forward - ${JSON.stringify(forward)}
  left - ${JSON.stringify(left)}
  one - ${JSON.stringify(one)}
  right - ${JSON.stringify(right)}
  up - ${JSON.stringify(up)}
  zero - ${JSON.stringify(zero)}
  add - ${JSON.stringify(add)}
  cross - ${JSON.stringify(cross)}
  distance - ${JSON.stringify(distance)}
  divide - ${JSON.stringify(divide)}
  divide2 - ${JSON.stringify(divide2)}
  lerp - ${JSON.stringify(lerp)}
  max - ${JSON.stringify(max)}
  min - ${JSON.stringify(min)}
  multiply - ${JSON.stringify(multiply)}
  multiply2 - ${JSON.stringify(multiply2)}
  slerp - ${JSON.stringify(slerp)}
  subtract - ${JSON.stringify(subtract)}
  vector.length() - ${JSON.stringify(vector.length())}
  vector.lengthSquared() - ${JSON.stringify(vector.lengthSquared())}
  vector.normalized() - ${JSON.stringify(vector.normalized())}`);

  return time;
}

const polyfillTime = polyfill();
const nativeTime = native();

console.warn(`Polyfill time: ${polyfillTime}, Native time: ${nativeTime}`);