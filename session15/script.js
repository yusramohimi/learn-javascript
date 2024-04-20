
//avant ES6
function Stagiaire(nom,prenom,age,branche){
    this.nom=nom;
    this.prenom=prenom;
    this.age=age;
    this.branche=branche;
    this.presentezVous = function(){
        // console.log("I am " + this.nom + " " + this.prenom)
        console.log(`I am ${this.nom} ${this.prenom}`)
    }
}

const stagiaire2 = new Stagiaire("harroud","mohamed",20,"ID")

console.log(stagiaire2.presentezVous());


stagiaire1 = {
    nom:"mohimi",
    prenom:"yousra",
    age:19,
    branche:"DD",
    presentezVous:function(){
        console.log("I am " + this.nom + " " + this.prenom)
    }
}
console.log(stagiaire1.nom);
console.log(stagiaire1.branche);
console.log(stagiaire1.presentezVous())




//exercice

//la fonction Achat represente le constructeur
// function Achat(id,article,prix,qte){
//     this.id = id;  //le deuxieme id est la valeur 
//     this.article=article;
//     this.prix=prix;
//     this.qte=qte;
//     this.calculerTVA=function(){
//         let TVA = 20/100;
//         let prixTotal = this.prix * this.qte;
//         let prixTTC = prixTotal + (prixTotal * TVA);
//         console.log(`le prix TTC est : ${prixTTC}`);
//     }
// }
// const achat1 = new Achat("A1","PC",7500,3)
// console.log(achat1.article)
// console.log(achat1.calculerTVA())





//Apres

class Achat {
    constructor(id, article, prix, quantite){
        this.id = id;
        this.article = article;
        this.prix = prix;
        this.quantite = quantite;
    }
    //methode pour calculer le prix total
    calculeTVA(){
        const TVA = 0.17;
        let pTotal = this.prix * this.quantite;
        let totalTTc = pTotal  + (pTotal*TVA);
        return totalTTc;
    }
}

const achat2 = new Achat(1,"clavier",300,5);
const achat3 = new Achat(1,"clavier",300,5);
console.log(achat2.calculeTVA())

//methode

let branche = "développement";
let nom = "mohimi"
let prenom = "YOUSRA"
let phrase = "This is a Char method"
//length permet de savoir la taille du string
console.log(branche.length)


//chartAt 
console.log(branche.charAt(3));

//substring
console.log(branche.substring(2,5));


//toUpperCase 
console.log(nom.toLocaleUpperCase());

//toLowerCase
console.log(prenom.toLocaleLowerCase());

// endsWith et startswith return un booleen
console.log(prenom.startsWith("A"))

//array from rendre le string un liste
console.log(Array.from(prenom))

//split
console.log(phrase.split(" "))





//date

let vdateY = new Date("2023-10-")