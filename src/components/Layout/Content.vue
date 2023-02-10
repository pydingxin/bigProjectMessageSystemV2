<template>
    <div style="padding:0.4rem; margin-left:0.5rem">
        <component :is="selectedContentComponent"></component>
    </div>
</template>

<script>
import eventBus from '@/js/mittEventBus.js'
// import {storeEditPermissions} from "@/store/storeEditPermission.js"
// import MyTable from "@/components/Table/MyTable.vue";
import AttachmentManage from "@/components/Attachment/AttachmentManage.vue";
import ProjectManage from "@/components/Project/ProjectManage.vue";
import AccountManage from "@/components/Account/AccountManage.vue";
// import EditPermissionManage from "@/components/EditPermission/EditPermissionManage.vue";
export default{
    components:{
        ProjectManage,AccountManage,AttachmentManage,
        // MyTable,EditPermissionManage
    },
    data(){
        return{
            selectedContentComponent:"ProjectManage",
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