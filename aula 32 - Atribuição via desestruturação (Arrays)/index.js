/*//Array
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a ,b ,c);

//índice        0,1,2,3,4,5,6,7,8
const numeros = [1,2,3,4,5,6,7,8,9];
//const primeiroNumero = numeros[0];
//console.log(primeiroNumero);

//rest //spread 
const [primeiroNumero, segundoNumero, ...resto] =  numeros; 
console.log(primeiroNumero,segundoNumero, resto);
//const [um, dois, ...resto] =  numeros;
//console.log(um,dois, resto);

const [um, ,tres, ,cinco] =  numeros;
console.log(um,tres, cinco);*/

//Array Multidimensional
const numeros = [[1,2,3],[4,5,6],[7,8,9]];
const [lista1, lista2, lista3] = numeros;
//const [,[,,seis]] =  numeros ;
const [,,seis] =  lista2 ;
//console.log(seis);
console.log(lista2[2]);