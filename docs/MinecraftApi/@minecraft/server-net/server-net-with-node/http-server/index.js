"use strict";
exports.__esModule = true;
// Check out how to use express here: https://expressjs.com/
var express = require("express");
var app = express();
var port = 3000;
app.post('/send-request', function (request, response) {
    var method = request.method;
    var body = request.body;
    console.log("[send-request] Receive ".concat(method, ". ").concat(body));
    response.status(200);
    response.end();
});
app.get('/get-response', function (request, response) {
    console.log("[get-response] Receive ".concat(request.method, "."));
    response.setHeader('content-type', 'text/plain');
    response.status(200);
    response.send('ok');
});
app.post('/request-response', function (request, response) {
    var method = request.method;
    var body = request.body;
    console.log("[request-response] Receive ".concat(method, ". ").concat(body));
    response.setHeader('content-type', 'text/plain');
    response.status(200);
    response.send('ok');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
//# sourceMappingURL=index.js.map