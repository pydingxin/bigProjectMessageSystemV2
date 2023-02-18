// 在这里统一输出错误信息，在各自页面上输出成功信息
export function mypost(api, jsondata){
    return new Promise(res=>{
        fetch("http://localhost/api"+api,{
            method:'POST',
            body:JSON.stringify(jsondata),
            mode: 'cors',
            credentials: 'include',
        })	
        .then(response => response.json())
        .then(data => {
            console.log("后端返回 ",data)
            if(data.status===false){
                alert(data.msg)
            }
            res(data)
            
        });
    })
}
