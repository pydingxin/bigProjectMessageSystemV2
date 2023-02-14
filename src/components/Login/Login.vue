<template>
    <div id="particles"></div>

<div id="container">
    <!-- //根据设备切换面板大小 -->
    <div :class="{content_pc:is_pc, content_mobile:!is_pc}">
        <div id="img"></div>
        <div id="title">
            <span>平邑县项目信息报送系统</span>
        </div>
        <div id="form">
            <n-input class="word" v-model:value="name" type="text" placeholder="账号" />
            <br />
            <n-input class="word" v-model:value="pass" type="password" show-password-on="click" placeholder="密码" />
            <br />
            <n-button class="word" type="info" @click="login"> 登录 </n-button>
            <br />
            <div id="tool">
                <n-checkbox size="large" label="记住密码" v-model:checked="remember_account" />      
            </div>        
        </div>
    </div>

</div>
</template>
<script>
import {NInput,NButton,NSpace,NCheckbox,} from "naive-ui"
import {storeAccount} from '@/store/storeAccount.js'
import eventBus from '@/js/mittEventBus.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './jquery.min.js'   
// 该文件在document上注册了一个叫particleground的组件
// 调用该组件即可绘制
import './lizi.js'   

export default{
    components:{
        NInput,NButton,NSpace,NCheckbox,

    },
    data(){
        return {
            name:"",
            pass:"",

            remember_account:true,
            is_pc:true, //是否pc端打开
        }
    },

    mounted(){
        this.input_remembered_account()
        let ua = navigator.userAgent;
        if(ua.includes("Mobile") || ua.includes("Android")) this.is_pc=false;

        // 因为登入登出导致Login.vue销毁重建，在这里执行如下函数绘制粒子
        particleground(document.getElementById('particles'), {
            dotColor: '#16a085',
            lineColor: '#16a085'
        });
    },


    methods:{
        login(){
            this.try_remember_account()
            if(storeAccount.validateAccount(this.name,this.pass)){
                if(this.is_pc){
                    eventBus.emit("account_login_on_pc");
                }else{
                    eventBus.emit("account_login_on_mobile");
                }
            }
        },

        input_remembered_account(){
            if(!!localStorage.getItem('login_name')){
                this.name = localStorage.getItem('login_name');
                this.pass = localStorage.getItem('login_pass');
            }
        },

        try_remember_account(){
            if(this.remember_account){
                localStorage.setItem("login_name",this.name);
                localStorage.setItem("login_pass",this.pass);
            }else{
                localStorage.removeItem("login_name");
                localStorage.removeItem("login_pass");
            }
        },

    },
}
</script>

<style scoped>
:deep(canvas){
    height:100vh;
    background-color:white;
}

#container{
    /* 使整体位于屏幕中间 */
    display: flex;
    width:100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}
.content_pc{
    /* 限制整体尺寸 */
    z-index: 100;
    width:25rem;
    height:40rem;
    overflow:hidden;
    border-radius: 10px;
    background-color: rgba(0,191,255, 0.075);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}

.content_mobile{
    z-index: 100;
    width:100vw;
    height:100vh;
}

#img{
    /* 图片高度占30% */
    background:url("@/assets/bg.jpg");
    height:30%;
}
#title{
    display: flex;
    width:100%;
    height: 20%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
}
#form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 40%;

}
.word{
   padding:0.4rem;
    width:60%;
    height: 3rem;
    font-size: 1.4rem;
}
#tool{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width:60%;

}
#particles{
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    z-index: 0;
}
</style>