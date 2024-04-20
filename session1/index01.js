console.log("Hello JavaScript World")
// declaration des variables
/*
les commentaires multilignes
*/



let nombreUn;
let nombreDeux;
let somme;

nombreUn = 16;
nombreDeux = 20;

somme = nombreUn + nombreDeux;
console.log(somme)

// les fonctions
function greet(nom) {
    console.log("hellooooo!"+nom)
}
greet("Yousra")
greet("Aymen")

function sum(a,b){
   return console.log("la somme est:" ,a+b)
   
}
sum(10,12)

function inscrire(){
    let nom = "mohimi"
    let prenom = "yousra"
    let age = 19;
    if (age == 19){
        let statut = "etudiant"

    console.log(statut)
    }
}
inscrire()