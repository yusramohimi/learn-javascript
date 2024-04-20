
// declaration d'une expression reguliere
let nom = /youss?ra/i
// i ne prend pas en consideration les majiscule
let prenom = new RegExp('youss?ra')

const article ="Lorem ipsum dolor, sit amet yousra consectetur adipisicing elit. Eum est tempora vitae obcaecati, dolorem a. Rerum obcaecati nobis, similique ullam qui est consectetur repudiandae quam tenetur yousra neque aut nam delectus."

// search method
let position = article.search(nom); //recherche la premiere string , retourne  -1 si elle existe sinon son index

console.log(position)


// match method

const groupe = "Lorem ipsum DD105 dolor, sit amet consectetur adipisicing elit. DD106 Eum est tempora vitae obcaecati, dolorem a. Rerum obcaecati DD104 nobis, similique ullam qui est consectetur repudiandae quam tenetur neque aut nam delectus."

let grpDD = /DD[0-9]{3}/ig
//g : une recherche globale non seulement le premier element
let arraygrp = groupe.match(grpDD)
console.log(arraygrp)



// replace method
const ndArticle = "Lorem ipsum dolor, sit DD100 amet consectetur adipisicing elit. Eum est tempora vitae DD100 obcaecati, dolorem a. Rerum obcaecati nobis, similique ullam DD100 qui est consectetur repudiandae quam tenetur neque aut nam delectus."
// let searchText = /DD/ig
// let updatedArticle = ndArticle.replace(searchText,"DEV")

let searchText = /(DD)([0-9]{3})/gi; //() pour faire des groupes
let updatedArticle = ndArticle.replace(searchText,"$1 -1A- $2")
console.log(updatedArticle)



// split method (string ====> array)
let modules = "PHP/HTML-CSS_POO"
let listModules = modules.split(/[/ _]/);
console.log(listModules);



// test method pattern retourne true or false 

let tester = searchText.test(ndArticle)
console.log(tester)

// exect method
let chercherElem = searchText.exec(article);
console.log(chercherElem)