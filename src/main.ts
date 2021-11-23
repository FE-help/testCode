import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "../src/assets/css/Reset.less"
import "../src/assets/css/Currency.less"
import ElementPlus from 'element-plus'; 
import 'element-plus/dist/index.css'


const app=createApp(App)
app.use(router).use(ElementPlus)
app.mount('#app')
