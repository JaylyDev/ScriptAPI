// Script example for ScriptAPI
// Author: JaylyMC <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { http as Http, HttpHeader, HttpRequest, HttpRequestMethod, HttpResponse, HttpClient as httpClient } from "@minecraft/server-net";

class authoration {
  static authorized: boolean = false;
  static url: string = "http://localhost:14589";
  static readonly PERMISSION_DENIED = "Permission Denied: This request is not authorized.";
};

export class HttpClient extends httpClient {
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
    return await Http.get(uri);
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
    return await Http.request(config);
  };
  constructor() {
    super()
  };
};

export async function auth (token: string): Promise<boolean> {
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
  };
};

export const http = new HttpClient();