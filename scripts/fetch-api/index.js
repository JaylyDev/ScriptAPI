// Script example for ScriptAPI
// Author: nperma <https://github.com/nperma>
// Project: https://github.com/JaylyDev/ScriptAPI

import {
    http,
    HttpHeader,
    HttpRequest,
    HttpRequestMethod,
} from "@minecraft/server-net";

/**
 * Class Fetch - Abstraction for HTTP Requests
 */
class Fetch {
    /**
     * Constructor to initialize the base URL.
     * @param {string} baseURL - The base URL for API requests.
     */
    constructor(baseURL) {
        this.baseURL = baseURL.trim();
    }

    /**
     * Performs an HTTP GET request.
     * @param {string} path - The API endpoint path.
     * @param {Object} [params={}] - Query parameters.
     * @returns {Promise<Object>} - The response body as JSON.
     */
    async get(path, params = {}) {
        const queryString = this._buildQueryString(params);
        const uri = `${this.baseURL}${path}${queryString}`;
        const request = new HttpRequest(uri);
        request.method = HttpRequestMethod.Get;
        request.headers = [new HttpHeader("Content-Type", "application/json")];

        const response = await http.request(request);
        return this._handleResponse(response);
    }

    /**
     * Performs an HTTP POST request.
     * @param {string} path - The API endpoint path.
     * @param {Object} data - The data to send in the request body.
     * @returns {Promise<Object>} - The response body as JSON.
     */
    async post(path, data) {
        const uri = `${this.baseURL}${path}`;
        const request = new HttpRequest(uri);
        request.method = HttpRequestMethod.Post;
        request.body = JSON.stringify(data);
        request.headers = [new HttpHeader("Content-Type", "application/json")];

        const response = await http.request(request);
        return this._handleResponse(response);
    }

    /**
     * Performs an HTTP PUT request.
     * @param {string} path - The API endpoint path.
     * @param {Object} data - The data to send in the request body.
     * @returns {Promise<Object>} - The response body as JSON.
     */
    async put(path, data) {
        const uri = `${this.baseURL}${path}`;
        const request = new HttpRequest(uri);
        request.method = HttpRequestMethod.Put;
        request.body = JSON.stringify(data);
        request.headers = [new HttpHeader("Content-Type", "application/json")];

        const response = await http.request(request);
        return this._handleResponse(response);
    }

    /**
     * Performs an HTTP DELETE request.
     * @param {string} path - The API endpoint path.
     * @returns {Promise<Object>} - The response body as JSON.
     */
    async delete(path) {
        const uri = `${this.baseURL}${path}`;
        const request = new HttpRequest(uri);
        request.method = HttpRequestMethod.Delete;
        request.headers = [new HttpHeader("Content-Type", "application/json")];

        const response = await http.request(request);
        return this._handleResponse(response);
    }

    /**
     * Handles the response from the server.
     * @param {Object} response - The HTTP response object.
     * @returns {Promise<Object>} - The parsed JSON body.
     * @throws {Error} - If the response status is not 200.
     */
    async _handleResponse(response) {
        if (response.status !== 200) {
            throw new Error(
                `HTTP Error: ${response.status} - ${response.body}`
            );
        }
        return JSON.parse(response.body);
    }

    /**
     * Builds a query string from an object of parameters.
     * @param {Object} params - The query parameters.
     * @returns {string} - The query string.
     */
    _buildQueryString(params) {
        const entries = Object.entries(params);
        if (entries.length === 0) return "";
        return (
            "?" +
            entries
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join("&")
        );
    }
}

export { Fetch };

