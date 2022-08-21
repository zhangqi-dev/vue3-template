// 返回值类型
export interface IResponseProps<T>{
    code: string;
    message: string;
    data: T;
    [key: string]: any;
}