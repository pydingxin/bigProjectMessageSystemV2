<template>
    <n-space align="center">
        <!-- 返回按钮 -->
        <n-button type="tertiary" dashed  @click="closeProjectMediaPage">
            <template #icon><n-icon><arrow-back /></n-icon></template>
            返回
        </n-button>
        <n-text type="warning">
            上传图片等文件，展示项目当前状态。
        </n-text>
    </n-space>
<div v-if="showThisPage" style="display:flex; flex-direction:row; justify-content: center;">
    <div style="width:50%; min-width:40rem; margin:1rem;">
        <!-- name是后端用的r.GetUploadFiles("upload-file") -->
        <n-upload
            :action="uploadUrl"
            :default-file-list="uploadedFileList"
            name="upload-file"

            :multiple="true"
            :with-credentials="true" 
            :show-download-button="false"
            :show-remove-button="true"
            :show-retry-button="true"

            @finish="afterUpload"
            @remove="removeFile"
            @before-upload="beforeUpload"
            @error="handleUploadError"
            @download="handleDownload"
        >
            <n-upload-dragger>
                <n-gradient-text :size="15" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
                    <p>拖到此处，立刻上传</p>
                    <p>【文件名要反映内容】</p>
                    <p>【点击删除按钮可删除文件】</p>
                </n-gradient-text>
            </n-upload-dragger>
        </n-upload>
    </div>
</div>
<div v-if="!showThisPage">正在加载...</div>
</template>

<script>
import eventBus from '@/js/mittEventBus.js'
import naiveApi from '@/js/naiveUiApi.js'
import { ArrowBack} from "@vicons/ionicons5";

import {mypost,backendApiUrl,backendUrl} from "@/js/fetchapi.js"
import { 
    NButton,NIcon,
    NH2,NH3,NH6,NText,NSpace,
    NUpload,NUploadDragger,NGradientText,
 } from 'naive-ui';
let autoinckey =0;
export default{
    components:{
        ArrowBack,
        NButton,NIcon,
        NH2,NH3,NH6,NText,NSpace,
        NUpload,NUploadDragger,NGradientText,
    },
    data(){
        return {
            projectKey:0, //mounted监听事件初始化
            uploadUrl:"", //mounted监听事件初始化
            //uploadedFileList只在组件加载时使用一次，要使其生效，必须让页面重建
            showThisPage:false, 

             // 上传自动添加到列表里，但不会自动添加到uploadedFileList，它只起到初始化作用
            //  status=finished 才有删除按钮
            uploadedFileList:[],
        }
    },
    methods:{
        async refreshUploadedFiles(){
            // 获取项目文件信息 /media/filemsgs/{projectid}
            let ret = await mypost(`/media/filemsgs/${this.projectKey}`)
            if(!ret.status)return;

            this.uploadedFileList = ret.data.map(o=>({
                name:o.Filename,
                status:"finished",
                id:String(autoinckey++),
                url: backendUrl+`/media/${this.projectKey}/${o.Filename}` 
                //文件下载链接 /media/{projectid}/{filename}，这个文件夹就在静态目录static里
            }))
            this.showThisPage=true; //先设置uploadedFileList数据，再构建页面
        },
        closeProjectMediaPage(){
            // 关闭本页
            eventBus.emit('closeProjectMediaPage')
            this.showThisPage=false;
        },

        afterUpload(o){
            naiveApi.notifySuccess("已上传："+o.file.name)
        },

        handleUploadError(o){
            //上传失败
            // naiveApi.notifyFail("上传失败："+o.file)
        },

        beforeUpload(data) {
            // 对每个文件都会执行一次该函数，进行各种检查，返回true允许上传，false取消上传
            let file=data.file.file
            if(this.uploadedFileList.map(x=>x.name).includes(file.name)){
                naiveApi.notifyFail(`已有同名文件：【${file.name}】`);
                return false;
            }
            if(file.size>10485760){
                naiveApi.notifyFail(`【${file.name}】过大，单个文件不能超过10MB`);
                return false;
            }
            return true;
            
        },

        async removeFile(data) {
            // 删除成功返回true，文件列表也会改变，返回false文件列表不变
            console.log("remove file", data.file.name)
            let ret = await mypost("/media/delete/"+this.projectKey,{
                filename: data.file.name,
            })
            if(ret.status){
                naiveApi.notifySuccess("已删除："+data.file.name)
                return true
            }else{
                return false
            }
        },

        handleDownload(file){
        },
    },
    mounted(){
        let that=this;
        eventBus.on("openProjectMediaPage",(key)=>{
            that.projectKey = key
            that.refreshUploadedFiles() //从后台获取文件列表
            that.uploadUrl=backendApiUrl+"/media/upload/"+String(this.projectKey) //上传到 /media/upload/{projectid}
        })
    },
}
</script>