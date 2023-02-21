<template>

<div id="container">
   <div>欢迎来到平邑县项目信息报送系统</div> 
</div>
</template>

<script>
import { Button } from 'vant';

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