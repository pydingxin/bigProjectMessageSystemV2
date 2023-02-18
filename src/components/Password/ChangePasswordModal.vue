<!-- 在Layout中引入本模块，在Heaader中触发展示 -->

<template>
 <n-modal v-model:show="showChangePasswordModal" preset="dialog" title="Dialog">
    <template #header>
      <div>修改密码</div>
    </template>

    <div>
        <br />
        <n-space align="center">
            <span >输入旧密码：</span>
            <n-input  v-model:value="oldpassword" type="text" placeholder="" />
        </n-space>
        <br />
        <n-space align="center">
            <span >输入新密码：</span>
            <n-input  v-model:value="newpassword" type="text" placeholder="" />
        </n-space>
        
        

    </div>

    <template #action>
      <n-button @click="saveChange">保存修改</n-button>
    </template>
  </n-modal>
</template>

<script>
import naiveApi from '@/js/NaiveUiApi.js';
import {storeAccount} from "@/store/storeAccount.js";
import eventBus from '@/js/mittEventBus.js'
import {
    NModal,NInput,NSpace,NButton,
} from 'naive-ui'
import {mypost} from "@/js/fetchapi.js"

export default{
    components:{
        NModal,NInput,NSpace,NButton,
    },
    data(){
        return {
            showChangePasswordModal:false,
            oldpassword:'',
            newpassword:'',
        }
    },
    mounted(){
        let that = this;
        eventBus.on("changePassword",account=>{
            console.log("changePasswordModal.vue ",account)
            that.showChangePasswordModal = true 
        })
    },
    methods:{
        async saveChange(){
            if(storeAccount.getThisOrgAccountMsg().pass !==this.oldpassword){
                naiveApi.notifyFail("旧密码输入错误")
                return;
            }
            if(await storeAccount.changepassword(this.oldpassword,this.newpassword)){
                naiveApi.notifySuccess("修改成功")
                this.showChangePasswordModal=false;
            }
        }
    },
}
</script>