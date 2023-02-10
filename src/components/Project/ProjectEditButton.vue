<template>
    <n-button @click="clickEditBtn">编辑信息</n-button>
</template>

<script>
import { NButton } from 'naive-ui';
import { toRaw } from 'vue'

import eventBus from '@/js/mittEventBus.js'

export default{
    props:['projectKeyProxy','projectNameProxy'],
    components:{
        NButton 
    },
    mounted(){
        this.projectKey= toRaw(this.projectKeyProxy);
        this.projectName= toRaw(this.projectNameProxy);
        
    },
    data(){
        return{
            projectKey:'',
            projectName:"",
        }
    },
    methods:{
        clickEditBtn(){
            console.log('in ProjectEditButton.vue clickEditBtn(), key/id=',this.projectKey);
            eventBus.emit("showProjectMsgFormModal",{type: "edit",projectKey:this.projectKey})
        },
    }
}
</script>