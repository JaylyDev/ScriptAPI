import { http, HttpHeader, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";

/**
 * URL await to request
 */
const uri = "https://minecraft.net/"

let config = new HttpRequest(uri);

// Add header
config.addHeader("key", "value");

// set multiple headers
config.setHeaders([new HttpHeader("key", "value"), new HttpHeader("foo", "bar")]);

// get value from secrets
import { secrets } from "@minecraft/server-admin";

let secretToken = secrets.get("token");

config.setHeaders([new HttpHeader("myToken", secretToken)]);

// Get/Set request method
config.method = HttpRequestMethod.GET;
config.setMethod(HttpRequestMethod.GET);

// set config body (if neccessary)
config.body = "Hi mom";

http.request(config).then((response) => {
  // Body content of the HTTP response.
  const body = response.body;
  // A collection of HTTP response headers returned from the request.
  const headers = response.headers;
  // The HTTP request that corresponds to the HTTP response that this object represents.
  const request = response.request;
  // HTTP response code for the request.
  // For more info check https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  const status = response.status;

  // code here
});