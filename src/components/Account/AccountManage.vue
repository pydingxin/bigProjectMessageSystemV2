<template>
    <div>
        <AddPanel />
        <EditPanel />    
        <div style="height:0.2rem"></div>
        <n-data-table :columns="columns" :data="allOrgMsgs" :pagination="pagination" />
    </div>
    <!-- {{ allOrgMsgs  }} -->
</template>

<script>
import {storeAccount} from '@/store/storeAccount.js'
import { h, } from "vue";
import { NInput,NDataTable,NButton } from "naive-ui";
import AccountDeleteButton from './DeleteButton.vue'
import AccountEditButton from './EditButton.vue'
import EditPanel from './EditPanel.vue'
import AddPanel from './AddPanel.vue'

import eventBus from '@/js/mittEventBus.js'
export default {
    emits:['pointerenter', 'pointerleave'],
    components: {
        NInput,NDataTable,NButton,
        AddPanel,
        EditPanel 
    },
    data(){
        return {
            allOrgMsgs: [],
            columns:[
                {
                    title: "单位",
                    key: "org",
                },
                {
                    title: "账号",
                    key: "name",
                },
                {
                    title: "密码",
                    key: "pass",
                },
                {
                    title: "",
                    key: "edit",
                    render(row) {
                        return h(
                            AccountEditButton,
                            {
                                accountKeyProxy: row.key,
                            },
                            { default: () => "编辑账号" }
                        );
                    }
                },
                {
                    title: "",
                    key: "delete",
                    render(row) {
                        return h(
                            AccountDeleteButton,
                            {
                                accountKeyProxy: row.key,
                            },
                            { default: () => "删除账号" }
                        );
                    }
                }
            ],
            pagination: {
                pageSize: 10
            }
        }
    },
    mounted(){
        this.refreshAccountData()
        let that=this
        eventBus.on("refreshAccountData",async()=>{
            // 任何增删改操作完成后，只要发送这个信号即可
            await storeAccount.initAccountStore() //更新store
            that.refreshAccountData() //更新视图
        })
    },
    methods:{
        refreshAccountData(){
            this.allOrgMsgs = storeAccount.getAllOrgAccountMsg()
        },
    },
}
</script>

<style scoped>
:deep(.n-data-table-th) {
    text-align: left;
    font-weight: 900;
    color: #fff;
    background-color: #0074d9;
    font-size: 1.2em;
    padding: .3em 2.4em .3em .6em;
}
:deep(.n-data-table-td){
    font-size: 1.1em;
}
</style>