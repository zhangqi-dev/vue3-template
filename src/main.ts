// 移动端适配，设置HTML根元素的大小，会影响rem的适配，rem是相对于根元素的单位
import 'amfe-flexible';
import { createApp } from 'vue'
// 状态管理
import { createPinia } from 'pinia'
// 样式文件
import './assets/styles/index.less';
// 组件注册插件
import registerComponentsPlugin from './plugins/register-components-plugin';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 组件注册
app.use(registerComponentsPlugin);

app.mount('#app')
