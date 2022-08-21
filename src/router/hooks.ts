import type  { NavigationGuard } from 'vue-router'
// router 路由钩子 to, from, next   next可选
// 不调用next ,可以通过 返回值， true或者false 决定是否进入
export const beforeEach: NavigationGuard = (to, from) => {
    // 每次进入前可以处理登录超时的情况，以及是否有权限访问等
    if (to.meta.isAuth) {
        
    }
    // 返回false可以取消导航， 也可以返回具体的地址 相当于调用了  router.push('/login')
    return true;
}

// 进入后钩子
export const afterEach = () => {

}