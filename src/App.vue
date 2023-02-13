<template>
  <template v-if="account_validated">
    <Layout />
  </template>

  <template v-if="!account_validated">
    <Login />
  </template>
</template>
  
<script>

import Layout from "./components/Layout/Layout.vue";
import Login from "./components/Login/Login.vue";
import eventBus from '@/js/mittEventBus.js'

  export default {
      components: {
        Layout,Login,
      },
    data() {
      return {
        account_validated:false,
      }
    },
    methods:{

    },
    mounted(){
      let that=this;
      eventBus.on("account_validated_signin",()=>{
        that.account_validated=true; //监听登录
      });
      
      eventBus.on("account_logout",()=>{
        that.account_validated=false; //监听登出
      })
    },
  }
</script>
  
  