import {reactive} from 'vue'   
function getProjectUploadedMediaMsg(projectkey) {
    // 文件在后台的表格式 fileid, projectkey, filename 
    // 每个项目有素材文件夹，名为/media/projectkey/
    return [
        {
            projectkey: "projectkey",
            id: "razars",
            name: "现场进展.mp4",
            url:"http://现场进展.mp4",
            status:"finished",
        },
        {
            projectkey: "projectkey",
            id:"sdfs",
            name:"厂房.jpg",
            url:"/厂房.jpg",
            status:"finished",
        }
    ]
}
export const storeMedia = reactive({
    getProjectUploadedMediaMsg,
})
  