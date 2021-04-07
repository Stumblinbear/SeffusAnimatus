import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Commission from '../views/Commission.vue'
import Collaborate from '../views/Collaborate.vue';
import Gallery from '../views/Gallery.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Seffus Animatus' }
    }, {
        path: '/commission',
        name: 'Commission',
        component: Commission,
        meta: { title: 'Seffus Animatus - Commissions' }
    }, {
        path: '/commission/collab',
        name: 'Collaborate',
        component: Collaborate,
        meta: { title: 'Seffus Animatus - Collaboration' }
    }, {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
        meta: { title: 'Seffus Animatus - Gallery' }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.afterEach((to, from) => {
    document.title = to.meta.title || 'Seffus Animatus';
});

export default router;