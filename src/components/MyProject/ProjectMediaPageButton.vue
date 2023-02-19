<template>
    <n-button @click="clickBtn">文件管理</n-button>
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
        clickBtn(){
            console.log('in ProjectEditButton.vue clickEditBtn(), key/id=',this.projectKey);
            eventBus.emit("openProjectMediaPage",this.projectKey)
        },
    }
}
</script>