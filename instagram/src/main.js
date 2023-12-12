import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import {createPinia} from 'pinia'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
const app=createApp(App)
// app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
