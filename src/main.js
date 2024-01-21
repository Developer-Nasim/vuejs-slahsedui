import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import router from './Router/index'

import './Helpers/AosConfig'



 
createApp(App).use(router).mount('#app')
