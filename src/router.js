import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from './view/HomeView.vue';
import AboutView from './view/AboutView.vue';
import CocktailView from './view/CocktailView.vue';
import ContactsView from './view/ContactsView.vue';
import CategoryView from './view/CategoryView.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/Cocktails/:slug',
            name: 'Cocktail',
            component: CocktailView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/filter',
            name: 'filter',
            component: CategoryView
        }
    ]
});

export { router }