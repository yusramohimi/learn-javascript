// /**
//  * 
//  * @param {PointerEvent} event 
//  */

// // const button = document.querySelector('button')
// // button.addEventListener('click', function(event){
// //     alert('Bonjour')
// // })

// function onButtonClick(event){
//     // console.log(event.currentTarget) // currenttarget : pour savoir sur quel button nous avons cliqué
//     console.log("button click")
//     event.preventDefault() // preventDefault : empecher le comportement de base de l'evenement ; annuler les actions par defauts
//     event.stopPropagation() //Empèche l'évènement de remonter vers les éléments parents ; stop la propagation
// }


// document.querySelectorAll('button , a').forEach(button => {
//     button.addEventListener('click',onButtonClick)
// })

// document.querySelector("div").addEventListener('click',() =>{
//     console.log('click div')
// })


// formulaire 

// document.querySelector('form').addEventListener("submit", (e) =>{
//     e.preventDefault()
//     const form = e.currentTarget
//     const data = new FormData(form)
//     const firstname = data.get("firstname")
//     if (firstname.length < 2){
//         e.preventDefault()
//     }
// })

// checkbox
document.querySelector("input").addEventListener("change",(e) => {
    console.log(e.currentTarget.checked)
})

// select
document.querySelector("select").addEventListener("change",(e) => {
    console.log(e.currentTarget.value)
})


// exercice spoiler

//reveler spoiler par spoiler 
// document.querySelectorAll('.spoiler').forEach(spoiler => {
//     spoiler.addEventListener('click',(e) => {
//         e.currentTarget.classList.remove('spoiler')

//     })
// })

//reveler les spoler à la fois 
const spoilers = document.querySelectorAll('.spoiler');

function revealSpoiler(){
    spoilers.forEach(spoiler => spoiler.classList.remove('spoiler'))
}
spoilers.forEach(spoiler =>{
    spoiler.addEventListener('click',revealSpoiler)
})
