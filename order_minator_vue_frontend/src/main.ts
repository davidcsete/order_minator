import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import store from "./store";


// tailwind css
import './assets/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(store)
// app.use(createPinia())
app.use(router)
app.mount('#app')
