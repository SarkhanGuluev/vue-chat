import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About'
import Chat from '../pages/Chat'

const routes = [
    {path: '/about', component: About},
    {path: '/chat', component: Chat},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router