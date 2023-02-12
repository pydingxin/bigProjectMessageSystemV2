<template>
    <!-- 返回按钮 -->
    <n-button type="tertiary" dashed  @click="closeProjectDynamicForm">
      <template #icon>
        <n-icon><arrow-back /></n-icon>
      </template>
      返回
    </n-button>
    &nbsp
    <!-- 保存按钮 -->
    <n-button type="tertiary" dashed  @click="saveForm">
      <template #icon>
        <n-icon><cloud-upload /></n-icon>
      </template>
      保存编辑
    </n-button>

    <!-- 标题 -->
    <n-h1 prefix="bar">
      <n-text type="primary">
        {{ staticMsg.name }}
      </n-text>
    </n-h1>

    <!-- 卡片 -->
    <div id="cardContainer">
        <n-card hoverable embedded title="立项" class="card">
            <n-space vertical>
                <n-space>
                    <n-select style="min-width:8rem" v-model:value="form.lixiang.status" :options="selectOptions" />
                    <n-icon v-show="form.lixiang.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.lixiang.msg" :autosize="{minRows:5,maxRows:5}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="用地" class="card">
            <n-space vertical>
                <n-space>
                    <n-select style="min-width:8rem" v-model:value="form.yongdi.status" :options="selectOptions" />
                    <n-icon v-show="form.yongdi.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.yongdi.msg" :autosize="{minRows:5,maxRows:5}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="规划" class="card">
            <n-space vertical>
                <n-space>
                    <n-select style="min-width:8rem" v-model:value="form.guihua.status" :options="selectOptions" />
                    <n-icon v-show="form.guihua.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.guihua.msg" :autosize="{minRows:5,maxRows:5}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="环评" class="card">
            <n-space vertical>
                <n-space>
                    <n-select style="min-width:8rem" v-model:value="form.huanping.status" :options="selectOptions" />
                    <n-icon v-show="form.huanping.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.huanping.msg" :autosize="{minRows:5,maxRows:5}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="能评" class="card">
            <n-space vertical>
                <n-space>
                    <n-select style="min-width:8rem" v-model:value="form.nengping.status" :options="selectOptions" />
                    <n-icon v-show="form.nengping.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.nengping.msg" :autosize="{minRows:5,maxRows:5}" type="textarea" />
            </n-space>
        </n-card>

        <n-card hoverable embedded title="施工许可证" class="card">
            <n-space vertical>
                <n-space>
                    <n-select style="min-width:8rem" v-model:value="form.xukezheng.status" :options="selectOptions" />
                    <n-icon v-show="form.xukezheng.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.xukezheng.msg" :autosize="{minRows:5,maxRows:5}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="本年度已投资[万元]" class="card">
            <n-input-number  min=0 clearable v-model:value="form.yearcosted" :show-button="false" placeholder="本年度已投资[万元]"  />
            <n-h6><n-text type="info">总计划投资[万元]：{{ staticMsg.allcost }}</n-text></n-h6>
            <n-h6><n-text type="success">往年已投资[万元]：{{ staticMsg.hadcost }}</n-text></n-h6>
            <n-h6><n-text type="warning">今年计划投资[万元]：{{ staticMsg.yearcost }}</n-text></n-h6>
        </n-card>
        
        <n-card hoverable embedded title="形象进度" class="card">
            <n-input v-model:value="form.xingxiang" :autosize="{minRows:7,maxRows:7}" type="textarea" />
        </n-card>
    </div>
</template>

<script>
import eventBus from '@/js/mittEventBus.js'
import { ArrowBack,CloudUpload,Checkbox} from "@vicons/ionicons5";

import { 
    NButton,NIcon,
    NH1,NH6,NText,NSelect,NSpace,NInput,NInputNumber,NCard,
 } from 'naive-ui';
import {storeProject} from '@/store/storeProject.js';

/* 信息样板
{
    'key':1,
    "lixiang":{status:"done",msg:"立项完成"},
    "yongdi":{status:"uninit",msg:"项目2没有地了！"},
    "guihua":{status:"done",msg:"规划完成"},
    "huanping":{status:"done",msg:"环评完成"},
    "nengping":{status:"done",msg:"能评完成"},
    "xukezheng":{status:"done",msg:"许可证完成"},
    
    "xingxiang":"形象进度呵呵了",
    "yearcosted":500, //输入可能为null
},
*/
export default{
    components:{
        ArrowBack,Checkbox,CloudUpload,
        NButton,NIcon,NCard,
        NH1,NH6,NText,NSelect,NSpace,NInput,NInputNumber,
    },
    data(){
        return{
            dynamicform:{},
            staticMsg:{},
            value:"",
            selectOptions: [
                {label: "未开工",value: "uninit"},
                {label: "已开工",value: "inited"},
                {label: "已完成",value: "done"},
            ],

            //被修改的动态信息
            form:{
                'key':1,
                "lixiang":{status:"done",msg:"立项完成"},
                "yongdi":{status:"uninit",msg:"项目2没有地了！"},
                "guihua":{status:"inited",msg:"已开始"},
                "huanping":{status:"done",msg:"环评完成"},
                "nengping":{status:"done",msg:"能评完成"},
                "xukezheng":{status:"done",msg:"许可证完成"},
                
                "xingxiang":"形象进度呵呵了",
                "yearcosted":500,
            },
        }
    },
    mounted(){
        let that=this;
        eventBus.on("openProjectDynamicForm",function(projectkey){
            console.log("ProjectDynamicForm.vue got event openProjectDynamicForm, projectkey=",projectkey);
            that.dynamicform = storeProject.getProjectDynamicMsgByKey(projectkey); 
            that.form = that.dynamicform;
            that.staticMsg = storeProject.getProjectStaticMsgByKey(projectkey); 
        });
    },
    methods:{
        closeProjectDynamicForm(){
            eventBus.emit('closeProjectDynamicForm')
        },
        saveForm(){
            if(this.form.yearcosted==null)return;
        },
    }
}
</script>

<style scoped>
.card{
    max-width:20rem;
    min-width:20rem;
    margin: 1rem;
}
#cardContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
:deep(.n-h6){
    margin:0;
}
</style>