import { createApp } from 'vue'
import App from './App.vue'

// naiveui字体
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

import "./assets/main.css"

let app=createApp(App)

// vant
import 'vant/lib/index.css';
import { Button,Icon,Popover,Toast,NavBar,
 } from 'vant';
app.use(Button).use(Icon).use(Popover).use(Toast).use(NavBar)

// 全屏功能
import VueFullscreen from 'vue-fullscreen'
app.use(VueFullscreen)

app.mount('#app')
