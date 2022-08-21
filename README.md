

## 安装依赖
```
yarn install
```

### 本地开发
```
yarn dev
```

### 生产
```
yarn build
```

### 测试
```
yarn test
```

### 代码检测
```
yarn lint
```


# 分支规范
   - 功能分支：feature/*
   - 修补bug分支：fixbug/*
   - 紧急bug分支：hotfix/*
   - 测试分支：test/*

# 提交规范
    - `type` 代表某次提交的类型，比如是修复一个 bug 还是增加一个新的 feature。所有的 type 类型如下：

    -   feat： 新增 feature；
    -   fix: 修复 bug；
    -   docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等；
    -   style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑；
    -   refactor: 代码重构，没有加新功能或者修复 bug；
    -   perf: 优化相关，比如提升性能、体验；
    -   test: 测试用例，包括单元测试、集成测试等；
    -   chore: 一般用来发布版本；
    -   build: 改变构建流程、或者增加依赖库、工具等；
    -   revert: 回滚到上一个版本；
    -   ci: git ci 相关修改；


### 组件
1. 所有组件采用中横线的方式声明
   demo:   user-login、 user-apply

2. 引入组件统一使用驼峰方式命名
   ```js
    import UserLogin from 'user-login';
   ```
3. 页面中使用组件统一 中横线
   demo:
     ```html
       <user-login>xxxx</user-login>
     ```
4. 所有组件要提供名称, 请确保名称要唯一，如果有多个相同的模块，加入前缀，如： HomeCard 、 UserCard
   **在 script setup 中，引入的组件可以直接使用，无需再通过components进行注册，并且无法指定当前组件的名字，它会自动以文件名为主，也就是不用再写name属性了**  
    demo: 
      ```js
      export default{
          name: 'UserLogin'
      }
      ```
5. 如果需要使用use方法注册组件，请提供install方法，也可以使用第**6**条，已提供注册方法，直接引入组件即可(确认组件有**name**属性，否则无法使用组件)

6. 全局注册组件，统一使用plugins文件夹下的register-components-plugin.ts

### 移动端适配说明
1. amfe-flexable  是阿里发布的一套可伸缩适配方案。它能根据设备的宽高来设置页面body元素的字体大小，将1rem设置为设备宽度/10以及在页面大小转换时可以重新计算这些数值

2. postcss-pxtorem 插件  px转rem

### 路由配置
1. 路由分模块存放，所有路由文件以 .route.ts 结尾，会默认自动匹配
  demo: **user.route.ts**   存放user相关的

2. 路由钩子函数，统一存放到 hooks.ts 中
   ```ts
     //前置钩子 next 可选
     const beforeEach = (to, from, next) => {}
     //后置钩子
     const afterEach = (to,form) => {}
   ```

3. 路由文件统一以数组形式定义，采用默认导出的方式
   ```ts
    //demo
    export default [
        {
            path: '/user',
            component: () => import('@/layout/layout.vue'),
            children: [
                {
                    path: 'login',
                    component: () => import('@/views/user/login.vue')
                }
            ]
        }
    ]
   ```
### pinia 状态管理
- types 存放 action-type   
    各个模块的类型
- index.ts 统一导出，所有的模块定义，都需要在这个模块中导出
 
- 主要模块 **store** main.ts文件中定义，用于全局需要访问的数据
  pinia 定义参考 main.ts
- user.ts 用于用户模块的数据

- apply.ts 用于申请相关的数据


### 接口请求
- axios 封装在utils文件夹下request.ts 中
```js
// 使用方式如下：

```

- api 下封装所有模块的接口请求方法，命名以api开头
   demo: `api-user.ts`、`api-apply.ts`、`api-home.ts` 等


### vite.config.ts 配置
+ vite-plugin-imagemin  图片压缩插件
+ vite-plugin-compression 压缩插件