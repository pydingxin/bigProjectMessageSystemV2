<template>
     <n-popconfirm v-model:show="show">
        <template #trigger>
            <n-button>删除项目</n-button>
        </template>
        【{{projectName}}】<br/>删除项目及其数据？
        <template #action>
            <n-button size="small"   @click="confirmDelete">确认删除</n-button>
        </template>
      </n-popconfirm>
</template>

<script>
import { NPopconfirm,NButton } from 'naive-ui';
import { toRaw } from 'vue'

export default{
    props:['projectKeyProxy','projectNameProxy'],
    components:{
        NPopconfirm,NButton 
    },
    mounted(){
        this.projectKey= toRaw(this.projectKeyProxy);
        this.projectName= toRaw(this.projectNameProxy);
        
    },
    data(){
        return{
            show:false,
            projectKey:'',
            projectName:"",
        }
    },
    methods:{
        confirmDelete(){
            this.show=false;
            console.log('delete project key/id=',this.projectKey);
            // 由专门的store执行
        },
    }
}
</script>