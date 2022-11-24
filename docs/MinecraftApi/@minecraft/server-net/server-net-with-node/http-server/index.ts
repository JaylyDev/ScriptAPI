// Check out how to use express here: https://expressjs.com/
import * as express from 'express';
const app = express();
const port: number = 3000;

app.post('/send-request', (request, response) => {
  const method = request.method;
  const body = request.body;

  console.log(`[send-request] Receive ${method}. ${body}`);

  response.status(200);
  response.end();
});

app.get('/get-response', (request, response) => {
  console.log(`[get-response] Receive ${request.method}.`);

  response.setHeader('content-type', 'text/plain');
  response.status(200);
  response.send('ok');
});

app.all('/request-response', (request, response) => {
  const method = request.method;
  const body = request.body;

  console.log(`[request-response] Receive ${method}. ${body}`);

  response.setHeader('content-type', 'text/plain');
  response.status(200);
  response.send('ok');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});