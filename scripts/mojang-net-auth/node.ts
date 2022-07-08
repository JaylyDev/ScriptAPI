import * as http from "http";
import { tokens } from "./tokens.json";

const port: number = 14589;
const host: string = "localhost";

function listener (request: http.IncomingMessage, response: http.ServerResponse): void {
  const requestToken = request.headers?.token;

  if (typeof requestToken !== "string") {
    respond_deny(response);
  } else if (tokens.includes(requestToken)) {
    console.log("request status", 200);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("post received");
  } else respond_deny(response);
};

function respond_deny (response: http.ServerResponse): void {
  console.log("request status", 403);
  response.writeHead(403, { "Content-Type": "text/plain" });
  response.end("invalid token");
}

const server: http.Server = http.createServer(listener);

server.listen(port, host);
console.log(`Connecting @mojang-net/gametest to host [${host}] on port [${port}].`);