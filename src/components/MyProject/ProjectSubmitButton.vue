<template>
    <n-button @click="clickEditBtn">报送信息</n-button>
</template>

<script>
import { NButton } from 'naive-ui';
import { toRaw } from 'vue'

import eventBus from '@/js/mittEventBus.js'

export default{
    props:['projectKeyProxy',],
    components:{
        NButton 
    },
    mounted(){
        this.projectKey= toRaw(this.projectKeyProxy);
    },
    data(){
        return{
            projectKey:'',
        }
    },
    methods:{
        clickEditBtn(){
            console.log('in ProjectEditButton.vue clickEditBtn(), key/id=',this.projectKey);
            eventBus.emit("openProjectDynamicForm",this.projectKey)
        },
    }
}
</script>