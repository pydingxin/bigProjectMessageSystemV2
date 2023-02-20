<template>
      <div class="fullscreen_wrapper">
        手机端尚未完善，请用电脑登录
        <!-- <div>{{ fullscreen }}</div>
        <button type="button" @click="toggle" >切换全屏</button> -->
      </div>
      
</template>

<script>
import { api as fullscreen } from 'vue-fullscreen'
export default {
    data() {
        return{
            fullscreen: false,
        }
    },

    methods:{
        async toggle(){
        let state = this;
        fullscreen.toggle(document.querySelector('.fullscreen_wrapper'), {
            teleport: true,
            callback: (isFullscreen) => {
            state.fullscreen = isFullscreen
            },
        })
        }  
    },
        

}
</script>

<style>
.fullscreen_wrapper{
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>