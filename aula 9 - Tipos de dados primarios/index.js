const nomeExAspasSimples = 'Leonardo'; //String
const nomeExAspasCompostas = 'Leonardo'; //String
const nomeExCrase = `Leonardo`; //String
const numeroInteiro = 10; //number
const numeroFloat = 10.52; //number
let valorUndefined ; //  undefined
const valorNulo = null ; //  Nulo
const valorBoleano = true; //Boolean = true, false

//Symbol**

console.log(typeof valorUndefined, valorNulo, valorBoleano);

//////////////////////////////////////////////////////////////
//Valores por referencia
let array = [1, 2 ];
let arrayb = array;
console.log(array, arrayb);
arrayb.push(3);
console.log(array, arrayb);
array = 3;
console.log(array, arrayb);