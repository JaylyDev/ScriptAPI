import * as netauth from "./gametest";

netauth.auth("jayly");

netauth.http.get("https://example.com").then(res => {
  console.log(res.body);
});