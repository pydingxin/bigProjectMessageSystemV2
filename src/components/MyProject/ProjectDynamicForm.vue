<template>
    <n-button type="tertiary" dashed circle @click="closeProjectDynamicForm">
      <template #icon>
        <n-icon><arrow-back /></n-icon>
      </template>
    </n-button>
    {{ staticMsg }}<br/>
{{ dynamicform }}
</template>

<script>
import eventBus from '@/js/mittEventBus.js'
import { ArrowBack} from "@vicons/ionicons5";

import { NButton,NInput,NSpace,NIcon, } from 'naive-ui';
import {storeProject} from '@/store/storeProject.js';

/* 信息样板
{
    'key':1,
    "lixiang":{status:"done",msg:"立项完成"},
    "yongdi":{status:"uninit",msg:"项目2没有地了！"},
    "guihua":{status:"done",msg:"规划完成"},
    "huanping":{status:"done",msg:"环评完成"},
    "nengping":{status:"done",msg:"能评完成"},
    "xukezheng":{status:"done",msg:"许可证完成"},
    
    "xingxiang":"形象进度呵呵了",
    "yearcosted":500,
},
*/
export default{
    components:{
        ArrowBack,
        NButton,NInput,NSpace,NIcon,
    },
    data(){
        return{
            dynamicform:{},
            staticMsg:{},
        }
    },
    mounted(){
        let that=this;
        eventBus.on("openProjectDynamicForm",function(projectkey){
            console.log("ProjectDynamicForm.vue got event openProjectDynamicForm, projectkey=",projectkey);
            that.dynamicform = storeProject.getProjectDynamicMsgByKey(projectkey); 
            that.staticMsg = storeProject.getProjectStaticMsgByKey(projectkey); 
        });
    },
    methods:{
        closeProjectDynamicForm(){
            eventBus.emit('closeProjectDynamicForm')
        }
    }
}
</script>