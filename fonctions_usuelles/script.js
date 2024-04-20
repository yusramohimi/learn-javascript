// arrays method


// concat
const array1 = [12, 17, 18]
const array2 = [13, 16, 19]
const array3 = array1.concat(array2);

//fill
const array4 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array4.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array4.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array4.fill(6));
// Expected output: Array [6, 6, 6, 6]



//filter: permet de recuperer un nouveau tableau qui contient des elements qui verifient une condition (filter prend comme parametre une fonction) 
const notes = [12, 15, 18, 9, 7]
const goodNotes = notes.filter((note) => note >= 10)
console.log(goodNotes)


//find: permet de recuperer le premier element qui correspond à la condition
const tab = [5, 12, 8, 132, 33]
const found = tab.find(element => element > 10);
console.log(found) 
// expected output : 12


// for each
const marks = [17, 12, 9, 10, 5]
marks.forEach((mark, index) =>{
    console.log(mark, index)
} )


// includes // true or false
const pets = ["cat", "dog", 'bat']
console.log(pets.includes("cat"))

// map
const persons = [
    {firstname: "Yousra" , lastname: "Mohimi"},
    {firstname: "Manar" , lastname: "Berrada"},
    {firstname: "Mehdi" , lastname: "Tawfik"},
    {firstname: "Zakaria" , lastname: "Mohssin"}
]
const fullname = persons.map((p) => p.firstname + " " + p.lastname).join('\n') //join('\n') pour le retour à la ligne
console.log(fullname)

// slice permet de créer un nouveau tableau à partir d'un autre 
// reverse : reverse le tableau original