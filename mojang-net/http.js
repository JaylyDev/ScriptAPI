import { http, HttpRequest } from "mojang-net";

// simple http get url random get function
http.get("https://api.ipify.org?format=json").then(res => {
  // Do something with the response.
  const { body, headers, request, status } = res;

  console.warn(body);
  console.warn(headers);
  console.warn(request);
  console.warn(status);
}).catch(err => {
  console.error(err);
});

// simple http get url random request
const request = new HttpRequest("https://api.github.com/repos/MicrosoftDocs/minecraft-creator/git/trees/main?recursive=1");

request.uri = "https://api.github.com/repos/MicrosoftDocs/minecraft-creator/git/trees/main?recursive=1";
request.headers = { "User-Agent": null };
request.method = "GET";

http.request(request).then(res => {
  // Do something with the response.
  const { body, headers, request, status } = res;

  console.warn(body);
  console.warn(headers);
  console.warn(request);
  console.warn(status);
}).catch(err => {
  console.error(err);
});

// cancel all http request with a reason
http.cancelAll("cancel all http request");