// Check out how to use express here: https://expressjs.com/
import * as express from 'express';
const app = express();
const port: number = 3000;

app.get('/send-request', (request, response) => {
  const method = request.method;
  const body = request.body;

  response.status(200);
  response.end();
});

app.get('/get-response', (request, response) => {
  response.setHeader('content-type', 'text/plain');
  response.status(200);
  response.send('ok');
});

app.get('/request-response', (request, response) => {
  const method = request.method;
  const body = request.body;

  response.setHeader('content-type', 'text/plain');
  response.status(200);
  response.send('ok');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});