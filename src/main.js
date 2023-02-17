import { createApp } from 'vue'
import App from './App.vue'
// naiveui字体
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import "./assets/main.css"

import VueFullscreen from 'vue-fullscreen'

let app=createApp(App)


app.use(VueFullscreen).mount('#app')
