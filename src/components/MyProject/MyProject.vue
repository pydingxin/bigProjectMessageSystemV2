<template>
    <div v-show="!showSubmitPage && !showMediaPage">
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
    
    <div v-show="showMediaPage">
        <ProjectMediaPage />
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
import ProjectDynamicFormButton from './ProjectDynamicFormButton.vue'
import ProjectDynamicForm from './ProjectDynamicForm.vue'
import ProjectMediaPage from './ProjectMediaPage.vue'
import ProjectMediaPageButton from './ProjectMediaPageButton.vue'

export default{
    components: {
        NDataTable,NButton,NInput,NSpace,
        NIcon,Search,
        ProjectDynamicForm,ProjectMediaPage,
        ProjectDynamicFormButton,
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
        
        eventBus.on("openProjectMediaPage",function(projectkey){
            console.log("MyProject.vue got event openProjectMediaPage, projectkey=",projectkey);
            that.showMediaPage=true;
        });
        eventBus.on("closeProjectMediaPage",function(){
            console.log("MyProject.vue got event closeProjectMediaPage");
            that.showMediaPage=false;
        })
        
    },
    data(){
        return {
            showSubmitPage:false,  //展示动态信息编辑页
            showMediaPage:false,   //展示媒体素材页

            tableDataOnShow:[],
            tableData:[],
            pagination: true,
            inputProjectName:"",
            
            columns:[
                {title: "项目序号", key: "index"},
                {title: "项目名", key: "name"},
                {title:"",key:"edit",render(row) {return h(ProjectDynamicFormButton,{projectKeyProxy: row.key,},{default:()=>"进度管理"});}},
                {title:"",key:"media",render(row) {return h(ProjectMediaPageButton,{projectKeyProxy: row.key,},{default:()=>"影像管理"});}},
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