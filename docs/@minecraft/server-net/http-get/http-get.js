import { http } from "@minecraft/server-net";

/**
 * URL await to request
 */
const uri = "https://minecraft.net/";

// Http Request method 1
http
  .get(uri)
  .then((response) => {
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
  })
  .catch((reason) => {
    // catch error function (optional)
    console.error(reason);
  });
