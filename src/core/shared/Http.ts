export interface HTTP {

    get<T>(url:string, signal?:AbortSignal, headers?: any):Promise<T>;
    post<T>(url:string, data:any, headers?: any):Promise<T>;
    update<T>(url:string, data:any, headers?: any):Promise<T>;
    delete<T>(url:string, headers?: any):Promise<T>;

}

export interface HTTP_RESPONSE {
    message?:string;
    data ?: any;
    statusCode?: number;
    status ?: number;
    statusText ?: string

}
