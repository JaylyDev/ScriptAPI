import { HttpRequest, HttpResponse, HttpClient as httpClient } from "@minecraft/server-net";
export declare class HttpClient extends httpClient {
    /**
     * @remarks
     * Performs a simple HTTP get request.
     * @param uri
     * URL to make an HTTP Request to.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks
     * Performs an HTTP request.
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    request(config: HttpRequest): Promise<HttpResponse>;
    constructor();
}
export declare function auth(token: string): Promise<boolean>;
export declare const http: HttpClient;
