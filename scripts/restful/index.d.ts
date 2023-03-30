declare global {
    var KEY: string;
}
export declare class RESTError extends Error {
}
interface RequestOptions {
    [RequestMethod.DELETE]: {
        request: {
            key?: string;
        };
        response: void;
    };
    [RequestMethod.GET]: {
        request: {
            key: string;
        };
        response: string | number | boolean;
    };
    [RequestMethod.PUT]: {
        request: {
            key: string;
            value: string | number | boolean;
        };
        response: void;
    };
    [RequestMethod.POST]: {
        request: {};
        response: void;
    };
    [RequestMethod.PATCH]: {
        request: {
            key: string;
            value: string | number | boolean;
        };
        response: number | void;
    };
}
type RequestOption<T extends keyof RequestOptions> = {
    method: T;
} & RequestOptions[T]['request'];
export declare class Table {
    readonly route: `/${string}`;
    readonly data: Member[];
    /**
     * @internal
     */
    toRawtext(): string;
    constructor(rawtext: string);
}
export declare class Member {
    key: string;
    value: string | number | boolean;
    constructor(key: string, value: string | number | boolean);
}
/**
 * Request methods available with Rest API
 */
export declare enum RequestMethod {
    /**
     * POST requests are commonly used to create a new resource that is a
     * subordinate of the specified route.
     */
    POST = "POST",
    /**
     * GET requests are commonly used to retrieve information about a resource
     * at the specified route.
     */
    GET = "GET",
    /**
     * PUT requests are commonly used to update a single resource that already
     * exists in a resource collection.
     */
    PUT = "PUT",
    /**
     * PATCH requests are commonly used to update partial of an already
     * existed resource collection.
     */
    PATCH = "PATCH",
    /**
     * POST requests are commonly used to remove an existing resource that is a
     * subordinate of the specified route.
     */
    DELETE = "DELETE"
}
export declare class REST {
    private readonly scoreboard;
    constructor(id: string);
    request<T extends keyof RequestOptions>(route: `/${string}`, options: RequestOption<T>): RequestOptions[T]["response"];
}
export {};
