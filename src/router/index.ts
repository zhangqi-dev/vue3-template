import { createRouter, createWebHashHistory, createWebHistory, type RouteRecord } from 'vue-router'
import { beforeEach } from './hooks';


// 批量注册路由
const registerRoutes = () :RouteRecord[]  => {
  const routeFiles = import.meta.globEager('./*.route.ts');
  const allRoutes = Object.values(routeFiles).reduce((memo, route) => {
      // 展开放入到memo中
       memo.push( ...route.default)
       return memo
  }, []);
  return allRoutes as RouteRecord[];
}

const routes = registerRoutes();

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(beforeEach)

export default router
