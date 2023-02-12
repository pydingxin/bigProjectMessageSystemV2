<template>
    <div v-show="!showSubmitPage">
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
        </n-space>

        <div style="height:0.4rem"></div>
        <n-data-table
            :columns="columns"
            :data="tableDataOnShow"
            :pagination="pagination"
            :bordered="true"
        />
    </div>
    <div v-show="showSubmitPage">
        <ProjectDynamicForm />
    </div>
</template>

<script>
import {storeAccount} from "@/store/storeAccount.js"
import {storeProject} from "@/store/storeProject.js"
import naiveApi from '@/js/naiveUiApi.js'

import eventBus from '@/js/mittEventBus.js'
import { h} from "vue";
import { NDataTable,NButton,NInput,NSpace,NIcon, } from 'naive-ui';
import { Search} from "@vicons/ionicons5";
import ProjectSubmitButton from './ProjectSubmitButton.vue'
import ProjectDynamicForm from './ProjectDynamicForm.vue'
export default{
    components: {
        NDataTable,NButton,NInput,NSpace,
        NIcon,Search,
        ProjectDynamicForm,
        ProjectSubmitButton,
    },
    mounted(){
        let myAccount = storeAccount.getThisOrgAccountMsg();
        this.tableData = storeProject.getProjectListByDutyorgKey(myAccount.key);
        this.tableDataOnShow = this.tableData;

        let that = this;
        eventBus.on("openProjectDynamicForm",function(projectkey){
            console.log("MyProject.vue got event openProjectDynamicForm, projectkey=",projectkey);
            that.showSubmitPage=true;
        });
        eventBus.on("closeProjectDynamicForm",function(){
            console.log("MyProject.vue got event closeProjectDynamicForm");
            that.showSubmitPage=false;
        })
        
    },
    data(){
        return {
            showSubmitPage:false,        //展示动态信息编辑页

            tableDataOnShow:[],
            tableData:[],
            pagination: true,
            inputProjectName:"",
            
            columns:[
                {title: "项目序号", key: "index"},
                {title: "项目名", key: "name"},
                {title:"",key:"edit",render(row) {return h(ProjectSubmitButton,{projectKeyProxy: row.key,},{default:()=>"编辑项目"});}}
            ],
            
        }
    },
    methods:{

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
}
</script>