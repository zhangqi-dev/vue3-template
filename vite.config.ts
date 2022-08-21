import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
// 兼容低版本插件
import legacy from '@vitejs/plugin-legacy'
//vant 按需引入插件
import styleImport, { VantResolve } from 'vite-plugin-style-import';
const env = process.env.NODE_ENV;
// https://vitejs.dev/config/
export default defineConfig({
  // 公共基础路径
  base: './',
  build: {
    // 自动注入polyfill
    // polyfillModulePreload: true
  },
  plugins: [
    vue(),
    // jsx支持
    vueJsx(),
    // vant 按需引入插件
    styleImport({
      resolves: [VantResolve()],
    }),
    //生产模式 开启gzip压缩
    env ==='production' && viteCompression({
      ext: ".gz",
      algorithm: "gzip",
      // 是否删除源文件
      deleteOriginFile: false
    }),
    // 兼容性插件
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
