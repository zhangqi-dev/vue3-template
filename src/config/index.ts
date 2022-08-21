// 环境类型
enum Env{
    development = 'development',
    production = 'production',
    test = 'test'
}
// 根据环境变量获取请求基准路径
export const setBaseUrl = () => {
    const env = process.env.NODE_ENV;
    if (env === Env.development) return '/api';
    if (env === Env.production) return 'https://youqian360.com/'
    if (env === Env.test) return '';
}
// 获取基准路径
const BASE_URL = setBaseUrl();
export { BASE_URL };
