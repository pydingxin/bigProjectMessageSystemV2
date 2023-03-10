// export let backendUrl = "http://localhost:8080" //本机电脑调试
// export let backendUrl = "http://10.178.64.17:8080" //局域网手机调试

export let backendUrl = "." //阿里云

export let backendApiUrl = backendUrl+"/api"

// 在这里统一输出错误信息，在各自页面上输出成功信息
export function mypost(api, jsondata){
    return new Promise(res=>{
        fetch(backendApiUrl+api,{
            method:'POST',
            body:JSON.stringify(jsondata),
            mode: 'cors',
            credentials: 'include',
        })	
        .then(response => response.json())
        .then(data => {
            // console.log("后端返回 ",data)
            if(data.status===false){
                alert(data.msg)
            }
            res(data)
            
        });
    })
}
