import {reactive} from 'vue'    


// 项目动态信息，后端不会一次传过来，支持单条请求
// 这个key就是对应的项目的id，根据key获取其静态信息
let allProjectDynamicMsg = [
    //有三个状态，uninit,started,done
    {
        "key":0,
        "lixiang":{status:"started",msg:"项目1正在研究立项"},
        "yongdi":{status:"done",msg:"用地完成"},
        "guihua":{status:"done",msg:"规划完成"},
        "huanping":{status:"done",msg:"环评完成"},
        "nengping":{status:"done",msg:"能评完成"},
        "xukezheng":{status:"done",msg:"许可证完成"},
        
        "xingxiang":"形象进度很好",
        "yearcosted":500,
    },
    {
        'key':1,
        "lixiang":{status:"done",msg:"立项完成"},
        "yongdi":{status:"uninit",msg:"项目2没有地了！"},
        "guihua":{status:"done",msg:"规划完成"},
        "huanping":{status:"done",msg:"环评完成"},
        "nengping":{status:"done",msg:"能评完成"},
        "xukezheng":{status:"done",msg:"许可证完成"},
        
        "xingxiang":"形象进度呵呵了",
        "yearcosted":500,
    },
];

//项目静态信息,后端不会一次传过来，支持单条请求
let allProjectStaticMsg=[
    {
        "key":0,
        "index":"1",
        "name":"项目责任单位财政局",

        "xingzhi":"新建",
        "jibie":"省重大",
        "lingyu":"道路交通",

        "leader":"王玉东",
        "dutyorg":[2,3],
        "contact":"小兵甲4211087",

        "neroguimo":"大内容大规模",
        "builder":"建设单位甲",
        "place":"建设地点县城",
        "kaigong":"开工日",
        "jungong":"竣工日",

        "costfrom":"自筹资金",
        "allcost":2000,
        "hadcost":1000,

        "yearcost":1000,
        "yearplan":"今年计划完成",
        "yearnode":"节点紧迫",

    },
    
    {
        "key":1,
        "index":"2",
        "name":"项目责任单位教育局",

        "xingzhi":"新建",
        "jibie":"省重大",
        "lingyu":"道路交通",

        "leader":"王玉西",
        "dutyorg":[1,3],
        "contact":"小兵甲4211087",

        "neroguimo":"大内容大规模",
        "builder":"建设单位甲",
        "place":"建设地点县城",
        "kaigong":"开工日",
        "jungong":"竣工日",

        "costfrom":"自筹资金",
        "allcost":2000,
        "hadcost":1000,

        "yearcost":1000,
        "yearplan":"今年计划完成",
        "yearnode":"节点紧迫",

    },
];

//初始化应从后端请求
let allProjectList= allProjectStaticMsg.map(pro=>({
    "key":pro.key,
    "index":pro.index,
    "name":pro.name,
    "dutyorg":pro.dutyorg, //no
}))
console.log("allProjectList = ",allProjectList)
function getAllProjectList(){
    return allProjectList;
}

function getProjectStaticMsgByKey(projectkey){
    // 每次应从后端请求，获取项目的静态信息
    return allProjectStaticMsg.find(one=>one.key===projectkey)
}

function getProjectDynamicMsgByKey(projectkey){
    // 每次应从后端请求，获取项目的动态信息
    return allProjectDynamicMsg.find(one=>one.key===projectkey);
}

function getProjectKeyListByDutyorgKey(orgkey){ 
    //后台获取
    return allProjectStaticMsg.filter(pro=>pro.dutyorg.includes(orgkey)).map(x=>x.key);
}

function getProjectListByDutyorgKey(orgkey){
    let hisProjectKeys = getProjectKeyListByDutyorgKey(orgkey)
    console.log(`getProjectListByDutyorgKey(${orgkey}) → `,hisProjectKeys)
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

    getProjectStaticMsgByKey,
    getProjectDynamicMsgByKey,
})
  