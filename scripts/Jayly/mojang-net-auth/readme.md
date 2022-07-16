# mojang-net-auth

Package to make `mojang-net` HttpClient class requires authentication in order to use the module, specifically `HttpClient` class.

## Build
On the current directory run the following command:

```npm run build```

## Usage
- `node.ts`: Used by Node.js to accept or deny request made by GameTest. This file is not required if authentication takes place on the web.

  The script uses `http://localhost/14589` (you can change the port) and fetch valid tokens from `tokens.json`.

- `gametest.ts`: Used by GameTest (in Bedrock Dedicated Server) to fetch authorization request to `node.ts` (`http://localhost/14589` by default).

  ```js
  import { http, auth } from "./mojang-net-auth/gametest.js";

  auth("jayly"); // Authorization, must place above all http request for http to fetch request.

  // Normal usage like what you do in "mojang-net"
  http.get("https://example.com").then(res => {
    console.log(res.body);
  });
  ```

  If request is not authorized, following error appears:
  ```[Scripting][Error]-Permission Denied: This request is not authorized.```