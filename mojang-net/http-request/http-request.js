import { http, HttpRequest } from "mojang-net";

/**
 * URL await to request
 */
const uri = "https://minecraft.net/"

let config = new HttpRequest(uri);

http.request(config)