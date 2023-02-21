<template>

<div id="container">
   <div>欢迎来到平邑县项目信息报送系统</div> 
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
         
      }
  },

  methods:{

  },
  mounted(){
    eventBus.on("view1",()=>{alert("content got view1")})
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