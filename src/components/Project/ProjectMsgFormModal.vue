<template>
 <n-modal v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div>{{modalTitle}}</div>
    </template>
    <div>
      

    </div>
  </n-modal>
</template>

<script>

import eventBus from '@/js/mittEventBus.js'
import {storeProject} from "@/store/storeProject.js"
import {
    NModal,
} from 'naive-ui'

export default{
    components:{
      NModal,
    },
    mounted(){
      let that=this;
      eventBus.on('showProjectMsgFormModal',msg=>{
        // console.log("in showProjectMsgFormModal.vue got event: showProjectMsgFormModal")
        // console.log("msg= ",msg)
        that.eventMsg = msg;
        msg.type === "edit" && that.editProject();
        msg.type === "add" && that.addProject();
        that.showModal = true;
      })
      
    },
    methods:{
      addProject:function(){
        this.projectMsg={};
        console.log("addProject",this.eventMsg);
        this.modalTitle= "创建项目"
      },
      editProject:function(){
        console.log("editProject",this.eventMsg);
        this.projectMsg= storeProject.getProjectMsgByKey(this.eventMsg.projectKey)
        this.modalTitle= `编辑项目：【${this.projectMsg.col1}】`
      },
    },
    data(){
        return{
            showModal:false,
            eventMsg:{},
            projectMsg:{},

            modalTitle:"",
        }
    }
}
</script>

<style>
</style>