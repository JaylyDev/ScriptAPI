// Script example for ScriptAPI
// Author: JaylyMC <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { http as Http, HttpHeader, HttpRequest, HttpRequestMethod, HttpClient as httpClient } from "@minecraft/server-net";
class authoration {
}
authoration.authorized = false;
authoration.url = "http://localhost:14589";
authoration.PERMISSION_DENIED = "Permission Denied: This request is not authorized.";
;
export class HttpClient extends httpClient {
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
        return await Http.get(uri);
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
        return await Http.request(config);
    }
    ;
    constructor() {
        super();
    }
    ;
}
;
export async function auth(token) {
    const localAuthRequest = new HttpRequest(authoration.url);
    localAuthRequest.setMethod(HttpRequestMethod.POST);
    localAuthRequest.setHeaders([new HttpHeader("token", token)]);
    const response = await Http.request(localAuthRequest);
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
