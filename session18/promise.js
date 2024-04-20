

// ASYNC AWAIT METHOD
// gestion des exceptions

async function executerCode(){
    let vNote = 4;
    try{
        const stagiaires = await getStagiaires();
        const modules = await getModules();
        const notes = await getNotes();
        console.log(stagiaires);
        console.log(modules);
        console.log(notes);
        // error personnalisé
        if (vNote < 5){
            throw("La note est inf à 5")
        }


    }catch(err){
        console.log(err)
    }finally{
        console.log("remove loading")
    }
    
}
executerCode()

// fetch
fetch("https://jsonplaceholder.typicode.com/posts").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
})

// fetch avec async await
async function doTheWord(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    console.log(posts);
}
doTheWord()



// Consume promise ===> object ===> method(then)

    // getStagiaires().then(function(stagiaires){
    //     console.log(stagiaires)
    // }, function(reason){
    //     console.log(reason)
    // }
    // )

    // en utilisant arrow function/ fonction flechéé

    // getStagiaires().then(
    //                         stagiaires=>{ 
    //                             console.log(stagiaires)
    //                             return getModules()
    //                         }

    //                     ).then(
    //                         modules => {
    //                             console.log(modules)
    //                             return getNotes()
    //                         }
    //                     ).then(
    //                         notes => {
    //                             console.log(notes)
    //                         }
    //                     ).catch(
    //                         function(error){ //catch permet de gérer l'erreur
    //                         console.log(error)
    //                         }
    //                     ).finally(
    //                         function(){
    //                             console.log("finnnnaaallyyyy !!")
    //                         }
    //                     )






// build promise 
function getStagiaires(){
    // let completed = false;
    let completed = true;
    return new Promise(function(resolve,reject){
        if (completed){
            setTimeout(function(){
                resolve([
                        {id:1,nom:"LOUKHMI"},
                        {id:2,nom:"NAJMI"},
                        {id:1,nom:"MOHIMI"},
                        {id:1,nom:"ELBATOULI"}
                        ]);
            },200)
        }else{
            reject("Failed");
        }
    })
}


function getModules(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve([ 
                    {id:1, libelle:"JAVASCRIPT"},
                    {id:2, libelle:"HTML CSS"},
                    {id:3, libelle:"POO"},
                    {id:4, libelle:"PHP"}
                    ])
        },400)
    })
}


function getNotes(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve([ 
                    {idStagiaire:1, module:"JAVASCRIPT", note:"14"},
                    {idStagiaire:1, module:"HTML", note:"15"},
                    {idStagiaire:1, module:"POO", note:"10"},
                    {idStagiaire:2, module:"JAVASCRIPT", note:"9"},
                    {idStagiaire:2, module:"HTML", note:"11"},
                    {idStagiaire:2, module:"POO", note:"13"},
                    {idStagiaire:3, module:"JAVASCRIPT", note:"10"},
                    {idStagiaire:3, module:"HTML", note:"14"},
                    {idStagiaire:3, module:"POO", note:"15"}
                    ])
        },200)
    })
}