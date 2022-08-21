// vue 声明文件
declare module '*vue' {
    import { ComponentCustomOptions } from 'vue';
    const componentCustomOptions: ComponentCustomOptions;
    export default componentCustomOptions;
}
// NoCaptcha 全局变量声明
declare var NoCaptcha: any;