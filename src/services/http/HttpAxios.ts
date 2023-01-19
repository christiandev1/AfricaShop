import {HTTP} from "../../core/shared/Http";
import HttpAxiosApi from "./axiosConfig";

const NETWORK_MESSAGE = {"message": "Aucune connexion Internet détecté", statusCode: 499}

let headers = {}

export function HttpAxios(): HTTP {
    return {
        get: async <T>(url: string, signal?: AbortSignal, header?: any): Promise<T> => {
            headers = header !== undefined ? {...header} : {};
            return HttpAxiosApi.get(url, {signal: signal, headers: headers})
                .then(res => res)
                .catch( (err) => {
                    return err.response;
                } );
        },
        post: async <T>(url: string, data: any, header?: any): Promise<T> => {
            headers = header !== undefined ? {...header} : {};
            return HttpAxiosApi.post(url, data, {headers: header}).then(res => res.data).catch(err =>
                err.code === "ERR_NETWORK" ? NETWORK_MESSAGE : err.response.data
            )
        },
        update: async <T>(url: string, formData: any, header?: any): Promise<T> => {
            headers = header !== undefined ? {...header} : {};
            return HttpAxiosApi.post(url, formData, {headers: headers}
            ).then().catch(err =>
                err.code === "ERR_NETWORK" ? NETWORK_MESSAGE : err.response.data
            );
        },
        delete: async <T>(url: string, header?: any): Promise<T> => {
            headers = header !== undefined ? {...header} : {};
            return HttpAxiosApi.delete(url, {headers: headers}).then(data => data.data).catch(err =>
                err.code === "ERR_NETWORK" ? NETWORK_MESSAGE : err.response.data
            );
        }
    }
}
