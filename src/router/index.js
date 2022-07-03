import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        redirect: '/xyb',
        children: [{
            path: '/xyb',
            name: 'xyb',
            component: () => import('../views/Xyb.vue')
        }, {
            path: '/write',
            name: 'write',
            component: () => import('../views/Write.vue')
        }, {
            path: '/introduce',
            name: 'introduce',
            component: () => import('../views/Introduce.vue')
        }]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router