import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import "../src/assets/css/Reset.less"
import "../src/assets/css/Currency.less"
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import i18n from '../src/locales/index'


const app = createApp(App);
app.use(store, key).use(i18n).use(router).use(ElementPlus);
app.mount('#app');
