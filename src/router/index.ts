import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import home from "../views/home/home.vue"
import noMenu from "../views/otherPage/noMenu.vue"
import Main from "../views/Main.vue"
import TodoList from '../views/todoList/TodoList.vue'
import LinksPage from '../views/linksPage/index.vue'


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
                path: '/todoList',
                name: 'todo list',
                component: TodoList,
                children: []
            },
            {
                path: '/links',
                name: 'links',
                component: LinksPage,
                children: []
            },
        ]
    }
];
const router = createRouter({
    history,
    routes
})
export default router
