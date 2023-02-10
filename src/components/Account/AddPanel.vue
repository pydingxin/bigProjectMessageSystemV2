
<template>

    <n-button v-if="!showAddPanel" @click="clickAdd">添加账号</n-button>
    <n-input  v-if="showAddPanel" v-model:value="org"  placeholder="输入单位" :style="{ 'max-width':'10rem' }" />  &nbsp
    <n-input  v-if="showAddPanel" v-model:value="user"  placeholder="输入账号"  :style="{ 'max-width':'10rem' }" />&nbsp
    <n-input  v-if="showAddPanel" v-model:value="pass"  placeholder="输入密码"  :style="{ 'max-width':'10rem' }" />  &nbsp
    <n-button v-if="showAddPanel" @click="clickConfirmAdd">确认添加</n-button> &nbsp
    <n-button v-if="showAddPanel" @click="clickCancelAdd">取消添加</n-button> &nbsp
 
</template>

<script>
import { NButton,NInput, } from 'naive-ui';
import naiveUiApi from '@/js/naiveUiApi.js'
import eventBus from '@/js/mittEventBus.js'
import{storeAccount} from '@/store/storeAccount.js'
export default{
    emits:['pointerenter', 'pointerleave'],
   components:{
       NButton ,NInput,
   },
   mounted(){

   },
   data(){
       return{
            showAddPanel:false,
            btnContent:"添加账号",
            org:"",
            user:"",
            pass:"",
       }
   },
   methods:{
    clickAdd(){
        this.showAddPanel=true;
    },
    clickCancelAdd(){
        this.showAddPanel=false;
        [this.org,this.user,this.pass] = ['','','']
    },

    async clickConfirmAdd(){
        console.log("in addPanel.vue clickConformAdd(), add account:",this.org,this.user,this.pass)
        let done= true; // do something
        if(done){
            naiveUiApi.notifySuccess("添加成功")
            this.showAddPanel=false;
        }else{
            naiveUiApi.notifySuccess("添加失败")
        }
    }

},      
}
</script>