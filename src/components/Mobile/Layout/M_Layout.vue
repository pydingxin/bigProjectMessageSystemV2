<template>
    您在手机端登录<br />
    暂时什么都没有<br />
    <button @click="exit">退出</button>
    <!-- Layout应为单根节点 -->
</template>

<script>

import eventBus from '@/js/mittEventBus.js'
export default{
    data(){
        return {

        }
    },
    mounted(){
    },
    methods:{
        exit(){
            eventBus.emit("account_logout")
        },
    }
}
</script>