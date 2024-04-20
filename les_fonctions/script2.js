// // Exercice mot Palindrome (lisible dans les deux sens ex:kayak)

// //reverse est pour les listes
// //split permet de diviser un string en une liste en precisant avec quoi on veut separer split(" ") split(",")
// //join renvoie un string en concatenant les elements d'une liste join("")
// //toUppercase


// function isPalindrome(word){
//     const letters = word.split("")
//     letters.reverse()
//     const reverseWord = letters.join("")
//     return word.toUpperCase() === reverseWord.toUpperCase()
//     // const reverseWord = word
//     //     .split("")
//     //     .reverse("")
//     //     .join("")
//     // return word.toUpperCase() === reverseWord.toUpperCase()
// }
// const words = {
//     kayak : true,
//     SOS : true,
//     Kayak : true,
//     Bonjour : false,
// }
// for (let word in words){
//     if ( isPalindrome(word) !==words[word]){
//         console.log(`isPalindrome(${word}) aurait du envoyer${words[word]}`)
//     }
// }



// exercice 2


// const students=[
//     {
//         name: "Yousra",
//         notes:[17,8,16,19,20]
//     },
//     {
//         name: "Salma",
//         notes:[12,18,17,9,10]
//     },
//     {
//         name: "Mehdi",
//         notes:[11,7,17,19,20]
//     },
//     {
//         name: "Manar",
//         notes:[16,12,14,7,13]
//     },
//     {
//         name: "Zakaria",
//         notes:[7,8,18,11,20]
//     },
// ]

// const moyenne = (notes) => {
    
//     let sum = 0
//     for (let note of notes){
//         sum = sum + note
//     }
//     return sum/notes.length
// }


// const compareStudent = (a, b) =>{
//     return b.moyenne - a.moyenne 
//     //si a > b : return 1
//     //si a < b : return -1
//     //si a = b : return 0
// }

// for (let student of students){
//     student.moyenne = moyenne(student.notes)
//     //pour ajouter la moyenne à objet student.moyenne
//     student.worst = Math.min(...student.notes)
//     student.best = Math.max(...student.notes)
// }

// students.sort(compareStudent)

// const formatStudent = (student) =>{
//     return ` ${student.name} avec une moyenne de ${student.moyenne}, meilleure note ${student.best} , mauvaise note ${student.worst}`
// }
// console.log(`Top 3 etudiants
// 1: ${formatStudent(students[0])}
// 2: ${formatStudent(students[1])}
// 3: ${formatStudent(students[2])}
// `)



//exercice 3
//Calculer la frequence de mot dans un chaine de caractere

const phrase =`je Dans une société démocratique, la liberté vous je donne le pouvoir de je façonner votre propre je destinée. La liberté de pensée la vous permet d'exprimer vos idées liberté sans crainte de répression. En contribuant à une liberté société libre, je vous contribuez à construire une communauté je où vous la liberté et le respect la mutuel sont de des je valeurs la essentielles`
const frequencies ={}
const words = phrase
    .toLowerCase()
    .replaceAll(':','')
    .replaceAll(',','')
    .replaceAll('.','')
    .split(' ')
for (let word of words){
    if (word !== ''){
        if(frequencies[word]){
        frequencies[word]++
        }else {
                frequencies[word] = 1
            }
    }
}
const frequenciesArray =[]
for (let k in frequencies){
    frequenciesArray.push({
        word : k,
        count: frequencies[k]
    })
}
frequenciesArray.sort((a,b) => b.count - a.count)
console.log(`les mots les plus frequents sont "${frequenciesArray[0].word}" (${frequenciesArray[0].count}),"${frequenciesArray[1].word}" (${frequenciesArray[1].count}), "${frequenciesArray[2].word}" (${frequenciesArray[2].count})`)