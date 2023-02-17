<template>
    <n-menu
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
     CreateOutline,AppsOutline,
   SettingsOutline,PersonAddOutline,
 } from "@vicons/ionicons5";
 
 import eventBus from '@/js/mittEventBus.js'
 import naiveApi from '@/js/naiveUiApi.js'
import {storeAccount} from "@/store/storeAccount.js"

 export default{
     components:{
         NMenu,
     },
     data(){
         return{
         defaultExpandedKeys: [],
         menuOptions:[
             {
                 label: "我的项目",
                 icon: renderIcon(CreateOutline),
                 key: "MyProject" //这里的key就是<Content>中动态组件的名字
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
             // 在这里做身份鉴别
             if(["ProjectManage", "AccountManage"].includes(key)){
                if(!storeAccount.ThisAccountIsAdmin()){
                    naiveApi.notifyFail("非管理员 无法访问")
                    return;
                }
             }
             
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