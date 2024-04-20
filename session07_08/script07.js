console.log(document.querySelector(".nom").value);


document.querySelector(".nom").value = "ikram";


console.log(typeof(document.querySelector(".age").value));




let a =((document.querySelector(".firstnumber").value));
a = Number(a)
console.log(typeof(a))
let b =((document.querySelector(".secondnumber").value));
b = Number(b)
document.querySelector(".somme").value = a + b;

let c =(document.querySelector(".somme").value);
console.log(c)
if (c < "20"){
   (document.querySelector(".somme").style.backgroundColor = "red")
}
else if (c > "20"){
    (document.querySelector(".somme").style.backgroundColor = "green")
}

var h = document.head;
console.log(h);
var v = document.body;
console.log(v);

let calculeClick = function(e){
    e.preventDefault();
    console.log("You clicked me!")
}


// document.querySelector(".btn-calculer").addEventListener("click",calculeClick);
// document.querySelector(".btn-calculer").addEventListener("click",(e) => {
//                                                                             e.preventDefault()
//                                                                             console.log("You clicked me!")
//                                                                         });


let calculerF = (e) => {
    e.preventDefault();
    let n1 = Number(document.querySelector(".nombre-un").value);
    let n2 = Number(document.querySelector(".nombre-deux").value);
    document.querySelector(".sum").textContent = n1 + n2
}

document.querySelector(".btn-calculer").addEventListener("click",calculerF);



let vInput = document.querySelectorAll("input");

    for (let i = 0 ; i <= 6 ; i++){
        vInput[i].style.backgroundColor="red";
        vInput[i].style.color="white";
    }


// console.log(vInput[i]);

console.log(vInput.length);


document.querySelector(".btn-calculer").style.padding="10px";
document.querySelector(".btn-calculer").style.border="solid 2px aqua";
document.querySelector(".btn-calculer").style.backgroundColor="aquamarine"













