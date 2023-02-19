import {reactive} from 'vue'    
import {mypost} from "@/js/fetchapi.js"
import eventBus from '@/js/mittEventBus.js'


// 项目动态信息，后端不会一次传过来，支持单条请求
// 这个key就是对应的项目的id，根据key获取其静态信息
let allProjectDynamicMsg = [
    //有三个状态，uninit,inited,done
    {
        "key":0,
        "lixiang":{status:"inited",msg:"项目1正在研究立项"},
        "yongdi":{status:"done",msg:"用地完成"},
        "guihua":{status:"done",msg:"规划完成"},
        "huanping":{status:"done",msg:"环评完成"},
        "nengping":{status:"done",msg:"能评完成"},
        "xukezheng":{status:"done",msg:"许可证完成"},
        
        "yearcosted":500,
        "xingxiang":"形象进度很好",
    },
    {
        'key':1,
        "lixiang":{status:"done",msg:"立项完成"},
        "yongdi":{status:"uninit",msg:"项目2没有地了！"},
        "guihua":{status:"done",msg:"规划完成"},
        "huanping":{status:"done",msg:"环评完成"},
        "nengping":{status:"done",msg:"能评完成"},
        "xukezheng":{status:"done",msg:"许可证完成"},
        
        "yearcosted":500,
        "xingxiang":"形象进度呵呵了",
    },
];

//项目静态信息,后端不会一次传过来，支持单条请求
let allProjectStaticMsg=[]; //完全版的静态项目信息
let allProjectList= []; //简版的静态项目信息
async function initStoreProject(){
    let ret = await mypost("/staticmsg/getall")
    if(false===ret.status)return;
    allProjectStaticMsg= ret.data;

    console.log("allProjectStaticMsg=",allProjectStaticMsg);

    allProjectList= allProjectStaticMsg.map(pro=>({
        "key":pro.key,
        "index":pro.index,
        "name":pro.name,
        "dutyorg":pro.dutyorg, //no
    }))
}

async function deleteProject(key){
    let ret = await mypost("/staticmsg/delete",{key})
    return ret.status
}

function getAllProjectList(){
    return allProjectList;
}

async function getProjectStaticMsgByKey(projectkey){
    // 每次应从后端请求，获取项目的静态信息，给普通用户看项目信息
    let ret = await mypost("/staticmsg/getbykey",{key:projectkey})
    if(ret.status) return ret.data;
}

async function getProjectDynamicMsgByKey(projectkey){
    // 每次应从后端请求，获取项目的动态信息
    let ret = await mypost("/dynamicmsg/getbyid",{ key:projectkey })
    if(ret.status) return ret.data;
}

function getProjectKeyListByDutyorgKey(orgkey){ 
    //获取该单位所有负责项目的key
    //dutyorg可能为undefined
    return allProjectStaticMsg.filter(pro=>(pro?.dutyorg?.includes(orgkey)??false)).map(pro=>pro.key);
}

async function getProjectListByDutyorgKey(orgkey){
    // 获取当前账号的项目信息
    if(allProjectStaticMsg.length==0) await initStoreProject();
    let hisProjectKeys = getProjectKeyListByDutyorgKey(orgkey)
    // console.log(`getProjectListByDutyorgKey(${orgkey}) → `,hisProjectKeys)
    return allProjectList.filter(pro=>hisProjectKeys.includes(pro.key))
}
/*
    后端要有这三个接口，对应三种主要项目信息 
    单个静态信息 单个动态信息
    项目列表（index/key/xmname），项目列表是静态信息表的列。
    
    Project模块需要接口： 项目列表 单条静态信息（用于编辑静态信息）
    MyProject模块需要：项目列表 单条动态信息 我的项目权限表
*/
export const storeProject = reactive({
    getAllProjectList,
    getProjectListByDutyorgKey,
    initStoreProject,
    getProjectStaticMsgByKey,
    getProjectDynamicMsgByKey,
    deleteProject,
})
  