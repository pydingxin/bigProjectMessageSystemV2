<template>
    <n-menu
         :collapsed-width="22"
         :collapsed-icon-size="22"
         @update:value="handleMenuClick"
         :options="menuOptions"
         :default-expanded-keys="defaultExpandedKeys"
     />
 </template>
 
 <script>
 import { h } from "vue";
 function renderIcon(icon) {
   return () => h(NIcon, null, { default: () => h(icon) });
 }
 
 import { NMenu,NIcon } from "naive-ui";
 import {
     DocumentAttachOutline,CreateOutline,AppsOutline,
   SettingsOutline,PersonAddOutline,ShieldCheckmarkOutline,
 } from "@vicons/ionicons5";
 
 import eventBus from '@/js/mittEventBus.js'
 
 export default{
     components:{
         NMenu,
     },
     data(){
         return{
         defaultExpandedKeys: [],
         menuOptions:[
             {
                 label: "表格填报",
                 icon: renderIcon(CreateOutline),
                 key: "MyTable" //这里的key就是<Content>中动态组件的名字
             },
             {
                 show:true,
                 label: "系统管理",
                 key: "xiTongGuanLi",
                 icon: renderIcon(SettingsOutline),
                 children: [
                     {
                         label: "项目管理",
                         icon: renderIcon(AppsOutline),
                         key: "ProjectManage",
                     },
                     {
                         label: "账号管理",
                         icon: renderIcon(PersonAddOutline),
                         key: "AccountManage",
                     },
                 ]
             },
         ],       
         }
     },
     methods:{
         handleMenuClick(key){
             // 侧边菜单栏点击后，发出事件，通知<Content>切换主界面
             console.log("in Sider.vue handleMenuClick(), select content component",key); //点击菜单栏的叶节点，获取key
             eventBus.emit('changeContentComponent',key);
         },
   },
 }
 </script>
 
 <style scoped>
 :deep(.n-menu-item-content-header){
     font-size: 1.1em;
 }
 </style>