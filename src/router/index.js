import { createRouter, createWebHistory } from 'vue-router'

// IMPORTS CORRETOS (confere se os arquivos existem)
import Home from '../views/Home.vue'
import Sistema from '../views/Sistema.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sistema',
        name: 'Sistema',
        component: Sistema
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router