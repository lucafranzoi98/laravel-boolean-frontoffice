import { createRouter, createWebHashHistory} from 'vue-router';

import HomeView from './view/HomeView.vue';
import AboutView from './view/AboutView.vue';
import ContactsView from './view/ContactsView.vue';

const router = createRouter({
    history: createWebHashHistory();
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
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        }
    ]
});

export { router }