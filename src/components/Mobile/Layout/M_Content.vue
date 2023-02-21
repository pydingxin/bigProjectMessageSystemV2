<template>

<div id="container">
   <div>{{ content }}</div> 
</div>
</template>

<script>
import { Button } from 'vant';
import eventBus from '@/js/mittEventBus.js'

export default {
  components: {
      [Button.name]: Button,
  },
  data() {
      return{
         content:"欢迎来到平邑县项目信息报送系统",
      }
  },

  methods:{

  },
  mounted(){
    let that=this;
    eventBus.on("view1",()=>{that.content="菜单1"})
  }

}
</script>

<style scoped> 
#container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  height:100%;
}

</style>