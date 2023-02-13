import {reactive} from 'vue'    


let msg=[
    {key:3,org:"平邑县发改局",name:"pyxfgj",pass:"123456"},
    {key:2,org:"平邑县财政局",name:"pyxczj",pass:"123456"},
    {key:1,org:"平邑县教育局",name:"pyxjyj",pass:"123456"}
]
let AccountKeyMap = {};  //账号key的映射 方便查找   
for(let idx=0;idx<msg.length;idx++) {
    AccountKeyMap[msg[idx].key] = msg[idx];
}

let myAccount=msg[0] //登录时初始化
function getThisOrgAccountMsg(){
    //当前用户的账号信息
    return myAccount
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
function validateAccount(name,pass){
    //设置当前账号并返回真值
    myAccount=msg[0]
    return true;
}
export const storeAccount = reactive({
    getThisOrgAccountMsg,
    getAllOrgAccountMsg,
    getOrgMsgByKey,
    getAccountNameByOrgKey,

    validateAccount,
})
  