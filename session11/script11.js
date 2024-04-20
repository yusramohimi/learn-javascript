const msg = document.getElementById('message')
msg.addEventListener('keydown',function(event){
    console.log('keydown event');
});
msg.addEventListener('keypress',function(event){
    console.log('keypress event');
});
msg.addEventListener('keyup',function(event){
    console.log('keyup event');
});
msg.addEventListener("keydown",function(event){
    if (event.keyCode === 13){
        console.log("you click on Enter __ down !")
    }
})
msg.addEventListener("keypress",function(event){
    if (event.keyCode === 13){
        console.log("you clicked on Enter __ press !")
    }
})
