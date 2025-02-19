import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

import router from "../src/router";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "yakuhanjp/dist/css/yakuhanjp_s.css"

createApp(App).use(router).use(LoadingPlugin, {
    canCancel: false,
    color: '#c9c9c9',
    backgroundColor:'#242424',
    opacity:1,
    loader: 'dots',

}).mount('#app')
