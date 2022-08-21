import { Button, Cell, CellGroup, Form, Field, Dialog, Icon , Area, Popup, Checkbox} from 'vant';
import type { App } from 'vue';

// vant组件库
const components = [Button, Cell, CellGroup, Form, Field, Dialog, Icon, Area, Popup, Checkbox]
// 插件注册
const install = (app: App<Element>): void => {
    
    components.forEach(component => {
        // 批量注册
        app.use(component);
    })

    
}


export default install;
