# Fetch

## Description

The `Fetch` class simplifies HTTP requests in Minecraft Bedrock Edition. It supports common HTTP methods like `GET`, `POST`, `PUT`, and `DELETE`, and automatically handles JSON data.

### Methods

#### `constructor(baseURL: string)`
- Initializes a new `Fetch` instance with the specified base URL.

#### `get(path: string, params?: Object): Promise<Object>`
- Sends an HTTP `GET` request to the specified path with optional query parameters.

#### `post(path: string, data: Object): Promise<Object>`
- Sends an HTTP `POST` request to the specified path with the provided data.

#### `put(path: string, data: Object): Promise<Object>`
- Sends an HTTP `PUT` request to the specified path with the provided data.

#### `delete(path: string): Promise<Object>`
- Sends an HTTP `DELETE` request to the specified path.

### Example
```js
import { Fetch } from './fetch.js';

// Initialize Fetch instance
const api = new Fetch("https://jsonplaceholder.typicode.com");

// GET example
api.get("/posts", { userId: 1 }).then((data) => console.log(data));

// POST example
api.post("/posts", {
    title: "foo",
    body: "bar",
    userId: 1
}).then((data) => console.log(data));

// PUT example
api.put("/posts/1", {
    title: "updated title",
    body: "updated body",
    userId: 1
}).then((data) => console.log(data));

// DELETE example
api.delete("/posts/1").then((data) => console.log(data));
```

## Credits

These scripts were written by [nperma](https://github.com/nperma)
