import { createRouter, createWebHistory } from "vue-router";
import AppProjectsList from './pages/AppProjectsList.vue';
import AppHome from './pages/AppHome.vue';
import AppProjectPage from './pages/AppProjectPage.vue';
import AppNotFound from './pages/AppNotFound.vue';

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
        },
        { // allways->'/:pathMatch(.*)*' as last route!
            path: '/:pathMatch(.*)*',
            name: 'Not found',
            component: AppNotFound
        }
    ]
});

export { router };