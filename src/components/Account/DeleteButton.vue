<template>
    <n-popconfirm v-model:show="show">
       <template #trigger>
           <n-button>删除账号</n-button>
       </template>
        确定删除？
       <template #action>
           <n-button size="small"   @click="deleteAccount">删除</n-button>
       </template>
     </n-popconfirm>
</template>

<script>
import { NPopconfirm,NButton } from 'naive-ui';
import { toRaw } from 'vue'
import eventBus from '@/js/mittEventBus.js'

import{storeAccount} from '@/store/storeAccount.js'
export default{
   props:['accountKeyProxy'],
   components:{
       NPopconfirm,NButton 
   },
   mounted(){
       this.accountKey= toRaw(this.accountKeyProxy);
   },
   data(){
       return{
           show:false,
           accountKey:'',
       }
   },
   methods:{
       async deleteAccount(){
           this.show=false;
           if(await storeAccount.deleteAccount(this.accountKey)){
                eventBus.emit("refreshAccountData")
           }
       },
   }
}
</script>