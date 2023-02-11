<template>
 <n-modal style="min-width:50rem;" v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div class="txt" >{{modalTitle}}</div>
    </template>
    <div>
      <n-divider class="txt" title-placement="left">标题</n-divider>
      <div class="horizon">
        <span class="width2" >序号</span>
        <n-input class="width5" v-model:value="form.idx" type="text" placeholder="序号" /> 
        <span class="width0">&nbsp</span>
        <span class="width4" >项目名称</span>
        <n-input class="minwidth5" v-model:value="form.xmname" type="text" placeholder="项目名称" />
      </div>

      <n-divider class="txt" title-placement="left">标签</n-divider>
      <div class="horizon">
        <span class="width4" >建设性质</span>
        <n-input class="minwidth5" v-model:value="form.idx" type="text" placeholder="建设性质" /> &nbsp &nbsp &nbsp
        <span class="width0">&nbsp</span>
        <span class="width4" >建设级别</span>
        <n-input class="minwidth5" v-model:value="form.idx" type="text" placeholder="建设级别" /> &nbsp &nbsp &nbsp
        <span class="width0">&nbsp</span>
        <span class="width4" >建设领域</span>
        <n-input class="minwidth5" v-model:value="form.idx" type="text" placeholder="建设领域" />
      </div>
      
      <n-divider class="txt" title-placement="left">干系人</n-divider>
      <div class="horizon">
        <span class="width5" >责任县领导</span>
        <n-input class="minwidth5" v-model:value="form.idx" type="text" placeholder="责任县领导" /> &nbsp &nbsp &nbsp
        <span class="width0">&nbsp</span>
        <span class="minwidth5" >联系人和联系方式</span>
        <n-input class="minwidth5" v-model:value="form.idx" type="text" placeholder="联系人和联系方式" />
      </div>
        <span class="width4" >责任单位</span>
        <n-cascader
          v-model:value="value"
          multiple
          clearable
          placeholder="责任单位"
          :max-tag-count="responsiveMaxTagCount ? 'responsive' : undefined"
          :expand-trigger="hoverTrigger ? 'hover' : 'click'"
          :options="options"
          :cascade="cascade"
          :check-strategy="checkStrategyIsChild ? 'child' : 'all'"
          :show-path="showPath"
          :filterable="filterable"
          :clear-filter-after-select="clearFilterAfterSelect"
          @update:value="handleUpdateValue"
        />

      <n-divider class="txt" title-placement="left">整体计划</n-divider>
      <n-divider class="txt" title-placement="left">资金回顾</n-divider>
      <n-divider class="txt" title-placement="left">今年计划</n-divider>
      <n-input
        v-model:value="yearnode"
        type="textarea"
        placeholder="今年节点计划"
      />
      

    </div>
  </n-modal>
</template>

<script>

import eventBus from '@/js/mittEventBus.js'
import {storeProject} from "@/store/storeProject.js"
import {
    NModal,NDivider,NInput,NTag,NSpace
} from 'naive-ui'

export default{
    components:{
      NModal,NDivider,NInput,NTag,NSpace
    },
    mounted(){
      let that=this;
      eventBus.on('showProjectMsgFormModal',msg=>{
        // console.log("in showProjectMsgFormModal.vue got event: showProjectMsgFormModal")
        // console.log("msg= ",msg)
        that.eventMsg = msg;
        msg.type === "edit" && that.editProject();
        msg.type === "add" && that.addProject();
        that.showModal = true;
      })
      
    },
    methods:{
      addProject:function(){
        this.projectMsg={};
        console.log("addProject",this.eventMsg);
        this.modalTitle= "创建项目"
      },
      editProject:function(){
        console.log("editProject",this.eventMsg);
        this.projectMsg= storeProject.getProjectMsgByKey(this.eventMsg.projectKey)
        this.modalTitle= `编辑项目`
      },
    },
    data(){
        return{
            showModal:false,
            eventMsg:{},
            projectMsg:{},

            modalTitle:"",
            form:{
              //标题
              idx:"",   //序号
              xmname:"", //项目名称
              
              // 标签
              xingzhi:"", //建设性质
              jibie:"",   //建设级别
              lingyu:"",  //建设领域

              // 干系人
              leader:"",  //责任领导
              org:"",     //责任单位
              contact:"", //联系方式

              // 整体计划
              neroguimo:"", //主要建设内容和规模
              builder:"",   //建设单位
              place:"",     //建设地点
              kaigong:"",   //开工时间
              jungong:"",   //竣工时间

              // 资金回顾
              costfrom:"",    //资金来源
              allcost:0.0,    //总计划投资
              hadcost:0.0,    //往年已投资

              // 今年计划
              yearcost:0.0,   //今年投资计划
              yearplan:"",    //今年建设计划
              yearnode:"",    //今年节点目标

              // 上述是发改局填报，后两部分是责任单位填报
              //手续
              lixiang:"",   //立项
              yongdi:"",    //用地
              guihua:"",    //规划
              huanping:"",  //环评
              nengping:"",  //能评
              xukezheng:"", //施工许可证

              //今年进展
              xingxiang:"",   //形象进度
              yearcosted:0.0, //今年投资额
            },
        }
    }
}
</script>

<style scoped>
.txt{
  color:green
}
.horizon{
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;
  min-height: 4rem;
}
.width0{
  max-width: 0.5rem;
  min-width: 0.5rem;
}
.width2{
  max-width: 2rem;
  min-width: 2rem;
}
.width3{
  max-width: 3rem;
  min-width: 3rem;
}
.width4{
  max-width: 4rem;
  min-width: 4rem;
}
.width5{
  max-width: 5rem;
  min-width: 5rem;
}
.width6{
  max-width: 6rem;
  min-width: 6rem;
}
.width7{
  max-width: 7rem;
  min-width: 7rem;
}
.minwidth5{
  min-width: 5rem;
}
:deep(.n-divider){
  margin:0;
}
</style>