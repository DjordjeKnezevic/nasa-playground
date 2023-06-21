import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import RoleDirective from './directives/RoleDirective'

import './assets/css/style.css'

const app = createApp(App)

app.directive('role', RoleDirective)
app.use(router)
const pinia = createPinia()

app.use(pinia).mount('#app')
