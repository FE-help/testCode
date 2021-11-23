import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import home from "../views/home/home.vue"
import noMenu from "../views/otherPage/noMenu.vue"
import Main from "../views/Main.vue"
import a from '../views/A/a.vue'
import a1 from '../views/A/a1.vue'
import a2 from '../views/A/a2.vue'
import b from '../views/B/b.vue'
import b1 from '../views/B/b1.vue'
import b2 from '../views/B/b2.vue'


const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
    {path: '/noMenu', name: 'noMenu', component: noMenu},
    {
        path: '/', name: 'Main', component: Main,
        children: [
            {path: '/', component: home},
            {
                path: '/home',
                name: '首页',
                component: home,
                children: [
                    {path: '/', component: home},
                ]
            },
            {
                path: '/A',
                name: 'A页面',
                component: a,
                children: [
                    {path: '/', name: 'a页面', component: a},
                    {path: 'a1', name: 'a1页面', component: a1},
                    {path: 'a2', name: 'a2页面', component: a2},
                ]
            },
            {
                path: '/B',
                name: 'B页面',
                component: b,
                children: [
                    {path: '/', name: 'b页面', component: b},
                    {path: 'b1', name: 'b1页面', component: b1},
                    {path: 'b2', name: 'b2页面', component: b2},
                ]
            },
        ]
    }
];
const router = createRouter({
    history,
    routes
})
export default router
