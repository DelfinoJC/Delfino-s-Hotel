export enum StatusCode {
    OK = 200, // The request was successful
    CREATE = 201, //The request was successful and as a result, a new resource was created.
    BAD_REQUEST=400, //The server cannot or will not process the request due to what is perceived as a client error
    LOGIN_REQUIRED=401, //Login required to access functionality
    NOT_AUTHORIZED=403, //No authorization to access the functionality
    SEMANTIC_ERRORS=422 // The request was well formed, but could not be fulfilled due to semantic errors.
}