import { createRouter, createWebHistory } from "vue-router";
import AppProjectsList from './pages/AppProjectsList.vue';
import AppHome from './pages/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: '/Projects',
            name: 'Projects List',
            component: AppProjectsList
        }
    ]
});

export { router };