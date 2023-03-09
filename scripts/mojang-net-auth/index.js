// Script example for ScriptAPI
// Author: JaylyMC <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    get(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            if (authoration.authorized !== true)
                throw Error(authoration.PERMISSION_DENIED);
            return yield Http.get(uri);
        });
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
    request(config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (authoration.authorized !== true)
                throw Error(authoration.PERMISSION_DENIED);
            return yield Http.request(config);
        });
    }
    ;
    constructor() {
        super();
    }
    ;
}
;
export function auth(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const localAuthRequest = new HttpRequest(authoration.url);
        localAuthRequest.setMethod(HttpRequestMethod.POST);
        localAuthRequest.setHeaders([new HttpHeader("token", token)]);
        const response = yield Http.request(localAuthRequest);
        if (response.status === 200) {
            authoration.authorized = true;
            return true;
        }
        else {
            authoration.authorized = false;
            return false;
        }
        ;
    });
}
;
export const http = new HttpClient();
