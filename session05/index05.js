
//les conditons switch (selon cas)
let vDate = new Date().getDay();
let day;
switch (vDate) {
    case 0 :
        day = "Dimanche" ;
        break ;
    case 1 :
        day = "Lundi" ;
        break ;
    case 2 :
        day = "Mardi"
    case 3 :
        day = "Mercredi"
        break ;
    case 4 : 
        day = "Jeudi"
        break ;
    case 5 :
        day = "Vendredi"
        break ;
    case 6 :
        day = "Samedi"
        break ;
    default :
        day = "null"
}
console.log(day)


// autre exemple

let abreviation ;
let branche;

abreviation = "ID"


switch (abreviation){
    case "DD" :
        branche = "developpement Digital";
        break;
    case "ID" :  
        branche = "Infrastructure digital"
        break;
    case "WD" :
        branche = "Web design"
        break;
    default:
        branche = " ";
} 
console.log("la branche est :", branche)




//les boucles 

jours = ["lundi","mardi","mercredi","jeudi","vendredi"]

//for
for (i=0 ; i <= 4 ; i++ ){
    console.log(jours[i])
}

//for/in --affiche les indices si on fait seulement  console.log(item)
for (item in jours){
    console.log(jours[item]);
}


//for/of
for (jr of jours){
    console.log(jr);
}


//pour modifier un objet/array on ajoute const 
const a = ["lundi","mardi","mercredi","jeudi","vendredi"]



let txt = "" ;

jours.forEach(myFunction);
    function myFunction(value , index , array){
        txt += value + " ";

    }

console.log(txt)




//boucle while

let n = 10 ;
while ( n >= 0){
    console.log(n)
    n = n - 1
}

do {
    console.log(n)
    n = n - 1
}

while(n >= 0)


// la declaration continue 
let text = ""
 for (let i = 0; i < 10 ; i++){
    if (i === 3) 
    {continue;}
    text += "the number is " + i + " <br> ";
 }

 console.log(text)

 //la declaration break 

 let paragraphe = ""
 for (let i = 0; i < 10 ; i++){
    if (i === 3) 
    {break;}
    paragraphe += "the number is " + i + " <br> ";
 }

 console.log(paragraphe)

