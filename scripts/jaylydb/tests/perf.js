// @ts-check
import { JaylyDB } from "../index.js";


/**
* @param {JaylyDB} db
* @param {number} NUM_ITERATIONS
* @param {number} valueLength
*/
function benchmark(db, NUM_ITERATIONS, valueLength) {
  let startTime, endTime;
  // Test .set method
  startTime = Date.now();
  for (let i = 0; i < NUM_ITERATIONS; i++) {
      db.set(i.toString(), 'x'.repeat(valueLength));
  }
  endTime = Date.now();
  console.log(`Time taken to execute ${NUM_ITERATIONS} .set operations: ${endTime - startTime} ms`);
  // Test .get method
  startTime = Date.now();
  for (let i = 0; i < NUM_ITERATIONS; i++) {
      db.get(i.toString());
  }
  endTime = Date.now();
  console.log(`Time taken to execute ${NUM_ITERATIONS} .get operations: ${endTime - startTime} ms`);
  // Test .has method
  startTime = Date.now();
  for (let i = 0; i < NUM_ITERATIONS; i++) {
      db.has(i.toString());
  }
  endTime = Date.now();
  console.log(`Time taken to execute ${NUM_ITERATIONS} .has operations: ${endTime - startTime} ms`);
  // Test .delete method
  startTime = Date.now();
  for (let i = 0; i < NUM_ITERATIONS; i++) {
      db.delete(i.toString());
  }
  endTime = Date.now();
  console.log(`Time taken to execute ${NUM_ITERATIONS} .delete operations: ${endTime - startTime} ms`);
}

export function Main () {
  const db = new JaylyDB("perf", false);
  const db_encrypted = new JaylyDB("perf2", true);
  for (let i = 0; i <= 3; i++) {
      const bytes = 10000 * i;
      console.log("Benchmarking unencrypted database...", bytes);
      benchmark(db, 100, bytes);
  }
  for (let i = 0; i <= 3; i++) {
      const bytes = 10000 * i;
      console.log("Benchmarking encrypted database...", bytes);
      benchmark(db_encrypted, 100, bytes);
  }
  db.clear();
  db_encrypted.clear();
}