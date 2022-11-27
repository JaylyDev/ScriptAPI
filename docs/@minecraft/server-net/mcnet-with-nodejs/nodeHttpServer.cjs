const http = require("http");

const port = 8080;
let payload = "";

http.createServer((req, res) => {
  req.on("data", (chunk) => {
    // POST DATA
  });
  req.on("end", () => {
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(payload),
      "Content-Type": "text/plain"
    }).end(payload);
  });
  console.log(JSON.stringify(req.headers));
}).listen(port);
