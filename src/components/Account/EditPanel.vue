
<template>
   
   <div v-if="showThisPanel"  style="height:0.2rem"></div>
    <n-input v-if="showThisPanel" v-model:value="org"  placeholder="输入单位" :style="{ 'max-width':'10rem' }" />  &nbsp
    <n-input v-if="showThisPanel" v-model:value="user"  placeholder="输入账号"  :style="{ 'max-width':'10rem' }" />&nbsp
    <n-input v-if="showThisPanel" v-model:value="pass"  placeholder="输入密码"  :style="{ 'max-width':'10rem' }" />  &nbsp
    <n-button v-if="showThisPanel" @click="saveEdit">保存编辑</n-button> &nbsp
    <n-button v-if="showThisPanel" @click="cancelEdit">取消编辑</n-button>
</template>

<script>
import { NButton,NInput, } from 'naive-ui';
import naiveUiApi from '@/js/naiveUiApi.js'
import eventBus from '@/js/mittEventBus.js'
import{storeAccount} from '@/store/storeAccount.js'
export default{
   components:{
       NButton ,NInput,
   },
   mounted(){
    //按钮发送事件，这里才启动
    eventBus.on("editAccount",orgkey=>{
        // console.log("in AccountEditPanel.vue mounted(),editAccount event,orgkey=",orgkey);
        let m=storeAccount.getOrgMsgByKey(orgkey);
        [this.key,this.org,this.user,this.pass] = [m.key,m.org,m.name,m.pass]
        this.showThisPanel=true;
    })
   },
   data(){
       return{
            showThisPanel:false,
            org:"",
            user:"",
            pass:"",
            key:"",
       }
   },
   methods:{
    cancelEdit(){
        this.showThisPanel=!this.showThisPanel;
    },
    async saveEdit(){
        if(await storeAccount.editAccount(this.key, this.org, this.user, this.pass)){
            naiveUiApi.notifySuccess("编辑成功")
            this.showThisPanel=!this.showThisPanel;
            eventBus.emit("refreshAccountData") //更新store和视图
        }
    },

      
   }
}
</script>