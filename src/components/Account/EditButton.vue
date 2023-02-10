<template>
    <n-button @click="editAccount">编辑账号</n-button>
</template>

<script>
import { NButton } from 'naive-ui';
import { toRaw } from 'vue'
import eventBus from '@/js/mittEventBus.js'
export default{
   props:['accountKeyProxy'],
   components:{
       NButton 
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
       editAccount(){
           this.show=false;
           console.log('in Account.EditButton.vue editAccount(), 编辑账号',this.accountKey);
           eventBus.emit("editAccount",this.accountKey)
       },
   }
}
</script>