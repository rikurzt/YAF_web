import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

import router from "../src/router";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "yakuhanjp/dist/css/yakuhanjp_s.css"

createApp(App).use(router).mount('#app')
