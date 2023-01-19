import axios from "axios"
import {BASE_URL} from "../../core/shared/Config";

// @ts-ignore
axios.defaults.baseURL =  BASE_URL;
axios.interceptors.request.use(function (config:any) {
    return config;
}, function (error:any) {
    return Promise.reject(error);
}
);
// @ts-ignore
const HttpAxiosApi = axios.create({baseURL:  import.meta.env.VITE_APP_URL});
export default HttpAxiosApi;
