import 'admin-lte'
import { createApp } from 'vue'
import axios from "axios"
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.config.globalProperties.$http = axios;
app.use(store).use(router).mount('#app')