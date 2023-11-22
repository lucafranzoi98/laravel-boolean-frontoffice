import { createApp } from 'vue'
import axios from 'axios'
import './style.scss'
import App from './App.vue'
import { router } from './router'

createApp(App).use(router).mount('#app')
