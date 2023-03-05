import { http, HttpRequest, HttpRequestMethod } from '@minecraft/server-net';
import { world } from '@minecraft/server';

const url = 'http://localhost:3000';

function errorHandler (err: any): void {
  world.sendMessage(String(err))
};

async function send_request () {
  const path = '/send-request';
  const request = new HttpRequest(url + path);
  
  request.body = 'Body';
  request.method = HttpRequestMethod.POST;
  
  http.request(request);
};

async function get_response() {
  const path = '/get-response';

  const response = await http.get(url + path);
  world.sendMessage(response.body);
};

async function request_response () {
  const path = '/request-response';
  const request = new HttpRequest(url + path);
  
  request.body = 'Body';
  request.method = HttpRequestMethod.POST;
  
  const response = await http.request(request);
  world.sendMessage(response.body);
};

send_request().catch(errorHandler);
get_response().catch(errorHandler);
request_response().catch(errorHandler);