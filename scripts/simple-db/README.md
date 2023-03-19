# simple-db

## Description
A Simple DB For Minecraft 1.19.70

Here is a example
```javascript
import { Database } from "index.js";

let db = new Database("name")

db.new("id","val")// this will save the value "val" with identifier "id".

db.get("id") //this should return "val"

db.set("id","val2") //this will change the value of identifier "id" with value "val2".

db.getAll() //this should return String array containing all identifiers , but in this example we will only get "["id"]" as a result.

db.del("id") //this will delete identifier "id" along with value "val2".

```

## Credits
These scripts were written by GamerFile on Bedrock Add-ons
