<template >
    <div style="width:100vw">
    <van-nav-bar title="平邑县项目信息汇总">
    <template #left>
        <van-popover v-model:show="showPopover" placement="bottom-start" :actions="actions" @select="onSelect">
            <template #reference>
                <van-icon color="#1989fa"  size="20" name="exchange" />
            </template>
        </van-popover>        
    </template>

    <template #right>
        <van-icon  @click="openFullScreen" v-show="!isfullscreen" color="#1989fa"  size="20"  name="expand-o" />
        <van-icon  @click="closeFullScreen" v-show="isfullscreen" color="#1989fa"  size="20"  name="shrink" />
    </template>
    </van-nav-bar>
</div>
<!-- <div id="container">

    <div id="left">
        &nbsp;

    </div>

    <div id="right">
        <van-button size="small"  plain round type="default" @click="toggleFullScreen">
            <van-icon name="browsing-history-o" /> 全屏
        </van-button>
        &nbsp;
   
    </div>
</div> -->

</template>

<script>
import eventBus from '@/js/mittEventBus.js'

export default {
  components: {

  },
  data() {
      return{
        isfullscreen:false,
        actions : [
            { text: '菜单1' },
        ],
      }
  },

  methods:{
    openFullScreen(){
        this.isfullscreen=true;
        eventBus.emit("toggleFullScreen")
    },
    closeFullScreen(){
        this.isfullscreen=false;
        eventBus.emit("toggleFullScreen")
    },
    onSelect(action){
        if(action.text=="菜单1") eventBus.emit("view1");
    },
  },
  mounted(){
   
  },
      

}
</script>

<style scoped>
#container{
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5rem;
    
}
</style>