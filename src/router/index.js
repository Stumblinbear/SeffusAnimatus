import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Commission from '../views/Commission.vue'
import Collaborate from '../views/Collaborate.vue';
import Gallery from '../views/Gallery.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/commission',
        name: 'Commission',
        component: Commission,
    }, {
        path: '/commission/collab',
        name: 'Collaborate',
        component: Collaborate,
    }, {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;