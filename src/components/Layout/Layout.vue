<template>
    <n-layout>
      <n-layout-header  bordered>
        <Header />
      </n-layout-header>

      <n-layout has-sider>
        <n-layout-sider   
          :collapsed-width="22"
          :collapsed-icon-size="22"
          collapse-mode="width"
          :show-collapsed-content="false"
          show-trigger="arrow-circle">
          <Sider />
        </n-layout-sider>

        <n-layout-content>
          <Content />
        </n-layout-content>

      </n-layout>
    </n-layout>
  </template>
  
<script>

import Sider from  './Sider.vue'
import Header from  './Header.vue'
import Content from  './Content.vue'
import {
  NLayoutContent,NLayoutHeader,NLayoutSider,NLayout,
}from "naive-ui"

export default{
  components:{
    Sider,Header,Content,
  NLayoutContent,NLayoutHeader,NLayoutSider,NLayout,
  },
  data(){
    return{
    }
  },

}
</script>

  <style scoped>
  </style>