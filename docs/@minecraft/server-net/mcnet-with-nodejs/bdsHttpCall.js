import { http, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";

const port = 8080;
let request = new HttpRequest(`http://localhost:${port}`);
request.method = HttpRequestMethod.POST;

(async function () {
  let res = await http.request(request);
  console.warn(JSON.stringify(res));
})();