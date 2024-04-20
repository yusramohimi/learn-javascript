// type of - les types primitifs//
console.log(typeof (5))
console.log(typeof(undefined))
console.log(typeof("to be or not to be "))
console.log(typeof(null))


    //instance//

console.log(Object(3) instanceof Number)

    //les types structurels //

console.log(typeof(null))
let numStagiaires = [1,2,3]

let cNumStagiares = [].concat(numStagiaires)
// let cNumStagiares = numStagiaires

cNumStagiares.push(5)

console.log(numStagiaires)
console.log(cNumStagiares)

let etudiant = {
    id:0,
    nom: "ait said",
    prenom: "kaoutar"
}

// let cEtudiant = etudiant//
// cEtudiant.age = 14//

let cEtudiant = Object.assign({age:14},etudiant)

console.log(etudiant)
console.log(cEtudiant)




//spread operator (operateur de propagation)//

let liste =  [20,30,40]
let cliste = [...liste] //[20,30,40]

console.log(liste)
console.log(cliste)

let st = {
    id:1,
    nom: "Ahmed" ,
}

let cst = {...st, age:19}
console.log(st)
console.log(cst)