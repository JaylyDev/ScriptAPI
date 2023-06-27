// Script example for ScriptAPI
// Author: JaylyMC <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { http as __http, HttpHeader, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";
class authoration {
}
authoration.authorized = false;
authoration.url = "http://localhost:14589";
authoration.PERMISSION_DENIED = "Permission Denied: This request is not authorized.";
;
export class HttpClient {
    /**
     * @remarks
     * Performs a simple HTTP get request.
     * @param uri
     * URL to make an HTTP Request to.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    async get(uri) {
        if (authoration.authorized !== true)
            throw Error(authoration.PERMISSION_DENIED);
        return await __http.get(uri);
    }
    ;
    /**
     * @remarks
     * Performs an HTTP request.
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    async request(config) {
        if (authoration.authorized !== true)
            throw Error(authoration.PERMISSION_DENIED);
        return await __http.request(config);
    }
    ;
    cancelAll(reason) {
        http.cancelAll(reason);
    }
    ;
}
;
export async function auth(token) {
    const localAuthRequest = new HttpRequest(authoration.url);
    localAuthRequest.setMethod(HttpRequestMethod.Post);
    localAuthRequest.setHeaders([new HttpHeader("token", token)]);
    const response = await __http.request(localAuthRequest);
    if (response.status === 200) {
        authoration.authorized = true;
        return true;
    }
    else {
        authoration.authorized = false;
        return false;
    }
    ;
}
;
export const http = new HttpClient();
