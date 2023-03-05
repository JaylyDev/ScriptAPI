import * as http from "http";
const tokens = ["jayly"];
const port = 14589;
const host = "localhost";
function listener(request, response) {
    var _a;
    const requestToken = (_a = request.headers) === null || _a === void 0 ? void 0 : _a.token;
    if (typeof requestToken !== "string") {
        respond_deny(response);
    }
    else if (tokens.includes(requestToken)) {
        console.log("request status", 200);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("post received");
    }
    else
        respond_deny(response);
}
;
function respond_deny(response) {
    console.log("request status", 403);
    response.writeHead(403, { "Content-Type": "text/plain" });
    response.end("invalid token");
}
const server = http.createServer(listener);
server.listen(port, host);
console.log(`Connecting @minecraft/server-net to host [${host}] on port [${port}].`);
