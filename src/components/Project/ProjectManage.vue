<template>

    <n-space>
        <!-- 输入空时查找全部 -->
        <n-input clearable 
            :style="{'width':'20rem'}"
            v-model:value="inputProjectName" 
            type="text" 
            placeholder="输入关键词查找" />

        <n-button type="warning" @click="searchProject">
            <n-icon size="15" ><search /></n-icon>
            查找项目
        </n-button>

        <n-button type="primary" @click="addProject">  
            <n-icon size="15" ><add /></n-icon>
            添加项目
        </n-button>
    </n-space>

    <div style="height:0.4rem"></div>
      <n-data-table
        :columns="columns"
        :data="tableDataOnShow"
        :pagination="pagination"
        :bordered="true"
    />
    <!-- 等待编辑新建项目的事件showProjectMsgFormModal触发出现 -->
    <ProjectMsgFormModal  /> 
</template>

<script>
import {storeProject} from '@/store/storeProject.js'
import naiveApi from '@/js/naiveUiApi.js'

import eventBus from '@/js/mittEventBus.js'
import { h} from "vue";
import { NDataTable,NButton,NInput,NSpace,NIcon, } from 'naive-ui';
import { Add ,Search} from "@vicons/ionicons5";

import ProjectDeleteButton from "./ProjectDeleteButton.vue";
import ProjectEditButton from "./ProjectEditButton.vue";
import ProjectMsgFormModal from "./ProjectMsgFormModal.vue";


export default{
    components: {
        NDataTable,NButton,ProjectDeleteButton,NInput,NSpace,
        NIcon,
        Add,Search,
        ProjectMsgFormModal,
    },
    methods:{
        async refreshProjectMsg(){
            //每行的key都是项目key，可以用这个key删除项目
            console.log("ProjectManage重置storeProject和视图")

            await storeProject.initStoreProject() //重置store
            this.tableData = storeProject.getAllProjectList() //重置本模块数据
            this.tableDataOnShow = this.tableData; //重置视图

            console.log("视图数据：",this.tableData)
        },
        addProject(){
            console.log("add project")
            
            eventBus.emit("showProjectMsgFormModal",{type: "add"})
        },
        searchProject(){
            //click search button
            // 从tableData中查找，赋给tableDataOnShow
            if(''===this.inputProjectName){
                this.tableDataOnShow = this.tableData;
            }else{
                let tmp = this.tableData.filter(one=>(one.name.indexOf(this.inputProjectName)>=0));
                if(tmp.length==0){
                    naiveApi.notifyFail('无相关项目')
                }else{
                    this.tableDataOnShow = tmp;
                }
            }
            
        },
    },
    mounted(){
        eventBus.on("refreshProjectMsg",this.refreshProjectMsg);
        this.refreshProjectMsg()
    },
    data(){
        return{
    

            columns:[
                {
                    title: "项目序号",
                    key: "index",
                    sorter: (row1, row2) => row1.index-row2.index
                },
                {
                    title: "项目名",
                    key: "name"
                },
                {
                    title: "",
                    key: "edit",
                    render(row) {
                        return h(
                            ProjectEditButton,
                            {
                                projectKeyProxy: row.key,
                                projectNameProxy: row.name,
                            },
                            { default: () => "编辑项目" }
                        );
                    }
                    
                },
                {
                    title: "",
                    key: "delete",
                    render(row) {
                        return h(
                            ProjectDeleteButton,
                            {
                                projectKeyProxy: row.key,
                                projectNameProxy: row.name,
                            },
                            { default: () => "删除项目" }
                        );
                    }
                    
                }
            ],
            tableDataOnShow:[],
            tableData:[],
            pagination: true,

            inputProjectName:""
        }
    }
}
</script>