import {reactive} from 'vue'    
function getThisOrgAccountMsg(){
    return msg[0]
}
let msg=[
    {key:"2",org:"平邑县财政局",name:"pyxczj",pass:"123456"},
    {key:"1",org:"平邑县教育局",name:"pyxjyj",pass:"123456"}
]
function getAllOrgAccountMsg(){
    return msg;
}
function getOrgMsgByKey(key){
    return msg.filter(m=>m.key===key)[0];
}

export const storeAccount = reactive({
    getThisOrgAccountMsg,
    getAllOrgAccountMsg,
    getOrgMsgByKey,

})
  