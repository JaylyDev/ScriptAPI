import { secrets } from "mojang-minecraft-server-admin";
import { http, HttpRequest, HttpRequestMethod, HttpHeader } from "mojang-net";

const req = new HttpRequest("https://localhost:8080/api/");

req.body = JSON.stringify({
    playerId: 'johndoe',
});

req.method = HttpRequestMethod.POST;
req.headers = [
    new HttpHeader('Content-Type', 'application/json'),
    new HttpHeader('auth', secrets.get('authtoken')),
];

http.request(req).then(res => {
  // Do something with the response.
  const { body, headers, request, status } = res;
  
  console.warn(body);
  console.warn(headers);
  console.warn(request);
  console.warn(status);
}).catch(err => {
  console.error(err);
});