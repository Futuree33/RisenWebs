import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Home
    from "./components/Home.vue";
import About
    from "./components/About.vue";
import {
    createRouter,
    createWebHistory
} from "vue-router";
import NotFound
    from "./components/NotFound.vue";
import Contact
    from "./components/Contact.vue";


const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', component: NotFound }  // Wildcard route for 404 page
];

const router = new createRouter({
    routes,
    history: createWebHistory()
});

createApp(App)
    .use(router)
    .mount('#app');
