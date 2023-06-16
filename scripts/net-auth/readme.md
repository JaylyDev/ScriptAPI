# mojang-net-auth

Package to make `mojang-net` HttpClient class requires authentication in order to use the module, specifically `HttpClient` class.

## Build

On the current directory run the following command:

`npm run build`

## Usage

- Node.js setup: Used by Node.js to accept or deny request made by GameTest. This file is not required if authentication takes place on the web.

  The script uses `http://localhost/14589` (you can change the port) and fetch valid tokens from `tokens.json`.

  node.js script (not allow to put it as a file due to repository policy)

  ```javascript
  // This script is not intended to be used in Minecraft
  // It's intended to be used in node.js
  import * as http from "node:http";

  const tokens = ["jayly"];
  const port = 14589;
  const host = "localhost";

  function listener(request, response): void {
    const requestToken = request.headers?.token;

    if (typeof requestToken !== "string") {
      respond_deny(response);
    } else if (tokens.includes(requestToken)) {
      console.log("request status", 200);
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("post received");
    } else respond_deny(response);
  }

  function respond_deny(response): void {
    console.log("request status", 403);
    response.writeHead(403, { "Content-Type": "text/plain" });
    response.end("invalid token");
  }

  const server = http.createServer(listener);

  server.listen(port, host);
  console.log(
    `Connecting @minecraft/server-net to host [${host}] on port [${port}].`
  );
  ```

- `gametest.ts`: Used by GameTest (in Bedrock Dedicated Server) to fetch authorization request to `node.ts` (`http://localhost/14589` by default).

  ```js
  import { http, auth } from "./mojang-net-auth/gametest.js";

  auth("jayly"); // Authorization, must place above all http request for http to fetch request.

  // Normal usage like what you do in "mojang-net"
  http.get("https://example.com").then((res) => {
    console.log(res.body);
  });
  ```

  If request is not authorized, following error appears:
  `[Scripting][Error]-Permission Denied: This request is not authorized.`
