//while
let i=0;
while(i < 10){
    console.log("Bonjour")
    i = i + 1
}


//for
const notes = [12,13,11,5]
for(let i = 0 ; i < notes.length ; i++){
    console.log(notes[i])
}

//for in (pour parcourir les index)
const Notes = [10,2,9,17]
for (let i in Notes){
    console.log(i)
}

//for of (parcourir les valeurs)
const NOTES = [18,17,16,20];
for (let note of NOTES){
    console.log(note)
}

//exercice 1
let chiffre = prompt("veuillez entrer un nombre")
if (chiffre > 10 || chiffre < 0 ){
    console.log("le nombre saisi n'est pas entre 0 et 10")
} else{
    // while (chiffre >= 0){
    //     console.log(chiffre)
    //     chiffre--
    // }
    for(let i = chiffre ; i >= 0 ;i--){
        console.log(i)
    }
}



//exercice 2

const guess = 8
let nbr
while(nbr !== guess){
    nbr = prompt("votre nombre")*1
    if (nbr < guess){
        console.log("Plus")
    } else if (nbr > guess){
        console.log("moins")
    }
}
console.log("Bravo!vous avez denviné")