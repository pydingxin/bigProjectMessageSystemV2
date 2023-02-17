import {reactive} from 'vue'    
import {mypost} from "@/js/fetchapi.js"
import eventBus from '@/js/mittEventBus.js'

let msg=[
    {key:3,org:"平邑县发改局",name:"pyxfgj",pass:"123456"},
    {key:2,org:"平邑县财政局",name:"pyxczj",pass:"123456"},
    {key:1,org:"平邑县教育局",name:"pyxjyj",pass:"123456"}
]
let AccountKeyMap = {};  //账号key的映射 方便查找   
for(let idx=0;idx<msg.length;idx++) {
    AccountKeyMap[msg[idx].key] = msg[idx];
}

let myAccount={} //登录时初始化
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
async function validateAccount(name,pass){
    //登录账号并返回真值，对接Login.vue
    let ret= await mypost("/unauth/account/login",{name,pass})
    if(ret.status ===true){
        myAccount=ret.data
        console.log("myAccount",myAccount)
    }
    return ret.status;
    
}

//监听Header.vue登出事件
eventBus.on("account_logout",()=>{
    mypost("/account/logout")
})

function ThisAccountIsAdmin(){
    //当前账号是否管理员 Sider由此决定是否能跳转页面
    return myAccount.name==="admin"
}

export const storeAccount = reactive({
    getThisOrgAccountMsg,
    getAllOrgAccountMsg,
    getOrgMsgByKey,
    getAccountNameByOrgKey,
    
    ThisAccountIsAdmin,
    validateAccount,
})
  