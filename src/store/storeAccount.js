import {reactive} from 'vue'    
function getThisOrgAccountMsg(){
    //当前用户的账号信息
    return msg[1]
}
let msg=[
    {key:3,org:"平邑县发改局",name:"pyxfgj",pass:"123456"},
    {key:2,org:"平邑县财政局",name:"pyxczj",pass:"123456"},
    {key:1,org:"平邑县教育局",name:"pyxjyj",pass:"123456"}
]
let AccountKeyMap = {};  //账号key的映射 方便查找   
for(let idx=0;idx<msg.length;idx++) {
    AccountKeyMap[msg[idx].key] = msg[idx];
}
console.log("AccountKeyMap",AccountKeyMap);
function getAllOrgAccountMsg(){
    // 所有账号信息
    return msg;
}
function getAccountNameByOrgKey(orgKey){
    // 根据账号key返回名字
    return AccountKeyMap[key].org;
}
function getOrgMsgByKey(key){
    // 根据账号key返回账号信息
    return AccountKeyMap[key];
}

export const storeAccount = reactive({
    getThisOrgAccountMsg,
    getAllOrgAccountMsg,
    getOrgMsgByKey,
    getAccountNameByOrgKey,
})
  