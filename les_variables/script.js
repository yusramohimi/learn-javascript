const a = 3;
    a = 4
    console.log(a) //erreur

let b = 2;
    b = 6
    console.log(b) // b prend la valeur 6

//si on utilise const on peut pas changer la valeur par la suite contrairement à let , il est possible de changer la valeur sans avoir un erreur


const d = "Salut\nComment ça va"
//pour ecrire une chaine de caractere sur plusieurs ligne on utilise \n

const e = `Salut 
Comment ça va`
// les `` supportent le retour à la ligne


const f = 'hello'
const g = 'world'
console.log(f + ' ' + g)

const isMajeur = null //abscence de valeur 
const isMaj = undefined //variable non definie

//les tableaux

const notes =[13,14,8,9,'abs',[11,12,17]]
console.log(notes)
//affichage: Array(6) [ 13, 14, 8, 9, "abs", (3) […] ]
//pour recuperer une valeur d'un tableau notes[indice] ex: notes[4] recupere "abs"