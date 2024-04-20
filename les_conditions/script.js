
// && : ET   || : OU

//la premiere methode 
const age = 19
const pays= 'FR'
if ((pays === 'FR' && age >= 18) ||
    (pays === 'US' && age >= 16) 
    ) {
    console.log("Vous avez le droit de conduire")
}

//deuxieme methode
const Age = 17
const Pays = 'US'
const peutConduireFrance = Pays === 'FR' && Age >= 18
const peutConduireUS = Pays === 'US' && Age >= 16
// if (peutConduireFrance || peutConduireUS){
//     console.log("Vous avez le droit de conduire")
// } else{
//     console.log("Vous n'avez pas le droit de conduire")
// }
if (peutConduireFrance) {
    console.log("Vous avez le droit de conduire en France")
} else if(peutConduireUS) {
    console.log("Vous avez le droit de conduire en US")
} else {
    console.log("Vous n'avez pas le droit de conduire")
}

//suivant cas : switch() case   :

switch (pays){
    case 'FR' :
        console.log("Je suis en France");
        break
    case 'US' :
        console.log("je suis aux Etats Unis")
        break
    default:
        console.log("je suis dans un payd inconnu")
        break
}

//Exercice 1
const year = 2024
const birthyear = prompt("veuillez saisir votre date de naissance")
const AGE = year - birthyear
if (AGE <= 13 ){
    console.log("Lilo & stitch")
}else if (AGE < 18 ){
    console.log("Matrix")
}else{
    console.log("Evil dead")
}

//Exercice 2

const A = prompt("Veuillez sasir le premier nombre")
const B = prompt("Veuillez sasir le deuxieme nombre")
const resultat = A * B
let signe 
if (resultat > 0){
    signe = "positif"
}else if (resultat < 0){
    signe = "negatif"
}else{
    signe = "nul"
}
console.log(`${A} x ${B} = ${resultat} est ${signe} `)
