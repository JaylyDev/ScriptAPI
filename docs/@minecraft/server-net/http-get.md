# http.get

Performs a simple HTTP get request in behavior packs.

- `url`: `string`
- Returns: `Promise<`[`HttpResponse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httpresponse)`>`

Since most requests are GET requests without bodies, @minecraft/server-net provides this convenience method. The only difference between this method and `http.request()` is that it sets the method to `GET` automatically.

Example:

```js
import { http } from '@minecraft/server-net';

http.get('http://localhost:8000/').then((response) => {
  // Body content of the HTTP response.
  // Type: string
  const body = response.body;
});
```