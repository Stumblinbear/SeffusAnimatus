import { createWebHashHistory, createRouter } from 'vue-router';

import Home from '../views/Home.vue';

import Commission from '../views/Commission.vue'
import CommissionTelegram from '../views/CommissionTelegram.vue'
import Partners from '../views/Partners.vue';
import Collaborate from '../views/Collaborate.vue';

import Payment from '../views/Payment.vue';
import FAQ from '../views/FAQ.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Seffus Animatus' }
    },
    
    {
        path: '/commission',
        name: 'Commission',
        component: Commission,
        meta: { title: 'Seffus Animatus - Commissions' }
    }, {
        path: '/commission/telegram',
        name: 'CommissionTelegram',
        component: CommissionTelegram,
        meta: { title: 'Seffus Animatus - Telegram' }
    }, {
        path: '/commission/partners',
        name: 'Partners',
        component: Partners,
        meta: { title: 'Seffus Animatus - Partners' }
    }, {
        path: '/commission/collab',
        name: 'Collaborate',
        component: Collaborate,
        meta: { title: 'Seffus Animatus - Collaboration' }
    },
    
    {
        path: '/payment',
        name: 'Payment',
        component: Payment,
        meta: { title: 'Seffus Animatus - Payment' }
    }, {
        path: '/faq',
        name: 'FAQ',
        component: FAQ,
        meta: { title: 'Seffus Animatus - FAQ' }
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