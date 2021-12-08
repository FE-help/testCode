import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// 设置别名
const alias: Record<string, string> = {
    //解决开发环境下的警告
    "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias
    },
    build: {
        cssCodeSplit: true
    },
    server: {
        proxy: {//跨域
            // 如果是 /api 打头，则访问地址如下
            '/1.1': {
                target: 'http://www.yichenk.com/',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            },
        },
    },
})
