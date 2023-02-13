<template>
    <n-layout>
      <n-layout-header  bordered>
        <Header />
      </n-layout-header>

      <n-layout has-sider>
        <n-layout-sider >
          <Sider />
        </n-layout-sider>

        <n-layout-content>
          <Content />
        </n-layout-content>

      </n-layout>
    </n-layout>
    <ChangePasswordModal />
  </template>
  
<script>

import Sider from  './Sider.vue'
import Header from  './Header.vue'
import Content from  './Content.vue'
import {
  NLayoutContent,NLayoutHeader,NLayoutSider,NLayout,
}from "naive-ui"

import ChangePasswordModal from '@/components/Password/ChangePasswordModal.vue';

export default{
  components:{
    Sider,Header,Content,
    NLayoutContent,NLayoutHeader,NLayoutSider,NLayout,
    ChangePasswordModal,
  },
  data(){
    return{
    }
  },

}
</script>

  <style scoped>
  </style>