import { BASE_URL } from "@/config";
import Request from "./request";

// 实例化 请求方法
const http = new Request({baseURL: BASE_URL})

export default http;