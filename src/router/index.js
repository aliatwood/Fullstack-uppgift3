import { createRouter, createWebHistory } from 'vue-router'

// Importerar mina sidor
import HomeView from '../views/HomeView.vue'
import PlacesView from '../views/PlacesView.vue'
import AboutView from '../views/AboutView.vue'

// Mina routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/places',
        name: 'Places',
        component: PlacesView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
]

// Skapar router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router