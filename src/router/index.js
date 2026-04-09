import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sistema from '../views/Sistema.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/sistema', component: Sistema }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router