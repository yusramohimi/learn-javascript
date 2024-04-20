document.getElementById("btn-google").addEventListener("click",function(){
    open("https://www.google.com/")
})



//Appel synchrone
let a = 10;
let b = 19;
let somme = a + b 
console.log(somme)

let i = 0

setInterval(function(){
    i++
    console.log(i);
},1000)


setTimeout(function(){
    console.log("OK 5 seconds ago")
},5000)


//appel asynchrone

let stagiaires = getDataStagiaires(function(listeStaigiaires){
    console.log(listeStaigiaires);
})

console.log(stagiaires)

function getDataStagiaires(myCallBackFunction){
    setTimeout(function(){
         return myCallBackFunction(["MOHIMI","MABTY","ELYDRISY"])
    },200)

}




// Promise

// const etudiants = getDatas().then(function)

// consommateur de la promise
const etudiants = getDatas().then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error)
})


// producteur de la promise

function getDatas(){
   {
     let found = true
    return new Promise(function(resolve, reject){
        if (found === true){
            
        }
        resolve(["MOHIMI","MABTY","ELYDRISY"])
    })
}
}

