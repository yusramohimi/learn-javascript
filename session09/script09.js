document.querySelector(".creer-titre").addEventListener("click",function(){
    const parent = document.querySelector(".section-1")

    const titre = document.createElement("h1");
    titre.innerHTML = "this is a title";
    titre.style.backgroundColor = "aqua";
    titre.style.color = "blue";

    // parent.append(titre)
    parent.prepend(titre)
})

    document.querySelector(".message").addEventListener("click",function(){
    const parent = document.querySelector(".section-1")  
    const message = document.createElement("h5");
    message.innerHTML = "your submission has been received!";
    message.style.color="white";
    message.style.backgroundColor="green";
    message.style.height="80px";
    message.style.width="80px";
    message.style.textAlign="center"
    message.style.borderRadius="10px"
    message.style
    parent.append(message)
})

    document.querySelector(".supprimer").addEventListener("click",function(){
        const parent = document.querySelector(".section-1");
        const enfant = document.querySelector(".paragraphe-1");

        document.querySelector(".msg").remove();

        parent.removeChild(enfant);
    })

document.querySelector(".btn-remplacer").addEventListener("click",function(){
        const parent = document.querySelector(".section-1") 
        const ancElement = document.querySelector(".paragraphe-1");
        const nouvElement = document.querySelector(".msg");

        parent.replaceChild(nouvElement,ancElement)
    })

document.querySelector(".btn-creer-conteneur").addEventListener("click",function(){
        const vConteneur = document.createElement("div");
        vConteneur.classList.add("container")
        vConteneur.classList.add("border")

        //set attribute
        vConteneur.setAttribute("id","conteneur")
        vConteneur.setAttribute("name","conteneurName")
        document.body.append(vConteneur)



        document.querySelector(".title").classList.add("encadrer")
        document.querySelector(".title").classList.add("encadrer")
        document.querySelector(".title").setAttribute("id","monTitre")
        // document.querySelector(".title").removeAttribute("id")

})
