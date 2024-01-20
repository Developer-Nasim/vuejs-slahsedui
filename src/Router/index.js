import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Pages/Home/Home.vue';
import Referral from '../Pages/Referral/index.vue';
import Signup from '../Pages/Signup/index.vue';
import Login from '../Pages/Login/index.vue';
import Dashboard from '../Pages/Dashboard/Referal/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/referral', component: Referral },
        { path: '/dashboard', component: Dashboard },
        { path: '/signup', component: Signup },
        { path: '/login', component: Login },
    ]
});

export default router