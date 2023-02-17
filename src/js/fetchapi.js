
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
            if(data.status===false){alert(data.msg)}
            console.log("后端返回 ",data)
            res(data)
        });
    })
}
