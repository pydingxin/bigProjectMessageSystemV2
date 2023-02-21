<template>
      <div class="fullscreen_wrapper">
        <M_Header />
        <M_Content/>

      </div>
      
</template>

<script>

import M_Header from "./M_Header.vue"
import M_Content from "./M_Content.vue"
import { api as fullscreen } from 'vue-fullscreen'
import eventBus from '@/js/mittEventBus.js'
export default {
    components: {
        M_Header,M_Content,
    },
    data() {
        return{
            isfullscreen: false,
        }
    },
    mounted(){
        let that=this;
        eventBus.on("toggleFullScreen",()=>{
            that.toggle();
        })
    },
    methods:{
        async toggle(){
            let that = this;
            fullscreen.toggle(document.querySelector('.fullscreen_wrapper'), {
                teleport: true,
                callback: (isFullscreen) => {
                    that.isfullscreen = isFullscreen
                },
            })
        },  
    },
        

}
</script>

<style>
.fullscreen_wrapper{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100vw;
    height:100vh;

}
</style>