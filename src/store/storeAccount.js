import {reactive} from 'vue'    
import {mypost} from "@/js/fetchapi.js"
import eventBus from '@/js/mittEventBus.js'


let myAccount={} //登录时初始化

async function validateAccount(name,pass){
    //登录账号并返回真值，对接Login.vue
    let ret= await mypost("/unauth/account/login",{name,pass})
    if(ret.status ===true){
        //登录成功
        myAccount=ret.data //保存当前账号的信息
        initAccountStore() //初始化所有账号信息和映射
    }
    return ret.status;
}

function getThisOrgAccountMsg(){
    //当前用户的账号信息
    return myAccount
}

async function changepassword(oldpass,newpass){
    let ret= await mypost("/account/change_password",{
        passold:oldpass,
        passnew:newpass
    })
    if(ret.status){
        myAccount.pass=newpass;
        msg[myAccount.key].pass=newpass;
        return true;
    }else{
        return false;
    }
}

let constThisAccountIsAdmin= false;
function ThisAccountIsAdmin(){
    //当前账号是否管理员
    return myAccount.name==="admin"
}

let msg=[] //所有账号信息，登录成功在initAccountStore里初始化
let AccountKeyMap = {};  //账号key的映射，initAccountStore里初始化

async function initAccountStore(){
    // 获取所有账号信息，如果是管理员则获取完整信息，普通用户获取keyorg信息
    let ret={}
    if(ThisAccountIsAdmin()){
        constThisAccountIsAdmin=true;
        ret= await mypost("/account/getall")
    }else{
        ret = await mypost("/account/allkeyorg")
    }
    if(ret.status===false)return;

    msg=ret.data;
    console.log("获取所有账号信息：",msg);
    for(let idx=0;idx<msg.length;idx++) {
        AccountKeyMap[msg[idx].key] = msg[idx];
    }
    console.log("所有账号信息映射：",AccountKeyMap);
}

function getAllOrgAccountMsg(){
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

async function createAccount(org,name,pass){
    let ret= await mypost("/account/create",{name,pass,org})
    return ret.status;
}

async function deleteAccount(key){
    let ret= await mypost("/account/delete",{key})
    return ret.status;
}

//监听Header.vue登出事件
eventBus.on("account_logout",()=>{
    mypost("/account/logout")
})

async function editAccount(key,org,name,pass){
    let ret= await mypost("/account/edit",{key,name,pass,org})
    //成功，store状态改变，重新初始化
    if(ret.status) await initAccountStore();
    // 等待初始化完成，才能返回，让界面刷新
    return ret.status;
}

export const storeAccount = reactive({
    getThisOrgAccountMsg,
    getAllOrgAccountMsg,
    getOrgMsgByKey,
    getAccountNameByOrgKey,
    
    ThisAccountIsAdmin,
    constThisAccountIsAdmin,

    validateAccount,
    initAccountStore,
    changepassword,
    createAccount,
    editAccount,
    deleteAccount,
})
  