// function declaration

// function greet()
//     console.log("Hello !")
// }
// greet()


// function somme(a,b){
//     return a + b
// }
// let sm = somme(5,9)

// function expressions

let somme = function(a,b){
    return a + b
}

let sm = somme(5,9)
console.log(sm)

//fontion flechees (arrow)
let a=function(){
    return console.log("hello world !")
}
a();

let greet= () => {
    console.log("welcome to JS world")
};
greet();



let nomcomplet = (nom,prenom) => {
    let fullname = nom + " " + prenom;
    return fullname;
};

console.log(nomcomplet("yousra","mohimi"));

//les expressions lambdas
//map(il retourne un nouveau tableau)

const jours = ["lundi" , "mardi" , "mercredi" , "jeudi" , "vendredi" , "samedi" , "dimanche"];
let i = 0;



// jours.map(function(){
    
//     i+=1
//     return console.log("okk" + i )
// })

// jours.map(function(item){
//     return console.log(item)
// })

jours.map((item) =>{

    if (item === "jeudi"){
       item = item + " * jour ferie";
    }


    return console.log(item)
});

console.log(jours)
    

const stagiaires =[
    {nom:"mohimi" , prenom:"yousra" , age:19},
    {nom:"marzoug" , prenom:"khalid" , age:24},
    {nom:"sidqui" , prenom:"zakaria", age:22},
    {nom:"el idryssy" , prenom:"aymen", age:18}
]


// let groupe;
// groupe = stagiaires.map((stagiaire) => {
//     // console.log(stagiaire["nom"] + " " + stagiaire["prenom"]);
//     // fullName = stagiaire["nom"] + " " + stagiaire["prenom"];
//     // return fullName

// })

// console.log(stagiaires)
// console.log(groupe)


// let nameAge;
// // map fait une boucle , item represente value
// nameAge = stagiaires.map((item) => {
//     return { nom: item.nom , age: item.age};
// })
// console.log(nameAge);

// let nameAge;
// nameAge = stagiaires.map((item,index,arrStagiaire) =>{
//     //{nom:"mohimi" , prenom:"yousra" , age:19 , branche: "DD"}
//     let st;
//     st = {...item, branche : "DD" ,id : index+1 }; 
//     return st;

// });
// console.log(nameAge);

// let remarqueAge;
// remarqueAge = stagiaires.map((item, index, arrStagiaire) => {
//     let st;
//     if ((item.age) < 20) {
//         st = { ...item, branche: "DD", id: index + 1, remarque: "age inferieur à 20 ans" };
//     } else if ((item.age) > 20){
//         st = { ...item, branche: "DD", id: index + 1, remarque: "age superieur à 20 ans" };
//     }
//     return st;
// });

// console.log(remarqueAge);

// autre methode 

let remarqueAge;
remarqueAge = stagiaires.map((item, index, arrStagiaire) => {
    let st;
    st = { ...item , branche: "DD" , id: index+1};
    if ((item["age"]) < 20) {
        st.remarque = "age inferieur à 20 ans";
    }
    else if ((item["age"]) > 20){
        st.remarque = "age superieur à 20 ans";
    }
    return st;
    });

console.log(remarqueAge)