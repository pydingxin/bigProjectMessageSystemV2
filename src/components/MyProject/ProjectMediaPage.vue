<template>
    <n-space align="center">
        <!-- 返回按钮 -->
        <n-button type="tertiary" dashed  @click="closeProjectMediaPage">
            <template #icon><n-icon><arrow-back /></n-icon></template>
            返回
        </n-button>
        <n-text type="warning">
            上传图片视频素材，展示项目当前状态。
        </n-text>
    </n-space>

 <!-- name是后端用的r.GetUploadFiles("upload-file") -->
 <n-upload
    action="http://localhost:8199/upload/"
    :default-file-list="uploadedFileList"
    name="upload-file"

    :multiple="true"
    :with-credentials="true" 
    :show-download-button="true"
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
        <p>【文件名要反映文件内容，重名文件自动覆盖】</p>
        <p>【点击删除按钮，可删除文件】</p>
      </n-gradient-text>
    </n-upload-dragger>

  </n-upload>
</template>

<script>
import eventBus from '@/js/mittEventBus.js'
import naiveApi from '@/js/naiveUiApi.js'
import { ArrowBack} from "@vicons/ionicons5";
import {storeMedia} from "@/store/storeMedia.js"

import { 
    NButton,NIcon,
    NH2,NH3,NH6,NText,NSpace,
    NUpload,NUploadDragger,NGradientText,
 } from 'naive-ui';

export default{
    components:{
        ArrowBack,
        NButton,NIcon,
        NH2,NH3,NH6,NText,NSpace,
        NUpload,NUploadDragger,NGradientText,
    },
    data(){
        return {
             // 上传自动添加到列表里，但不会自动添加到uploadedFileList，它只起到初始化作用
            //  status=finished 才有删除按钮
            uploadedFileList: storeMedia.getProjectUploadedMediaMsg(),
        }
    },
    methods:{
        closeProjectMediaPage(){
            // 关闭本页
            eventBus.emit('closeProjectMediaPage')
        },

        afterUpload(o){
            console.log("file uploaded",o.file,)
        },

        handleUploadError(o){
            //上传失败
            console.log("error",o.file.name)
        },

        beforeUpload(data) {
            // 对每个文件都会执行一次该函数，进行各种检查，返回true允许上传，false取消上传
            console.log(data.file.file.name,data.file.file.size)
                return true;
        },

        removeFile(data) {
            // 删除成功返回true，文件列表也会改变，返回false文件列表不变
            console.log("remove file", data.file.name)
            return false;
        },

        handleDownload(file){
        },
    },
}
</script>