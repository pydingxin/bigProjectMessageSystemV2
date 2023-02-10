<template>
    <n-space>
        <!-- 输入空时查找全部 -->
        <n-input clearable 
            :style="{'width':'20rem'}"
            v-model:value="inputProjectName" 
            type="text" 
            placeholder="输入项目名，添加项目时必须输入全名" />

        <n-button type="primary" @click="addProject">  
            <n-icon size="15" ><add /></n-icon>
            添加项目
        </n-button>

        <n-button type="warning" @click="searchProject">
            <n-icon size="15" ><search /></n-icon>
            查找项目
        </n-button>
    </n-space>
    <div style="height:0.4rem"></div>
      <n-data-table
        :columns="columns"
        :data="tableDataOnShow"
        :pagination="pagination"
        :bordered="true"
    />
</template>

<script>
import {storeProject} from '@/store/storeProject.js'
import naiveApi from '@/js/naiveUiApi.js'

import { h} from "vue";
import { NDataTable,NButton,NInput,NSpace,NIcon, } from 'naive-ui';
import { Add ,Search} from "@vicons/ionicons5";

import ProjectDeleteButton from "./ProjectDeleteButton.vue";


export default{
    components: {
        NDataTable,NButton,ProjectDeleteButton,NInput,NSpace,
        NIcon,
        Add,Search,
    },
    methods:{
        refreshProjectMsg(){
            //每行的key都是项目key，可以用这个key删除项目
            this.tableData = storeProject.projectManage_allProjectMsg()
            // console.log("in ProjectManage.vue refreshProjectMsg(), got ",this.tableData)
        },
        addProject(){
            //click add button
            // 由专门的store执行
            if(''===this.inputProjectName){
                naiveApi.notifyFail('请输入项目名')
                return;
            }
            console.log("add project",this.inputProjectName)
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
        this.refreshProjectMsg()
        this.tableDataOnShow = this.tableData;
    },
    data(){
        return{
            columns:[
                {
                    title: "项目序号",
                    key: "idx"
                },
                {
                    title: "项目名",
                    key: "name"
                },
                {
                    title: "",
                    key: "actions",
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