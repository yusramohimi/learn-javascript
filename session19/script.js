// const stagiaire = {
//     id:1,
//     nom:"MOHIMI",
//     prenom:"YOUSRA",
//     age:19
// }

// //  stringify objet JS => objet JSON
// let stagiaireJSON =JSON.stringify(stagiaire)

// console.log(stagiaire);

// console.log(stagiaireJSON);


// // parse objet JSON => objet JS
// stagiaireJSON = JSON.parse(stagiaireJSON);

// console.log(stagiaireJSON)

// console.log(stagiaireJSON.nom)




document.getElementById("btn-load").addEventListener("click",loadTxt);

function loadTxt(e){
   e.preventDefault();

    let request = new XMLHttpRequest();

    request.open("GET","sample.txt",true);

    // method 1
    request.onreadystatechange = function(){
        // console.log(request.readyState);
        // console.log(this.readyState)
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("container").innerHTML = this.responseText
        }

    };



    request.send()
}