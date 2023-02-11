import {reactive} from 'vue'    

let projectColumn = [
        {"title":"序号","key":"index"},
        {"title":"项目名称","key":"name"},
        {"title":"建设性质","key":"xingzhi"},
        {"title":"建设级别","key":"jibie"},
        {"title":"建设领域","key":"lingyu"},
        {"title":"责任领导","key":"leader"},
        {"title":"责任单位","key":"dutyorg"},
        {"title":"联系方式","key":"contact"},
        {"title":"主要内容和规模","key":"neroguimo"},
        {"title":"建设单位","key":"builder"},
        {"title":"建设地点","key":"place"},
        {"title":"开工时间","key":"kaigong"},
        {"title":"竣工时间","key":"jungong"},
        {"title":"资金来源","key":"costfrom"},
        {"title":"总计划投资","key":"allcost"},
        {"title":"往年已投资","key":"hadcost"},
        {"title":"今年计划投资","key":"yearcost"},
        {"title":"今年建设计划","key":"yearplan"},
        {"title":"今年节点目标","key":"yearnode"},
        {"title":"立项","key":"lixiang"},
        {"title":"用地","key":"yongdi"},
        {"title":"规划","key":"guihua"},
        {"title":"环评","key":"huanping"},
        {"title":"能评","key":"nengping"},
        {"title":"施工许可证","key":"xukezheng"},
        {"title":"形象进度","key":"xingxiang"},
        {"title":"今年投资额","key":"yearcosted"},
];


//后端传来的总的项目数据
let allProjectMsg=[
    {
        "key":0,
        "index":"1",
        "name":"项目1",

        "xingzhi":"新建",
        "jibie":"省重大",
        "lingyu":"道路交通",

        "leader":"王玉东",
        "dutyorg":['2'],
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

        "lixiang":{status:"done",msg:"立项完成"},
        "yongdi":{status:"done",msg:"用地完成"},
        "guihua":{status:"done",msg:"规划完成"},
        "huanping":{status:"done",msg:"环评完成"},
        "nengping":{status:"done",msg:"能评完成"},
        "xukezheng":{status:"done",msg:"许可证完成"},
        
        "xingxiang":"形象进度很好",
        "yearcosted":500,
    },
    
    {
        "key":1,
        "index":"2",
        "name":"项目3",

        "xingzhi":"新建",
        "jibie":"省重大",
        "lingyu":"道路交通",

        "leader":"王玉西",
        "dutyorg":['1'],
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

        "lixiang":{status:"done",msg:"立项完成"},
        "yongdi":{status:"done",msg:"用地完成"},
        "guihua":{status:"done",msg:"规划完成"},
        "huanping":{status:"done",msg:"环评完成"},
        "nengping":{status:"done",msg:"能评完成"},
        "xukezheng":{status:"done",msg:"许可证完成"},
        
        "xingxiang":"形象进度很好",
        "yearcosted":500,
    },
];

function projectManage_allProjectMsg(){
    return allProjectMsg.map(one=>({idx:one.index, key:one.key, name:one.name}));
}
function getProjectMsgByKey(key){
    return allProjectMsg.find(one=>one.key===key)
}
export const storeProject = reactive({
    projectManage_allProjectMsg,
    getProjectMsgByKey,
})
  