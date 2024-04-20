
//methode 1 portée globale
function canDrive (age, pays){
    if (
        (pays === 'FR' && age >= 18) ||
        (pays === 'US' && age >= 16) 
    ) {
        return true
    }
    return false
}
console.log(canDrive(13,'FR'))


//methode 2 si on veut utiliser cette fct que dans une boucle , conditon ..;
// const canDrive = function(age, pays){
//     if (
//         (pays === 'FR' && age >= 18) ||
//         (pays === 'US' && age >= 16) 
//     ) {
//         return true
//     }
//     return false
// }


// une fonction a la capacité de modifier une variable qui est definie à l'exterieur


let notes = [12,13,14];

function upNotes (n){
    n[0]++
}
upNotes(notes);
console.log(notes)


//methode 3 

const a = {
    nom :"mohimi",
    prenom :"yousra",
    fullname: function(){
        console.log(`${this.nom} ${this.prenom}`)
    }
}
a.fullname()

//fonction fleché
const maFonction = (param1, param2) =>{
    console.log(param1, param2)
}
maFonction(1,2)


const somme = (a, b) =>{
    return a + b
}
console.log(1,2)


const isPair = function(a,cb){ //lorsque un parametre un fonction on l'appelle callback function
    if( a % 2 === 0){
        cb(a)
    }
}
isPair(4,function(n){
    console.log("mon nombre est pair" + n)
})
//les fonctions fleches n'alterent pas la methode this


//exercice

//on crée un nombre entre 0 et 10
//3 essaies pour deviner le mot
//isRight(n)
//guess()

function getRandomInt(max){
    return Math.floor(Math.random() * (max + 1))
}

const solution = getRandomInt(10)
console.log(solution)

function isRight(n) {
    return solution === n
}

function guess(){
    const number = prompt("Entrer un chiffre")*1 // * 1 pour avoir un nombre non pas un string
    return isRight(number)
}

for (i = 0; i < 3; i++){
    if (guess()){
        console.log("Bravo!");
        break;
    }else if (i === 2){
        console.log("Vous avez perdu")
    }
}


//exercice nombre premier

function isPremier(n){
    if (n < 2){
        return false
    }
    for (let i = n - 1 ; i > 1 ; i--){
        if (n % i === 0){
            return false
        }
    }
    return true
}
console.log("0",isPremier(0))
console.log("1",isPremier(1))
console.log("2",isPremier(2))
console.log("3",isPremier(3))
console.log("11",isPremier(11))
console.log("12",isPremier(12))
