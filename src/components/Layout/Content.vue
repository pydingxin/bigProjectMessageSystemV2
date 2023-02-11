<template>
    <div style="padding:0.4rem; margin-left:0.5rem">
        <component :is="selectedContentComponent"></component>
    </div>
</template>

<script>
import eventBus from '@/js/mittEventBus.js'
import ProjectManage from "@/components/Project/ProjectManage.vue";
import AccountManage from "@/components/Account/AccountManage.vue";
import MyProject from "@/components/MyProject/MyProject.vue";
export default{
    components:{
        ProjectManage,AccountManage,MyProject,

    },
    data(){
        return{
            selectedContentComponent:"MyProject",
        }
    },
    mounted(){
        let that=this;
        eventBus.on('changeContentComponent',componentName=>{
            that.selectedContentComponent= componentName;
        })
        
    },
}
</script>