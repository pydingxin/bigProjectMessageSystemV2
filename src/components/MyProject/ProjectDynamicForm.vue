<template>
    <n-space align="center">
        <!-- 返回按钮 -->
        <n-button type="tertiary" dashed  @click="closeProjectDynamicForm">
            <template #icon><n-icon><arrow-back /></n-icon></template>
            返回
        </n-button>

        <n-text type="warning">
            进度管理的每次提交都会存档，形成工作推进记录，请认真填写
        </n-text>
    </n-space>


    <!-- 标题 -->
    <n-h2 prefix="bar"><n-text type="primary">
        {{ staticMsg.name }}
    </n-text></n-h2>



    <!-- 卡片 -->
    <div id="cardContainer">
        <n-card hoverable embedded title="立项" class="card">
            <n-space vertical>
                <n-space>
                    <n-button type="tertiary" dashed  @click="saveItem('lixiang')"><template #icon> <n-icon><cloud-upload /></n-icon> </template>提交</n-button>
                    <n-select style="min-width:7rem" v-model:value="form.lixiang.status" :options="selectOptions" />
                    <n-icon v-show="form.lixiang.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.lixiang.msg" :autosize="{minRows:8,maxRows:8}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="用地" class="card">
            <n-space vertical>
                <n-space>
                    <n-button type="tertiary" dashed  @click="saveItem('yongdi')"><template #icon> <n-icon><cloud-upload /></n-icon> </template>提交</n-button>
                    <n-select style="min-width:7rem" v-model:value="form.yongdi.status" :options="selectOptions" />
                    <n-icon v-show="form.yongdi.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.yongdi.msg" :autosize="{minRows:8,maxRows:8}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="规划" class="card">
            <n-space vertical>
                <n-space>
                    <n-button type="tertiary" dashed  @click="saveItem('guihua')"><template #icon> <n-icon><cloud-upload /></n-icon> </template>提交</n-button>
                    <n-select style="min-width:7rem" v-model:value="form.guihua.status" :options="selectOptions" />
                    <n-icon v-show="form.guihua.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.guihua.msg" :autosize="{minRows:8,maxRows:8}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="环评" class="card">
            <n-space vertical>
                <n-space>
                    <n-button type="tertiary" dashed  @click="saveItem('huanping')"><template #icon> <n-icon><cloud-upload /></n-icon> </template>提交</n-button>
                    <n-select style="min-width:7rem" v-model:value="form.huanping.status" :options="selectOptions" />
                    <n-icon v-show="form.huanping.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.huanping.msg" :autosize="{minRows:8,maxRows:8}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="能评" class="card">
            <n-space vertical>
                <n-space>
                    <n-button type="tertiary" dashed  @click="saveItem('nengping')"><template #icon> <n-icon><cloud-upload /></n-icon> </template>提交</n-button>
                    <n-select style="min-width:7rem" v-model:value="form.nengping.status" :options="selectOptions" />
                    <n-icon v-show="form.nengping.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.nengping.msg" :autosize="{minRows:8,maxRows:8}" type="textarea" />
            </n-space>
        </n-card>

        <n-card hoverable embedded title="施工许可证" class="card">
            <n-space vertical>
                <n-space>
                    <n-button type="tertiary" dashed  @click="saveItem('xukezheng')"><template #icon> <n-icon><cloud-upload /></n-icon> </template>提交</n-button>
                    <n-select style="min-width:7rem" v-model:value="form.xukezheng.status" :options="selectOptions" />
                    <n-icon v-show="form.xukezheng.status==='done'" size="30" color="green">
                        <checkbox />
                    </n-icon>
                </n-space>
                <n-input v-model:value="form.xukezheng.msg" :autosize="{minRows:8,maxRows:8}" type="textarea" />
            </n-space>
        </n-card>
        
        <n-card hoverable embedded title="本年度已投资[万元]" class="card">
            <n-space>
                <n-button type="tertiary" dashed  @click="saveItem('yearcosted')"><template #icon> <n-icon><cloud-upload /></n-icon> </template>提交</n-button>
                <n-input-number style="width: 9rem;" min=0 clearable v-model:value="form.yearcosted" :show-button="false" placeholder="本年度已投资"  />
            </n-space><br />
            <n-h6><n-text type="success">总计划投资[万元]：{{ staticMsg.allcost }}</n-text></n-h6> <br />
            <n-h6><n-text type="success">往年已投资[万元]：{{ staticMsg.hadcost }}</n-text></n-h6> <br />
            <n-h6><n-text type="success">今年计划投资[万元]：{{ staticMsg.yearcost }}</n-text></n-h6> <br />
        </n-card>
        
        <n-card hoverable embedded title="形象进度" class="card">
            <n-button type="tertiary" dashed  @click="saveItem('xingxiang')"><template #icon> <n-icon><cloud-upload /></n-icon> </template>提交</n-button>
            <div style="height:0.6rem"></div>
            <n-input v-model:value="form.xingxiang" :autosize="{minRows:8,maxRows:8}" type="textarea" />
        </n-card>
    </div>
    {{ form }}
</template>

<script>
import eventBus from '@/js/mittEventBus.js'
import naiveApi from '@/js/naiveUiApi.js'
import { ArrowBack,CloudUpload,Checkbox} from "@vicons/ionicons5";

import {mypost} from "@/js/fetchapi.js"
import { 
    NButton,NIcon,
    NH2,NH3,NH6,NText,NSelect,NSpace,NInput,NInputNumber,NCard,
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
        NH2,NH3,NH6,NText,NSelect,NSpace,NInput,NInputNumber,
    },
    data(){
        return{
            staticMsg:{},
            value:"",
            selectOptions: [
                {label: "未开始",value: "uninit"},
                {label: "已开始",value: "inited"},
                {label: "完成",value: "done"},
            ],

            //被修改的动态信息
            form:{
                'key':0,
                "lixiang":{status:"",msg:""},
                "yongdi":{status:"",msg:""},
                "guihua":{status:"",msg:""},
                "huanping":{status:"",msg:""},
                "nengping":{status:"",msg:""},
                "xukezheng":{status:"",msg:""},
                "xingxiang":"",
                "yearcosted":0,
            },
        }
    },
    mounted(){
        let that=this;
        // 按钮触发事件
        eventBus.on("openProjectDynamicForm",async function(projectkey){
            console.log("请求静态信息, projectkey=",projectkey);
            that.staticMsg = await storeProject.getProjectStaticMsgByKey(projectkey); 

            console.log("请求动态信息, projectkey=",projectkey);
            let tmp=  await storeProject.getProjectDynamicMsgByKey(projectkey); 
            // 如果是个json，就把json解出来
            if(!!tmp.lixiang)   that.form.lixiang = JSON.parse(tmp.lixiang);
            if(!!tmp.yongdi)    that.form.yongdi = JSON.parse(tmp.yongdi);
            if(!!tmp.guihua)    that.form.guihua = JSON.parse(tmp.guihua);
            if(!!tmp.huanping)  that.form.huanping = JSON.parse(tmp.huanping);
            if(!!tmp.nengping)  that.form.nengping = JSON.parse(tmp.nengping);
            if(!!tmp.xukezheng) that.form.xukezheng = JSON.parse(tmp.xukezheng);
            that.form.yearcosted = tmp.yearcosted;
            that.form.xingxiang = tmp.xingxiang;
            that.form.key = tmp.key;
        });
    },
    methods:{
        closeProjectDynamicForm(){
            eventBus.emit('closeProjectDynamicForm')
        },
        async saveItem(item){
            let that=this;
            if(item==="yearcosted" && that.form.yearcosted==null){
                naiveApi.notifyFail("费用不能为空")
                return;
            }
            let ret = await mypost("/dynamicmsg/submit",{
                key: that.form.key,
                field:item,
                content:that.form[item],
            })
            if(ret.status) naiveApi.notifySuccess("保存成功")
        },
    }
}
</script>

<style scoped>
.card{
    width:20rem;
    height:20rem;
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
:deep(.n-h4){
    margin:0;
}
:deep(.n-card-header){
    padding-top: 10px;
}
</style>