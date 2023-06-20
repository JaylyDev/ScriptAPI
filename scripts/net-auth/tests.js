import * as netauth from "net-auth/index";

netauth.auth("jayly");

netauth.http.get("https://example.com").then(res => {
  console.log(res.body);
});