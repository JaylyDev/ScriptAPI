// Script example for ScriptAPI
// Author: JaylyMC <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { http as __http, HttpHeader, HttpRequest, HttpRequestMethod, HttpResponse, HttpClient as __HttpClient } from "@minecraft/server-net";

class authoration {
  static authorized: boolean = false;
  static url: string = "http://localhost:14589";
  static readonly PERMISSION_DENIED = "Permission Denied: This request is not authorized.";
};

export class HttpClient implements __HttpClient {
  /**
   * @remarks
   * Performs a simple HTTP get request.
   * @param uri
   * URL to make an HTTP Request to.
   * @returns
   * An awaitable promise that contains the HTTP response.
   */
  async get(uri: string): Promise<HttpResponse> {
    if (authoration.authorized !== true) throw Error(authoration.PERMISSION_DENIED);
    return await __http.get(uri);
  };
  /**
   * @remarks
   * Performs an HTTP request.
   * @param config
   * Contains an HTTP Request object with configuration data on
   * the HTTP request.
   * @returns
   * An awaitable promise that contains the HTTP response.
   */
  async request(config: HttpRequest): Promise<HttpResponse> {
    if (authoration.authorized !== true) throw Error(authoration.PERMISSION_DENIED);
    return await __http.request(config);
  };
  cancelAll(reason: string): void {
    http.cancelAll(reason);
  }
;
};

export async function auth (token: string): Promise<boolean> {
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
  };
};

export const http = new HttpClient();