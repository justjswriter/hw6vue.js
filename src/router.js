import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import Gallery from './pages/Gallery.vue'
import FullImage from './pages/FullImage.vue'

const router =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        { path: '/', component: Home },
        { path: '/gallery', component: Gallery },
        { path: '/gallery/:id', component: FullImage },
        { path: '/contacts', component: Contacts },
        { path: '/home', component: Home },
    ]
})

export default router