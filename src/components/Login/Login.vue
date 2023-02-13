<template>

<div id="container">
    <div id="content">
        <div id="img"></div>
        <div id="title">
            <h1>平邑县项目信息报送系统</h1>
        </div>
        <div id="form">
            <n-input class="word" v-model:value="name" type="text" placeholder="账号" />
            <br />
            <n-input class="word" v-model:value="pass" type="password" show-password-on="click" placeholder="密码" />
            <br />
            <n-button class="word" type="info" @click="signin"> 登录 </n-button>
            <br />
            <div id="tool">
                <n-checkbox size="large" label="记住密码" v-model:checked="remember_account" />
                <n-checkbox size="large" label="游客登录" v-model:checked="summary" />
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {NInput,NButton,NSpace,NCheckbox,} from "naive-ui"
import {storeAccount} from '@/store/storeAccount.js'
import eventBus from '@/js/mittEventBus.js'


export default{
    components:{
        NInput,NButton,NSpace,NCheckbox,
        
    },
    data(){
        return {
            name:"",
            pass:"",

            remember_account:true,
            summary:false,
        }
    },

    mounted(){
        this.input_remembered_account()
    },

    methods:{
        signin(){
            this.try_remember_account()
            if(storeAccount.validateAccount(this.name,this.pass)){
                eventBus.emit("account_validated_signin")
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
#container{
    /* 使整体位于屏幕中间 */
    display: flex;
    width:100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
#content{
    /* 限制整体尺寸 */
    width:30rem;
    height:50rem;
    overflow:hidden;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(0,191,255, 0.075);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
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
</style>