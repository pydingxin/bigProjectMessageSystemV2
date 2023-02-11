<template>
 <n-modal style="min-width:80rem;min-height: 40rem;" v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div style="color:gray" >{{modalTitle}}</div>
    </template>
    <div class="form">
    <div id="left" >
      <div class="horizon">
        <span class="width2" >序号</span>
        <n-input class="width5" v-model:value="form.index" type="text" placeholder="序号" /> 
        <span class="width0">&nbsp</span>
        <span class="width4" >项目名称</span>
        <n-input class="minwidth5" v-model:value="form.name" type="text" placeholder="项目名称" />
      </div>

      <n-divider class="txt" title-placement="left">标签</n-divider>
      <div>
        <div class="horizon">
          <span class="width4" >建设性质</span>
          <n-input class="minwidth5" v-model:value="form.xingzhi" type="text" placeholder="建设性质" /> &nbsp &nbsp &nbsp
          <span class="width0">&nbsp</span>
          <span class="width4" >建设级别</span>
          <n-input class="minwidth5" v-model:value="form.jibie" type="text" placeholder="建设级别" /> &nbsp &nbsp &nbsp
          <span class="width0">&nbsp</span>
    
        </div>
        <div class="horizon">
            <span class="width4" >建设领域</span>
            <n-input class="minwidth5" v-model:value="form.lingyu" type="text" placeholder="建设领域" />
        </div>
      </div>

      <n-divider class="txt" title-placement="left">干系人</n-divider>
      <div class="horizon">
        <span class="width5" >责任县领导</span>
        <n-input class="minwidth5" v-model:value="form.leader" type="text" placeholder="责任县领导" /> &nbsp &nbsp &nbsp
        <span class="width0">&nbsp</span>
        <span class="minwidth5" >联系人和联系方式</span>
        <n-input class="minwidth5" v-model:value="form.contact" type="text" placeholder="联系人和联系方式" />
      </div>
      <div class="horizon">
        <span class="width4" >责任单位</span>
        <n-cascader v-model:value="form.dutyorg" multiple clearable placeholder="责任单位" :options="options" @update:value="handleUpdateValue" />
    </div>


      <n-divider class="txt" title-placement="left">整体计划</n-divider>
      <span class="width7" style="color:gray" >主要内容和规模</span>
      <n-input class="minwidth5" v-model:value="form.neroguimo" type="textarea" placeholder="主要内容和规模" />
      <div>
        <div class="horizon">
          <span class="width4" >建设单位</span>
          <n-input class="minwidth5" v-model:value="form.builder" type="text" placeholder="建设单位" /> &nbsp &nbsp &nbsp
          <span class="width0">&nbsp</span>
          <span class="width4" >建设地点</span>
          <n-input class="minwidth5" v-model:value="form.place" type="text" placeholder="建设地点" />
        </div>
        <div class="horizon">
          <span class="width4" >开工时间</span>
          <n-input class="minwidth5" v-model:value="form.kaigong" type="text" placeholder="开工时间" /> &nbsp &nbsp &nbsp
          <span class="width0">&nbsp</span>
          <span class="width4" >竣工时间</span>
          <n-input class="minwidth5" v-model:value="form.jungong" type="text" placeholder="竣工时间" />
        </div>
      </div>
    </div>
    
    <div class="width1" style="min-height:30rem;"></div>
    
    <div class="width1" style="min-height:40rem;border-left: 1px solid green;"></div>
    
    <div id="right">
      <n-divider class="txt" title-placement="left">资金回顾</n-divider>
      <div class="horizon">
        <span class="width4" >资金来源</span>
        <n-input class="minwidth5" v-model:value="form.costfrom" type="text" placeholder="资金来源" /> &nbsp &nbsp &nbsp
      </div>
      <div class="horizon">
        <span class="width7" >总计划投资[万元]</span>
        <n-input-number  min=0 clearable v-model:value="form.allcost" :show-button="false" placeholder="总计划投资"  />
        </div>
      <div class="horizon">
        <span class="width7" >往年已投资[万元]</span>
        <n-input-number min=0  clearable v-model:value="form.hadcost" :show-button="false" placeholder="往年已投资"  />
      </div>

      <n-divider class="txt" title-placement="left">今年计划</n-divider>
      <div class="horizon">
        <span class="width8" >今年计划投资[万元]</span>
        <n-input-number min=0 clearable v-model:value="form.yearcost" :show-button="false" placeholder="今年计划投资"  />
      </div>
      <span class="width7" style="color:gray" >今年建设计划</span>
      <n-input class="minwidth5" v-model:value="form.yearplan" type="textarea" placeholder="今年建设计划" />

      <span class="width7" style="color:gray" >今年节点目标</span>
      <n-input class="minwidth5" style="height:10rem" v-model:value="form.yearnode" type="textarea" placeholder="今年节点目标" />
      </div>
  </div>
  
  <template #action>
    <n-popconfirm v-model:show="showConfirmBtn" :show-icon="false" positive-text="确定" negative-text="取消" >
      <template #trigger> <n-button> 保存编辑 </n-button> </template>
      确定保存？
      <template #action> <n-button size="small" @click="saveForm"> 确定！</n-button> </template>
    </n-popconfirm>
  </template>

  </n-modal>
</template>

<script>

import eventBus from '@/js/mittEventBus.js'
import {storeProject} from "@/store/storeProject.js"
import {storeAccount} from "@/store/storeAccount.js"
import {
    NModal,NDivider,NInput,NTag,NSpace,NCascader,NInputNumber,NButton,NPopconfirm,
} from 'naive-ui'

export default{
    components:{
      NModal,NDivider,NInput,NTag,NSpace,NCascader,NInputNumber,NButton,NPopconfirm,
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
      saveForm(){
        this.showConfirmBtn=false;
        console.log("save form")
      },
      addProject(){
        console.log("addProject",this.eventMsg);
        this.modalTitle= "创建项目"
        this.form={}; //清空上次编辑时留存的数据
        this.options= [];
      },
      editProject(){
        console.log("editProject",this.eventMsg);
        this.modalTitle= `编辑项目`
        this.form= storeProject.getProjectMsgByKey(this.eventMsg.projectKey)
        this.options= storeAccount.getAllOrgAccountMsg().map(org=>({value:org.key,label:org.org}));
      },
      handleUpdateValue(value, options) {
        // 点击责任单位
        console.log("select org key ",value);
      }
    },
    data(){
        return{
            showConfirmBtn:false,
            showModal:false,
            eventMsg:{},
            projectMsg:{},

            modalTitle:"",
            //从store获取账号信息,给options，显示单位下拉菜单
            options:[],
            form:{
              key:-1, //该key是库表id，并不存在
              //标题
              index:"",   //序号
              name:"", //项目名称
              
              // 标签
              xingzhi:"", //建设性质
              jibie:"",   //建设级别
              lingyu:"",  //建设领域

              // 干系人
              leader:"",  //责任领导
              dutyorg:[], //责任单位key/id
              contact:"", //联系方式

              // 整体计划
              neroguimo:"", //主要建设内容和规模
              builder:"",   //建设单位
              place:"",     //建设地点
              kaigong:"",   //开工时间
              jungong:"",   //竣工时间

              // 资金回顾
              costfrom:"",    //资金来源
              allcost:0,    //总计划投资
              hadcost:0,    //往年已投资

              // 今年计划
              yearcost:0,   //今年计划投资
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
              yearcosted:0, //今年投资额
            },
        }
    }
}
</script>

<style scoped>

.horizon{
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;
  padding-bottom: 0.2rem;
  color:gray;
}
.form{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.width0{
  max-width: 0.5rem;
  min-width: 0.5rem;
}
.width1{
  max-width: 1rem;
  min-width: 1rem;
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
.width8{
  max-width: 8rem;
  min-width: 8rem;
}
.minwidth5{
  min-width: 5rem;
}
:deep(.n-divider){
  color:green;
}

</style>