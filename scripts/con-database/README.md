# Con-Databases
This package contains three types of databases, JsonDatabase, NBTDatabase, CustomDatabase. 
Each of these database types supports all possible Map class operations from ECMAScript, which means.
### Inherited from Map
 - size: number of properties
 - [Symbol.iterator]: is iterable [key, value]
 - clear(): clear all values
 - delete(key: string): delete specific value
 - entries(): generator of all values [key, value]
 - forEach(callBack: (value, key, this)=>void): for each all elements and call provided function for that
 - get(key: string): returns value for specific key
 - set(key: string, value: any): sets new value for provided key
 - keys(): returns iterbale of keys
 - values(): returns iterable of values
### Additional Methods
 - load(): will load database from provided scoreboard
 - loadAsync(): will load database asynchonously from profived scoreboard
 - rebuild(): when database is deleted by user in the world you can call rebuild to save loaded data without lost
 - rebuildAsync(): same as rebuild() but asyncronouse
### Additional Properties
 - objective: returns scoreboard objective what is database binded to
 - id: returns id of the objective
 - loaded: returns boolean, true when database is loaded
 - maxLength: max size of key and value after parsed via parse
 - savingMode: mode when your database is saving your data after change
   - OneTimeSave: Saving after value was changed
   - EndTickSave: Saving at the end of the tick, ater any changes occurs
   - IntervalTick: Saving Every interval if changes occurs

### Database Types
 - JsonDatabase, is saving data in JSON form. (SuperFast/EasyToRead)
 - NBTDatabase, is saving data in NBT form. (Fast/HardToRead)
 - Custom, is saving data in format of provided parser (undefined/undefined)

### Example
```js
// INITIALIZATION OF DATABASE
const myDB = new JsonDatabase("MyIdentifier").load();
const myDB = new NBTDatabase("MyIdentifier").load();
const myDB = new CustomDatabase(JSON /* JSON is parser */,"MyIdentifier").load();

//using (get/set) to (read/write) data (from/to) database
const worldOpenedCount = myDB.get("openCount")??0;
myDB.set("openCount", ++worldOpenedCount);

//getting all data saved in database
for(const [key, value] of myDB.entries()){
    console.warn(key, value);
}

//clearing database
myDB.clear();

//removing specific value
myDB.delete("Josh");

//forEaching every element in scoreboard
myDB.forEach((value,key)=>{
    console.warn(key, value);
});
```