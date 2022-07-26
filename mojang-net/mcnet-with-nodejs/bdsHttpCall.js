import { http, HttpHeader, HttpRequest, HttpRequestMethod } from "mojang-net";

const port = 8080;
let request = new HttpRequest(`http://localhost:${port}`);
request.method = HttpRequestMethod.POST;

(async function () {
  let res = await http.request(request);
  console.warn(JSON.stringify(res));
})();