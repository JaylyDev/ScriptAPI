# http.request

Makes a request to a web server.

- `config`: [`HttpRequest`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httprequest)
- Returns: `Promise<`[`HttpResponse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/httpresponse)`>`

Config must be a new HttpRequest instance in order to structuring a request.

## Examples

Here are the following ways to send a request to a web server, includes each available http request methods.

### Create a HttpRequest object

```js
import { http } from "@minecraft/server-net";

const request = new HttpRequest("http://localhost:8000/"); // You must put a url in parameter
```

### Set HTTP method

More infomation on HTTP request methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

**GET**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.GET;
```

**HEAD**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.HEAD;
```

**POST**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.POST;
```

**PUT**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.PUT;
```

**DELETE**

```js
import { HttpRequestMethod } from '@minecraft/server-net';
request.method = HttpRequestMethod.DELETE;
```

### Set HTTP headers

A HTTP header can be used in an HTTP request to provide information about the request context, so that the server can tailor the response.

```js
import { HttpHeader } from '@minecraft/server-net';
request.headers = [
    new HttpHeader("Content-Type", "application/json"),
    new HttpHeader("auth", "my-auth-token"),
];
```

HttpHeader value parameter also accept SecretString object in '@minecraft/server-admin' module.

```js
import { HttpHeader } from '@minecraft/server-net';
import { secrets } from '@minecraft/server-admin';

const secret = secrets.get('TOKEN');
request.headers = [
  new HttpHeader('Authorization', secret)
];
```

### Set request body

Content of the body of the HTTP request, this infomation will be sent to a web server.

```js
request.body = 'Message';
```

### Set response timeout

Set the amount of time, in seconds, before the request times out and is abandoned.

This property is not frequently used in HTTP requests.

```js
request.timeout = 10; // 10 seconds
```


### Send request

Send the request to a web server, returns a promise HttpResponse.

```js
http.request(request).then((response) => {
  // Body content of the HTTP response.
  // Type: string
  response.body;
});
```

**Example**:

```js
import { http } from "@minecraft/server-net";

const request = new HttpRequest("http://localhost:8000/");
request.method = HttpRequestMethod.POST;
request.body = 'body';
request.headers = [
  new HttpHeader("Content-Type", "application/json"),
  new HttpHeader("auth", "my-auth-token"),
];

http.request(request).then((response) => {
  // Body content of the HTTP response.
  // Type: string
  response.body;
});

```