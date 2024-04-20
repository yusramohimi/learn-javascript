let nom=document.getElementById('username')
document.getElementById('button').addEventListener('click',function(e){
    e.preventDefault();
    console.log(nom.length)
    if (nom.value.length == ''){
        nom.classList.add('error')
    }
    
})

document.getElementById('username').addEventListener('focusout',function(){

    nom.classList.remove('error')
})



    