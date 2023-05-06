import { world } from "@minecraft/server";
import { JaylyDB } from "./index.js";
/**
 * @param {number} length
 */
function generateDummyString(length) {
    let dummyString = '';
    for (let i = 0; i < length; i++) {
        dummyString += String.fromCharCode(Math.floor(Math.random() * 94) + 32);
    }
    return dummyString;
}
;
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
        db.set(i.toString(), generateDummyString(valueLength));
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
/**
 * @param {number} length
 */
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
;
world.afterEvents.worldInitialize.subscribe(() => {
    console.log("Starting benchmark");
    const db = new JaylyDB(makeid(5), false);
    const db_encrypted = new JaylyDB(makeid(5), true);
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
});
