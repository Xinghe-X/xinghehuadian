import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../component/login_.vue")
    },
    {
        path: "/register",
        component: () => import("../component/login_register.vue")
    },
    {
        path: "/homepage",
        component: () => import("../component/homepage.vue")
    },
    // 添加路由守卫
    {
        path: "/*"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router