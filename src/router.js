import { createRouter, createWebHistory } from "vue-router";
import AppProjectsList from './pages/AppProjectsList.vue';
import AppHome from './pages/AppHome.vue';
import AppProjectPage from './pages/AppProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'Projects List',
            component: AppProjectsList
        },
        {
            path: '/projects/:slug',
            name: 'Project Page',
            component: AppProjectPage
        }
    ]
});

export { router };