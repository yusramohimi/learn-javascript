console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
// console.log(document.querySelector("ul").childNodes[1])

//pour savoir le parent
console.log(document.querySelector("ul").parentNode)

//firstelementchild retourne le premier element enfant du parent 
console.log(document.querySelector("ul").firstElementChild)

//children retourne tous les enfants de  l'element sous forme d'une collection
console.log(document.querySelector("ul").children)


//firstElementChild "element" ne prend pas en consideration les espaces contrairement au firstchils

console.log(document.ELEMENT_NODE) //renvoie 1 (Node type)


//exercice formulaire 

let stagiaires = [];



// stagiaires.push(stagiaire)      

let btnAjouter = document.getElementById('ajouter');

btnAjouter.addEventListener('click', function(e){
    e.preventDefault();
    let stagiaire = {
        nom : "",
        prenom : "",
        age : null
    }
    let nom = document.getElementById('nom').value
    let prenom = document.getElementById('prenom').value
    let age = document.getElementById('age').value
    stagiaire.nom = nom ;
    stagiaire.prenom = prenom ;
    stagiaire.age = age ;
    stagiaires.push(stagiaire);
    console.log(stagiaire);
    console.log(stagiaires);
});

let btnAfficher = document.getElementById('afficher');


btnAfficher.addEventListener('click', function(e){
    e.preventDefault();  

    stagiaires.map((stagiaire,indice)=>{
        let ligne = document.createElement("tr");
        document.querySelector(".data").append(ligne);
        let td_nom = document.createElement("td");
        td_nom.innerHTML = stagiaire.nom;
        ligne.append(td_nom);
        let td_prenom = document.createElement("td");
        td_prenom.innerHTML = stagiaire.prenom;
        ligne.append(td_prenom);
        let td_age = document.createElement("td");
        td_age.innerHTML = stagiaire.age;
        ligne.append(td_age);
        let btn_supprimer = document.createElement("button");
        btn_supprimer.innerHTML= "Supprimer";
        //comment supprimer une ligne 
        btn_supprimer.addEventListener("click", function(){
            ligne.remove();
        })
        ligne.append(btn_supprimer);
    })
});
console.log(stagiaires)


let btnSupprimerTous = document.querySelector(".supprimer");
btnSupprimerTous.addEventListener("click", function(){
    console.log(document.querySelector(".data").children);
    let dataSt = document.querySelector(".data").children;
    let c = dataSt.length - 1
    for ( let i=c ; i >= 1 ; i--){
        // console.log(dataSt[i])
        console.log(i);
        dataSt[i].remove();
        
    }
})