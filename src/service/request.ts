
import axios from "axios";
import type {  RequestConfig, RequestInterceptors, AxiosInstance, AxiosResponse } from './type'

class Request {
    // 实例
    private instance: AxiosInstance;
    // 拦截器
    private interceptors?: RequestInterceptors;
    constructor(options: RequestConfig) {
        // 实例
        this.instance = axios.create(options);
        //单个实例的拦截
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        );
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.requestInterceptorCatch
        );
        // 所有请求都有的拦截器，如返回统一格式的返回结果，添加统一的请求头等
        //统一 请求拦截器
        this.instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (err) => {
                return err;
            }
        );
        //统一 响应拦截器
        this.instance.interceptors.response.use(
            (res) => {
                const { data, status } = res;
                // 状态 200请求成功，返回数据体
                if (status === 200) return data;
                // 否则返回整个响应体, 后续可以根据具体响应状态做不同的提示
                return res;
                
            },
            (err) => {
                return err;
            }
        );
    }
    /**
        request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
        get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
        delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
        head<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
        options<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
        post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
        put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
        patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
     */
    request<T>(config: RequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            // 判断单个请求是否有拦截器，
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config);
            }
            // T 给了返回值，
            this.instance.request<any, T>(config).then((res) => {
                // 判断单个请求是否有响应拦截器，
                if (config.interceptors?.responseInterceptor) {
                    res = config.interceptors.responseInterceptor(res);
                }
                resolve(res)
            }).catch((err) => {
                reject(err)
                return err;
            });
        })
    }
    get<T>(config: RequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "get" });
    }
    post<T>(config: RequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "post" });
    }

    delete<T>(config: RequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "delete" });
    }
    patch<T>(config: RequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "patch" });
    }
}


// 导出类，可以在类中扩展
export default Request;