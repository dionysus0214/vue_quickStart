import { createApp } from 'vue'
import App from './AppAxiosTest.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import ES6Promise from 'es6-promise'
ES6Promise.polyfill()

Vue.prototype.$axios = axios;

createApp(App).use(axios).mount('#app')
