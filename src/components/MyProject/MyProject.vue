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
import {storeAccount} from "@/store/storeAccount.js"
import {storeProject} from "@/store/storeProject.js"
import naiveApi from '@/js/naiveUiApi.js'

import eventBus from '@/js/mittEventBus.js'
import { h} from "vue";
import { NDataTable,NButton,NInput,NSpace,NIcon, } from 'naive-ui';
import { Add ,Search} from "@vicons/ionicons5";

export default{
    components: {
        NDataTable,NButton,NInput,NSpace,
        NIcon,
        Add,Search,
        
    },
    mounted(){
        let myAccount = storeAccount.getThisOrgAccountMsg();
        this.tableData = storeProject.getProjectListByDutyorgKey(myAccount.key);
        this.tableDataOnShow = this.tableData;
    },
    data(){
        return {
            tableDataOnShow:[],
            tableData:[],
            pagination: true,
            inputProjectName:"",
            
            columns:[
                {
                    title: "项目序号",
                    key: "index"
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
                            NButton,
                            {
                                projectKeyProxy: row.key,
                                projectNameProxy: row.name,
                            },
                            { default: () => "编辑项目" }
                        );
                    }
                    
                }],
            
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