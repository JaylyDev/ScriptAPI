"use strict";
exports.__esModule = true;
// Check out how to use express here: https://expressjs.com/
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello World!');
});
app.get('/server', function (request, response) {
    response.send('Server!');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
//# sourceMappingURL=index.js.map