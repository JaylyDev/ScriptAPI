# server-net with Node.js

You may want to connect Minecraft to your local network using server-net module to fetch data.

- [server-net](./server-net/index.ts): Minecraft's plugin for sending HTTP requests to Node.js
  - `send_request()`: Creates a POST request to localhost.
  - `get_response()`: Get data from Node.js in localhost.
  - `request_response()`: Creates a POST request and returns data from localhost.
- [http-server](./http-server/index.ts): Node.js script for creating a server to receive HTTP requests.
  - This script creates a server at port 3000
  - `app.post('/send-request')`: receives POST requests only on /send-request (localhost:3000/send-request).
  - `app.post('/get-response')`: receives GET requests and send a response with data (localhost:3000/get-response).
  - `app.all('/request-response')`: Receives any HTTP methods path. A response is sent back to request when a request is detected in Node.js.