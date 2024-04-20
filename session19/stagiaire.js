document.getElementById("btn-load-json").addEventListener("click",loadData)

function loadData() {
    let user;
    let content

    const request=new XMLHttpRequest();
    request.open("get","stagiaire.json",true);
    request.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            data=JSON.parse(this.response)
            user=data.user;
            content="<ul>";
            content+=`<li> user name :${user.nom}</li>`;
            content+=`<li> user age :${user.age}</li>`;
            content="</ul>";
            document.getElementById("container").innerHTML = content
    }
    request.send()
    }
}


