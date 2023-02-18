<template>

    <template v-if="account_login_on_pc">
      <Layout />
    </template>

    <template v-if="account_login_on_mobile">
      <MobileLayout />
    </template>

    <template v-if="!account_login_on_pc && !account_login_on_mobile">
      <Login />
    </template>

</template>
  
<script>
import Layout from "./components/Layout/Layout.vue";
import MobileLayout from "./components/Mobile/Layout/M_Layout.vue";
import Login from "./components/Login/Login.vue";
import eventBus from '@/js/mittEventBus.js'

  export default {
      components: {
        Layout,Login,
        MobileLayout,

      },
    data() {
      return {
        //根据所在设备显示不同Layout
        account_login_on_pc:false,
        account_login_on_mobile:false,
      }
    },
    methods:{
    },
    mounted(){
      let that=this;
      eventBus.on("account_login_on_pc",()=>{
        that.account_login_on_pc=true; //监听登录
      });
      eventBus.on("account_login_on_mobile",()=>{
        that.account_login_on_mobile=true; //监听登录
      });
      
      eventBus.on("account_logout",()=>{
        that.account_login_on_pc=false; //监听登出
        that.account_login_on_mobile=false; 
      })
    },
  }
</script>
  
  